#!/usr/bin/env python3
"""
Café Weiss — Automated TDD & Multi-Viewport Verification Suite
Integrates:
1. Matt Pocock `codebase-design` & `tdd`: Tests the public interface of the deep module
   `window.CafeWeissLunchScheduler` (date resolution, weekend fallback, DE->EN translation,
   schedule normalization, and next-week creation).
2. Anthropic `webapp-testing` & Apple `apple-design-skill` & Vercel `web-design-guidelines`:
   Headless Chromium verification across 5 viewports (320px iPhone SE, 375px iPhone Mini,
   390px iPhone 16, 430px Pro Max, 1440px Desktop) x 2 languages (DE/EN) x 2 pages
   (index.html + admin.html + previewDate time-travel simulation).
3. Obra `verification-before-completion`: Exits non-zero on any failure.
"""
import sys
import urllib.request
import json
from playwright.sync_api import sync_playwright

BASE_URL = "http://127.0.0.1:8305"

VIEWPORTS = [
    ("iPhone SE (320px)", 320, 568),
    ("iPhone Mini (375px)", 375, 812),
    ("iPhone 16 (390px)", 390, 844),
    ("iPhone Pro Max (430px)", 430, 932),
    ("Desktop (1440px)", 1440, 900),
]


def test_api_contract(failures):
    try:
        with urllib.request.urlopen(f"{BASE_URL}/api/lunch-schedules") as res:
            assert res.status == 200, f"Expected 200, got {res.status}"
            data = json.loads(res.read().decode("utf-8"))
            assert "schedules" in data and len(data["schedules"]) >= 3, "Expected >=3 schedules in API"
            for s in data["schedules"]:
                assert len(s["days"]) == 4, f"Expected 4 days in schedule {s.get('id')}"
    except Exception as e:
        failures.append(f"[API CONTRACT] {e}")


