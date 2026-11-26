// Café Weiss — Modern Interactive Client Application (v2 with Canvas, Scroll-Reveal & 3D Tilt)
(function () {
  "use strict";

  const DATA = window.CAFE_WEISS_DATA;
  if (!DATA) return;

  // Application State
  const state = {
    lang: localStorage.getItem("cafeweiss_lang") || "de",
    heroLocation: "hinterbruehl",
    menuLocation: "hinterbruehl",
    menuCategory: "breakfast",
    menuFilter: "all",
    menuSearch: "",
    lightboxLocation: "hinterbruehl",
    lightboxIndex: 0,
    lunchSchedules: Array.isArray(DATA.lunchMenu.schedules) ? DATA.lunchMenu.schedules : [],
    selectedLunchWeekId: null,
    autoActiveWeekId: null,
    targetDateISO: null
  };

  // ================= INITIALIZATION =================
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndDrawer();
    initLiveOpeningStatus();
    initLanguageSwitcher();
    initHeroLocationPicker();
    initLocationCardThumbnails();
    initLunchScheduler();
    initMenuSystem();
    initLightbox();
    initReservationSystem();
    initScrollReveal();
    initAmbientCanvas();
    applyTranslations();

    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  // ================= AMBIENT GOLDEN BOKEH CANVAS (SUBTLE & CALM) =================
  function initAmbientCanvas() {
    const canvas = document.getElementById("ambientCanvas");
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let particles = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    }

    function createParticles() {
      const count = Math.min(20, Math.max(10, Math.floor(width / 75)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.4 + 0.8,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -(Math.random() * 0.18 + 0.06),
        alpha: Math.random() * 0.32 + 0.08,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.01 + 0.004
      }));
    }

    resize();
    createParticles();
    window.addEventListener("resize", () => {
      resize();
      createParticles();
    }, { passive: true });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += p.pulseSpeed;
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const currentAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `rgba(240, 217, 192, ${currentAlpha})`);
        grad.addColorStop(0.5, `rgba(200, 150, 102, ${currentAlpha * 0.45})`);
        grad.addColorStop(1, "rgba(200, 150, 102, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  // ================= SCROLL REVEAL OBSERVER =================
  function initScrollReveal() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ================= HEADER & MOBILE DRAWER =================
  function initHeaderAndDrawer() {
    const header = document.getElementById("siteHeader");
    const burgerBtn = document.getElementById("burgerBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }, { passive: true });

    if (burgerBtn && mobileDrawer) {
      burgerBtn.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.toggle("is-open");
        burgerBtn.classList.toggle("is-active", isOpen);
        burgerBtn.setAttribute("aria-expanded", String(isOpen));
        mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
      });

      mobileDrawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.remove("is-open");
          burgerBtn.classList.remove("is-active");
          burgerBtn.setAttribute("aria-expanded", "false");
          mobileDrawer.setAttribute("aria-hidden", "true");
        });
      });
    }
  }

  // ================= LIVE OPENING STATUS (VIENNA TIME) =================
  function initLiveOpeningStatus() {
    const statusContainer = document.getElementById("headerLiveStatus");
    if (!statusContainer) return;

    try {
      const nowVienna = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Vienna" })
      );
      const hour = nowVienna.getHours();
      const isOpen = hour >= 8 && hour < 20;
      statusContainer.classList.toggle("is-closed", !isOpen);
      statusContainer.dataset.isOpen = isOpen ? "true" : "false";
    } catch (e) {
      // Fallback
    }
  }

  // ================= LANGUAGE SWITCHER (DE / EN) =================
  function initLanguageSwitcher() {
    const buttons = document.querySelectorAll(".lang-switch__btn");
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
      btn.addEventListener("click", () => {
        const newLang = btn.dataset.lang;
        if (newLang === state.lang) return;
        state.lang = newLang;
        localStorage.setItem("cafeweiss_lang", newLang);
        document.documentElement.lang = newLang;

        buttons.forEach((b) => b.classList.toggle("active", b.dataset.lang === newLang));
        applyTranslations();
      });
    });
  }

  function t(key) {
    const dict = DATA.i18n[state.lang] || DATA.i18n.de;
    return dict[key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });

    // Update live status label
    const statusContainer = document.getElementById("headerLiveStatus");
    if (statusContainer) {
      const statusText = statusContainer.querySelector(".live-status__text");
      const isOpen = statusContainer.dataset.isOpen !== "false";
      if (statusText) {
        statusText.textContent = isOpen ? t("hero.status.open") : t("hero.status.closed");
      }
    }

    renderHeroLocation();
    renderLunchBanner();
    renderMenuCategories();
    renderMenuItems();
  }

  // ================= HERO LOCATION SWITCHER =================
  function initHeroLocationPicker() {
    const tabs = document.querySelectorAll("[data-select-location]");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const locId = tab.getAttribute("data-select-location");
        if (!locId || !DATA.locations[locId] || locId === state.heroLocation) return;
        state.heroLocation = locId;
        tabs.forEach((btn) => {
          const active = btn.getAttribute("data-select-location") === locId;
          btn.classList.toggle("active", active);
          btn.setAttribute("aria-selected", String(active));
        });

        const card = document.getElementById("heroLocCard");
        if (card) {
          card.classList.add("is-switching");
          setTimeout(() => {
            renderHeroLocation();
            card.classList.remove("is-switching");
          }, 180);
        } else {
          renderHeroLocation();
        }
      });
    });
  }

  function renderHeroLocation() {
    const loc = DATA.locations[state.heroLocation];
    if (!loc) return;

    const badgeEl = document.getElementById("heroLocBadge");
    const nameEl = document.getElementById("heroLocName");
    const descEl = document.getElementById("heroLocDesc");
    const addrEl = document.getElementById("heroLocAddress");
    const hoursEl = document.getElementById("heroLocHours");
    const mapsEl = document.getElementById("heroLocMapsUrl");
    const mainImg = document.getElementById("heroMainImg");
    const secImg = document.getElementById("heroSecondaryImg");
    const captionEl = document.getElementById("heroImgCaption");
    const backdropImg = document.getElementById("heroBackdropImg");

    if (badgeEl) badgeEl.textContent = loc.badge[state.lang];
    if (nameEl) nameEl.textContent = loc.name;
    if (descEl) descEl.textContent = loc.subtitle[state.lang];
    if (addrEl) addrEl.textContent = loc.address;
    if (hoursEl) hoursEl.textContent = loc.hours[state.lang];
    if (mapsEl) mapsEl.href = loc.mapsUrl;

    if (backdropImg) {
      backdropImg.style.backgroundImage = `url('${loc.heroImage}')`;
    }
    if (mainImg) {
      mainImg.src = loc.secondaryImage;
      mainImg.alt = loc.name + " Salon";
    }
    if (secImg) {
      secImg.src =
        state.heroLocation === "hinterbruehl"
          ? "assets/images/brand/dish-salmon-dessert.jpg"
          : "assets/images/brand/icon-event.png";
      secImg.alt = loc.name + " Kulinarik";
    }
    if (captionEl) {
      captionEl.innerHTML = `<span>✦ ${loc.address}</span>`;
    }
  }

  // ================= LOCATION CARD THUMBNAIL SWITCHERS =================
  function initLocationCardThumbnails() {
    document.querySelectorAll(".loc-thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const src = btn.getAttribute("data-src");
        const imgEl = document.getElementById(targetId);
        if (imgEl && src) {
          imgEl.src = src;
        }
        const parent = btn.closest(".loc-card__thumbs");
        if (parent) {
          parent.querySelectorAll(".loc-thumb").forEach((b) => b.classList.remove("active"));
        }
        btn.classList.add("active");
      });
    });

    // Jump to menu for specific location
    document.querySelectorAll("[data-jump-menu]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const locId = btn.getAttribute("data-jump-menu");
        if (locId) setMenuLocation(locId);
      });
    });
  }

  // ================= INTERACTIVE DIGITAL MENU =================
  function initMenuSystem() {
    document.querySelectorAll("[data-menu-location]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const locId = btn.getAttribute("data-menu-location");
        if (locId) setMenuLocation(locId);
      });
    });

    const searchInput = document.getElementById("menuSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.menuSearch = e.target.value.trim().toLowerCase();
        renderMenuItems();
      });
    }

    document.querySelectorAll("[data-menu-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.menuFilter = chip.getAttribute("data-menu-filter") || "all";
        document.querySelectorAll("[data-menu-filter]").forEach((c) => {
          c.classList.toggle("active", c === chip);
        });
        renderMenuItems();
      });
    });

    renderLunchBanner();
    renderMenuCategories();
    renderMenuItems();
  }

  function setMenuLocation(locId) {
    if (!DATA.locations[locId]) return;
    state.menuLocation = locId;

    document.querySelectorAll("[data-menu-location]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-menu-location") === locId);
    });

    const validCategories = getValidCategories(locId);
    if (!validCategories.some((c) => c.id === state.menuCategory)) {
      state.menuCategory = validCategories[0].id;
    }

    renderLunchBanner();
    renderMenuCategories();
    renderMenuItems();
  }

  function getValidCategories(locId) {
    return DATA.categories.filter(
      (cat) => !cat.locationOnly || cat.locationOnly === locId
    );
  }

  // ================= AUTOMATIC WEEKLY LUNCH MENU SCHEDULER =================
  function getTargetViennaDateISO() {
    const params = new URLSearchParams(window.location.search);
    const previewDate = params.get("previewDate");
    if (previewDate && /^\d{4}-\d{2}-\d{2}$/.test(previewDate)) {
      return previewDate;
    }
    try {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Vienna",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).formatToParts(new Date());
      const y = parts.find((p) => p.type === "year").value;
      const m = parts.find((p) => p.type === "month").value;
      const d = parts.find((p) => p.type === "day").value;
      return `${y}-${m}-${d}`;
    } catch (e) {
      return new Date().toISOString().slice(0, 10);
    }
  }

  function resolveAutoActiveSchedule(schedules, dateISO) {
    if (!Array.isArray(schedules) || schedules.length === 0) return null;
    const sorted = [...schedules].sort((a, b) => (a.validFrom || "").localeCompare(b.validFrom || ""));

    // 1. Exact match where validFrom <= dateISO <= validTo
    const activeNow = sorted.find((s) => s.validFrom <= dateISO && dateISO <= s.validTo);
    if (activeNow) return activeNow;

    // 2. Next upcoming scheduled week (e.g. on Saturday/Sunday before Tuesday starts)
    const upcoming = sorted.find((s) => s.validFrom >= dateISO);
    if (upcoming) return upcoming;

    // 3. Fallback to most recent scheduled week
    return sorted[sorted.length - 1];
  }

  function applyLoadedSchedules(schedulesList) {
    if (!Array.isArray(schedulesList) || schedulesList.length === 0) return;
    state.lunchSchedules = schedulesList.sort((a, b) =>
      (a.validFrom || "").localeCompare(b.validFrom || "")
    );
    state.targetDateISO = getTargetViennaDateISO();
    const autoWeek = resolveAutoActiveSchedule(state.lunchSchedules, state.targetDateISO);
    if (autoWeek) {
      state.autoActiveWeekId = autoWeek.id;
      if (!state.selectedLunchWeekId || !state.lunchSchedules.some((s) => s.id === state.selectedLunchWeekId)) {
        state.selectedLunchWeekId = autoWeek.id;
      }
    }
    renderLunchBanner();
  }

  async function initLunchScheduler() {
    state.targetDateISO = getTargetViennaDateISO();

    // Show preview banner if ?previewDate=YYYY-MM-DD is active
    const params = new URLSearchParams(window.location.search);
    const previewDate = params.get("previewDate");
    if (previewDate && /^\d{4}-\d{2}-\d{2}$/.test(previewDate)) {
      const bar = document.createElement("div");
      bar.className = "preview-date-banner";
      bar.innerHTML = `
        <span>🗓️ Vorschau-Modus für Datum: <strong>${previewDate}</strong></span>
        <a href="admin.html">Zurück zum Planer</a>
        <a href="index.html#speisekarte" style="background:rgba(255,255,255,0.15);color:#fff;">Heute</a>
      `;
      document.body.appendChild(bar);
    }

    // 1. Initialize immediately with embedded fallback or localStorage cache
    try {
      const cached = localStorage.getItem("cafeweiss_lunch_schedules");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.schedules) && parsed.schedules.length > 0) {
          applyLoadedSchedules(parsed.schedules);
        }
      }
    } catch (e) {
      // Ignore storage parse error
    }

    if (!state.selectedLunchWeekId && state.lunchSchedules.length > 0) {
      applyLoadedSchedules(state.lunchSchedules);
    }

    // 2. Fetch live JSON schedule from server API or data/lunch-schedules.json
    const endpoints = ["api/lunch-schedules", "api/lunch-schedules.php", "data/lunch-schedules.json"];
    for (const url of endpoints) {
      try {
        const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.schedules) && data.schedules.length > 0) {
            localStorage.setItem("cafeweiss_lunch_schedules", JSON.stringify(data));
            applyLoadedSchedules(data.schedules);
            break;
          }
        }
      } catch (e) {
        // Continue to next fallback endpoint
      }
    }
  }

  function renderLunchBanner() {
    const banner = document.getElementById("lunchMenuBanner");
    if (!banner) return;

    if (state.menuLocation !== "hinterbruehl") {
      banner.hidden = true;
      return;
    }

    banner.hidden = false;
    const titleEl = document.getElementById("lunchTitle");
    const schedEl = document.getElementById("lunchSchedule");
    const gridEl = document.getElementById("lunchDaysGrid");
    const periodBadgeEl = document.getElementById("lunchPeriodBadge");
    const price2El = document.getElementById("lunchPrice2");
    const price3El = document.getElementById("lunchPrice3");
    const weekTabsEl = document.getElementById("lunchWeekTabs");

    if (titleEl) titleEl.textContent = DATA.lunchMenu.title[state.lang];

    const schedules = state.lunchSchedules || [];
    const currentWeek =
      schedules.find((s) => s.id === state.selectedLunchWeekId) ||
      resolveAutoActiveSchedule(schedules, state.targetDateISO || getTargetViennaDateISO()) ||
      schedules[0];

    if (!currentWeek) return;

    if (periodBadgeEl) {
      periodBadgeEl.textContent = `📅 ${currentWeek.displayPeriod || ""}`;
    }
    if (price2El) {
      price2El.textContent = currentWeek.price2Course || DATA.lunchMenu.price2Course || "€ 10,90";
    }
    if (price3El) {
      price3El.textContent = currentWeek.price3Course || DATA.lunchMenu.price3Course || "€ 14,90";
    }
    if (schedEl) {
      const noteText =
        currentWeek.note && currentWeek.note[state.lang]
          ? currentWeek.note[state.lang]
          : DATA.lunchMenu.schedule[state.lang];
      schedEl.textContent = noteText;
    }

    // Render Week Selector Tabs (Active week + Upcoming scheduled weeks)
    if (weekTabsEl) {
      const targetDate = state.targetDateISO || getTargetViennaDateISO();
      const visibleWeeks = schedules.filter(
        (s) => s.id === state.autoActiveWeekId || s.validTo >= targetDate
      );
      const weeksToRender = visibleWeeks.length > 0 ? visibleWeeks : schedules.slice(-2);

      weekTabsEl.innerHTML = weeksToRender
        .map((w) => {
          const isAutoActive = w.id === state.autoActiveWeekId;
          const isSelected = w.id === currentWeek.id;
          const labelPrefix = isAutoActive ? t("lunch.week.active") : t("lunch.week.upcoming");
          return `
            <button type="button" class="lunch-week-tab ${isSelected ? "active" : ""} ${isAutoActive ? "lunch-week-tab--live" : ""}" data-lunch-week-id="${w.id}" role="tab" aria-selected="${isSelected}">
              <span class="lunch-week-tab__dot"></span>
              <span>${labelPrefix}: <strong>${w.displayPeriod}</strong></span>
            </button>
          `;
        })
        .join("");

      weekTabsEl.querySelectorAll("[data-lunch-week-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.selectedLunchWeekId = btn.getAttribute("data-lunch-week-id");
          renderLunchBanner();
        });
      });
    }

    if (gridEl && Array.isArray(currentWeek.days)) {
      gridEl.innerHTML = currentWeek.days
        .map((d) => {
          const dayName = (d.day && (d.day[state.lang] || d.day.de)) || "";
          const soupName = (d.soup && (d.soup[state.lang] || d.soup.de)) || "";
          const mainName = (d.main && (d.main[state.lang] || d.main.de)) || "";
          const dessertName = (d.dessert && (d.dessert[state.lang] || d.dessert.de)) || "";
          return `
          <div class="lunch-day-card">
            <div class="lunch-day-card__day">${dayName}</div>
            <div class="lunch-day-card__soup">• ${soupName}</div>
            <div class="lunch-day-card__main">${mainName}</div>
            <div class="lunch-day-card__dessert">✦ ${dessertName}</div>
          </div>
        `;
        })
        .join("");
    }
  }

  function renderMenuCategories() {
    const container = document.getElementById("menuCategoryTabs");
    if (!container) return;

    const validCategories = getValidCategories(state.menuLocation);
    container.innerHTML = validCategories
      .map(
        (cat) => `
        <button type="button" class="menu-cat-tab ${cat.id === state.menuCategory ? "active" : ""}" data-cat-id="${cat.id}" role="tab">
          ${cat.label[state.lang]}
        </button>
      `
      )
      .join("");

    container.querySelectorAll(".menu-cat-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.menuCategory = btn.getAttribute("data-cat-id");
        renderMenuCategories();
        renderMenuItems();
      });
    });
  }

  function renderMenuItems() {
    const grid = document.getElementById("menuItemsGrid");
    if (!grid) return;

    const items = DATA.menuItems.filter((item) => {
      if (!item.locations.includes(state.menuLocation)) return false;

      if (state.menuSearch.length > 0) {
        const nameStr = item.name[state.lang].toLowerCase();
        const descStr = item.desc[state.lang].toLowerCase();
        if (!nameStr.includes(state.menuSearch) && !descStr.includes(state.menuSearch)) {
          return false;
        }
      } else {
        if (item.category !== state.menuCategory) return false;
      }

      if (state.menuFilter !== "all") {
        if (!item.tags || !item.tags.includes(state.menuFilter)) return false;
      }

      return true;
    });

    if (items.length === 0) {
      const emptyMsg =
        state.lang === "de"
          ? "Keine Speisen für diese Auswahl gefunden. Bitte passen Sie den Filter oder die Suche an."
          : "No dishes found for this filter. Please adjust your search or filter selection.";
      grid.innerHTML = `<div class="menu-empty">${emptyMsg}</div>`;
      return;
    }

    grid.innerHTML = items
      .map((item, idx) => {
        const badgeHtml = item.badge
          ? `<span class="menu-item-card__badge">${item.badge[state.lang]}</span>`
          : "";
        return `
        <article class="menu-item-card" style="animation-delay: ${Math.min(idx * 0.04, 0.4)}s">
          <div>
            <div class="menu-item-card__top">
              <div class="menu-item-card__title-wrap">
                <h3 class="menu-item-card__name">${item.name[state.lang]}</h3>
                ${badgeHtml}
              </div>
              <span class="menu-item-card__dots"></span>
              <span class="menu-item-card__price">${item.price}</span>
            </div>
            <p class="menu-item-card__desc">${item.desc[state.lang]}</p>
          </div>
        </article>
      `;
      })
      .join("");
  }

  // ================= ORIGINAL PRINTED MENU LIGHTBOX =================
  function initLightbox() {
    const dialog = document.getElementById("menuLightbox");
    const closeBtn = document.getElementById("closeLightboxBtn");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");
    const openCurrentBtn = document.getElementById("openCurrentMenuGallery");

    if (!dialog) return;

    if (openCurrentBtn) {
      openCurrentBtn.addEventListener("click", () => {
        openLightbox(state.menuLocation, 0);
      });
    }

    document.querySelectorAll("[data-open-lightbox]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const loc = btn.getAttribute("data-open-lightbox") || "hinterbruehl";
        openLightbox(loc, 0);
      });
    });

    document.querySelectorAll("[data-lightbox-loc]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const loc = btn.getAttribute("data-lightbox-loc");
        if (loc) {
          state.lightboxLocation = loc;
          state.lightboxIndex = 0;
          updateLightboxView();
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => dialog.close());
    }

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => stepLightbox(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => stepLightbox(1));
    }

    document.addEventListener("keydown", (e) => {
      if (!dialog.open) return;
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  function openLightbox(locId, index) {
    const dialog = document.getElementById("menuLightbox");
    if (!dialog || !DATA.locations[locId]) return;
    state.lightboxLocation = locId;
    state.lightboxIndex = index || 0;
    updateLightboxView();
    dialog.showModal();
  }

  function stepLightbox(delta) {
    const pages = DATA.locations[state.lightboxLocation].menuPages;
    state.lightboxIndex = (state.lightboxIndex + delta + pages.length) % pages.length;
    updateLightboxView();
  }

  function updateLightboxView() {
    const loc = DATA.locations[state.lightboxLocation];
    const pages = loc.menuPages;
    const imgEl = document.getElementById("lightboxImage");
    const counterEl = document.getElementById("lightboxCounter");
    const thumbsEl = document.getElementById("lightboxThumbs");

    document.querySelectorAll("[data-lightbox-loc]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lightbox-loc") === state.lightboxLocation);
    });

    if (imgEl) {
      imgEl.src = pages[state.lightboxIndex];
      imgEl.alt = `${loc.name} Speisekarte Seite ${state.lightboxIndex + 1}`;
    }

    if (counterEl) {
      const label = state.lang === "de" ? "Seite" : "Page";
      counterEl.textContent = `${label} ${state.lightboxIndex + 1} / ${pages.length}`;
    }

    if (thumbsEl) {
      thumbsEl.innerHTML = pages
        .map(
          (src, idx) => `
          <button type="button" class="lightbox-thumb ${idx === state.lightboxIndex ? "active" : ""}" data-page-idx="${idx}" aria-label="Seite ${idx + 1}">
            <img src="${src}" alt="" width="88" height="126" loading="lazy" />
          </button>
        `
        )
        .join("");

      thumbsEl.querySelectorAll(".lightbox-thumb").forEach((tBtn) => {
        tBtn.addEventListener("click", () => {
          state.lightboxIndex = Number(tBtn.getAttribute("data-page-idx"));
          updateLightboxView();
        });
      });
    }
  }

  // ================= RESERVATION & EVENT INQUIRY SYSTEM =================
  function initReservationSystem() {
    const dateInput = document.getElementById("resDate");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    const modeTabs = document.querySelectorAll("[data-booking-mode]");
    const occasionSelect = document.getElementById("resOccasion");
    const guestsSelect = document.getElementById("resGuests");

    modeTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const mode = tab.getAttribute("data-booking-mode");
        modeTabs.forEach((t) => t.classList.toggle("active", t === tab));
        if (mode === "event" && occasionSelect && guestsSelect) {
          occasionSelect.value = "Geburtstagsfeier";
          guestsSelect.value = "11–20 Personen (Gruppe/Event)";
        } else if (mode === "table" && occasionSelect) {
          occasionSelect.value = "Tischreservierung";
        }
      });
    });

    const eventCta = document.getElementById("eventInquiryCta");
    if (eventCta) {
      eventCta.addEventListener("click", () => {
        const eventTab = document.querySelector('[data-booking-mode="event"]');
        if (eventTab) eventTab.click();
      });
    }

    const carBtn = document.getElementById("carRentalInquiryBtn");
    if (carBtn && occasionSelect) {
      carBtn.addEventListener("click", () => {
        occasionSelect.value = "Mietwagen-Anfrage";
      });
    }

    const form = document.getElementById("reservationForm");
    const whatsappBtn = document.getElementById("whatsappReserveBtn");
    const feedbackEl = document.getElementById("reservationFeedback");

    function getFormData() {
      const fd = new FormData(form);
      return {
        location: fd.get("location") || "Hinterbrühl",
        occasion: fd.get("occasion") || "Tischreservierung",
        date: fd.get("date") || "",
        time: fd.get("time") || "",
        guests: fd.get("guests") || "2 Personen",
        name: fd.get("name") || "",
        phone: fd.get("phone") || "",
        email: fd.get("email") || "",
        area: fd.get("area") || "Innenbereich",
        notes: fd.get("notes") || "-"
      };
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const d = getFormData();

        const subject = encodeURIComponent(
          `[Café Weiss] ${d.occasion} – ${d.location} am ${d.date} (${d.time})`
        );
        const body = encodeURIComponent(
          `Guten Tag liebes Café Weiss Team,\n\n` +
            `ich möchte gerne folgende Anfrage senden:\n\n` +
            `• Standort: ${d.location}\n` +
            `• Anlass: ${d.occasion}\n` +
            `• Datum & Uhrzeit: ${d.date} um ${d.time} Uhr\n` +
            `• Personenanzahl: ${d.guests}\n` +
            `• Wunschbereich: ${d.area}\n` +
            `• Name: ${d.name}\n` +
            `• Telefon: ${d.phone}\n` +
            `• E-Mail: ${d.email}\n` +
            `• Anmerkungen: ${d.notes}\n\n` +
            `Bitte um kurze Rückbestätigung.\nHerzlichen Dank!`
        );

        if (feedbackEl) {
          feedbackEl.hidden = false;
          feedbackEl.innerHTML =
            state.lang === "de"
              ? `<strong>Vielen Dank, ${d.name}!</strong> Ihr E-Mail-Programm wird mit allen Reservierungsdaten für <em>${d.location}</em> (${d.date}, ${d.time} Uhr) geöffnet. Alternativ erreichen Sie uns jederzeit direkt unter <strong>+43 660 9840707</strong>.`
              : `<strong>Thank you, ${d.name}!</strong> Your email client is opening with your booking details for <em>${d.location}</em> (${d.date} at ${d.time}). You can also reach us directly at <strong>+43 660 9840707</strong>.`;
        }

        window.location.href = `mailto:cafeweiss.info@gmail.com?subject=${subject}&body=${body}`;
      });
    }

    if (whatsappBtn && form) {
      whatsappBtn.addEventListener("click", () => {
        if (!form.reportValidity()) return;
        const d = getFormData();
        const text = encodeURIComponent(
          `Hallo Café Weiss Team! Ich möchte gerne reservieren:\n` +
            `📍 Standort: ${d.location}\n` +
            `✨ Anlass: ${d.occasion}\n` +
            `📅 Datum: ${d.date} um ${d.time} Uhr\n` +
            `👥 Personen: ${d.guests} (${d.area})\n` +
            `👤 Name: ${d.name} (${d.phone})\n` +
            `💬 Wunsch: ${d.notes}`
        );
        window.open(`https://wa.me/436609840707?text=${text}`, "_blank", "noopener");
      });
    }
  }
})();
