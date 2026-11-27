// Café Weiss — Authentic Menu & Bilingual Content Database (DE / EN)
// Locations: Hinterbrühl (Hauptstraße 16, 2371) & Mödling (Herzoggasse 6, 2340)

window.CAFE_WEISS_DATA = {
  locations: {
    hinterbruehl: {
      id: "hinterbruehl",
      name: "Café Weiss Hinterbrühl",
      badge: {
        de: "Restaurant & Café · Nahe Seegrotte",
        en: "Restaurant & Café · Near Seegrotte"
      },
      shortTitle: {
        de: "Hinterbrühl · Restaurant & Café",
        en: "Hinterbrühl · Restaurant & Café"
      },
      title: {
        de: "Ein Hauch von Frankreich in Hinterbrühl",
        en: "A Touch of France in Hinterbrühl"
      },
      subtitle: {
        de: "Französisch-mediterrane Küche, Frühstück & Mittagsmenü nahe der Seegrotte.",
        en: "French-Mediterranean cuisine, breakfast & lunch menu near the Seegrotte."
      },
      address: "Hauptstraße 16, 2371 Hinterbrühl",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hauptstra%C3%9Fe+16,+2371+Hinterbr%C3%BChl,+Austria",
      phone: "+43 660 9840707",
      eventPhone: "+43 670 5078850",
      email: "cafeweiss.info@gmail.com",
      hours: {
        de: "Täglich: 08:00 – 20:00 Uhr",
        en: "Daily: 08:00 – 20:00"
      },
      openHour: 8,
      closeHour: 20,
      heroImage: "assets/images/brand/hero-hinterbruehl.jpg",
      secondaryImage: "assets/images/brand/interior-hinterbruehl.jpg",
      features: {
        de: [
          "Warme französische & mediterrane Küche",
          "Dienstag – Freitag Mittagsmenü (2 oder 3 Gänge)",
          "Eleganter Kronleuchter-Salon für Events & Feiern",
          "Direkt nahe der berühmten Seegrotte Hinterbrühl"
        ],
        en: [
          "Warm French & Mediterranean cuisine",
          "Tuesday – Friday Lunch Menu (2 or 3 courses)",
          "Elegant chandelier salon for events & celebrations",
          "Located right near the famous Seegrotte Hinterbrühl"
        ]
      },
      menuPages: [
        "assets/images/menu-hinterbruehl/page-1.jpg",
        "assets/images/menu-hinterbruehl/page-2.jpg",
        "assets/images/menu-hinterbruehl/page-3.jpg",
        "assets/images/menu-hinterbruehl/page-4.jpg",
        "assets/images/menu-hinterbruehl/page-5.jpg",
        "assets/images/menu-hinterbruehl/page-6.jpg",
        "assets/images/menu-hinterbruehl/page-7.jpg",
        "assets/images/menu-hinterbruehl/page-8.jpg"
      ]
    },
    moedling: {
      id: "moedling",
      name: "Café Weiss Mödling",
      badge: {
        de: "Kaffeehaus · Gewölbe 1607",
        en: "Coffeehouse · Historic Vault 1607"
      },
      shortTitle: {
        de: "Mödling · Französisches Kaffeehaus",
        en: "Mödling · French Coffeehouse"
      },
      title: {
        de: "Französischer Kaffeehaus-Charme in Mödling",
        en: "French Coffeehouse Charm in Mödling"
      },
      subtitle: {
        de: "100% Bio-Kaffee, Frühstück & Patisserie im Gewölbe aus 1607 mit Rathaus-Terrasse.",
        en: "100% organic coffee, breakfast & patisserie in a 1607 vault with Town Hall terrace."
      },
      address: "Herzoggasse 6, 2340 Mödling",
      mapsUrl: "https://share.google/LVHGprsLfb5v46MXj",
      phone: "+43 660 9840707",
      eventPhone: "+43 660 9840707",
      email: "cafeweiss.info@gmail.com",
      hours: {
        de: "Täglich: 08:00 – 19:00 Uhr",
        en: "Daily: 08:00 – 19:00"
      },
      openHour: 8,
      closeHour: 21,
      heroImage: "assets/images/brand/hero-moedling.jpg",
      secondaryImage: "assets/images/brand/events-bg.jpg",
      features: {
        de: [
          "Historischer französischer Salon aus dem Jahr 1607 (20 Plätze)",
          "Großzügige Terrasse mit Rathaus-Blick (40 Plätze)",
          "100% Bio-Produkte, Spezialitätenkaffee & Kuchenvitrine",
          "Exklusiver Mietwagen-Service & TSCHÖAM'S Craft Bier"
        ],
        en: [
          "Historic French-style vaulted room from 1607 (20 seats)",
          "Spacious terrace overlooking the Town Hall (40 seats)",
          "100% organic products, specialty coffee & cake vitrine",
          "Exclusive car rental service & TSCHÖAM'S Craft Beer"
        ]
      },
      menuPages: [
        "assets/images/menu-moedling/page-1.jpg",
        "assets/images/menu-moedling/page-2.jpg",
        "assets/images/menu-moedling/page-3.jpg",
        "assets/images/menu-moedling/page-4.jpg",
        "assets/images/menu-moedling/page-5.jpg"
      ]
    }
  },

  lunchMenu: {
    title: {
      de: "Mittagsmenü Hinterbrühl",
      en: "Weekly Lunch Menu"
    },
    schedule: {
      de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch",
      en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option daily"
    },
    price2Course: "€ 10,90",
    price3Course: "€ 14,90",
    schedules: [
      {
        id: "week-2026-11-03",
        validFrom: "2026-11-02",
        validTo: "2026-11-08",
        displayPeriod: "03.11.2026 – 06.11.2026",
        price2Course: "€ 10,90",
        price3Course: "€ 14,90",
        note: {
          de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch erhältlich",
          en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option available daily"
        },
        days: [
          {
            dayKey: "tuesday",
            day: { de: "Dienstag", en: "Tuesday" },
            soup: { de: "Kürbiscremesuppe", en: "Creamy Pumpkin Soup" },
            main: { de: "Schweinegeschnetzeltes nach Stroganoff-Art mit Kartoffeln", en: "Pork Stroganoff with Potatoes" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "wednesday",
            day: { de: "Mittwoch", en: "Wednesday" },
            soup: { de: "Erbsensuppe", en: "Green Pea Soup" },
            main: { de: "Ravioli in Beurre-blanc-Sauce", en: "Ravioli in French Beurre Blanc Sauce" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "thursday",
            day: { de: "Donnerstag", en: "Thursday" },
            soup: { de: "Linsensuppe", en: "Hearty Lentil Soup" },
            main: { de: "Schweinerippchen mit Kartoffelwedges", en: "Tender Pork Ribs with Potato Wedges" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "friday",
            day: { de: "Freitag", en: "Friday" },
            soup: { de: "Griechischer Salat", en: "Fresh Greek Salad" },
            main: { de: "Pasta mit Lachs", en: "Artisan Pasta with Salmon" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          }
        ]
      },
      {
        id: "week-2026-11-23",
        validFrom: "2026-11-23",
        validTo: "2026-11-29",
        displayPeriod: "24.11.2026 – 27.11.2026",
        price2Course: "€ 10,90",
        price3Course: "€ 14,90",
        note: {
          de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch erhältlich",
          en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option available daily"
        },
        days: [
          {
            dayKey: "tuesday",
            day: { de: "Dienstag", en: "Tuesday" },
            soup: { de: "Kürbiscremesuppe", en: "Creamy Pumpkin Soup" },
            main: { de: "Schweinegeschnetzeltes nach Stroganoff-Art mit Kartoffeln", en: "Pork Stroganoff with Potatoes" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "wednesday",
            day: { de: "Mittwoch", en: "Wednesday" },
            soup: { de: "Erbsensuppe", en: "Green Pea Soup" },
            main: { de: "Ravioli in Beurre-blanc-Sauce", en: "Ravioli in French Beurre Blanc Sauce" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "thursday",
            day: { de: "Donnerstag", en: "Thursday" },
            soup: { de: "Linsensuppe", en: "Hearty Lentil Soup" },
            main: { de: "Schweinerippchen mit Kartoffelwedges", en: "Tender Pork Ribs with Potato Wedges" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "friday",
            day: { de: "Freitag", en: "Friday" },
            soup: { de: "Griechischer Salat", en: "Fresh Greek Salad" },
            main: { de: "Pasta mit Lachs", en: "Artisan Pasta with Salmon" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          }
        ]
      },
      {
        id: "week-2026-11-30",
        validFrom: "2026-11-30",
        validTo: "2026-12-06",
        displayPeriod: "01.12.2026 – 04.12.2026",
        price2Course: "€ 10,90",
        price3Course: "€ 14,90",
        note: {
          de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch erhältlich",
          en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option available daily"
        },
        days: [
          {
            dayKey: "tuesday",
            day: { de: "Dienstag", en: "Tuesday" },
            soup: { de: "Französische Zwiebelsuppe mit Käsecroutons", en: "French Onion Soup with Cheese Croutons" },
            main: { de: "Hühnerbrust in Kräuter-Rahmsauce mit Butterreis", en: "Chicken Breast in Herb Cream Sauce with Butter Rice" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "wednesday",
            day: { de: "Mittwoch", en: "Wednesday" },
            soup: { de: "Karotten-Ingwer-Cremesuppe", en: "Carrot & Ginger Cream Soup" },
            main: { de: "Hausgemachte Spinat-Ricotta-Tortellini in Salbeibutter", en: "Homemade Spinach & Ricotta Tortellini in Sage Butter" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "thursday",
            day: { de: "Donnerstag", en: "Thursday" },
            soup: { de: "Klare Rindsuppe mit Frittaten", en: "Clear Beef Broth with Sliced Pancakes" },
            main: { de: "Rosa gebratene Entenbrust mit Rotkraut & Kroketten", en: "Roast Duck Breast with Red Cabbage & Croquettes" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "friday",
            day: { de: "Freitag", en: "Friday" },
            soup: { de: "Mediterraner Blattsalat mit Hausdressing", en: "Mediterranean Green Salad with House Dressing" },
            main: { de: "Gebratenes Zanderfilet auf Petersilienkartoffeln", en: "Pan-Seared Pike-Perch Fillet on Parsley Potatoes" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          }
        ]
      },
      {
        id: "week-2026-12-07",
        validFrom: "2026-12-07",
        validTo: "2026-12-13",
        displayPeriod: "08.12.2026 – 11.12.2026",
        price2Course: "€ 10,90",
        price3Course: "€ 14,90",
        note: {
          de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch erhältlich",
          en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option available daily"
        },
        days: [
          {
            dayKey: "tuesday",
            day: { de: "Dienstag", en: "Tuesday" },
            soup: { de: "Süßkartoffel-Cremesuppe", en: "Sweet Potato Cream Soup" },
            main: { de: "Boeuf Bourguignon mit cremigem Kartoffelpüree", en: "Boeuf Bourguignon with Creamy Mashed Potatoes" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "wednesday",
            day: { de: "Mittwoch", en: "Wednesday" },
            soup: { de: "Brokkolicremesuppe mit gerösteten Mandeln", en: "Cream of Broccoli Soup with Toasted Almonds" },
            main: { de: "Trüffel-Tagliatelle mit gehobeltem Grana Padano", en: "Truffle Tagliatelle with Shaved Grana Padano" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "thursday",
            day: { de: "Donnerstag", en: "Thursday" },
            soup: { de: "Tomatencremesuppe mit frischem Basilikum", en: "Creamy Tomato Soup with Fresh Basil" },
            main: { de: "Wiener Schnitzel vom Kalb mit Erdäpfel-Vogerlsalat", en: "Viennese Veal Schnitzel with Potato & Lamb's Lettuce Salad" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          },
          {
            dayKey: "friday",
            day: { de: "Freitag", en: "Friday" },
            soup: { de: "Französischer Ziegenkäse-Salat", en: "French Goat Cheese Salad" },
            main: { de: "Gegrilltes Lachsfilet à la Provençale mit Kräuterreis", en: "Grilled Salmon Fillet à la Provençale with Herb Rice" },
            dessert: { de: "Dessert des Tages", en: "Dessert of the Day" }
          }
        ]
      }
    ]
  },

  categories: [
    { id: "breakfast", label: { de: "Frühstück & Brunch", en: "Breakfast & Brunch" } },
    { id: "starters", label: { de: "Vorspeisen & Salate", en: "Starters & Salads" }, locationOnly: "hinterbruehl" },
    { id: "mains", label: { de: "Pasta & Hauptspeisen", en: "Pasta & Main Courses" }, locationOnly: "hinterbruehl" },
    { id: "salads_snacks", label: { de: "Salate & Feine Bissen", en: "Salads & Savory Bites" }, locationOnly: "moedling" },
    { id: "desserts", label: { de: "Patisserie, Eis & Desserts", en: "Patisserie, Gelato & Desserts" } },
    { id: "coffee", label: { de: "Bio-Kaffee & Hausgemachter Tee", en: "Organic Coffee & Homemade Tea" } },
    { id: "drinks", label: { de: "Aperitifs, Wein & Erfrischungen", en: "Aperitifs, Wine & Refreshments" } }
  ],

  menuItems: [
    // ================= BREAKFAST & BRUNCH (BOTH & LOCATION-SPECIFIC) =================
    {
      id: "weiss-fruehstueck",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["signature", "bio"],
      badge: { de: "Signature", en: "Signature" },
      name: { de: "„Weiß“ Frühstück für 1 Person", en: "“Weiß” Grand Breakfast for 1" },
      desc: {
        de: "Glas Prosecco oder frisch gepresster Saft (0,2L), Heißgetränk nach Wahl, Kornspitz, Croissant oder Toastbrot, Bio-Butter, Marmelade, Schinken-Käse-Teller oder Lachs, Bio-Granola mit Bio-Naturjoghurt & weich gekochtes Ei",
        en: "Glass of Prosecco or freshly squeezed juice (0.2L), hot drink of choice, Kornspitz, croissant or toast, organic butter, jam, ham & cheese platter or salmon, organic granola with organic yogurt & soft-boiled egg"
      },
      price: "€ 29,50"
    },
    {
      id: "franzoesisches-fruehstueck",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg", "signature"],
      badge: { de: "Klassiker", en: "Classic" },
      name: { de: "Französisches / Italienisches Frühstück", en: "French / Italian Breakfast" },
      desc: {
        de: "Ofenfrisches Buttercroissant serviert mit aromatischem Bio-Kaffee oder Bio-Tee nach Wahl",
        en: "Oven-fresh butter croissant served with aromatic organic coffee or organic tea of choice"
      },
      price: "€ 7,50"
    },
    {
      id: "wiener-fruehstueck",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg", "bio"],
      name: { de: "Wiener Frühstück", en: "Viennese Breakfast" },
      desc: {
        de: "Melange oder Wiener Melange, knusprige Bio-Semmel und feine Bio-Butter",
        en: "Viennese Melange coffee, crispy organic Kaiser roll, and organic butter"
      },
      price: "€ 7,50"
    },
    {
      id: "klassisches-fruehstueck",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["bio"],
      name: { de: "Klassisches Frühstück", en: "Classic Café Weiss Breakfast" },
      desc: {
        de: "Kaisersemmel, Toastbrot, Schinken-Käse-Teller oder Räucherlachs, weich gekochtes Ei, Marmelade & Bio-Butter",
        en: "Kaiser roll, toast, ham & cheese platter or smoked salmon, soft-boiled egg, jam & organic butter"
      },
      price: "€ 11,90"
    },
    {
      id: "eier-benedikt",
      locations: ["hinterbruehl"],
      category: "breakfast",
      tags: ["signature"],
      badge: { de: "Beliebt", en: "Popular" },
      name: { de: "Eier Benedikt", en: "Eggs Benedict" },
      desc: {
        de: "2 pochierte Eier, feiner Thunfisch, cremige Sauce Hollandaise und frischer gemischter Salat",
        en: "2 poached eggs, fine tuna, creamy Hollandaise sauce, and fresh mixed salad"
      },
      price: "€ 9,50"
    },
    {
      id: "franzoesisches-omelett",
      locations: ["hinterbruehl"],
      category: "breakfast",
      tags: ["veg"],
      name: { de: "Französisches Omelett", en: "French Omelette" },
      desc: {
        de: "3 Eier, gereifter Parmesankäse, gemischter Salat und aromatische Tomaten",
        en: "3 farm eggs, aged Parmesan cheese, mixed salad, and aromatic tomatoes"
      },
      price: "€ 10,90"
    },
    {
      id: "english-breakfast",
      locations: ["hinterbruehl"],
      category: "breakfast",
      tags: [],
      name: { de: "English Breakfast", en: "Full English Breakfast" },
      desc: {
        de: "2 Spiegeleier, knuspriger Bacon, Feta-Mousse, Kidneybohnen, Pelati-Tomaten und warmes Ciabatta",
        en: "2 sunny-side-up eggs, crispy bacon, feta mousse, kidney beans, Pelati tomatoes, and warm ciabatta"
      },
      price: "€ 14,90"
    },
    {
      id: "gruenes-fruehstueck",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg", "bio"],
      name: { de: "Grünes Frühstück", en: "Green Avocado Breakfast" },
      desc: {
        de: "Kräftiges Schwarzbrot, frisches Avocado-Püree, Rucola/gemischter Salat und pochiertes Ei",
        en: "Artisan dark bread, fresh avocado mash, arugula/mixed salad, and poached egg"
      },
      price: "€ 11,90"
    },
    {
      id: "protein-plus-fruehstueck",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: [],
      name: { de: "Protein-Plus Frühstück", en: "Protein-Plus Breakfast" },
      desc: {
        de: "Unser Grünes Frühstück (Schwarzbrot, Avocado-Püree, pochiertes Ei) verfeinert mit feinem Prosciutto",
        en: "Our Green Breakfast (dark bread, avocado mash, poached egg) topped with fine Prosciutto"
      },
      price: "€ 12,90"
    },
    {
      id: "dubai-joghurt-bowl",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg", "bio", "signature"],
      badge: { de: "Trend", en: "Trending" },
      name: { de: "Dubai Joghurt Bowl", en: "Dubai Pistachio Yogurt Bowl" },
      desc: {
        de: "Cremiges Bio-Joghurt, feine Pistaziencreme, frische Früchte, geröstete Mandelblättchen und Schokoladensoße",
        en: "Creamy organic yogurt, rich pistachio cream, fresh fruits, toasted almond flakes, and chocolate drizzle"
      },
      price: "€ 12,90"
    },
    {
      id: "avocado-on-toast",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg"],
      name: { de: "Avocado on Toast", en: "Avocado on Toast" },
      desc: {
        de: "Geröstetes Vollkorntoastbrot mit cremigem Avocado-Püree und Rucola / gemischtem Salat",
        en: "Toasted wholegrain bread with creamy avocado mash and arugula / mixed salad"
      },
      price: "€ 10,90"
    },
    {
      id: "veganes-duo",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg", "bio"],
      badge: { de: "Vegan", en: "Vegan" },
      name: { de: "Veganes Duo", en: "Vegan Hummus Duo" },
      desc: {
        de: "2 Scheiben geröstetes Toastbrot mit cremigem Hummus, Karotten und Rucola / gemischtem Salat",
        en: "2 slices of toasted bread with creamy hummus, carrots, and arugula / mixed salad"
      },
      price: "€ 11,90"
    },
    {
      id: "granola-bowl",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: ["veg", "bio"],
      name: { de: "Granola-Bowl", en: "Organic Granola Bowl" },
      desc: {
        de: "Vegane Milch oder Bio-Joghurt, knuspriges Granola, frische Früchte und Nüsse",
        en: "Plant-based milk or organic yogurt, crunchy granola, fresh seasonal fruits, and nuts"
      },
      price: "€ 11,90"
    },
    {
      id: "suesses-fruehstueck-moedling",
      locations: ["moedling"],
      category: "breakfast",
      tags: ["veg"],
      name: { de: "Süßes Waffel-Frühstück", en: "Sweet Waffle Breakfast" },
      desc: {
        de: "Warme belgische Waffeln verfeinert mit Honig, Ahornsirup oder Nutella und frischen Beeren",
        en: "Warm Belgian waffles drizzled with honey, maple syrup, or Nutella and fresh berries"
      },
      price: "€ 11,90"
    },
    {
      id: "palatschinken-hb",
      locations: ["hinterbruehl"],
      category: "breakfast",
      tags: ["veg"],
      name: { de: "Süße oder Pikante Palatschinken", en: "Sweet or Savory Crêpes (Palatschinken)" },
      desc: {
        de: "Wahlweise süß mit Honig, Ahornsirup, Nutella & Banane oder herzhaft gefüllt mit Fleisch & Bio-Joghurt",
        en: "Choice of sweet with honey, maple syrup, Nutella & banana or savory filled with meat & organic yogurt"
      },
      price: "€ 11,90"
    },
    {
      id: "schinken-kaese-croissant",
      locations: ["hinterbruehl", "moedling"],
      category: "breakfast",
      tags: [],
      name: { de: "Schinken-Käse-Toast oder Croissant", en: "Ham & Cheese Toast or Croissant" },
      desc: {
        de: "Knusprig getoastet mit feinem Schinken und geschmolzenem Käse",
        en: "Crisp-toasted with fine ham and melted cheese"
      },
      price: "€ 6,90"
    },

    // ================= STARTERS, SALADS & SOUPS (HINTERBRÜHL) =================
    {
      id: "burrata-di-bufala",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["veg", "signature"],
      badge: { de: "Empfehlung", en: "Chef's Pick" },
      name: { de: "Burrata di Bufala", en: "Burrata di Bufala" },
      desc: {
        de: "Cremige Büffel-Burrata, sonnengereifte Tomaten, Rucola, natives Olivenöl, Paprikacreme & Mandelblättchen",
        en: "Creamy buffalo burrata, sun-ripened tomatoes, arugula, extra virgin olive oil, bell pepper cream & almond flakes"
      },
      price: "€ 12,90"
    },
    {
      id: "rinder-carpaccio",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["signature"],
      name: { de: "Rinder-Carpaccio", en: "Beef Carpaccio" },
      desc: {
        de: "Hauchdünnes Rinder-Carpaccio, Balsamico-Dressing, Parmesan, sonnengetrocknete Tomaten, Rucola & Mandelblättchen",
        en: "Thinly sliced beef carpaccio, balsamic dressing, Parmesan, sun-dried tomatoes, arugula & toasted almonds"
      },
      price: "€ 12,90"
    },
    {
      id: "haehnchenpastete",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["signature"],
      badge: { de: "Französisch", en: "French Bistro" },
      name: { de: "Hausgemachte Hähnchenpastete", en: "Homemade Chicken Liver Pâté" },
      desc: {
        de: "Feine Hühnerleberpastete mit Trüffelbutter, Rote-Zwiebel-Konfitüre mit Sauerkirsche und knusprigem Ciabatta-Brot",
        en: "Delicate chicken liver pâté with truffle butter, red onion & sour cherry confit, and warm ciabatta bread"
      },
      price: "€ 11,90"
    },
    {
      id: "baba-ganoush",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["veg"],
      name: { de: "Baba Ganoush", en: "Baba Ganoush" },
      desc: {
        de: "Geröstete Aubergine, feines Sesam-Tahini, natives Olivenöl und Knoblauch",
        en: "Roasted eggplant purée, sesame tahini, extra virgin olive oil, and garlic"
      },
      price: "€ 10,90"
    },
    {
      id: "wine-teller",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["signature"],
      name: { de: "Wine Teller (für 2 Personen)", en: "Wine Aperitivo Platter (for 2)" },
      desc: {
        de: "Feiner Prosciutto, Salami, selektierte Käsevariation, knusprige Grissini und frische Früchte",
        en: "Fine Prosciutto, salami, artisanal cheese selection, crunchy grissini, and fresh fruits"
      },
      price: "€ 14,90"
    },
    {
      id: "feigensalat",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["veg", "signature"],
      badge: { de: "Favorit", en: "Favorite" },
      name: { de: "Französischer Feigensalat mit Ziegenkäse", en: "French Fig & Goat Cheese Salad" },
      desc: {
        de: "Rucola oder gemischter Salat, frische Feige, geröstete Nüsse, Tomaten, Ziegenkäse und Zitrus-Dressing",
        en: "Arugula or mixed greens, fresh fig, toasted nuts, tomatoes, goat cheese, and citrus vinaigrette"
      },
      price: "€ 10,90"
    },
    {
      id: "california-paprika",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["veg"],
      name: { de: "California Paprika", en: "California Roasted Pepper Salad" },
      desc: {
        de: "Geröstete Paprika, reife Avocado, Feta, knackiger Blattsalat, Oliven und Tomaten",
        en: "Roasted bell peppers, ripe avocado, feta cheese, crisp leaf salad, olives, and tomatoes"
      },
      price: "€ 9,90"
    },
    {
      id: "bruschetta-al-pomodoro",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: ["veg"],
      name: { de: "Bruschetta al Pomodoro / Salsa Avocado", en: "Bruschetta al Pomodoro / Salsa Avocado" },
      desc: {
        de: "Geröstetes Ciabatta-Brot mit Tomaten, Knoblauch & Grünöl (€ 6,50) oder mit Avocado & roter Zwiebel (€ 8,90)",
        en: "Toasted ciabatta with tomatoes, garlic & herb oil (€ 6.50) or with fresh avocado & red onion (€ 8.90)"
      },
      price: "€ 6,50"
    },
    {
      id: "letscho-suppe",
      locations: ["hinterbruehl"],
      category: "starters",
      tags: [],
      name: { de: "Hausgemachte Letscho-Suppe", en: "Homemade Letscho Pepper Soup" },
      desc: {
        de: "Wärmende, würzige Paprika-Tomaten-Suppe nach Hausrezept",
        en: "Warming, aromatic bell pepper and tomato soup made to our house recipe"
      },
      price: "€ 5,90"
    },

    // ================= SALADS & SAVORY BITES (MÖDLING) =================
    {
      id: "bruschetta-2-personen",
      locations: ["moedling", "hinterbruehl"],
      category: "salads_snacks",
      tags: ["signature"],
      badge: { de: "Für 2 Personen", en: "For 2 Guests" },
      name: { de: "Große Bruschetta-Variation (für 2 Personen)", en: "Grand Bruschetta Platter (for 2)" },
      desc: {
        de: "Mit Frischkäse, Prosciutto & Rucola oder vegan mit frischem Avocadopüree, Tomaten, Basilikum & Rucola",
        en: "With cream cheese, Prosciutto & arugula or vegan with fresh avocado mash, tomatoes, basil & arugula"
      },
      price: "€ 20,90"
    },
    {
      id: "sommer-salat-moedling",
      locations: ["moedling"],
      category: "salads_snacks",
      tags: ["veg", "bio"],
      name: { de: "Sommer Salat mit Erdbeeren & Minze", en: "Summer Salad with Strawberries & Mint" },
      desc: {
        de: "Rucola oder gemischter Salat, frische Erdbeeren, Minze, Nüsse, Tomaten und Balsamico-Dressing",
        en: "Arugula or mixed greens, fresh strawberries, mint, nuts, tomatoes, and balsamic dressing"
      },
      price: "€ 9,90"
    },
    {
      id: "fitness-salat-moedling",
      locations: ["moedling", "hinterbruehl"],
      category: "salads_snacks",
      tags: ["veg", "bio"],
      name: { de: "Fitness Salat", en: "Fitness Avocado & Apple Salad" },
      desc: {
        de: "Frischer Rucola, knackige Äpfel, geröstete Nüsse, Avocado-Scheiben und Balsamico-Dressing",
        en: "Fresh arugula, crisp apples, toasted nuts, avocado slices, and balsamic dressing"
      },
      price: "€ 9,90"
    },
    {
      id: "mediterranean-salat-moedling",
      locations: ["moedling", "hinterbruehl"],
      category: "salads_snacks",
      tags: [],
      name: { de: "Mediterranean Salat", en: "Mediterranean Prosciutto Salad" },
      desc: {
        de: "Rucola und gemischter Salat, Büffelmozzarella, feiner Prosciutto, Tomaten und Balsamico-Dressing",
        en: "Arugula and mixed greens, mozzarella, fine Prosciutto, tomatoes, and balsamic dressing"
      },
      price: "€ 11,90"
    },

    // ================= PASTA, RISOTTO & MAINS (HINTERBRÜHL) =================
    {
      id: "steak-au-poivre",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: ["signature"],
      badge: { de: "Signature Dish", en: "Signature Dish" },
      name: { de: "Steak au Poivre", en: "Steak au Poivre" },
      desc: {
        de: "Zartes Rindersteak mit klassisch französischer Pfeffersauce, Rosmarinkartoffeln und buntem Grillgemüse",
        en: "Tender beef steak with classic French peppercorn sauce, roasted potatoes, and grilled vegetables"
      },
      price: "€ 27,90"
    },
    {
      id: "lachs-provencale",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: ["signature"],
      badge: { de: "Französisch", en: "French Classic" },
      name: { de: "Lachs à la Provençale", en: "Salmon à la Provençale" },
      desc: {
        de: "Gebratenes Lachsfilet auf Kräuter-Gemüse-Couscous, verfeinert mit cremiger Dashi-Sauce",
        en: "Pan-seared salmon fillet on herbed vegetable couscous, finished with creamy dashi velouté"
      },
      price: "€ 19,90"
    },
    {
      id: "tagliata-di-manzo",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: [],
      name: { de: "Tagliata di Manzo", en: "Tagliata di Manzo" },
      desc: {
        de: "Tranchiertes Rinderfilet auf frischem Rucola mit Kirschtomaten und gehobeltem Parmesankäse",
        en: "Sliced beef tenderloin on fresh arugula with cherry tomatoes and shaved Parmesan"
      },
      price: "€ 22,90"
    },
    {
      id: "risotto-ai-funghi",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: ["veg", "signature"],
      badge: { de: "Mit Trüffel", en: "With Truffle" },
      name: { de: "Risotto ai Funghi & Trüffel", en: "Truffle & Wild Mushroom Risotto" },
      desc: {
        de: "Cremiges Risotto mit frischen Champignons, gereiftem Parmesan und edler Trüffelnote",
        en: "Creamy risotto with fresh mushrooms, aged Parmesan, and aromatic black truffle"
      },
      price: "€ 15,90"
    },
    {
      id: "weiss-burger",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: ["signature"],
      name: { de: "Weiß Burger", en: "Signature Weiß Burger" },
      desc: {
        de: "Saftiger Haus-Burger im Brioche-Bun mit karamellisierten Zwiebeln, Salat, Haus-Sauce und Beilage",
        en: "Juicy house burger in a toasted brioche bun with caramelized onions, crisp greens, house sauce & side"
      },
      price: "€ 17,90"
    },
    {
      id: "pork-alla-griglia",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: [],
      name: { de: "Pork alla Griglia", en: "Grilled Pork Tenderloin" },
      desc: {
        de: "Zart gegrilltes Schweinefilet serviert mit Kartoffeln oder Reis und mediterranem Grillgemüse",
        en: "Tender grilled pork fillet served with potatoes or rice and Mediterranean grilled vegetables"
      },
      price: "€ 21,90"
    },
    {
      id: "pollo-alla-griglia",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: [],
      name: { de: "Pollo alla Griglia", en: "Grilled Chicken Fillet" },
      desc: {
        de: "Saftig gegrilltes Hühnerfilet mit Rosmarinkartoffeln oder feinem Reis",
        en: "Juicy grilled chicken breast fillet served with rosemary potatoes or rice"
      },
      price: "€ 16,90"
    },
    {
      id: "pasta-carbonara",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: [],
      name: { de: "Pasta Carbonara", en: "Artisan Pasta Carbonara" },
      desc: {
        de: "Knuspriger Speck, gereifter Parmesan, frisches Ei und frisch gemahlener schwarzer Pfeffer",
        en: "Crispy guanciale/bacon, aged Parmesan, farm egg yolk, and freshly cracked black pepper"
      },
      price: "€ 15,90"
    },
    {
      id: "pasta-bolognese",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: [],
      name: { de: "Pasta Bolognese", en: "Classic Pasta Bolognese" },
      desc: {
        de: "Langsam geschmortes Rindfleisch-Ragù in aromatischer Tomatensauce mit Knoblauch und Parmesan",
        en: "Slow-simmered beef ragù in aromatic tomato sauce with garlic and aged Parmesan"
      },
      price: "€ 13,90"
    },
    {
      id: "penne-arrabbiata",
      locations: ["hinterbruehl"],
      category: "mains",
      tags: ["veg"],
      name: { de: "Penne all’Arrabbiata", en: "Penne all’Arrabbiata" },
      desc: {
        de: "Fruchtige Tomatensauce, frische Petersilie, Knoblauch, Peperoncino und Parmesan",
        en: "Vibrant tomato sauce, fresh parsley, garlic, chili peperoncino, and Parmesan"
      },
      price: "€ 11,90"
    },

    // ================= PATISSERIE & DESSERTS =================
    {
      id: "creme-brulee",
      locations: ["hinterbruehl"],
      category: "desserts",
      tags: ["veg", "signature"],
      badge: { de: "Hausgemacht", en: "House-Made" },
      name: { de: "Hausgemachte Crème Brûlée", en: "Homemade Vanilla Crème Brûlée" },
      desc: {
        de: "Französische Vanillecreme mit frisch karamellisierter, knuspriger Zuckerkruste",
        en: "Classic French vanilla bean custard with a freshly torched caramelized sugar crust"
      },
      price: "€ 7,90"
    },
    {
      id: "eclair-macarons",
      locations: ["hinterbruehl", "moedling"],
      category: "desserts",
      tags: ["veg", "signature"],
      badge: { de: "Patisserie", en: "Patisserie" },
      name: { de: "Französisches Éclair & Macarons", en: "French Éclair & Artisanal Macarons" },
      desc: {
        de: "Feines französisches Éclair (€ 3,90), zarte Macarons (€ 2,10) oder Wiener Punschkrapferln (€ 2,40)",
        en: "Delicate French éclair (€ 3.90), crisp macarons (€ 2.10), or traditional Viennese punch cakes (€ 2.40)"
      },
      price: "ab € 2,10"
    },
    {
      id: "torte-vitrine",
      locations: ["hinterbruehl", "moedling"],
      category: "desserts",
      tags: ["veg", "bio"],
      name: { de: "Torten & Kuchen aus unserer Vitrine", en: "Cakes & Tarts from our Vitrine" },
      desc: {
        de: "Täglich wechselndes, umfangreiches Sortiment an hausgemachten Torten und Mehlspeisen (auch vegan & glutenfrei)",
        en: "Daily rotating selection of homemade cakes and Austrian-French pastries (vegan & gluten-free options available)"
      },
      price: "€ 5,90"
    },
    {
      id: "coppa-eisbecher",
      locations: ["hinterbruehl", "moedling"],
      category: "desserts",
      tags: ["veg"],
      name: { de: "Bananen Split · Coppa Nutella · Coppa Frutta", en: "Banana Split · Coppa Nutella · Coppa Frutta" },
      desc: {
        de: "Drei Kugeln feines Speiseeis mit frischen Früchten oder Bananen, Schlagobers und feiner Sauce",
        en: "Three scoops of artisan gelato with fresh fruits or banana, whipped cream, and signature sauce"
      },
      price: "je € 9,60"
    },
    {
      id: "bio-eis-moedling",
      locations: ["moedling"],
      category: "desserts",
      tags: ["veg", "bio"],
      name: { de: "Bio-Eis im Stanitzel oder Becher", en: "Artisan Gelato (1, 2 or 3 Scoops)" },
      desc: {
        de: "1 Kugel € 2,00 · 2 Kugeln € 3,80 · 3 Kugeln € 5,60 – wenig Zucker, voller Genuss",
        en: "1 scoop € 2.00 · 2 scoops € 3.80 · 3 scoops € 5.60 – low sugar, full natural flavor"
      },
      price: "ab € 2,00"
    },

    // ================= COFFEE & TEA =================
    {
      id: "wiener-melange",
      locations: ["hinterbruehl", "moedling"],
      category: "coffee",
      tags: ["veg", "bio", "signature"],
      badge: { de: "100% Bio", en: "100% Organic" },
      name: { de: "Melange / Wiener Melange", en: "Melange / Viennese Melange" },
      desc: {
        de: "Klassische Melange mit feinem Milchschaum (€ 5,50) oder Wiener Melange mit Schlagobershaube (€ 6,00)",
        en: "Classic Viennese Melange with velvety milk foam (€ 5.50) or topped with whipped cream (€ 6.00)"
      },
      price: "€ 5,50"
    },
    {
      id: "vanilla-raf",
      locations: ["hinterbruehl", "moedling"],
      category: "coffee",
      tags: ["veg", "bio", "signature"],
      badge: { de: "Barista Tip", en: "Barista Tip" },
      name: { de: "Vanilla Raf Coffee", en: "Vanilla Raf Coffee" },
      desc: {
        de: "Samtiger Espresso, gemeinsam aufgeschäumt mit flüssigem Schlagobers und echter Vanille",
        en: "Velvety espresso steamed together with cream and real bourbon vanilla extract"
      },
      price: "€ 6,00"
    },
    {
      id: "cappuccino-flatwhite",
      locations: ["hinterbruehl", "moedling"],
      category: "coffee",
      tags: ["veg", "bio"],
      name: { de: "Cappuccino · Flat White · Caffè Latte", en: "Cappuccino · Flat White · Caffè Latte" },
      desc: {
        de: "Cappuccino (€ 5,00), Caffè Latte / Latte Macchiato (€ 5,30) oder kräftiger Flat White (€ 5,50) – auch mit Hafer-/Pflanzenmilch",
        en: "Cappuccino (€ 5.00), Caffè Latte / Latte Macchiato (€ 5.30), or double-shot Flat White (€ 5.50) – oat/plant milk available"
      },
      price: "€ 5,00"
    },
    {
      id: "espresso-brauner",
      locations: ["hinterbruehl", "moedling"],
      category: "coffee",
      tags: ["veg", "bio"],
      name: { de: "Espresso · Kleiner & Großer Brauner · Einspänner", en: "Espresso · Kleiner & Großer Brauner · Einspänner" },
      desc: {
        de: "Espresso (€ 3,50), Kleiner Brauner (€ 4,00), Großer Brauner (€ 5,30), Einspänner mit Schlagobers (€ 5,50)",
        en: "Espresso (€ 3.50), Kleiner Brauner (€ 4.00), Großer Brauner (€ 5.30), Einspänner with whipped cream (€ 5.50)"
      },
      price: "ab € 3,50"
    },
    {
      id: "iced-matcha-affogato",
      locations: ["hinterbruehl", "moedling"],
      category: "coffee",
      tags: ["veg", "bio"],
      name: { de: "Café Affogato · Eiskaffee · Iced Matcha Latte", en: "Café Affogato · Viennese Iced Coffee · Iced Matcha" },
      desc: {
        de: "Café Affogato mit Vanilleeis (€ 5,50), Iced Matcha / Iced Chai (€ 6,50, auf Wunsch mit Mango-/Beerenpüree) oder Eiskaffee (€ 7,90)",
        en: "Café Affogato with vanilla gelato (€ 5.50), Iced Matcha / Iced Chai (€ 6.50, optional fruit purée) or Eiskaffee (€ 7.90)"
      },
      price: "ab € 5,50"
    },
    {
      id: "hausgemachter-tee",
      locations: ["hinterbruehl", "moedling"],
      category: "coffee",
      tags: ["veg", "bio", "signature"],
      badge: { de: "Hausgemacht", en: "House-Made" },
      name: { de: "Hausgemachter Ingwer-Beeren- & Orangen-Tee", en: "Homemade Fresh Ginger, Berry & Orange Teas" },
      desc: {
        de: "Frischer Ingwer mit Zitrone & Nelken (€ 5,90) oder verfeinert mit Orangen-, Himbeer- oder Erdbeerpüree & Zimt (€ 6,90)",
        en: "Fresh ginger with lemon & cloves (€ 5.90) or infused with orange, raspberry, or strawberry purée & cinnamon (€ 6.90)"
      },
      price: "€ 5,90"
    },

    // ================= DRINKS, WINE & APERITIFS =================
    {
      id: "hausgemachte-limonade",
      locations: ["hinterbruehl", "moedling"],
      category: "drinks",
      tags: ["veg", "bio", "signature"],
      badge: { de: "Erfrischend", en: "Refreshing" },
      name: { de: "Hausgemachte Limonade (0,5L)", en: "Homemade Artisan Lemonade (0.5L)" },
      desc: {
        de: "Wahlweise Himbeere-Holunder oder exotische Maracuja-Mango mit frischer Minze und Beeren",
        en: "Choice of Raspberry-Elderflower or exotic Passionfruit-Mango with fresh mint and berries"
      },
      price: "€ 7,50"
    },
    {
      id: "frisch-gepresste-saefte",
      locations: ["hinterbruehl", "moedling"],
      category: "drinks",
      tags: ["veg", "bio"],
      name: { de: "Frisch gepresste Säfte (0,25L)", en: "Freshly Cold-Pressed Juices (0.25L)" },
      desc: {
        de: "100% frisch gepresster Orangensaft oder Vital-Mix aus Karotte, Apfel & Ingwer",
        en: "100% freshly squeezed orange juice or vitality blend of carrot, apple & ginger"
      },
      price: "€ 6,00"
    },
    {
      id: "aperol-lillet-hugo",
      locations: ["hinterbruehl", "moedling"],
      category: "drinks",
      tags: ["veg"],
      name: { de: "Aperol Spritz · Lillet Rosé/Blanc · Hugo · Limoncello Spritz", en: "Aperol Spritz · Lillet Rosé/Blanc · Hugo · Limoncello Spritz" },
      desc: {
        de: "Klassische Sommer- & Abend-Aperitifs auf Eis serviert (€ 6,50) oder erfrischender Mojito (€ 8,50)",
        en: "Classic summer and evening aperitifs served over ice (€ 6.50) or fresh mint Mojito (€ 8.50)"
      },
      price: "€ 6,50"
    },
    {
      id: "prosecco-wein-spritzer",
      locations: ["hinterbruehl", "moedling"],
      category: "drinks",
      tags: ["veg"],
      name: { de: "Prosecco Mionetto · Österreichische Weine · Kaiserspritzer", en: "Prosecco Mionetto · Austrian Wines · Spritzer" },
      desc: {
        de: "Prosecco 0,1L (€ 4,90), Prosecco Rosé (€ 5,90), Rot-/Weißwein 1/8L (€ 4,50), Weißer Spritzer (€ 4,80)",
        en: "Prosecco 0.1L (€ 4.90), Prosecco Rosé (€ 5.90), Red/White Wine 1/8L (€ 4.50), Viennese Wine Spritzer (€ 4.80)"
      },
      price: "ab € 4,50"
    },
    {
      id: "tschoeams-craft-bier",
      locations: ["moedling"],
      category: "drinks",
      tags: ["bio", "signature"],
      badge: { de: "Lokal aus Mödling", en: "Local Mödling Brew" },
      name: { de: "TSCHÖAM’S Mödlinger Craft Bier (0,33L)", en: "TSCHÖAM’S Local Mödling Craft Beer (0.33L)" },
      desc: {
        de: "Mödlinger Helles, Wiener Wunder, Citra Pale Ale, New England IPA oder Hopfenheiter IPA",
        en: "Mödlinger Helles, Wiener Wunder, Citra Pale Ale, New England IPA, or Hopfenheiter IPA"
      },
      price: "€ 4,90"
    }
  ],

  i18n: {
    de: {
      "nav.locations": "Unsere Cafés",
      "nav.story": "Philosophie",
      "nav.menu": "Speisekarte",
      "nav.events": "Veranstaltungen",
      "nav.chalet": "Chalet Weiß",
      "nav.careers": "Karriere",
      "nav.reserve": "Tisch reservieren",

      "hero.eyebrow": "Französisches Café & Restaurant · Seit 2020",
      "hero.title": "Willkommen im <em>Café Weiss</em>",
      "hero.subtitle": "Hinterbrühl & Mödling · 100% Bio-Kaffee, französische Küche & Patisserie",
      "hero.cta.lunch": "🍽️ Mittagsmenü (Di–Fr)",
      "hero.cta.menu": "Speisekarte",
      "hero.cta.reserve": "📅 Tisch reservieren",
      "hero.switch.label": "Standort wählen:",
      "hero.status.open": "Jetzt geöffnet",
      "hero.status.closed": "Derzeit geschlossen",
      "hero.directions": "Route",

      "strip.bio": "100% Bio-Kaffee & Bio-Produkte",
      "strip.locations": "2 Standorte: Hinterbrühl & Mödling",
      "strip.lunch": "Di – Fr Mittagsmenü ab € 10,90",
      "strip.events": "Hochzeiten, Feiern & historische Räume",

      "locations.eyebrow": "Zwei besondere Orte",
      "locations.title": "Unsere Häuser in <em>Hinterbrühl</em> & <em>Mödling</em>",
      "locations.subtitle": "Restaurant nahe der Seegrotte Hinterbrühl & Kaffeehaus aus 1607 in Mödling.",
      "locations.btn.menu": "Menü öffnen",
      "locations.btn.route": "Route",
      "locations.btn.book": "Reservieren",

      "story.eyebrow": "Unsere Philosophie",
      "story.title": "Französischer Charme, mit <em>Herz gekocht</em>",
      "story.p1": "Im Café Weiss verbinden wir französische Kaffeehauskultur mit frisch gekochter Küche, 100% Bio-Kaffee und hausgemachter Patisserie – vom Frühstück über das Mittagsmenü bis zum Dinner.",
      "story.p2": "",
      "story.p3": "",
      "story.quote": "„Geschmack, Ausgewogenheit und 100% Bio-Qualität auf jedem Teller.“",
      "story.stat1.num": "2020",
      "story.stat1.label": "Gegründet",
      "story.stat2.num": "100%",
      "story.stat2.label": "Bio-Qualität",
      "story.stat3.num": "7 Tage",
      "story.stat3.label": "Täglich geöffnet",

      "menu.eyebrow": "Kulinarik & Patisserie",
      "menu.title": "Unsere <em>Speisekarte</em>",
      "menu.subtitle": "Interaktive Speisekarte & Original-Karten beider Standorte.",
      "menu.loc.hinterbruehl": "Hinterbrühl",
      "menu.loc.hb.sub": "Restaurant & Mittagsmenü",
      "menu.loc.moedling": "Mödling",
      "menu.loc.md.sub": "Kaffeehaus 1607",
      "menu.btn.original": "Original-Speisekarte (Fotos)",
      "lunch.badge": "DIENSTAG – FREITAG · 11:00 – 15:00 UHR",
      "lunch.2course.name": "2-Gänge-Menü",
      "lunch.2course.desc": "Hauptspeise & Dessert",
      "lunch.3course.name": "3-Gänge-Menü",
      "lunch.3course.desc": "Suppe, Hauptspeise & Dessert",
      "lunch.week.active": "Aktuelle Woche",
      "lunch.week.upcoming": "Vorschau",
      "lunch.admin.btn": "Wochenmenü planen",
      "menu.search.placeholder": "Gericht suchen (z.B. Croissant, Lachs)…",
      "menu.filter.all": "Alle",
      "menu.filter.signature": "Favoriten",
      "menu.filter.veg": "Vegetarisch",
      "menu.filter.bio": "Bio",
      "menu.vitrine.note": "Täglich frische Kuchen & Torten in unserer Vitrine · 100% Bio-Produkte.",
      "menu.allergens.note": "",

      "events.eyebrow": "Private Feiern & Events",
      "events.title": "Besondere Momente <em>feiern</em>",
      "events.subtitle": "Hochzeiten, Geburtstage, Taufen & Firmenfeiern in Hinterbrühl und Mödling.",
      "events.space1.tag": "Hinterbrühl",
      "events.space1.title": "Kronleuchter-Salon & Festsaal",
      "events.space1.desc": "Kristalllüster, festliche Tafeln & individuelle Menüs.",
      "events.space1.cap": "Flexibel für Gesellschaften & Feiern",
      "events.space2.tag": "Mödling · 1607",
      "events.space2.title": "Historisches Gewölbe (1607)",
      "events.space2.desc": "Intimer Gewölberaum im französischen Stil für Feiern im engen Kreis.",
      "events.space2.cap": "Bis 20 Plätze · Vorab-Reservierung",
      "events.space3.tag": "Mödling · Zentrum",
      "events.space3.title": "Sonnenterrasse am Rathaus",
      "events.space3.desc": "Großzügige Terrasse in der Fußgängerzone mit Rathaus-Blick.",
      "events.space3.cap": "Bis 40 Plätze · Vorab-Reservierung",
      "events.cta": "Event anfragen",

      "chalet.eyebrow": "Urlaub & Mobilität",
      "chalet.title": "Chalet Weiß & <em>Mietwagen</em>",
      "chalet.desc": "Alpiner Urlaub im Chalet Weiß & direkter Mietwagen-Service ab Café Weiss.",
      "chalet.perk1": "Fahrzeugübernahme direkt beim Café Weiss",
      "chalet.perk2": "Flexible Tages- & Wochenendtarife",
      "chalet.perk3": "Alpiner Rückzugsort im Chalet Weiß",
      "chalet.btn.web": "Chalet Weiß Webseite",
      "chalet.btn.car": "Mietwagen anfragen",

      "reserve.eyebrow": "Reservierung",
      "reserve.title": "Tisch & Event <em>reservieren</em>",
      "reserve.subtitle": "Direkt online oder per WhatsApp reservieren.",
      "reserve.tab.table": "Tisch reservieren",
      "reserve.tab.event": "Event-Anfrage",
      "reserve.form.location": "Standort auswählen",
      "reserve.form.name": "Ihr Name *",
      "reserve.form.phone": "Telefonnummer *",
      "reserve.form.email": "E-Mail-Adresse",
      "reserve.form.date": "Datum *",
      "reserve.form.time": "Uhrzeit *",
      "reserve.form.guests": "Anzahl Personen *",
      "reserve.form.area": "Bereich / Wunschplatz",
      "reserve.area.indoor": "Innenbereich / Salon",
      "reserve.area.terrace": "Sonnenterrasse",
      "reserve.area.historic": "Historischer Raum 1607 (Mödling)",
      "reserve.area.banquet": "Festsaal (Hinterbrühl)",
      "reserve.form.occasion": "Anlass der Veranstaltung",
      "reserve.occ.table": "Café- / Restaurantbesuch",
      "reserve.occ.birthday": "Geburtstagsfeier",
      "reserve.occ.wedding": "Hochzeit / Empfang",
      "reserve.occ.corporate": "Firmenfeier / Business",
      "reserve.occ.baptism": "Taufe / Familienfeier",
      "reserve.occ.car": "Mietwagen-Anfrage",
      "reserve.form.notes": "Besondere Wünsche",
      "reserve.btn.submit": "Anfrage senden",
      "reserve.btn.whatsapp": "Per WhatsApp reservieren",
      "reserve.direct.title": "Direkter Kontakt",
      "reserve.direct.desc": "Für heute am schnellsten telefonisch:",

      "careers.eyebrow": "Team Café Weiss",
      "careers.title": "Karriere im <em>Café Weiss</em>",
      "careers.desc": "Wir suchen Verstärkung in Service und Küche (Hinterbrühl & Mödling).",
      "careers.perk1.title": "Flexible Zeiten",
      "careers.perk1.desc": "Vollzeit, Teilzeit oder geringfügig.",
      "careers.perk2.title": "Quereinsteiger willkommen",
      "careers.perk2.desc": "Herzliche Einschulung direkt im Team.",
      "careers.perk3.title": "Faire Bezahlung",
      "careers.perk3.desc": "Gutes Trinkgeld & freie Verpflegung.",
      "careers.btn": "Per E-Mail bewerben",

      "footer.tagline": "Französisches Restaurant & Kaffeehaus in Hinterbrühl und Mödling · 100% Bio-Qualität.",
      "footer.rights": "Alle Rechte vorbehalten.",
      "quick.call": "Anrufen",
      "hero.lunch.cta": "Zum Tagesmenü →",
      "tab.locations": "Cafés",
      "tab.lunch": "Mittagsmenü",
      "tab.menu": "Speisen",
      "tab.reserve": "Tisch",
      "tab.call": "Anruf",
      "loc.tab.hb.sub": "Restaurant & Mittagsmenü",
      "loc.tab.md.sub": "Kaffeehaus & Terrasse"
    },
    en: {
      "nav.locations": "Our Cafés",
      "nav.story": "Philosophy",
      "nav.menu": "Menu",
      "nav.events": "Events",
      "nav.chalet": "Chalet Weiß",
      "nav.careers": "Careers",
      "nav.reserve": "Book a Table",

      "hero.eyebrow": "French Café & Restaurant · Since 2020",
      "hero.title": "Welcome to <em>Café Weiss</em>",
      "hero.subtitle": "Hinterbrühl & Mödling · 100% Organic Coffee, French Cuisine & Patisserie",
      "hero.cta.lunch": "🍽️ Daily Lunch Menu",
      "hero.cta.menu": "Full Menu",
      "hero.cta.reserve": "📅 Book a Table",
      "hero.switch.label": "Select Location:",
      "hero.status.open": "Open Now",
      "hero.status.closed": "Currently Closed",
      "hero.directions": "Directions",

      "strip.bio": "100% Organic Coffee & Ingredients",
      "strip.locations": "2 Locations: Hinterbrühl & Mödling",
      "strip.lunch": "Tue – Fri Lunch Menu from € 10.90",
      "strip.events": "Weddings, Celebrations & Historic Rooms",

      "locations.eyebrow": "Two Distinct Destinations",
      "locations.title": "Our Houses in <em>Hinterbrühl</em> & <em>Mödling</em>",
      "locations.subtitle": "Restaurant near Seegrotte Hinterbrühl & 1607 Coffeehouse in Mödling.",
      "locations.btn.menu": "Open Menu",
      "locations.btn.route": "Directions",
      "locations.btn.book": "Reserve",

      "story.eyebrow": "Our Philosophy",
      "story.title": "French Charm, <em>Cooked from the Heart</em>",
      "story.p1": "At Café Weiss we blend French coffeehouse culture with freshly cooked cuisine, 100% organic coffee, and homemade patisserie — from breakfast and daily lunch to dinner.",
      "story.p2": "",
      "story.p3": "",
      "story.quote": "“Authentic flavor, harmony, and 100% organic quality on every plate.”",
      "story.stat1.num": "2020",
      "story.stat1.label": "Founded",
      "story.stat2.num": "100%",
      "story.stat2.label": "Organic Quality",
      "story.stat3.num": "7 Days",
      "story.stat3.label": "Open Daily",

      "menu.eyebrow": "Gastronomy & Patisserie",
      "menu.title": "Our <em>Culinary Menu</em>",
      "menu.subtitle": "Interactive menu & printed menu gallery for both locations.",
      "menu.loc.hinterbruehl": "Hinterbrühl",
      "menu.loc.hb.sub": "Restaurant & Lunch Menu",
      "menu.loc.moedling": "Mödling",
      "menu.loc.md.sub": "Coffeehouse 1607",
      "menu.btn.original": "Printed Menu Pages (Photos)",
      "lunch.badge": "TUESDAY – FRIDAY · 11:00 – 15:00",
      "lunch.2course.name": "2-Course Menu",
      "lunch.2course.desc": "Main Course & Dessert",
      "lunch.3course.name": "3-Course Menu",
      "lunch.3course.desc": "Soup, Main & Dessert",
      "lunch.week.active": "Current Week",
      "lunch.week.upcoming": "Upcoming",
      "lunch.admin.btn": "Schedule Weekly Menu",
      "menu.search.placeholder": "Search dish (e.g. Croissant, Salmon)…",
      "menu.filter.all": "All",
      "menu.filter.signature": "Favorites",
      "menu.filter.veg": "Vegetarian",
      "menu.filter.bio": "Organic",
      "menu.vitrine.note": "Fresh daily homemade cakes & tarts in our vitrine · 100% organic ingredients.",
      "menu.allergens.note": "",

      "events.eyebrow": "Private Events & Venues",
      "events.title": "Celebrate <em>Special Moments</em>",
      "events.subtitle": "Weddings, birthdays, baptisms & corporate dinners in Hinterbrühl and Mödling.",
      "events.space1.tag": "Hinterbrühl",
      "events.space1.title": "Chandelier Salon & Banquet Room",
      "events.space1.desc": "Crystal chandeliers, festive tables & tailored multi-course menus.",
      "events.space1.cap": "Flexible for private celebrations",
      "events.space2.tag": "Mödling · 1607",
      "events.space2.title": "Historic Vaulted Room (1607)",
      "events.space2.desc": "Intimate historic 1607 room in French style for private gatherings.",
      "events.space2.cap": "Up to 20 seats · Advance booking",
      "events.space3.tag": "Mödling · Center",
      "events.space3.title": "Sunny Town Hall Terrace",
      "events.space3.desc": "Spacious pedestrian-zone terrace overlooking the historic Town Hall.",
      "events.space3.cap": "Up to 40 seats · Advance booking",
      "events.cta": "Inquire About Event",

      "chalet.eyebrow": "Retreat & Mobility",
      "chalet.title": "Chalet Weiß & <em>Car Rental</em>",
      "chalet.desc": "Alpine retreat at Chalet Weiß & direct car rental pickup at Café Weiss.",
      "chalet.perk1": "Direct vehicle pickup at Café Weiss",
      "chalet.perk2": "Flexible daily & weekend rates",
      "chalet.perk3": "Alpine relaxation at Chalet Weiß",
      "chalet.btn.web": "Chalet Weiß Website",
      "chalet.btn.car": "Car Rental Inquiry",

      "reserve.eyebrow": "Reservations",
      "reserve.title": "Book a Table <em>or Event</em>",
      "reserve.subtitle": "Reserve directly online or via WhatsApp.",
      "reserve.tab.table": "Book a Table",
      "reserve.tab.event": "Event Inquiry",
      "reserve.form.location": "Choose Location",
      "reserve.form.name": "Your Name *",
      "reserve.form.phone": "Phone Number *",
      "reserve.form.email": "Email Address",
      "reserve.form.date": "Date *",
      "reserve.form.time": "Time *",
      "reserve.form.guests": "Number of Guests *",
      "reserve.form.area": "Preferred Seating Area",
      "reserve.area.indoor": "Indoor Dining / Salon",
      "reserve.area.terrace": "Outdoor Terrace",
      "reserve.area.historic": "Historic 1607 Room (Mödling)",
      "reserve.area.banquet": "Chandelier Banquet Room (Hinterbrühl)",
      "reserve.form.occasion": "Occasion",
      "reserve.occ.table": "Café / Restaurant Visit",
      "reserve.occ.birthday": "Birthday Celebration",
      "reserve.occ.wedding": "Wedding / Reception",
      "reserve.occ.corporate": "Corporate Dinner",
      "reserve.occ.baptism": "Baptism / Family Event",
      "reserve.occ.car": "Car Rental Inquiry",
      "reserve.form.notes": "Special Requests",
      "reserve.btn.submit": "Send Request",
      "reserve.btn.whatsapp": "Reserve via WhatsApp",
      "reserve.direct.title": "Direct Contact",
      "reserve.direct.desc": "For same-day bookings, call us directly:",

      "careers.eyebrow": "Join Our Team",
      "careers.title": "Careers at <em>Café Weiss</em>",
      "careers.desc": "We are hiring service and kitchen team members in Hinterbrühl & Mödling.",
      "careers.perk1.title": "Flexible Hours",
      "careers.perk1.desc": "Full-time, part-time, or flexible shifts.",
      "careers.perk2.title": "Newcomers Welcome",
      "careers.perk2.desc": "Step-by-step training in our warm team.",
      "careers.perk3.title": "Fair Pay",
      "careers.perk3.desc": "Great tips & free staff meals.",
      "careers.btn": "Apply via Email",

      "footer.tagline": "French Restaurant & Coffeehouse in Hinterbrühl and Mödling · 100% Organic Quality.",
      "footer.rights": "All Rights Reserved.",
      "quick.call": "Call Us",
      "hero.lunch.cta": "Daily Lunch →",
      "tab.locations": "Cafés",
      "tab.lunch": "Lunch",
      "tab.menu": "Menu",
      "tab.reserve": "Reserve",
      "tab.call": "Call",
      "loc.tab.hb.sub": "Restaurant & Lunch Menu",
      "loc.tab.md.sub": "Coffeehouse & Terrace"
    }
  }
};

