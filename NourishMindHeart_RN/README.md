# 📱 Nourish Mind & Heart — React Native App

A **production-ready React Native (Expo) app** for the 30-day vegetarian brain & heart meal plan. Runs natively on **iOS** and **Android**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- [Expo Go app](https://expo.dev/go) on your iOS or Android device

### Run in 3 steps
```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npx expo start

# 3. Scan the QR code with:
#    - iPhone → Camera app → tap the link
#    - Android → Expo Go app → Scan QR Code
```

---

## 📦 Build for Production

### iOS (App Store)
```bash
npx eas build --platform ios
```

### Android (Google Play)
```bash
npx eas build --platform android
```

### Both platforms
```bash
npx eas build --platform all
```

> **Note:** EAS (Expo Application Services) requires a free Expo account. Run `npx eas login` first.

---

## 🗂️ Project Structure

```
NourishMindHeart/
├── App.js                          # Root — navigation setup (Tab + Stack)
├── app.json                        # Expo configuration (name, bundle ID, icons)
├── babel.config.js                 # Babel config
├── package.json                    # Dependencies
│
└── src/
    ├── theme.js                    # Colors, fonts, shadows, radius, tag colors
    ├── data/
    │   └── index.js                # All 21 recipes + science + shopping data
    │
    ├── components/
    │   ├── MealCard.js             # Recipe card (full + compact variants)
    │   └── TagBadge.js             # Nutrient tag pill
    │
    └── screens/
        ├── HomeScreen.js           # ❤️ Today tab — auto-detects day, shows meals
        ├── PlanScreen.js           # 📅 Plan tab — 4-week calendar
        ├── RecipesScreen.js        # 📖 Recipes tab — search + filter + FlatList
        ├── RecipeDetailScreen.js   # Full recipe (Recipe / Science / Shop tabs)
        ├── ShopScreen.js           # 🛒 Shop tab — stores, costs, tips
        └── ScienceScreen.js        # 🔬 Science tab — facts, pillars, supplements
```

---

## 📱 Screens & Features

### ❤️ Today
- Auto-detects the current day of the week
- Shows today's breakfast, lunch, and dinner
- Tap any meal to open the full recipe
- Daily nutrition totals (calories, protein, fiber, cost)
- Science quote of the day

### 📅 Plan
- 4-week rotating meal calendar
- Week selector tabs (Week 1–4)
- Compact meal cells showing emoji, name, and cost
- Tap any cell to navigate to full recipe

### 📖 Recipes
- All **21 complete recipes** (7 breakfast · 7 lunch · 7 dinner)
- Live search by recipe name or nutrient tag (e.g. "omega-3", "sulforaphane")
- Filter by meal type (Breakfast/Lunch/Dinner) or difficulty (Easy/Medium/Hard)
- Each recipe card shows macros, cost, time, and nutrient tags

### Recipe Detail (accessible from all tabs)
Three sub-tabs per recipe:
- **Recipe** — Ingredients list, numbered steps, health benefits checklist
- **Science** — Peer-reviewed research summary, bioactive compounds, nutrition grid
- **Shop** — Where to buy each ingredient + store-specific pricing + pro tips

### 🛒 Shop
Three sub-tabs:
- **Stores** — 5-store strategy with savings percentages (Costco, Trader Joe's, Whole Foods, Asian/Indian grocery, Publix)
- **Costs** — Full cost breakdown table (daily/weekly/monthly) + comparison to US average
- **Tips** — 8 evidence-based smart shopping strategies

### 🔬 Science
Three sub-tabs:
- **Key Findings** — 6 landmark study cards with statistics and citations
- **Pillars** — 7 nutritional pillars of the plan with scientific rationale
- **Supplements** — Essential supplement guide for vegetarians (B12, D3+K2, Algae DHA+EPA, Iodine)

---

## 🍽️ The 21 Recipes

### Breakfasts ($1.80–$4.50/serving)
| Recipe | Key Science |
|--------|-------------|
| Overnight Oats with Blueberries & Walnuts | 25% memory improvement via anthocyanins |
| Turmeric Golden Milk Oatmeal | Curcumin bioavailability boosted 2000% by black pepper |
| Avocado Toast with Hemp Seeds & Poached Egg | 125mg choline per egg for acetylcholine |
| Acai Bowl with Granola & Cacao Nibs | Highest ORAC antioxidant score of any food |
| Greek Yogurt Parfait with Walnuts & Berries | 10B+ live probiotics for gut-brain axis |
| Chia Seed Pudding with Mango & Coconut | MCTs → brain ketones within 30 minutes |
| Tofu Scramble with Spinach & Bell Peppers | B12 + lutein for myelin and cognition |

### Lunches ($1.80–$4.80/serving)
| Recipe | Key Science |
|--------|-------------|
| Mediterranean Quinoa Power Bowl | 33% lower cardiovascular risk |
| Red Lentil Soup with Lemon & Cumin | 90% DV folate, lowers LDL 0.14 mmol/L |
| Chickpea & Avocado Power Salad | Capers: highest quercetin of any food |
| Miso Soup with Tofu, Wakame & Shiitake | Iodine + fermented gut-brain cultures |
| Falafel Wrap with Tahini & Tabbouleh | GI ≈ 32 — no blood sugar crashes |
| Tempeh Buddha Bowl with Ginger Miso | 32g protein, fermented isoflavones, GABA |
| Roasted Beet & Arugula Salad | Beet nitrates reduce BP 4–10 mmHg (RCT) |

### Dinners ($1.60–$5.60/serving)
| Recipe | Key Science |
|--------|-------------|
| Saag Dal — Lentils with Spinach & Spices | 22% lower heart disease risk |
| Wild Mushroom Risotto | Ergothioneine protects brain mitochondria |
| Chickpea Tikka Masala | Cooked lycopene 3–4× more bioavailable |
| Stuffed Portobello with Quinoa & Kale | Sulforaphane activates 200+ protective genes |
| Sweet Potato & Black Bean Chili | DASH diet lowers BP 11.4 mmHg (= medication) |
| Baked Eggplant Parmesan | Nasunin protects brain cell membranes |
| Thai Green Curry with Vegetables & Tofu | MCT + sulforaphane synergistic brain fuel |

---

## 🔬 Scientific Foundation

Key studies underpinning this plan:
- **MIND Diet** — 53% Alzheimer's risk reduction (Morris et al., *Alzheimer's & Dementia*, 2015, n=923)
- **PREDIMED** — 30% lower cardiovascular events (*NEJM*, 2013, n=7,447)
- **Blueberries** — 25% memory improvement (*JAMA Internal Medicine*, 2012)
- **Legumes** — 22% lower heart disease risk (*Circulation*, 2016, n=432,000)
- **Dietary Nitrates** — 10 mmHg BP reduction (*Hypertension*, 2010)
- **Mushrooms** — 2× lower MCI likelihood (*Journal of Alzheimer's Disease*, 2019)

---

## 💰 Cost: $11.50/day for all 3 meals

| Category | Daily | Weekly | Monthly |
|----------|-------|--------|---------|
| Breakfasts | $2.80 | $19.60 | $84 |
| Lunches | $3.20 | $22.40 | $96 |
| Dinners | $3.40 | $23.80 | $102 |
| Pantry staples | — | $12.00 | $48 |
| Supplements | — | $7.00 | $28 |
| **Total** | **$11.50** | **$84.80** | **$358** |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React Native](https://reactnative.dev) | Cross-platform iOS & Android UI |
| [Expo](https://expo.dev) ~50.0 | Build toolchain + dev workflow |
| [React Navigation v6](https://reactnavigation.org) | Tab + stack navigation |
| `@react-navigation/bottom-tabs` | Bottom tab bar |
| `@react-navigation/native-stack` | Native stack for recipe detail |
| `react-native-screens` | Native screen containers |
| `react-native-safe-area-context` | Safe area handling |

---

## 📄 License

MIT License — free to use, share, and modify with attribution.

---

*Built with ❤️ for brain health and cardiovascular wellness.*
