# Café Weiss — Domain Glossary

Canonical domain terms for **Café Weiss** (French-inspired Restaurant & Coffeehouse in Hinterbrühl and Mödling, Austria). Free of implementation details.

## Core Concepts

- **House (Standort)**: One of Café Weiss's two physical hospitality venues in Lower Austria:
  - **Hinterbrühl House**: Full-service Restaurant & Café at Hauptstraße 16, 2371 Hinterbrühl (near the Seegrotte), offering all-day breakfast, warm French-Mediterranean cuisine, the Weekly Lunch Menu, and the Chandelier Banquet Salon.
  - **Mödling House**: Historic French Coffeehouse at Herzoggasse 6, 2340 Mödling, featuring a vaulted room from 1607 (20 seats), a Town Hall terrace (40 seats), 100% organic coffee, breakfast, and patisserie.
- **Weekly Lunch Menu (Mittagsmenü)**: A rotating four-day midday menu served exclusively at the Hinterbrühl House from Tuesday through Friday between 11:00 and 15:00.
- **Validity Window**: The calendar Monday-through-Sunday date range (`validFrom` to `validTo`) during which a Weekly Lunch Menu is automatically selected as the active schedule for visitors.
- **Display Period**: The human-readable Tuesday-through-Friday date label (`DD.MM.YYYY – DD.MM.YYYY`) printed on the physical A4 menu card and shown in the digital menu banner.
- **Course Package**: One of the two fixed-price midday dining tiers:
  - **2-Course Lunch (2-Gänge-Menü)**: Main course of the day plus Dessert of the Day.
  - **3-Course Lunch (3-Gänge-Menü)**: Soup or starter of the day, main course of the day, plus Dessert of the Day.
- **Daily Lunch Entry**: The menu for one weekday (Tuesday, Wednesday, Thursday, or Friday) within a Weekly Lunch Menu, consisting of a Soup/Starter, a Main Course (also available in a vegetarian variant), and a Dessert, each written in German and English.
- **Event Space**: A bookable private or semi-private dining area across the two Houses (Hinterbrühl Chandelier Salon, Mödling 1607 Historic Vault, or Mödling Town Hall Terrace).
- **Reservation Inquiry**: A guest's request for either a standard table booking or a private event/car-rental inquiry, specifying the House, date, time, guest count, preferred area, and occasion.
