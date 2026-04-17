# 🍎 App Store Submission Guide

Step-by-step instructions to submit **Nourish Mind & Heart** to the Apple App Store.

---

## Prerequisites Checklist
- [ ] Apple Developer account ($99/year) — [developer.apple.com](https://developer.apple.com)
- [ ] Expo account (free) — [expo.dev](https://expo.dev)
- [ ] Node.js 18+ installed
- [ ] EAS CLI installed (`npm install -g eas-cli`)
- [ ] App icons ready (see Icon Requirements below)

---

## Step 1 — Create the App in App Store Connect

1. Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
2. Click **My Apps** → **+** → **New App**
3. Fill in:
   - **Platform:** iOS
   - **Name:** `Nourish Mind & Heart`
   - **Primary Language:** English (U.S.)
   - **Bundle ID:** `com.nourish.mindandheart`
   - **SKU:** `nourish-mind-heart-001` (any unique string)
4. Click **Create**
5. Copy the **Apple ID** number shown at the top (looks like `6743218900`) — you'll need it

---

## Step 2 — Get Your Team ID

1. Go to [developer.apple.com/account](https://developer.apple.com/account)
2. Scroll to **Membership Details**
3. Copy your **Team ID** (looks like `ABC123DEFG`)

---

## Step 3 — Update eas.json

Open `eas.json` and fill in your actual values:

```json
"submit": {
  "production": {
    "ios": {
      "appleId": "your@email.com",        ← your Apple ID email
      "ascAppId": "6743218900",           ← App Store Connect App ID from Step 1
      "appleTeamId": "ABC123DEFG"         ← Team ID from Step 2
    }
  }
}
```

---

## Step 4 — Prepare App Icons

Apple requires a **1024×1024 PNG** icon (no alpha/transparency, no rounded corners — Apple adds those).

Place these files in your `assets/` folder:
| File | Size | Used For |
|------|------|----------|
| `icon.png` | 1024×1024 | App Store + home screen |
| `splash.png` | 1284×2778 | Launch screen |
| `adaptive-icon.png` | 1024×1024 | Android |
| `favicon.png` | 32×32 | Web |

> **Quick option:** Use [appicon.co](https://appicon.co) — upload a 1024×1024 image and it generates all required sizes automatically.

For a green brain/heart themed icon matching this app:
- Background: `#2D6A4F` (emerald green)
- Symbol: white brain + heart or leaf icon
- Tools: [Canva](https://canva.com), [Figma](https://figma.com), or hire on [Fiverr](https://fiverr.com)

---

## Step 5 — Set Up EAS & Link to Expo

```bash
# Install EAS CLI globally (if not already installed)
npm install -g eas-cli

# Log in to your Expo account
eas login

# Link this project to Expo (run inside NourishMindHeart_RN/)
eas init

# This will update app.json with your real projectId automatically
```

---

## Step 6 — Build for Production

```bash
# Make sure you're inside the app folder
cd Diet-for-Brain-and-Heart/NourishMindHeart_RN

# Build the iOS production binary (.ipa)
eas build --platform ios --profile production
```

This takes **10–20 minutes** and runs entirely on Expo's cloud servers — no Xcode required.

When complete, EAS will give you a download link and confirmation.

---

## Step 7 — Submit to App Store

```bash
eas submit --platform ios --profile production
```

EAS will ask for your Apple ID password and a 2FA code. It then:
1. Uploads the `.ipa` to App Store Connect automatically
2. You'll see it appear under **TestFlight** within a few minutes

---

## Step 8 — Complete App Store Listing

Go back to [appstoreconnect.apple.com](https://appstoreconnect.apple.com) → Your App → **App Store** tab and fill in:

### Required Fields

**App Description** (suggested):
```
Nourish Mind & Heart is a science-backed 30-day vegetarian meal plan app 
designed to optimize brain health and cardiovascular wellness.

Every recipe is grounded in peer-reviewed research — including the MIND Diet 
(53% Alzheimer's risk reduction), the PREDIMED trial (30% lower cardiovascular 
events), and 15+ landmark nutrition studies.

FEATURES:
• 21 complete recipes — 7 breakfast, 7 lunch, 7 dinner
• 4-week rotating meal calendar
• Full recipe details with ingredients, steps & health benefits
• Peer-reviewed science for every dish
• 5-store smart shopping strategy
• Complete cost analysis ($11.50/day for all 3 meals)
• Essential supplement guide for vegetarians

THE SCIENCE:
• MIND Diet: 53% reduction in Alzheimer's risk
• PREDIMED: 30% lower cardiovascular events
• Blueberry anthocyanins: 25% memory improvement
• Legumes: 22% lower heart disease risk
• Dietary nitrates: 10 mmHg blood pressure reduction

100% plant-based. No ads. No subscriptions.
```

**Keywords** (100 characters max):
```
vegetarian,brain health,heart health,meal plan,recipes,nutrition,MIND diet,Mediterranean,vegan
```

**Category:** Health & Fitness  
**Secondary Category:** Food & Drink

**Support URL:** Your website or GitHub repo URL  
**Privacy Policy URL:** Required — use [privacypolicygenerator.info](https://privacypolicygenerator.info) for a free one

**Age Rating:** 4+ (no objectionable content)

**Price:** Free

---

## Step 9 — Screenshots

Apple requires screenshots for:
- **6.7" display** (iPhone 15 Pro Max) — required
- **6.5" display** (iPhone 14 Plus) — required
- **5.5" display** (iPhone 8 Plus) — required
- **12.9" iPad** — required if supportsTablet is true

**Easiest method:** Use [screenshots.so](https://screenshots.so) or run the app in Xcode Simulator and take screenshots with Cmd+S.

Suggested screenshots to capture:
1. Today screen (today's 3 meals)
2. Recipes list with search
3. Recipe detail - Science tab
4. 4-week plan calendar
5. Science - Key Findings tab

---

## Step 10 — Submit for Review

1. In App Store Connect, click **Add for Review**
2. Answer the export compliance questions (No encryption → answer No)
3. Click **Submit to App Review**

**Review time:** Typically **24–48 hours** for first submission.

---

## Common Rejection Reasons & Fixes

| Rejection Reason | Fix |
|-----------------|-----|
| Missing privacy policy | Add URL to a real privacy policy page |
| Icon has alpha channel | Re-export icon.png without transparency |
| Metadata incomplete | Fill in all required App Store Connect fields |
| Crashes on launch | Test on a real device before submitting |
| Missing permissions description | Already added to app.json infoPlist |

---

## Timeline Summary

| Step | Time |
|------|------|
| App Store Connect setup | 15 min |
| Icon creation | 30–60 min |
| EAS build | 10–20 min |
| EAS submit | 5 min |
| App Store listing | 30 min |
| Screenshots | 30 min |
| Apple Review | 24–48 hours |
| **Total** | **~2–3 hours + review wait** |
