// Café Weiss — Authentic Menu & Bilingual Content Database (DE / EN)
// Locations: Hinterbrühl (Hauptstraße 16, 2371) & Mödling (Herzoggasse 6, 2340)

window.CAFE_WEISS_DATA = {
  locations: {
    hinterbruehl: {
      id: "hinterbruehl",
      name: "Café Weiss Hinterbrühl",
      badge: {
        de: "Neues Restaurant & Café · Nahe der Seegrotte",
        en: "New Restaurant & Café · Near the Seegrotte"
      },
      shortTitle: {
        de: "Hinterbrühl · Restaurant & Café",
        en: "Hinterbrühl · Restaurant & Café"
      },
      title: {
        de: "Ein Hauch von Frankreich im Herzen von Hinterbrühl",
        en: "A Touch of France in the Heart of Hinterbrühl"
      },
      subtitle: {
        de: "Neue Location, mehr Plätze, mehr Natur nahe der Seegrotte. Französisch inspirierte Küche, ganztägiges Frühstück, Mittagsmenü und gemütliche Dinner-Abende.",
        en: "New location, more seating, more nature near the Seegrotte. French-inspired cuisine, all-day breakfast, lunch menus, and cozy dinner evenings."
      },
      address: "Hauptstraße 16, 2371 Hinterbrühl",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hauptstra%C3%9Fe+16,+2371+Hinterbr%C3%BChl,+Austria",
      phone: "+43 660 9840707",
      eventPhone: "+43 670 5078850",
      email: "cafeweiss.info@gmail.com",
      hours: {
        de: "Montag – Sonntag: 08:00 – 20:00 Uhr (Kein Ruhetag)",
        en: "Monday – Sunday: 08:00 – 20:00 (Open daily)"
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
        de: "Seit 2020 · Historisches Kaffeehaus im Zentrum",
        en: "Since 2020 · Historic Coffeehouse in the Center"
      },
      shortTitle: {
        de: "Mödling · Französisches Kaffeehaus",
        en: "Mödling · French Coffeehouse"
      },
      title: {
        de: "Französischer Kaffeehaus-Charme im Herzen von Mödling",
        en: "French Coffeehouse Charm in the Heart of Mödling"
      },
      subtitle: {
        de: "In einem historischen Gewölbe aus dem Jahr 1607 und auf unserer sonnigen Terrasse mit direktem Blick auf das Mödlinger Rathaus verwöhnen wir Sie mit 100% Bio-Kaffee, Frühstück und feiner Patisserie.",
        en: "Set in a historic vaulted room from 1607 with a sunny cobblestone terrace overlooking Mödling Town Hall, serving 100% organic coffee, breakfast, and artisan pastries."
      },
      address: "Herzoggasse 6, 2340 Mödling",
      mapsUrl: "https://share.google/LVHGprsLfb5v46MXj",
      phone: "+43 660 9840707",
      eventPhone: "+43 660 9840707",
      email: "cafeweiss.info@gmail.com",
      hours: {
        de: "Täglich: 08:00 – 19:00 Uhr (Ab Sept. bis 21:00 Uhr)",
        en: "Daily: 08:00 – 19:00 (Until 21:00 from September)"
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
      de: "Wöchentliches Mittagsmenü in Hinterbrühl",
      en: "Weekly Lunch Menu in Hinterbrühl"
    },
    schedule: {
      de: "Dienstag – Freitag · 11:00 – 15:00 Uhr · Auch vegetarisch erhältlich",
      en: "Tuesday – Friday · 11:00 – 15:00 · Vegetarian option available daily"
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

      "hero.eyebrow": "Französische Lebensart & Wiener Kaffeehauskultur · Seit 2020",
      "hero.title": "Ein Hauch von <em>Frankreich</em> in Hinterbrühl & Mödling",
      "hero.subtitle": "Wo aromatischer Bio-Kaffee, feine Patisserie und mit Herz gekochte französisch-mediterrane Küche auf unvergessliche Gastfreundschaft treffen.",
      "hero.cta.menu": "Speisekarte entdecken",
      "hero.cta.reserve": "Tisch & Event reservieren",
      "hero.switch.label": "Standort wählen:",
      "hero.status.open": "Jetzt geöffnet",
      "hero.status.closed": "Derzeit geschlossen",
      "hero.directions": "Route planen",

      "strip.bio": "100% Bio-Kaffee & Bio-Produkte",
      "strip.locations": "2 Standorte: Hinterbrühl & Mödling",
      "strip.lunch": "Di – Fr Mittagsmenü ab € 10,90",
      "strip.events": "Hochzeiten, Feiern & historische Räume",

      "locations.eyebrow": "Zwei besondere Orte",
      "locations.title": "Unsere Häuser in <em>Hinterbrühl</em> & <em>Mödling</em>",
      "locations.subtitle": "Wählen Sie Ihr Lieblingshaus – vom neuen Restaurant & Café nahe der Seegrotte Hinterbrühl bis zum charmanten Kaffeehaus aus 1607 im Herzen von Mödling.",
      "locations.btn.menu": "Menü öffnen",
      "locations.btn.route": "Route planen",
      "locations.btn.book": "Reservieren",

      "story.eyebrow": "Unsere Geschichte & Philosophie",
      "story.title": "Französischer Charme, mit <em>Herz gekocht</em>",
      "story.p1": "Unsere Geschichte lebt von einer einfachen Freude: Menschen bei gutem Essen zusammenzubringen. Im Café Weiss verbinden wir den Charme eines französisch inspirierten Cafés mit einer Küche, in der wir mit Herz und viel Liebe zu Geschmack und Qualität kochen.",
      "story.p2": "Uns inspiriert die französische Art, das Leben zu genießen: ein Kaffee in aller Ruhe, ein feines Dessert aus unserer Vitrine, ein Gespräch, das etwas länger dauern darf, und ein Abendessen, für das man sich bewusst Zeit nimmt.",
      "story.p3": "Am Morgen begrüßen wir Sie mit duftendem Bio-Kaffee und einem reichhaltigen Frühstück. Mittags erwarten Sie feine Gerichte und unser wöchentliches Mittagsmenü in Hinterbrühl. Und am Abend laden wir Sie ein, bei Steak au Poivre, Lachs à la Provençale und einem Glas Wein besondere Momente zu teilen.",
      "story.quote": "„Auf jedem Teller soll spürbar sein, was uns am Herzen liegt: Geschmack, Ausgewogenheit und Qualität.“",
      "story.stat1.num": "2020",
      "story.stat1.label": "Gegründet mit Leidenschaft",
      "story.stat2.num": "100%",
      "story.stat2.label": "Bio-Kaffee & Frische",
      "story.stat3.num": "7 Tage",
      "story.stat3.label": "Montag – Sonntag geöffnet",

      "menu.eyebrow": "Kulinarik & Patisserie",
      "menu.title": "Unsere <em>Speisekarte</em>",
      "menu.subtitle": "Entdecken Sie unsere Gerichte interaktiv oder blättern Sie durch die Original-Speisekarten beider Standorte.",
      "menu.loc.hinterbruehl": "Restaurant & Café Hinterbrühl",
      "menu.loc.hb.sub": "Frühstück · Brunch · Warme Küche · Mittagsmenü",
      "menu.loc.moedling": "Kaffeehaus Mödling",
      "menu.loc.md.sub": "Frühstück · Bio-Kaffee · Salate · Eis & Kuchen",
      "menu.btn.original": "Original-Speisekarte ansehen (Galerie)",
      "lunch.badge": "DIENSTAG – FREITAG · 11:00 – 15:00 UHR",
      "lunch.2course.name": "2-Gänge-Menü",
      "lunch.2course.desc": "Hauptspeise & Dessert",
      "lunch.3course.name": "3-Gänge-Menü",
      "lunch.3course.desc": "Suppe/Vorspeise, Hauptspeise & Dessert",
      "lunch.week.active": "Aktuelle Woche",
      "lunch.week.upcoming": "Vorschau",
      "lunch.admin.btn": "Wochenmenü bearbeiten & vorplanen",
      "menu.search.placeholder": "Gericht oder Zutat suchen (z.B. Croissant, Lachs, Matcha)…",
      "menu.filter.all": "Alle Speisen",
      "menu.filter.signature": "Signature & Favoriten",
      "menu.filter.veg": "Vegetarisch",
      "menu.filter.bio": "Bio",
      "menu.vitrine.note": "Hinweis aus unserer Küche: Da wir eine große Auswahl an frischem Fleisch, Fisch sowie hausgemachten Kuchen und Torten anbieten, laden wir Sie herzlich ein, auch einen Blick in unsere Vitrine vor Ort zu werfen.",
      "menu.allergens.note": "Wir verwenden ausschließlich hochwertige Bio-Produkte. Unser Team informiert Sie gerne über allergene Zutaten.",

      "events.eyebrow": "Ihr Event · Unser Raum",
      "events.title": "Wo besondere Momente <em>unvergesslich</em> werden",
      "events.subtitle": "Unsere Häuser in Hinterbrühl und Mödling stehen Ihnen von Montag bis Sonntag für Hochzeiten, Geburtstage, Taufen, Firmenfeiern und private Anlässe zur Verfügung.",
      "events.space1.tag": "Hinterbrühl · Nahe der Seegrotte",
      "events.space1.title": "Eleganter Festsaal & Kronleuchter-Salon",
      "events.space1.desc": "Stilvolles französisches Ambiente mit Kristalllüstern, fein gedeckten Tafeln und individueller Menübegleitung für Hochzeiten, Taufen, Familienfeiern und Firmenevents.",
      "events.space1.cap": "Flexibel für Gesellschaften & Feiern",
      "events.space2.tag": "Mödling · Historisches Gewölbe",
      "events.space2.title": "Historischer Innenraum aus dem Jahr 1607",
      "events.space2.desc": "Eine warme, intime Atmosphäre in einem echten historischen Gewölberaum aus dem Jahr 1607 – französisch eingerichtet, ideal für Geburtstage, Meetings oder Feiern im engen Kreis.",
      "events.space2.cap": "Kapazität: 20 Sitzplätze · Reservierung mind. 1 Woche vorab",
      "events.space3.tag": "Mödling · Herzoggasse 6",
      "events.space3.title": "Sonnenterrasse mit Rathaus-Blick",
      "events.space3.desc": "Unsere großzügige Terrasse im Herzen der Mödlinger Fußgängerzone bietet einen herrlichen Blick auf das historische Rathaus – perfekt für Empfänge, Sommerfeste und Hochzeiten.",
      "events.space3.cap": "Kapazität: 40 Sitzplätze · Reservierung mind. 1 Woche vorab",
      "events.cta": "Jetzt Event unverbindlich anfragen",

      "chalet.eyebrow": "Unser zweites Projekt & Mobilität",
      "chalet.title": "Chalet Weiß & <em>Mietwagen-Service</em>",
      "chalet.desc": "Entdecken Sie unser Schwesterprojekt Chalet Weiß in den österreichischen Bergen. Zusätzlich können unsere Gäste ab sofort direkt bei uns im Café Weiss ein Auto mieten, um den Wienerwald, die Seegrotte und die Umgebung komfortabel und flexibel zu erkunden.",
      "chalet.perk1": "Direkte Fahrzeugübernahme beim Café Weiss",
      "chalet.perk2": "Flexible Tages- & Wochenendtarife für Gäste",
      "chalet.perk3": "Erholung & alpiner Luxus im Chalet Weiß",
      "chalet.btn.web": "Zur Chalet-Weiß-Webseite",
      "chalet.btn.car": "Mietwagen anfragen",

      "reserve.eyebrow": "Reservierung & Kontakt",
      "reserve.title": "Wir freuen uns auf <em>Ihren Besuch</em>",
      "reserve.subtitle": "Reservieren Sie Ihren Tisch oder senden Sie uns Ihre Event-Anfrage. Wir melden uns umgehend bei Ihnen zur Bestätigung.",
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
      "reserve.occ.table": "Gemütlicher Café- / Restaurantbesuch",
      "reserve.occ.birthday": "Geburtstagsfeier",
      "reserve.occ.wedding": "Hochzeit / Standesamt-Empfang",
      "reserve.occ.corporate": "Firmenfeier / Business",
      "reserve.occ.baptism": "Taufe / Familienfeier",
      "reserve.occ.car": "Mietwagen-Anfrage",
      "reserve.form.notes": "Nachricht oder besondere Wünsche",
      "reserve.btn.submit": "Reservierungsanfrage senden",
      "reserve.btn.whatsapp": "Per WhatsApp reservieren",
      "reserve.direct.title": "Direkter Kontakt",
      "reserve.direct.desc": "Für kurzfristige Reservierungen am selben Tag erreichen Sie uns am schnellsten telefonisch.",

      "careers.eyebrow": "Werden Sie Teil der Familie",
      "careers.title": "Karriere im <em>Café Weiss</em>",
      "careers.desc": "Zur Verstärkung unseres herzlichen Teams in Hinterbrühl und Mödling suchen wir ab sofort engagierte Mitarbeiter/innen in Service und Küche.",
      "careers.perk1.title": "Flexible Arbeitszeiten",
      "careers.perk1.desc": "Vollzeit, Teilzeit oder geringfügig – abgestimmt auf Ihren Lebensrhythmus.",
      "careers.perk2.title": "Keine Erfahrung erforderlich",
      "careers.perk2.desc": "Wir schulen Sie herzlich und Schritt für Schritt in unserem Team ein.",
      "careers.perk3.title": "Faire & pünktliche Bezahlung",
      "careers.perk3.desc": "Wertschätzendes Arbeitsklima, gutes Trinkgeld und freie Verpflegung.",
      "careers.btn": "Jetzt per E-Mail bewerben",

      "footer.tagline": "Französisches Restaurant & Kaffeehaus in Hinterbrühl und Mödling. Mit Liebe zu Geschmack, Bio-Qualität und echter Gastfreundschaft.",
      "footer.rights": "Alle Rechte vorbehalten."
    },
    en: {
      "nav.locations": "Our Cafés",
      "nav.story": "Philosophy",
      "nav.menu": "Menu",
      "nav.events": "Events",
      "nav.chalet": "Chalet Weiß",
      "nav.careers": "Careers",
      "nav.reserve": "Book a Table",

      "hero.eyebrow": "French Art de Vivre & Viennese Coffeehouse Culture · Since 2020",
      "hero.title": "A Touch of <em>France</em> in Hinterbrühl & Mödling",
      "hero.subtitle": "Where aromatic organic coffee, artisan patisserie, and heartfelt French-Mediterranean cuisine meet warm Austrian hospitality.",
      "hero.cta.menu": "Explore the Menu",
      "hero.cta.reserve": "Book a Table or Event",
      "hero.switch.label": "Select Location:",
      "hero.status.open": "Open Now",
      "hero.status.closed": "Currently Closed",
      "hero.directions": "Get Directions",

      "strip.bio": "100% Organic Coffee & Ingredients",
      "strip.locations": "2 Locations: Hinterbrühl & Mödling",
      "strip.lunch": "Tue – Fri Lunch Menu from € 10.90",
      "strip.events": "Weddings, Celebrations & Historic Rooms",

      "locations.eyebrow": "Two Distinct Destinations",
      "locations.title": "Our Houses in <em>Hinterbrühl</em> & <em>Mödling</em>",
      "locations.subtitle": "Choose your favorite setting — from our spacious new Restaurant & Café near the Seegrotte in Hinterbrühl to our intimate 1607 coffeehouse in the heart of Mödling.",
      "locations.btn.menu": "Open Menu",
      "locations.btn.route": "Get Directions",
      "locations.btn.book": "Reserve",

      "story.eyebrow": "Our Story & Philosophy",
      "story.title": "French Charm, <em>Cooked from the Heart</em>",
      "story.p1": "Our story is driven by a simple joy: bringing people together over remarkable food and coffee. At Café Weiss, we blend the charm of a French-inspired café with a kitchen devoted to flavor, balance, and quality.",
      "story.p2": "We are inspired by the French way of savoring life: an unhurried morning coffee, a delicate pastry from our vitrine, a conversation that lingers, and a candlelit dinner worth taking your time for.",
      "story.p3": "In the morning we welcome you with fragrant organic coffee and gourmet breakfast platters. At midday we serve vibrant dishes and our weekly lunch menu in Hinterbrühl. In the evening, gather with loved ones over Steak au Poivre, Salmon à la Provençale, and fine wine.",
      "story.quote": "“Every plate should reflect what matters most to us: authentic flavor, harmony, and uncompromising quality.”",
      "story.stat1.num": "2020",
      "story.stat1.label": "Founded with Passion",
      "story.stat2.num": "100%",
      "story.stat2.label": "Organic Coffee & Freshness",
      "story.stat3.num": "7 Days",
      "story.stat3.label": "Open Monday – Sunday",

      "menu.eyebrow": "Gastronomy & Patisserie",
      "menu.title": "Our <em>Culinary Menu</em>",
      "menu.subtitle": "Explore our dishes interactively or browse the original printed menu pages for both locations.",
      "menu.loc.hinterbruehl": "Restaurant & Café Hinterbrühl",
      "menu.loc.hb.sub": "Breakfast · Brunch · Warm Kitchen · Lunch Menu",
      "menu.loc.moedling": "Coffeehouse Mödling",
      "menu.loc.md.sub": "Breakfast · Organic Coffee · Salads · Gelato & Cake",
      "menu.btn.original": "View Printed Menu Pages (Gallery)",
      "lunch.badge": "TUESDAY – FRIDAY · 11:00 – 15:00",
      "lunch.2course.name": "2-Course Menu",
      "lunch.2course.desc": "Main Course & Dessert",
      "lunch.3course.name": "3-Course Menu",
      "lunch.3course.desc": "Soup/Starter, Main Course & Dessert",
      "lunch.week.active": "Current Week",
      "lunch.week.upcoming": "Upcoming Preview",
      "lunch.admin.btn": "Edit & Schedule Weekly Menu",
      "menu.search.placeholder": "Search dish or ingredient (e.g. Croissant, Salmon, Matcha)…",
      "menu.filter.all": "All Dishes",
      "menu.filter.signature": "Signature & Favorites",
      "menu.filter.veg": "Vegetarian",
      "menu.filter.bio": "Organic",
      "menu.vitrine.note": "A note from our kitchen: Because we offer a wide daily selection of fresh meat, fish, and homemade cakes & tarts, we warmly invite you to take a look at our display vitrine in person.",
      "menu.allergens.note": "We exclusively use premium organic ingredients. Our service team is happy to inform you about allergens.",

      "events.eyebrow": "Your Event · Our Space",
      "events.title": "Where Special Moments Become <em>Unforgettable</em>",
      "events.subtitle": "Our venues in Hinterbrühl and Mödling are available Monday through Sunday for weddings, birthdays, baptisms, corporate dinners, and private celebrations.",
      "events.space1.tag": "Hinterbrühl · Near the Seegrotte",
      "events.space1.title": "Elegant Chandelier Salon & Dining Room",
      "events.space1.desc": "Refined French ambiance with crystal chandeliers, bespoke floral table settings, and tailored multi-course menus for weddings, baptisms, family gatherings, and corporate events.",
      "events.space1.cap": "Flexible layout for private banquets & celebrations",
      "events.space2.tag": "Mödling · Historic Vault",
      "events.space2.title": "Historic Vaulted Room from 1607",
      "events.space2.desc": "A warm, intimate atmosphere awaits you in a genuine historic room dating back to 1607 — furnished in French style, ideal for birthdays, private dinners, or business meetings.",
      "events.space2.cap": "Capacity: 20 seats · Advance booking: at least 1 week",
      "events.space3.tag": "Mödling · Herzoggasse 6",
      "events.space3.title": "Sunny Town Hall Terrace",
      "events.space3.desc": "Our spacious cobblestone terrace in the heart of Mödling's pedestrian zone offers a picturesque view of the historic Town Hall — ideal for wedding receptions and summer parties.",
      "events.space3.cap": "Capacity: 40 seats · Advance booking: at least 1 week",
      "events.cta": "Inquire About Your Event",

      "chalet.eyebrow": "Our Sister Project & Mobility",
      "chalet.title": "Chalet Weiß & <em>Car Rental Service</em>",
      "chalet.desc": "Discover our sister project, Chalet Weiß, in the Austrian Alps. In addition, guests can now rent a car directly at Café Weiss to explore the Vienna Woods, the Seegrotte, and the surrounding region comfortably at their own pace.",
      "chalet.perk1": "Direct vehicle pickup at Café Weiss",
      "chalet.perk2": "Flexible daily & weekend rates for our guests",
      "chalet.perk3": "Alpine relaxation & retreat at Chalet Weiß",
      "chalet.btn.web": "Visit Chalet Weiß Website",
      "chalet.btn.car": "Inquire About Car Rental",

      "reserve.eyebrow": "Reservations & Contact",
      "reserve.title": "We Look Forward to <em>Welcoming You</em>",
      "reserve.subtitle": "Reserve your table or send us an event inquiry. We will get in touch promptly to confirm your booking.",
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
      "reserve.occ.table": "Relaxed Café / Restaurant Visit",
      "reserve.occ.birthday": "Birthday Celebration",
      "reserve.occ.wedding": "Wedding / Civil Reception",
      "reserve.occ.corporate": "Corporate Dinner / Business",
      "reserve.occ.baptism": "Baptism / Family Celebration",
      "reserve.occ.car": "Car Rental Inquiry",
      "reserve.form.notes": "Special Requests or Notes",
      "reserve.btn.submit": "Send Reservation Request",
      "reserve.btn.whatsapp": "Reserve via WhatsApp",
      "reserve.direct.title": "Direct Contact",
      "reserve.direct.desc": "For same-day reservations, calling us directly is the fastest way to secure your table.",

      "careers.eyebrow": "Join Our Family",
      "careers.title": "Careers at <em>Café Weiss</em>",
      "careers.desc": "To strengthen our warm team in Hinterbrühl and Mödling, we are looking for motivated new team members in service and kitchen roles.",
      "careers.perk1.title": "Flexible Working Hours",
      "careers.perk1.desc": "Full-time, part-time, or flexible shifts tailored to your schedule.",
      "careers.perk2.title": "No Experience Required",
      "careers.perk2.desc": "We welcome newcomers and train you step by step in a supportive team.",
      "careers.perk3.title": "Fair & Reliable Pay",
      "careers.perk3.desc": "Appreciative environment, great tips, and complimentary staff meals & coffee.",
      "careers.btn": "Apply Now via Email",

      "footer.tagline": "French-inspired Restaurant & Coffeehouse in Hinterbrühl and Mödling. Crafted with love for flavor, organic quality, and genuine hospitality.",
      "footer.rights": "All Rights Reserved."
    }
  }
};