def run_suite():
    failures = []
    test_api_contract(failures)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Test Deep Module `window.CafeWeissLunchScheduler` interface directly in browser context
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
        page = ctx.new_page()
        page.goto(f"{BASE_URL}/", wait_until="networkidle")

        scheduler_test = page.evaluate("""() => {
            const S = window.CafeWeissLunchScheduler;
            if (!S) return { ok: false, reason: "CafeWeissLunchScheduler not loaded" };

            const schedules = window.CAFE_WEISS_DATA.lunchMenu.schedules;
            const w1 = S.resolveActiveSchedule(schedules, "2026-11-04");
            const w2 = S.resolveActiveSchedule(schedules, "2026-11-12");
            const w3 = S.resolveActiveSchedule(schedules, "2026-11-19");
            // Weekend between week 1 (ends 2026-11-08) and week 2 (starts 2026-11-10): 2026-11-09
            const weekendNext = S.resolveActiveSchedule(schedules, "2026-11-09");

            const translated = S.translateDishDeToEn("Kürbiscremesuppe mit Kartoffeln");
            const nextCreated = S.createNextWeekSchedule(schedules);

            return {
                ok: true,
                w1Period: w1 && w1.displayPeriod,
                w2Period: w2 && w2.displayPeriod,
                w3Period: w3 && w3.displayPeriod,
                weekendNextPeriod: weekendNext && weekendNext.displayPeriod,
                translated,
                nextCreatedDays: nextCreated.days.length,
                nextCreatedDayKeys: nextCreated.days.map(d => d.dayKey),
                nextCreatedValidFrom: nextCreated.validFrom
            };
        }""")

        if not scheduler_test.get("ok"):
            failures.append(f"[DEEP MODULE] {scheduler_test}")
        else:
            if scheduler_test["w1Period"] != "03.11.2026 – 06.11.2026":
                failures.append(f"[DEEP MODULE] w1Period mismatch: {scheduler_test['w1Period']}")
            if scheduler_test["w2Period"] != "10.11.2026 – 13.11.2026":
                failures.append(f"[DEEP MODULE] w2Period mismatch: {scheduler_test['w2Period']}")
            if scheduler_test["w3Period"] != "17.11.2026 – 20.11.2026":
                failures.append(f"[DEEP MODULE] w3Period mismatch: {scheduler_test['w3Period']}")
            if scheduler_test["weekendNextPeriod"] != "10.11.2026 – 13.11.2026":
                failures.append(f"[DEEP MODULE] weekendNextPeriod mismatch: {scheduler_test['weekendNextPeriod']}")
            if "Creamy Pumpkin Soup" not in scheduler_test["translated"]:
                failures.append(f"[DEEP MODULE] translation failed: {scheduler_test['translated']}")
            if scheduler_test["nextCreatedDayKeys"] != ["tuesday", "wednesday", "thursday", "friday"]:
                failures.append(f"[DEEP MODULE] canonical dayKeys mismatch: {scheduler_test['nextCreatedDayKeys']}")

        # 2. Test Time-Travel Date Preview (?previewDate=2026-11-12) on index.html
        page.goto(f"{BASE_URL}/?previewDate=2026-11-12#speisekarte", wait_until="networkidle")
        preview_badge = page.locator("#lunchPeriodBadge").inner_text()
        if "10.11.2026 – 13.11.2026" not in preview_badge:
            failures.append(f"[TIME-TRAVEL PREVIEW] Expected 10.11.2026 – 13.11.2026, got {preview_badge}")
        ctx.close()

        # 3. Multi-Viewport x Bilingual x Modal Mathematical Audit
        pages = [
            ("Main Site (index.html)", f"{BASE_URL}/"),
            ("Admin Scheduler (admin.html)", f"{BASE_URL}/admin.html"),
        ]

        for page_name, url in pages:
            for vp_name, w, h in VIEWPORTS:
                context = browser.new_context(viewport={"width": w, "height": h})
                vp_page = context.new_page()
                console_errors = []
                vp_page.on("pageerror", lambda err: console_errors.append(str(err)))
                vp_page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

                vp_page.goto(url, wait_until="networkidle")

                for lang in ["de", "en"]:
                    if "admin.html" in url:
                        btn = vp_page.locator(f"[data-set-uilang='{lang}']")
                        if btn.count() > 0:
                            btn.click()
                    else:
                        btn = vp_page.locator(f".lang-switch__btn[data-lang='{lang}']")
                        if btn.count() > 0:
                            btn.click()

                    metrics = vp_page.evaluate("""() => {
                        const docWidth = document.documentElement.clientWidth;
                        const scrollWidth = document.documentElement.scrollWidth;
                        const smallInputs = [];
                        for (const inp of document.querySelectorAll('input, select, textarea')) {
                            if (inp.type === 'file' || inp.hidden) continue;
                            const st = window.getComputedStyle(inp);
                            if (st.display === 'none' || st.visibility === 'hidden') continue;
                            const fs = parseFloat(st.fontSize);
                            if (fs < 16) {
                                smallInputs.push(`${inp.tagName}#${inp.id || inp.className}: ${fs}px`);
                            }
                        }
                        const imgsWithoutDims = [];
                        for (const img of document.querySelectorAll('img')) {
                            if (!img.getAttribute('width') || !img.getAttribute('height')) {
                                imgsWithoutDims.push(img.getAttribute('src'));
                            }
                        }
                        return { docWidth, scrollWidth, smallInputs, imgsWithoutDims };
                    }""")

                    if metrics["scrollWidth"] > metrics["docWidth"]:
                        failures.append(f"[OVERFLOW] {page_name} @ {vp_name} ({lang}): {metrics['scrollWidth']} > {metrics['docWidth']}")
                    if metrics["smallInputs"]:
                        failures.append(f"[INPUT < 16px] {page_name} @ {vp_name} ({lang}): {metrics['smallInputs']}")
                    if metrics["imgsWithoutDims"]:
                        failures.append(f"[IMG NO DIMS] {page_name} @ {vp_name} ({lang}): {metrics['imgsWithoutDims']}")

                if console_errors:
                    failures.append(f"[CONSOLE ERROR] {page_name} @ {vp_name}: {console_errors}")

                context.close()

        browser.close()

    if failures:
        print("VERIFICATION FAILED:")
        for f in failures:
            print("  -", f)
        sys.exit(1)
    else:
        print("✓ ALL TDD, DEEP-MODULE, TIME-TRAVEL, AND 20 MULTI-VIEWPORT PLAYWRIGHT CHECKS PASSED!")


if __name__ == "__main__":
    run_suite()
