// Café Weiss — Deep Domain Module for Weekly Lunch Menu Scheduling (Mittagsmenü)
// Shared by both the public website (index.html / js/app.js) and the Admin Planner (admin.html).
// Architecture follows Matt Pocock's `codebase-design` & `domain-modeling`:
// Small, high-leverage interface hiding date math, Vienna timezone resolution, validation,
// DE->EN culinary translation, and multi-adapter persistence.

(function (global) {
  "use strict";

  const STORAGE_KEY = "cafeweiss_lunch_schedules";
  const API_ENDPOINTS = [
    "api/lunch-schedules",
    "api/lunch-schedules.php",
    "data/lunch-schedules.json"
  ];

  const CANONICAL_DAYS = [
    { dayKey: "tuesday", de: "Dienstag", en: "Tuesday", defaultSoupDe: "Tagessuppe", defaultSoupEn: "Soup of the Day" },
    { dayKey: "wednesday", de: "Mittwoch", en: "Wednesday", defaultSoupDe: "Tagessuppe", defaultSoupEn: "Soup of the Day" },
    { dayKey: "thursday", de: "Donnerstag", en: "Thursday", defaultSoupDe: "Tagessuppe", defaultSoupEn: "Soup of the Day" },
    { dayKey: "friday", de: "Freitag", en: "Friday", defaultSoupDe: "Frischer Salat", defaultSoupEn: "Fresh Salad" }
  ];

  const DEFAULT_NOTE = {
    de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch erhältlich",
    en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option available daily"
  };

  // Expanded Culinary Dictionary (Austrian / French Bistro DE -> EN)
  const CULINARY_DICTIONARY = [
    [/Dessert des Tages/gi, "Dessert of the Day"],
    [/Tagessuppe/gi, "Soup of the Day"],
    [/Kürbiscremesuppe/gi, "Creamy Pumpkin Soup"],
    [/Erbsensuppe/gi, "Green Pea Soup"],
    [/Linsensuppe/gi, "Hearty Lentil Soup"],
    [/Griechischer Salat/gi, "Fresh Greek Salad"],
    [/Französischer Ziegenkäse-Salat/gi, "French Goat Cheese Salad"],
    [/Mediterraner Blattsalat mit Hausdressing/gi, "Mediterranean Green Salad with House Dressing"],
    [/Französische Zwiebelsuppe mit Käsecroutons/gi, "French Onion Soup with Cheese Croutons"],
    [/Französische Zwiebelsuppe/gi, "French Onion Soup"],
    [/Tomatencremesuppe mit frischem Basilikum/gi, "Creamy Tomato Soup with Fresh Basil"],
    [/Tomatencremesuppe/gi, "Creamy Tomato Soup"],
    [/Klare Rindsuppe mit Frittaten/gi, "Clear Beef Broth with Sliced Pancakes"],
    [/Rindsuppe mit Frittaten/gi, "Viennese Beef Broth with Pancake Strips"],
    [/Rindsuppe mit Kaspressknödel/gi, "Beef Broth with Tyrolean Cheese Dumpling"],
    [/Knoblauchcremesuppe/gi, "Creamy Garlic Soup"],
    [/Waldpilzcremesuppe/gi, "Wild Mushroom Cream Soup"],
    [/Schwammerlsuppe/gi, "Creamy Forest Mushroom Soup"],
    [/Karotten-Ingwer-Cremesuppe/gi, "Carrot & Ginger Cream Soup"],
    [/Süßkartoffel-Cremesuppe/gi, "Sweet Potato Cream Soup"],
    [/Brokkolicremesuppe mit gerösteten Mandeln/gi, "Cream of Broccoli Soup with Toasted Almonds"],
    [/Brokkolicremesuppe/gi, "Cream of Broccoli Soup"],
    [/Spargelcremesuppe/gi, "Cream of Asparagus Soup"],
    [/Blumenkohlcremesuppe/gi, "Cream of Cauliflower Soup"],
    [/Gemüsesuppe/gi, "Garden Vegetable Soup"],
    [/Frischer Salat/gi, "Fresh Garden Salad"],
    [/Gemischter Salat/gi, "Mixed Seasonal Salad"],
    [/Schweinegeschnetzeltes nach Stroganoff-Art mit Kartoffeln/gi, "Pork Stroganoff with Potatoes"],
    [/Schweinegeschnetzeltes nach Stroganoff-Art/gi, "Pork Stroganoff"],
    [/Schweinerippchen mit Kartoffelwedges/gi, "Tender Pork Ribs with Potato Wedges"],
    [/Schweinerippchen/gi, "Tender Pork Ribs"],
    [/Ravioli in Beurre-blanc-Sauce/gi, "Ravioli in French Beurre Blanc Sauce"],
    [/Pasta mit Lachs/gi, "Artisan Pasta with Salmon"],
    [/Hühnerbrust in Kräuter-Rahmsauce mit Butterreis/gi, "Chicken Breast in Herb Cream Sauce with Butter Rice"],
    [/Hausgemachte Spinat-Ricotta-Tortellini in Salbeibutter/gi, "Homemade Spinach & Ricotta Tortellini in Sage Butter"],
    [/Rosa gebratene Entenbrust mit Rotkraut & Kroketten/gi, "Roast Duck Breast with Red Cabbage & Croquettes"],
    [/Gebratenes Zanderfilet auf Petersilienkartoffeln/gi, "Pan-Seared Pike-Perch Fillet on Parsley Potatoes"],
    [/Boeuf Bourguignon mit cremigem Kartoffelpüree/gi, "Boeuf Bourguignon with Creamy Mashed Potatoes"],
    [/Trüffel-Tagliatelle mit gehobeltem Grana Padano/gi, "Truffle Tagliatelle with Shaved Grana Padano"],
    [/Wiener Schnitzel vom Kalb mit Erdäpfel-Vogerlsalat/gi, "Viennese Veal Schnitzel with Potato & Lamb's Lettuce Salad"],
    [/Wiener Schnitzel/gi, "Viennese Schnitzel"],
    [/Gegrilltes Lachsfilet à la Provençale mit Kräuterreis/gi, "Grilled Salmon Fillet à la Provençale with Herb Rice"],
    [/Lachsfilet/gi, "Salmon Fillet"],
    [/Zanderfilet/gi, "Pike-Perch Fillet"],
    [/Forellenfilet/gi, "Trout Fillet"],
    [/Hühnerfilet/gi, "Chicken Breast Fillet"],
    [/Hühnerbrust/gi, "Chicken Breast"],
    [/Schweinsmedaillons/gi, "Pork Medallions"],
    [/Rindergulasch/gi, "Viennese Beef Goulash"],
    [/Tafelspitz/gi, "Classic Boiled Prime Beef (Tafelspitz)"],
    [/Käsespätzle/gi, "Austrian Cheese Spätzle"],
    [/Kartoffelwedges/gi, "Potato Wedges"],
    [/Kartoffelpüree/gi, "Mashed Potatoes"],
    [/Rosmarinkartoffeln/gi, "Rosemary Potatoes"],
    [/Petersilienkartoffeln/gi, "Parsley Potatoes"],
    [/mit Kartoffeln/gi, "with Potatoes"],
    [/mit Butterreis/gi, "with Butter Rice"],
    [/mit Kräuterreis/gi, "with Herb Rice"],
    [/mit Reis/gi, "with Rice"],
    [/Serviettenknödel/gi, "Bread Dumplings"],
    [/mit Basilikum/gi, "with Fresh Basil"],
    [/hausgemacht/gi, "homemade"],
    [/gegrillt/gi, "grilled"],
    [/gebraten/gi, "pan-seared"],
    [/mit/gi, "with"],
    [/und/gi, "and"]
  ];

  function getViennaDateISO(overrideDate) {
    if (overrideDate && /^\d{4}-\d{2}-\d{2}$/.test(overrideDate)) {
      return overrideDate;
    }
    if (typeof window !== "undefined" && window.location && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      const previewDate = params.get("previewDate");
      if (previewDate && /^\d{4}-\d{2}-\d{2}$/.test(previewDate)) {
        return previewDate;
      }
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

  function addDaysISO(isoDate, days) {
    const d = new Date(isoDate + "T12:00:00");
    d.setDate(d.getDate() + days);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function formatDeDate(isoDate) {
    if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}.${m}.${y}`;
  }

  function computeDisplayPeriod(mondayISO) {
    if (!mondayISO || !/^\d{4}-\d{2}-\d{2}$/.test(mondayISO)) return "";
    const tue = addDaysISO(mondayISO, 1);
    const fri = addDaysISO(mondayISO, 4);
    return `${formatDeDate(tue)} – ${formatDeDate(fri)}`;
  }

  function getWeekStatus(week, targetDateISO) {
    const refDate = targetDateISO || getViennaDateISO();
    if (!week || !week.validFrom || !week.validTo) return "past";
    if (refDate >= week.validFrom && refDate <= week.validTo) return "active";
    if (week.validFrom > refDate) return "scheduled";
    return "past";
  }

  function normalizeSchedule(raw) {
    const validFrom = raw && /^\d{4}-\d{2}-\d{2}$/.test(raw.validFrom) ? raw.validFrom : getViennaDateISO();
    const validTo =
      raw && /^\d{4}-\d{2}-\d{2}$/.test(raw.validTo) && raw.validTo >= validFrom
        ? raw.validTo
        : addDaysISO(validFrom, 6);

    const daysInput = Array.isArray(raw && raw.days) ? raw.days : [];
    const normalizedDays = CANONICAL_DAYS.map((canon, idx) => {
      const existing = daysInput[idx] || {};
      return {
        dayKey: canon.dayKey,
        day: {
          de: (existing.day && existing.day.de) || canon.de,
          en: (existing.day && existing.day.en) || canon.en
        },
        soup: {
          de: (existing.soup && existing.soup.de) || canon.defaultSoupDe,
          en: (existing.soup && existing.soup.en) || canon.defaultSoupEn
        },
        main: {
          de: (existing.main && existing.main.de) || `Hauptspeise am ${canon.de}`,
          en: (existing.main && existing.main.en) || `${canon.en} Main Course`
        },
        dessert: {
          de: (existing.dessert && existing.dessert.de) || "Dessert des Tages",
          en: (existing.dessert && existing.dessert.en) || "Dessert of the Day"
        }
      };
    });

    return {
      id: (raw && raw.id) || `week-${validFrom}`,
      validFrom,
      validTo,
      displayPeriod: (raw && raw.displayPeriod) || computeDisplayPeriod(validFrom),
      price2Course: (raw && raw.price2Course) || "€ 10,90",
      price3Course: (raw && raw.price3Course) || "€ 14,90",
      note: {
        de: (raw && raw.note && raw.note.de) || DEFAULT_NOTE.de,
        en: (raw && raw.note && raw.note.en) || DEFAULT_NOTE.en
      },
      days: normalizedDays
    };
  }

  function sortSchedules(schedules) {
    if (!Array.isArray(schedules)) return [];
    return schedules
      .map(normalizeSchedule)
      .sort((a, b) => (a.validFrom || "").localeCompare(b.validFrom || ""));
  }

  function resolveActiveSchedule(schedules, targetDateISO) {
    const sorted = sortSchedules(schedules);
    if (sorted.length === 0) return null;
    const dateISO = targetDateISO || getViennaDateISO();

    // 1. Exact validity window match
    const exact = sorted.find((s) => s.validFrom <= dateISO && dateISO <= s.validTo);
    if (exact) return exact;

    // 2. Next upcoming scheduled week (e.g., weekend before Tuesday)
    const upcoming = sorted.find((s) => s.validFrom >= dateISO);
    if (upcoming) return upcoming;

    // 3. Fallback to most recent week
    return sorted[sorted.length - 1];
  }

  function createNextWeekSchedule(existingSchedules, templateSchedule) {
    const sorted = sortSchedules(existingSchedules);
    const lastWeek = sorted[sorted.length - 1];
    const nextMonday =
      lastWeek && lastWeek.validFrom ? addDaysISO(lastWeek.validFrom, 7) : getViennaDateISO();
    const nextSunday = addDaysISO(nextMonday, 6);
    const base = templateSchedule ? JSON.parse(JSON.stringify(templateSchedule)) : {};

    return normalizeSchedule({
      ...base,
      id: `week-${nextMonday}-${Math.floor(Math.random() * 900 + 100)}`,
      validFrom: nextMonday,
      validTo: nextSunday,
      displayPeriod: computeDisplayPeriod(nextMonday)
    });
  }

  function translateDishDeToEn(textDe) {
    if (!textDe) return "";
    let result = String(textDe).trim();
    CULINARY_DICTIONARY.forEach(([regex, repl]) => {
      result = result.replace(regex, repl);
    });
    return result;
  }

  async function loadStore(fallbackSchedules) {
    let loaded = null;

    // 1. Try live endpoints (Python API, PHP API, Static JSON)
    for (const url of API_ENDPOINTS) {
      try {
        const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.schedules) && data.schedules.length > 0) {
            loaded = data;
            break;
          }
        }
      } catch (e) {
        // Try next adapter
      }
    }

    // 2. Fallback to localStorage cache
    if (!loaded) {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && Array.isArray(parsed.schedules) && parsed.schedules.length > 0) {
            loaded = parsed;
          }
        }
      } catch (e) {}
    }

    // 3. Fallback to embedded menu-data.js schedules
    if (!loaded) {
      const embedded =
        fallbackSchedules ||
        (global.CAFE_WEISS_DATA &&
          global.CAFE_WEISS_DATA.lunchMenu &&
          global.CAFE_WEISS_DATA.lunchMenu.schedules) ||
        [];
      loaded = { updatedAt: new Date().toISOString(), schedules: embedded };
    }

    loaded.schedules = sortSchedules(loaded.schedules);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    } catch (e) {}
    return loaded;
  }

  async function saveStore(store) {
    const cleanStore = {
      ...store,
      updatedAt: new Date().toISOString(),
      schedules: sortSchedules(store && store.schedules ? store.schedules : [])
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanStore));
    } catch (e) {}

    let persistedOnServer = false;
    for (const url of ["api/lunch-schedules", "api/lunch-schedules.php"]) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cleanStore)
        });
        if (res.ok) {
          persistedOnServer = true;
          break;
        }
      } catch (e) {}
    }

    return { store: cleanStore, persistedOnServer };
  }

  function applyTenantTheme(primaryHex, secondaryHex) {
    const hex = /^#[0-9a-fA-F]{6}$/.test(primaryHex) ? primaryHex : "#18181B";
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

    // Automatic WCAG AA readable text on top of --tenant-accent
    const fg = luminance > 0.42 ? "#111113" : "#FFFFFF";

    if (typeof document !== "undefined" && document.documentElement) {
      const root = document.documentElement;
      root.style.setProperty("--tenant-accent", hex);
      root.style.setProperty("--tenant-accent-fg", fg);
      if (secondaryHex && /^#[0-9a-fA-F]{6}$/.test(secondaryHex)) {
        root.style.setProperty("--tenant-secondary", secondaryHex);
      } else {
        root.style.removeProperty("--tenant-secondary");
      }
    }
    return { hex, fg, luminance };
  }

  global.applyTenantTheme = global.applyTenantTheme || applyTenantTheme;

  global.CafeWeissLunchScheduler = {
    STORAGE_KEY,
    applyTenantTheme,
    getViennaDateISO,
    addDaysISO,
    formatDeDate,
    computeDisplayPeriod,
    getWeekStatus,
    normalizeSchedule,
    sortSchedules,
    resolveActiveSchedule,
    createNextWeekSchedule,
    translateDishDeToEn,
    loadStore,
    saveStore
  };
})(typeof window !== "undefined" ? window : globalThis);
