# 🥗 Diet for Brain and Heart

**A science-backed, 30-day vegetarian meal plan app optimized for brain health and cardiovascular wellness.**

Built with evidence from landmark studies including the MIND Diet trial (53% Alzheimer's risk reduction), PREDIMED (30% lower cardiovascular events), and 15+ peer-reviewed nutrition studies.

---

## 📁 Repository Contents

| File | Description |
|------|-------------|
| `NourishMindHeart_App.html` | ✅ Complete standalone app — open in any browser, no dependencies |
| `NourishApp.jsx` | ⚛️ React component for embedding in any React / Next.js project |

---

## 🚀 Quick Start

### Option 1 — Standalone HTML (recommended)
```bash
# Just open in your browser
open NourishMindHeart_App.html
```

### Option 2 — React Component
```bash
npm install react react-dom
# Copy NourishApp.jsx into your project's src/components/
```
```jsx
import NourishApp from './components/NourishApp';

function App() {
  return <NourishApp />;
}
```

---

## 📱 App Features

The app is designed as a mobile-first experience with 5 tabs:

### ❤️ Today
- Auto-detects the current day of the week
- Shows today's breakfast, lunch, and dinner
- Daily nutrition totals (calories, protein, fiber, cost)
- Science quote of the day

### 📅 Plan
- Full 4-week scrollable meal calendar
- Tap any meal cell to open its full recipe
- Variety-rotated so no two consecutive days repeat

### 📖 Recipes
- All **21 complete recipes** (7 breakfast · 7 lunch · 7 dinner)
- Search by name or nutrient (e.g. "omega-3", "sulforaphane")
- Filter by meal type or difficulty
- Each recipe includes:
  - Ingredients & step-by-step method
  - Peer-reviewed science & bioactive compounds
  - Where to buy + cost breakdown per store

### 🛒 Shop
- 5-store buying strategy (Costco, Trader Joe's, Whole Foods, Asian grocery, Publix)
- Full cost analysis table (daily / weekly / monthly)
- 8 smart shopping tips to save 40–60%

### 🔬 Science
- 6 landmark study findings with statistics
- 7 nutritional pillars of the plan
- Essential supplement guide for vegetarians (B12, D3+K2, Algae DHA+EPA, Iodine)

---

## 🍽️ The 21 Recipes

### Breakfasts
| # | Recipe | Cost | Key Benefit |
|---|--------|------|-------------|
| 1 | Overnight Oats with Blueberries & Walnuts | $2.40 | 25% memory improvement via anthocyanins |
| 2 | Turmeric Golden Milk Oatmeal | $1.80 | Curcumin inhibits NF-κB inflammation |
| 3 | Avocado Toast with Hemp Seeds & Poached Egg | $3.20 | 125mg choline per egg for acetylcholine |
| 4 | Acai Bowl with Granola & Cacao Nibs | $4.50 | Highest ORAC antioxidant score of any food |
| 5 | Greek Yogurt Parfait with Walnuts & Berries | $2.80 | 10B+ live probiotics for gut-brain axis |
| 6 | Chia Seed Pudding with Mango & Coconut | $2.60 | MCTs → brain ketones within 30 minutes |
| 7 | Tofu Scramble with Spinach & Bell Peppers | $2.90 | B12 + lutein for myelin and cognition |

### Lunches
| # | Recipe | Cost | Key Benefit |
|---|--------|------|-------------|
| 1 | Mediterranean Quinoa Power Bowl | $4.20 | 33% lower cardiovascular risk |
| 2 | Red Lentil Soup with Lemon & Cumin | $1.80 | 90% DV folate, lowers LDL 0.14 mmol/L |
| 3 | Chickpea & Avocado Power Salad | $3.80 | Capers: highest quercetin of any food |
| 4 | Miso Soup with Tofu, Wakame & Shiitake | $2.40 | Iodine + fermented gut-brain cultures |
| 5 | Falafel Wrap with Tahini & Tabbouleh | $4.00 | GI≈32 — no blood sugar crashes |
| 6 | Tempeh Buddha Bowl with Ginger Miso Dressing | $4.80 | 32g protein, isoflavones, GABA |
| 7 | Roasted Beet & Arugula Salad with Goat Cheese | $4.40 | Beet nitrates reduce BP 4–10 mmHg |

### Dinners
| # | Recipe | Cost | Key Benefit |
|---|--------|------|-------------|
| 1 | Saag Dal — Lentils with Spinach & Spices | $2.20 | 22% lower heart disease risk |
| 2 | Wild Mushroom Risotto with Parmesan & Thyme | $5.20 | Ergothioneine protects brain mitochondria |
| 3 | Chickpea Tikka Masala | $2.80 | Cooked lycopene 3–4× more bioavailable |
| 4 | Stuffed Portobello with Quinoa & Kale | $5.60 | Sulforaphane activates 200+ protective genes |
| 5 | Sweet Potato & Black Bean Chili | $1.60 | DASH diet lowers BP 11.4 mmHg |
| 6 | Baked Eggplant Parmesan | $4.00 | Nasunin protects brain cell membranes |
| 7 | Thai Green Curry with Vegetables & Tofu | $3.60 | MCT + sulforaphane synergistic brain fuel |

---

## 💰 Cost Analysis

| Category | Daily | Weekly | Monthly |
|----------|-------|--------|---------|
| Breakfasts | $2.80 | $19.60 | $84 |
| Lunches | $3.20 | $22.40 | $96 |
| Dinners | $3.40 | $23.80 | $102 |
| Pantry staples | — | $12.00 | $48 |
| Supplements | — | $7.00 | $28 |
| **TOTAL** | **$11.50** | **$84.80** | **$358** |

vs. US average $15–25/day → **saves $2,000–5,000/year**

---

## 🔬 Scientific Foundation

This plan is built on 7 nutritional pillars:
1. **Anti-Inflammatory Architecture** — curcumin, omega-3, quercetin, sulforaphane
2. **Fiber Maximization** — target 35–45g/day (US average: 15g)
3. **Polyphenol Density** — target 1,500+ mg/day
4. **Heart-Healthy Fat Architecture** — EVOO, avocado, walnuts, flaxseed
5. **Glycemic Intelligence** — all carbs paired with fiber/protein/fat
6. **Complete Amino Acid Profiles** — all 9 essential amino acids daily
7. **Micronutrient Saturation** — B12, folate, magnesium, zinc, iodine, selenium

### Key Studies
- **MIND Diet** — 53% Alzheimer's risk reduction (Morris et al., *Alzheimer's & Dementia*, 2015)
- **PREDIMED** — 30% lower cardiovascular events (Estruch et al., *NEJM*, 2013, n=7,447)
- **Blueberries** — 25% memory improvement (Devore et al., *JAMA Internal Medicine*, 2012)
- **Legumes** — 22% lower heart disease risk (Afshin et al., *Circulation*, 2016, n=432,000)
- **Dietary Nitrates** — 10 mmHg BP reduction (Webb et al., *Hypertension*, 2010)
- **Mushrooms** — 2× lower MCI likelihood (Feng et al., *J. Alzheimer's Disease*, 2019)

---

## 🌱 Essential Supplements for Vegetarians

| Supplement | Dose | Monthly Cost |
|-----------|------|-------------|
| Vitamin B12 (methylcobalamin) | 500mcg daily | ~$8–12 |
| Vitamin D3 + K2 (MK-7) | 2,000–4,000 IU + 100mcg | ~$8–15 |
| Algae-Based DHA + EPA | 250–500mg combined | ~$20–30 |
| Iodine | 150mcg daily | ~$5–8 |

---

## 📄 License

MIT License — free to use, share, and modify with attribution.

---

*Built with ❤️ for brain health and cardiovascular wellness. Always consult a healthcare provider before making significant dietary changes.*
