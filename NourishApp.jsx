import { useState, useEffect } from "react";
import { Heart, Brain, Leaf, ShoppingCart, FlaskConical, ChevronRight, Star, Clock, Users, DollarSign, Search, X, ArrowLeft, BookOpen, Zap, Shield, TrendingUp, Calendar, Check, Circle } from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const COLORS = {
  emerald: "#2D6A4F", teal: "#40916C", sage: "#74C69D",
  gold: "#D4A017", rust: "#B5451B", navy: "#1B2A4A",
  cream: "#F8F5F0", lightBg: "#EAF4EE", white: "#ffffff",
};

const meals = {
  breakfasts: [
    { id:"b1", name:"Overnight Oats with Blueberries & Walnuts", emoji:"🫐", time:"10 min + overnight", serves:2, costPer:"$2.40", calories:420, protein:"12g", fiber:"11g", difficulty:"Easy", tags:["omega-3","antioxidants","heart"], color:"#EAF4EE",
      ingredients:["1 cup rolled oats","1½ cups almond milk","2 tbsp chia seeds","1 tbsp maple syrup","1 cup blueberries","¼ cup walnuts","½ tsp vanilla","Pinch cinnamon"],
      steps:["Combine oats, almond milk, chia seeds, maple syrup, vanilla, and cinnamon in a jar.","Stir well, cover, and refrigerate overnight (min 6 hours).","In the morning, stir the oat mixture. Add almond milk if too thick.","Top with fresh blueberries and chopped walnuts."],
      science:"Blueberries contain anthocyanins shown to improve memory by 20-25% (Devore et al., JAMA 2012). Beta-glucan in oats reduces LDL cholesterol by 5-10%. Walnuts are the richest nut source of ALA omega-3 fatty acids.",
      benefits:["Supports memory & cognition","Lowers LDL cholesterol","Anti-inflammatory omega-3","Sustained energy release"],
      where:"Oats: Quaker (Publix, Walmart $3/tub) | Blueberries: Costco frozen ($10/3lb) | Walnuts: Fisher ($5/bag)",
    },
    { id:"b2", name:"Turmeric Golden Milk Oatmeal", emoji:"🌟", time:"15 min", serves:2, costPer:"$1.80", calories:380, protein:"11g", fiber:"8g", difficulty:"Easy", tags:["anti-inflammatory","brain","gut"],  color:"#FFF8E7",
      ingredients:["1 cup steel-cut oats","2 cups oat milk","1 tsp turmeric","½ tsp cinnamon","¼ tsp ginger","Pinch black pepper","1 tbsp honey","1 banana (sliced)","2 tbsp pumpkin seeds"],
      steps:["Bring oat milk to gentle simmer.","Add oats, cook 20-25 min stirring occasionally.","Add turmeric, cinnamon, ginger, and black pepper in last 5 min.","Stir in honey. Top with banana and pumpkin seeds."],
      science:"Curcumin in turmeric is a potent NF-κB inhibitor. Black pepper increases curcumin bioavailability by 2000% (Shoba et al., Planta Medica, 1998). Steel-cut oats have GI of 55 vs 83 for instant oats.",
      benefits:["Potent anti-inflammatory","Improves insulin sensitivity","Brain protective curcumin","Rich in magnesium & zinc"],
      where:"Turmeric: Simply Organic (Sprouts $4) | Oat milk: Oatly (Target $5) | Pumpkin seeds: Trader Joe's ($4)",
    },
    { id:"b3", name:"Avocado Toast with Hemp Seeds & Poached Egg", emoji:"🥑", time:"15 min", serves:2, costPer:"$3.20", calories:520, protein:"22g", fiber:"12g", difficulty:"Medium", tags:["choline","brain","protein"], color:"#EAF4EE",
      ingredients:["4 slices whole grain sourdough","2 ripe avocados","4 eggs","2 tbsp hemp seeds","1 lemon (juice)","Red pepper flakes","Sea salt & pepper","1 tsp white vinegar"],
      steps:["Toast sourdough until golden. Mash avocados with lemon juice, salt & pepper.","Bring saucepan of water to gentle simmer. Add vinegar.","Create gentle whirlpool, crack eggs in center, cook 3 minutes.","Spread avocado on toast, top with egg, sprinkle hemp seeds & red pepper flakes."],
      science:"Eggs contain 125mg choline — essential for acetylcholine synthesis (the memory neurotransmitter). Adequate choline is associated with 25% better cognitive performance (Nurk et al., AJCN, 2010). Avocado provides lutein for brain health.",
      benefits:["Choline for memory","Brain myelin support","Complete amino acids","Heart-healthy fats"],
      where:"Avocados: Costco 6-pack ($6) | Sourdough: Dave's Killer Bread ($5) | Hemp seeds: Manitoba Harvest (Whole Foods $8)",
    },
    { id:"b4", name:"Acai Bowl with Granola & Cacao Nibs", emoji:"🍇", time:"10 min", serves:2, costPer:"$4.50", calories:460, protein:"10g", fiber:"9g", difficulty:"Easy", tags:["antioxidants","brain","superfood"], color:"#EEEDFE",
      ingredients:["2 packs (200g) frozen acai puree","1 banana","½ cup frozen berries","¼ cup almond milk","½ cup granola","2 tbsp coconut flakes","1 tbsp honey","Kiwi slices","1 tbsp cacao nibs"],
      steps:["Blend frozen acai, banana, berries, almond milk until thick (not liquid).","Pour into bowls.","Top with granola, coconut, kiwi, cacao nibs, and honey drizzle.","Serve immediately while cold."],
      science:"Acai has the highest ORAC (antioxidant) score of any fruit (~15,000 per 100g). Cacao flavanoids improve cerebral blood flow and working memory (Nutrients, 2020). Kiwi provides 92mg vitamin C per fruit.",
      benefits:["Highest antioxidant score","Improves cerebral blood flow","Vitamin C richest fruit","Natural energy boost"],
      where:"Acai packets: Sambazon (Whole Foods, Publix $6/pack) | Granola: KIND (Target $5) | Cacao nibs: Navitas (Amazon $7)",
    },
    { id:"b5", name:"Greek Yogurt Parfait with Walnuts & Berries", emoji:"🍓", time:"5 min", serves:2, costPer:"$2.80", calories:390, protein:"24g", fiber:"7g", difficulty:"Easy", tags:["probiotics","protein","gut-brain"], color:"#FAECE7",
      ingredients:["2 cups full-fat Greek yogurt","1 cup sliced strawberries","½ cup blueberries","¼ cup walnuts","3 tbsp granola","1 tbsp ground flaxseed","1 tsp honey","½ tsp vanilla"],
      steps:["Stir vanilla into Greek yogurt.","Layer yogurt, berries, and granola in two glasses.","Top with walnuts, ground flaxseed, and honey drizzle.","Serve immediately or refrigerate up to 4 hours."],
      science:"Greek yogurt contains Lactobacillus & Bifidobacterium — the gut produces ~95% of serotonin. A 2019 Frontiers in Psychiatry meta-analysis found probiotics reduced depression symptoms significantly. Flaxseed is the richest plant source of ALA omega-3.",
      benefits:["Probiotics for mood & gut","Serotonin precursor support","Complete protein","Omega-3 rich flaxseed"],
      where:"Greek yogurt: Fage or Chobani (all stores $5-6) | Flaxseed: Bob's Red Mill (Publix $4) | Berries: Costco frozen ($10)",
    },
    { id:"b6", name:"Chia Seed Pudding with Mango & Coconut", emoji:"🥭", time:"5 min + 4hr chill", serves:2, costPer:"$2.60", calories:440, protein:"9g", fiber:"14g", difficulty:"Easy", tags:["omega-3","MCT","fiber"], color:"#EAF3DE",
      ingredients:["6 tbsp black chia seeds","2 cups coconut milk (canned)","1 tbsp maple syrup","1 tsp vanilla","1 ripe mango (diced)","2 tbsp toasted coconut flakes","½ lime (zest + juice)"],
      steps:["Whisk chia seeds, coconut milk, maple syrup, and vanilla in a bowl.","Let sit 15 minutes, whisk again to break clumps.","Cover and refrigerate 4+ hours or overnight.","Top with mango tossed in lime juice and toasted coconut."],
      science:"Chia absorb 10x their weight, slowing digestion and stabilizing blood sugar. Coconut MCTs convert to ketones within 30 min — an alternative brain fuel (Page et al., Neurobiology of Aging, 2009). Mango provides folate for neurotransmitter synthesis.",
      benefits:["MCT brain ketone fuel","Stabilizes blood sugar","Highest plant omega-3","Maximum satiety fiber"],
      where:"Chia seeds: Costco Nutiva ($12/2lb) | Coconut milk: Thai Kitchen (Publix $2.50/can) | Mango: Costco frozen ($10)",
    },
    { id:"b7", name:"Tofu Scramble with Spinach & Bell Peppers", emoji:"🫑", time:"20 min", serves:2, costPer:"$2.90", calories:380, protein:"26g", fiber:"6g", difficulty:"Medium", tags:["protein","B12","lutein"], color:"#E1F5EE",
      ingredients:["400g firm tofu (pressed)","2 tbsp olive oil","1 red bell pepper (diced)","2 cups fresh spinach","¼ tsp turmeric","2 tbsp nutritional yeast","1 tsp garlic powder","½ tsp cumin"],
      steps:["Press tofu 10 minutes. Crumble into pea-sized pieces.","Heat oil, sauté bell pepper 3 min.","Add tofu, turmeric, garlic, cumin, salt. Cook 5 min.","Add spinach and nutritional yeast. Cook 2 more min."],
      science:"Nutritional yeast provides B12 — critical for myelin sheath integrity. B12 deficiency causes neurological damage and is common in vegetarians. Spinach lutein correlates with preserved cognitive function (Barnett et al., Nutritional Neuroscience, 2018).",
      benefits:["B12 for nerve health","Complete plant protein","Lutein for brain & eyes","Anti-inflammatory turmeric"],
      where:"Tofu: Nasoya (Publix $3) | Nutritional yeast: Bragg's (Whole Foods $7) | Spinach: Costco pre-washed ($5/bag)",
    },
  ],
  lunches: [
    { id:"l1", name:"Mediterranean Quinoa Power Bowl", emoji:"🫙", time:"25 min", serves:2, costPer:"$4.20", calories:580, protein:"28g", fiber:"14g", difficulty:"Medium", tags:["complete protein","Mediterranean","heart"], color:"#EAF4EE",
      ingredients:["1 cup quinoa","1 can chickpeas","1 cucumber","1 cup cherry tomatoes","½ red onion","½ cup Kalamata olives","100g feta cheese","Lemon, olive oil, oregano, parsley"],
      steps:["Cook quinoa 15 min in 2 cups water. Fluff and cool.","Roast chickpeas at 400°F with oil and paprika, 20 min until crispy.","Mix quinoa with cucumber, tomatoes, onion, olives. Dress with olive oil and lemon.","Top with feta, crispy chickpeas, and fresh parsley."],
      science:"The Mediterranean diet reduces cardiovascular risk by 33% and cognitive decline by 23% (Sofi et al., BMJ, 2008). Quinoa contains all 9 essential amino acids. Chickpeas provide prebiotic galactooligosaccharides. Olive oil oleocanthal has ibuprofen-like anti-inflammatory activity.",
      benefits:["Complete amino acid profile","Heart-protective diet","Prebiotic gut support","Oleuropein antioxidant"],
      where:"Quinoa: Costco Ancient Harvest ($12/5lb) | Chickpeas: Goya canned ($1) | Feta: Costco block ($8) | Olives: Trader Joe's ($4)",
    },
    { id:"l2", name:"Red Lentil Soup with Lemon & Cumin", emoji:"🍲", time:"35 min", serves:4, costPer:"$1.80", calories:320, protein:"20g", fiber:"16g", difficulty:"Easy", tags:["folate","iron","heart"], color:"#FFF8E7",
      ingredients:["2 cups red lentils","6 cups vegetable broth","1 onion, 4 garlic cloves","2 tsp cumin, 1 tsp turmeric, ½ tsp paprika","1 can diced tomatoes","2 tbsp olive oil","1 lemon","Fresh cilantro"],
      steps:["Sauté onion 5 min, add garlic and spices. Cook 1 min.","Add lentils, tomatoes, broth. Simmer 20-25 min.","Blend half the soup for creamy texture.","Finish with lemon juice. Top with cilantro."],
      science:"Lentils reduce LDL cholesterol by 0.14 mmol/L (AJCN meta-analysis, 2014). Folate from lentils reduces homocysteine — elevated homocysteine doubles Alzheimer's risk. One cup provides 90% DV folate, plus iron and zinc.",
      benefits:["90% daily folate","Lowers LDL cholesterol","Reduces homocysteine","Rich in iron & zinc"],
      where:"Red lentils: Goya or Indian grocery ($2/lb) | Broth: Pacific Foods low-sodium Costco ($12/12 cartons) | Budget: $7 per pot",
    },
    { id:"l3", name:"Chickpea & Avocado Power Salad", emoji:"🥗", time:"15 min", serves:2, costPer:"$3.80", calories:490, protein:"16g", fiber:"13g", difficulty:"Easy", tags:["lutein","nitrates","antioxidants"], color:"#E1F5EE",
      ingredients:["1 can chickpeas","2 avocados","1 cup arugula","½ cup sun-dried tomatoes","¼ cup red onion","2 tbsp capers","Olive oil, apple cider vinegar, Dijon dressing"],
      steps:["Make dressing: whisk olive oil, ACV, Dijon, garlic, salt.","Toss chickpeas, arugula, tomatoes, onion, capers with dressing.","Gently fold in avocado.","Top with fresh basil and black pepper."],
      science:"Avocado lutein/zeaxanthin reduce cognitive decline. A 2017 Nutrients study found daily avocado improved cognitive flexibility. Arugula has more nitrates than beetroot per gram — converting to nitric oxide to improve brain blood flow. Capers contain the highest quercetin of any food.",
      benefits:["Lutein for cognitive health","Nitric oxide blood flow","Quercetin anti-inflammatory","Healthy monounsaturated fats"],
      where:"Avocados: Costco 6-pack ($6) | Capers: Goya (Publix $3) | Sun-dried tomatoes: Trader Joe's ($4) | ACV: Bragg's ($4)",
    },
    { id:"l4", name:"Miso Soup with Tofu, Wakame & Mushrooms", emoji:"🍱", time:"20 min", serves:2, costPer:"$2.40", calories:180, protein:"14g", fiber:"4g", difficulty:"Easy", tags:["probiotics","iodine","umami"], color:"#EEEDFE",
      ingredients:["4 cups vegetable broth","3 tbsp white miso paste","200g silken tofu","2 tbsp dried wakame seaweed","1 cup shiitake mushrooms","Green onions, sesame oil, ginger"],
      steps:["Rehydrate wakame 5 min. Simmer broth with mushrooms and ginger 5 min.","Remove ½ cup hot broth, whisk in miso until dissolved.","Return miso mixture to pot (NEVER BOIL — destroys probiotics).","Add tofu, wakame, soy sauce. Top with green onions and sesame oil."],
      science:"Miso is a fermented food rich in probiotics supporting gut-brain axis. Wakame contains iodine (essential for brain metabolism) and fucoidan (prebiotic). Shiitake are one of few plant sources of vitamin D2 and contain lentinan immune modulator. Never boil miso — heat destroys beneficial cultures.",
      benefits:["Active probiotic cultures","Iodine for brain metabolism","Immune-modulating lentinan","Low-calorie nutrient dense"],
      where:"White miso: Hikari (Asian markets $5/tub) | Wakame: dried Asian market ($4) | Silken tofu: Nasoya ($3) | Shiitake: Asian markets ($4)",
    },
    { id:"l5", name:"Falafel Wrap with Tahini & Tabbouleh", emoji:"🫓", time:"30 min", serves:2, costPer:"$4.00", calories:520, protein:"20g", fiber:"13g", difficulty:"Medium", tags:["plant protein","sesamin","heart"], color:"#FAECE7",
      ingredients:["1 can chickpeas","Fresh parsley, cilantro","1 onion, 3 garlic cloves","Cumin, coriander, flour","2 whole wheat wraps","Tahini sauce, tabbouleh, cucumber"],
      steps:["Pulse chickpeas, herbs, onion, garlic, spices in food processor (coarse not smooth).","Form into 8-10 patties. Refrigerate 30 min.","Cook in olive oil 3 min per side until golden.","Layer falafel, tabbouleh, cucumber, tahini in wraps."],
      science:"Sesame tahini contains sesamin and sesamolin — lignans that inhibit delta-5-desaturase, favorably shifting omega-6/omega-3 balance. Homemade falafel has GI of 32 (very low). Chickpea saponins bind bile acids, reducing cholesterol absorption by 10-15%.",
      benefits:["Lowers cholesterol absorption","Favorable omega-3 balance","Very low glycemic index","Calcium-rich tahini"],
      where:"Chickpeas: Goya ($1/can) | Tahini: Soom Foods (Whole Foods $8) | Whole wheat wraps: Mission ($4) | Herbs: Publix produce",
    },
    { id:"l6", name:"Tempeh Buddha Bowl with Ginger Miso Dressing", emoji:"🥣", time:"30 min", serves:2, costPer:"$4.80", calories:550, protein:"32g", fiber:"12g", difficulty:"Medium", tags:["fermented","protein","isoflavones"], color:"#EAF3DE",
      ingredients:["240g tempeh","2 cups cooked brown rice","1 cup edamame","Purple cabbage, carrot, avocado","Soy sauce, sesame oil, maple syrup","Miso-tahini-ginger dressing"],
      steps:["Marinate tempeh in soy sauce, sesame oil, maple syrup 15 min.","Bake at 400°F for 20 min or pan-fry until golden.","Blend dressing: miso, tahini, ginger, lemon, water.","Arrange bowl. Top with tempeh and generous dressing."],
      science:"Tempeh fermentation reduces phytic acid by 40%, dramatically improving zinc and iron absorption. Purple cabbage anthocyanins rival blueberries (90mg/cup). Soy isoflavones are cardioprotective (JAMA Internal Medicine meta-analysis, 2003). Brown rice contains GABA, the calming neurotransmitter.",
      benefits:["40% better mineral absorption","Cardioprotective isoflavones","GABA for stress reduction","Highest plant protein density"],
      where:"Tempeh: Lightlife (Whole Foods, Publix $3) | Edamame: Costco frozen ($8/bag) | Brown rice: Lundberg ($6)",
    },
    { id:"l7", name:"Roasted Beet & Arugula Salad with Goat Cheese", emoji:"🫐", time:"50 min", serves:2, costPer:"$4.40", calories:420, protein:"12g", fiber:"8g", difficulty:"Medium", tags:["nitrates","blood pressure","antioxidants"], color:"#FBEAF0",
      ingredients:["4 medium beets (roasted)","4 cups arugula","¼ cup toasted walnuts","60g goat cheese","¼ cup pomegranate seeds","Balsamic-honey-Dijon dressing","Fresh thyme"],
      steps:["Wrap beets in foil with olive oil. Roast 400°F for 45 min.","Cool, peel, slice into wedges.","Toast walnuts in dry pan 3-4 min.","Arrange arugula, top with beets, goat cheese, walnuts, pomegranate."],
      science:"Beets are the richest dietary nitrate source — reducing systolic BP by 4-10 mmHg (Hypertension, 2010). Pomegranate punicalagin reduced carotid arterial plaque by 30% over 3 years (Aviram et al., Clinical Nutrition, 2004). Arugula isothiocyanates activate Nrf2 antioxidant gene.",
      benefits:["Reduces blood pressure 4-10mmHg","Reverses arterial plaque","Activates antioxidant genes","Vitamin K for heart valves"],
      where:"Beets: Costco pack ($6) | Goat cheese: Trader Joe's ($5) | Pomegranate seeds: Costco POM arils ($7) | Balsamic: Trader Joe's ($4)",
    },
  ],
  dinners: [
    { id:"d1", name:"Saag Dal — Lentils with Spinach & Spices", emoji:"🍛", time:"40 min", serves:4, costPer:"$2.20", calories:380, protein:"22g", fiber:"18g", difficulty:"Medium", tags:["folate","magnesium","anti-inflammatory"], color:"#EAF4EE",
      ingredients:["1.5 cups red lentils","4 cups broth","4 cups spinach","1 can diced tomatoes","Onion, garlic, ginger","Cumin, coriander, turmeric, garam masala","2 tbsp ghee or coconut oil","Brown rice to serve"],
      steps:["Cook lentils in broth with turmeric until soft (20 min).","Tarka: heat ghee, pop cumin seeds, caramelize onion deeply (12 min).","Add garlic, ginger, spices. Add tomatoes, cook 5 min.","Add lentils + spinach. Simmer together 5 min. Season."],
      science:"A 2016 Circulation study found ≥4 servings legumes/week was associated with 22% lower coronary heart disease risk. Folate + B6 from lentils reduce homocysteine — every 5 µmol/L decrease = 19% lower stroke risk. Ghee contains butyrate which nourishes the gut lining and reduces intestinal inflammation.",
      benefits:["22% lower heart disease risk","19% stroke risk reduction","Butyrate for gut health","180mg magnesium per serving"],
      where:"Red lentils: Goya ($2/lb) | Ghee: 4th & Heart (Whole Foods $8) | Spices: Indian grocery (80% cheaper than McCormick) | Budget: $8.80/pot",
    },
    { id:"d2", name:"Wild Mushroom Risotto with Parmesan & Thyme", emoji:"🍄", time:"45 min", serves:4, costPer:"$5.20", calories:480, protein:"18g", fiber:"3g", difficulty:"Hard", tags:["ergothioneine","umami","vitamin D"], color:"#FFF8E7",
      ingredients:["1.5 cups Arborio rice","1 oz dried porcini mushrooms","2 cups mixed fresh mushrooms","4 cups warm vegetable broth","1 cup dry white wine","Onion, garlic, Parmesan, butter, thyme"],
      steps:["Rehydrate porcini 20 min. Sauté fresh mushrooms in butter until golden.","Sauté onion and garlic. Toast Arborio rice 2 min.","Add wine, stir until absorbed. Add warm broth one ladle at a time.","After 22 min, stir in butter and Parmesan off heat. Top with mushrooms."],
      science:"Mushrooms are the only plant containing ergothioneine — a unique antioxidant that accumulates in mitochondria protecting against oxidative DNA damage. Regular mushroom consumers have significantly lower rates of mild cognitive impairment (Feng et al., J. Alzheimer's Disease, 2019). Aged Parmesan has no lactose and contains CLA.",
      benefits:["Unique ergothioneine antioxidant","Mitochondrial protection","Vitamin D2 source","Reduces cognitive decline risk"],
      where:"Arborio rice: RiceSelect (Publix, Target $5) | Dried porcini: Trader Joe's ($5) | Fresh mushrooms: Costco mixed pack ($7) | Parmesan: Costco block ($12/lb)",
    },
    { id:"d3", name:"Chickpea Tikka Masala", emoji:"🧡", time:"35 min", serves:4, costPer:"$2.80", calories:420, protein:"18g", fiber:"14g", difficulty:"Easy", tags:["lycopene","lauric acid","prebiotic"], color:"#FAECE7",
      ingredients:["2 cans chickpeas","1 can coconut milk","1 can crushed tomatoes","Large onion, garlic, ginger","3 tbsp tikka masala paste","Garam masala, cumin","Fresh cilantro, brown rice, naan"],
      steps:["Deeply caramelize diced onion (15 min).","Add garlic, ginger, tikka paste, cumin. Cook 3 min.","Add tomatoes, cook 8 min until sauce darkens.","Add coconut milk + chickpeas. Simmer 10 min. Finish with garam masala."],
      science:"Tomatoes cooked in fat have 3-4x more bioavailable lycopene. Each 2mg/day increase in dietary lycopene reduces cardiovascular risk by 9% (Cancer Causes & Control, 2020). Coconut lauric acid raises HDL cholesterol more than any other dietary fat. Chickpea galactooligosaccharides are potent prebiotics.",
      benefits:["3-4x more bioavailable lycopene","Raises protective HDL cholesterol","Prebiotic chickpeas for gut","Synergistic anti-inflammatory spices"],
      where:"Tikka masala paste: Patak's (Publix $4/jar) | Coconut milk: Thai Kitchen ($2.50) | Crushed tomatoes: San Marzano (World Market at Publix $3) | Basmati: Lundberg ($6)",
    },
    { id:"d4", name:"Stuffed Portobello Mushrooms with Quinoa & Kale", emoji:"🌿", time:"40 min", serves:2, costPer:"$5.60", calories:460, protein:"22g", fiber:"9g", difficulty:"Medium", tags:["sulforaphane","vitamin D","complete protein"], color:"#EAF3DE",
      ingredients:["4 large portobello caps","1 cup cooked quinoa","2 cups kale","Sun-dried tomatoes, pine nuts","60g goat cheese","Garlic, olive oil, balsamic","Fresh basil, lemon zest"],
      steps:["Clean portobellos, brush with oil. Pre-bake gill-side up 10 min at 400°F.","Sauté kale with garlic and balsamic until wilted.","Mix quinoa with kale, sun-dried tomatoes, pine nuts, lemon zest.","Stuff mushrooms, top with goat cheese. Bake 15 more min."],
      science:"Portobellos placed gill-side up in direct sun 2 hours can provide up to 400% DV vitamin D. Kale sulforaphane activates Nrf2 pathway — 200+ detoxification genes upregulated. A 2018 JAMA Internal Medicine study found sulforaphane equivalent to 2 cups kale/day improved fasting blood glucose by 10%.",
      benefits:["Up to 400% DV Vitamin D","Sulforaphane anti-cancer protection","Nrf2 antioxidant gene activation","Pine nut CCK satiety hormone"],
      where:"Portobello caps: All grocery stores ($4) | Pine nuts: Trader Joe's ($6) | Kale: Costco pre-washed ($5) | Goat cheese: Laura Chenel ($5)",
    },
    { id:"d5", name:"Sweet Potato & Black Bean Chili", emoji:"🌶️", time:"45 min", serves:6, costPer:"$1.60", calories:340, protein:"16g", fiber:"18g", difficulty:"Easy", tags:["beta-carotene","anthocyanins","DASH"], color:"#FAECE7",
      ingredients:["2 large sweet potatoes (cubed)","2 cans black beans","1 can diced tomatoes, 1 can corn","Large onion, garlic","Chili powder, cumin, smoked paprika","3 cups vegetable broth","Lime, avocado, cilantro, Greek yogurt"],
      steps:["Sauté onion 5 min, add garlic and all spices. Cook 2 min.","Add sweet potatoes, stir to coat. Add tomatoes, broth, beans, corn.","Bring to boil, reduce, simmer 25-30 min.","Finish with lime. Top with avocado, cilantro, Greek yogurt."],
      science:"A 2009 Archives of Internal Medicine study found a DASH diet rich in legumes and sweet potatoes reduced systolic BP by 11.4 mmHg — comparable to antihypertensive medication. Black beans contain anthocyanins similar to blueberries. Capsaicin activates TRPV1 receptors, temporarily increasing metabolism by 4-5%.",
      benefits:["Lowers BP like medication","Black bean anthocyanins","Beta-carotene immune support","Boosts metabolism via capsaicin"],
      where:"Sweet potatoes: Costco 5lb bag ($5) | Black beans: Goya canned (Walmart $1/can) | Budget score: $1.60/serving — exceptional value",
    },
    { id:"d6", name:"Baked Eggplant Parmesan", emoji:"🍆", time:"60 min", serves:4, costPer:"$4.00", calories:380, protein:"22g", fiber:"8g", difficulty:"Medium", tags:["nasunin","lycopene","ACE inhibitor"], color:"#EEEDFE",
      ingredients:["2 large eggplants","2 cups marinara sauce","1.5 cups mozzarella","60g Parmesan","2 eggs, 1 cup whole wheat breadcrumbs","Garlic powder, Italian herbs, olive oil","Fresh basil"],
      steps:["Salt eggplant rounds, rest 30 min. Rinse and pat dry.","Dip in egg, then breadcrumbs. Bake 400°F: 20 min, flip, 15 more min.","Layer in baking dish: sauce → eggplant → mozzarella → Parmesan.","Bake covered 20 min, uncovered 10 min. Rest 10 min before serving."],
      science:"Eggplant nasunin (750mg/100g) protects brain cell membranes from free radical damage and chelates iron, reducing oxidative stress. Eggplant phenolics inhibit ACE activity, lowering blood pressure through the same mechanism as ACE inhibitor medications (Noda et al., 2000). Marinara provides concentrated lycopene.",
      benefits:["Nasunin brain cell protection","ACE inhibitor-like BP reduction","Concentrated lycopene from sauce","Calcium-rich mozzarella & Parmesan"],
      where:"Eggplant: All grocery stores ($2) | Marinara: Rao's Homemade Costco ($9/2 jars) | Mozzarella: Galbani ($5) | Parmesan: Costco block ($12)",
    },
    { id:"d7", name:"Thai Green Curry with Vegetables & Tofu", emoji:"🥥", time:"35 min", serves:4, costPer:"$3.60", calories:420, protein:"20g", fiber:"7g", difficulty:"Medium", tags:["MCT","sulforaphane","capsaicin"], color:"#EAF4EE",
      ingredients:["400g firm tofu (cubed)","1 can coconut milk","2 tbsp green curry paste","Zucchini, bell pepper, snap peas, broccoli","Bamboo shoots, Thai basil","Lime juice, maple syrup","Brown jasmine rice to serve"],
      steps:["Pan-fry tofu until golden on all sides. Set aside.","Fry curry paste 2 min until fragrant.","Pour in coconut milk, stir to combine.","Add vegetables by cooking time: broccoli first, then others. Add tofu. Simmer 8 min.","Finish with lime, maple syrup, Thai basil."],
      science:"Green curry paste lemongrass contains citral which induces cancer cell apoptosis and inhibits pro-inflammatory cytokines. Galangal inhibits 5-LOX, reducing leukotriene synthesis (cardiovascular benefit). Broccoli sulforaphane + coconut MCT brain fuel + capsaicin TRPV1 activation = synergistic anti-inflammatory + neuroprotective meal.",
      benefits:["Lemongrass cytokine inhibition","5-LOX cardiovascular protection","MCT fast brain fuel","Broccoli sulforaphane"],
      where:"Green curry paste: Maesri (Asian market $2/can) | Coconut milk: Thai Kitchen ($2.50) | Thai basil: Asian grocery ($2) | Bamboo shoots: Walmart or Asian market ($1.50)",
    },
  ],
};

const weekPlan = [
  [{b:"b1",l:"l1",d:"d1"},{b:"b2",l:"l2",d:"d2"},{b:"b3",l:"l3",d:"d3"},{b:"b4",l:"l4",d:"d4"},{b:"b5",l:"l5",d:"d5"},{b:"b6",l:"l6",d:"d6"},{b:"b7",l:"l7",d:"d7"}],
  [{b:"b2",l:"l1",d:"d3"},{b:"b3",l:"l2",d:"d4"},{b:"b4",l:"l3",d:"d5"},{b:"b5",l:"l4",d:"d6"},{b:"b6",l:"l5",d:"d7"},{b:"b7",l:"l6",d:"d1"},{b:"b1",l:"l7",d:"d2"}],
  [{b:"b3",l:"l2",d:"d5"},{b:"b4",l:"l3",d:"d6"},{b:"b5",l:"l4",d:"d7"},{b:"b6",l:"l5",d:"d1"},{b:"b7",l:"l6",d:"d2"},{b:"b1",l:"l7",d:"d3"},{b:"b2",l:"l1",d:"d4"}],
  [{b:"b4",l:"l3",d:"d7"},{b:"b5",l:"l4",d:"d1"},{b:"b6",l:"l5",d:"d2"},{b:"b7",l:"l6",d:"d3"},{b:"b1",l:"l7",d:"d4"},{b:"b2",l:"l1",d:"d5"},{b:"b3",l:"l2",d:"d6"}],
];
const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const fullDayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function getMealById(id) {
  const all = [...meals.breakfasts, ...meals.lunches, ...meals.dinners];
  return all.find(m => m.id === id);
}

const SCIENCE_FACTS = [
  { icon: "🧠", title: "The MIND Diet Effect", stat: "53%", desc: "reduction in Alzheimer's disease risk with strict adherence", source: "Morris et al., Alzheimer's & Dementia, 2015" },
  { icon: "❤️", title: "PREDIMED Trial", stat: "30%", desc: "reduction in heart attack risk over 5 years on Mediterranean plant-based diet", source: "NEJM, 2013, n=7,447" },
  { icon: "🫐", title: "Blueberry Effect", stat: "25%", desc: "improvement in memory performance from regular anthocyanin consumption", source: "Devore et al., JAMA Internal Medicine, 2012" },
  { icon: "🌱", title: "Legume Power", stat: "22%", desc: "lower coronary heart disease risk with ≥4 legume servings per week", source: "Circulation, 2016" },
  { icon: "🥗", title: "Nitrate Science", stat: "10mmHg", desc: "systolic blood pressure reduction from dietary nitrates in beets and arugula", source: "Hypertension Journal, 2010" },
  { icon: "🍄", title: "Mushroom Cognition", stat: "2x less", desc: "likelihood of mild cognitive impairment in regular mushroom consumers", source: "Feng et al., J. Alzheimer's Disease, 2019" },
];

const COST_DATA = [
  { category: "Breakfasts (avg)", daily: "$2.80", weekly: "$19.60", monthly: "$84" },
  { category: "Lunches (avg)", daily: "$3.20", weekly: "$22.40", monthly: "$96" },
  { category: "Dinners (avg)", daily: "$3.40", weekly: "$23.80", monthly: "$102" },
  { category: "Pantry staples", daily: "—", weekly: "$12.00", monthly: "$48" },
  { category: "Supplements", daily: "—", weekly: "$7.00", monthly: "$28" },
  { category: "TOTAL", daily: "$11.50", weekly: "$84.80", monthly: "$358", isTotal: true },
];

const STORES = [
  { name: "Costco", icon: "🏢", specialty: "Bulk staples", savings: "40-60% off", items: "Frozen berries, walnuts, avocados, olive oil, quinoa, Greek yogurt" },
  { name: "Trader Joe's", icon: "🛒", specialty: "Value specialty", savings: "20-40% off", items: "Goat cheese, kalamata olives, tahini, tempeh, granola" },
  { name: "Whole Foods", icon: "🌿", specialty: "Organic & specialty", savings: "Prime discount", items: "Highest quality produce, specialty grains, supplements" },
  { name: "Asian/Indian Market", icon: "🌏", specialty: "Spices & tofu", savings: "70-80% off spices", items: "Turmeric, miso, tofu, tempeh, seaweed, coconut milk" },
  { name: "Publix/Kroger", icon: "🏪", specialty: "Fresh weekly", savings: "BOGO deals", items: "Local produce, fresh herbs, dairy, eggs, pantry staples" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function TagBadge({ tag }) {
  const colors = { "heart": "#FFE4E4", "brain": "#E8F0FE", "omega-3": "#E1F5EE", "antioxidants": "#F3E5F5",
    "protein": "#FFF3E0", "probiotics": "#E8F5E9", "anti-inflammatory": "#FFF8E7", "MCT": "#EDE7F6",
    "lycopene": "#FFEBEE", "folate": "#E3F2FD", "nitrates": "#FCE4EC", "sulforaphane": "#E8F5E9",
    "fiber": "#F1F8E9", "lutein": "#E0F7FA", "fermented": "#FBE9E7", "complete protein": "#EAF4EE",
    "Mediterranean": "#E8EAF6", "isoflavones": "#FCE4EC", "ergothioneine": "#FFF9C4",
    "B12": "#E3F2FD", "iodine": "#E8EAF6", "choline": "#F3E5F5", "beta-carotene": "#FFF3E0",
    "ACE inhibitor": "#FFEBEE", "nasunin": "#EDE7F6", "gut-brain": "#E8F5E9", "capsaicin": "#FFEBEE",
    "umami": "#FFF8E7", "magnesium": "#E1F5EE", "prebiotic": "#F1F8E9", "lauric acid": "#FFF3E0",
    "DASH": "#E3F2FD", "sesamin": "#F3E5F5", "anthocyanins": "#F3E5F5",
  };
  const bg = colors[tag] || "#F5F5F5";
  return <span style={{ background: bg, border: `1px solid ${bg.replace(")", ", 0.8)").replace("#", "rgba(").replace(/[a-f0-9]{2}/gi, (c) => parseInt(c, 16) + ",")}`, borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 500, color: "#333", display: "inline-block", margin: "2px 3px" }}>{tag}</span>;
}

function DifficultyDot({ level }) {
  const colors = { Easy: "#40916C", Medium: "#D4A017", Hard: "#B5451B" };
  return <span style={{ color: colors[level], fontWeight: 600, fontSize: 12 }}>● {level}</span>;
}

function RecipeCard({ meal, onPress }) {
  return (
    <div onClick={() => onPress(meal)} style={{ background: "#fff", borderRadius: 16, border: "0.5px solid #e0e0e0", padding: "16px", cursor: "pointer", marginBottom: 12, transition: "transform 0.15s", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ fontSize: 36, lineHeight: 1 }}>{meal.emoji}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1a1a", marginBottom: 4, lineHeight: 1.3 }}>{meal.name}</div>
          <div style={{ display: "flex", gap: 12, marginBottom: 8, fontSize: 12, color: "#666" }}>
            <span>⏱ {meal.time}</span>
            <span>👥 {meal.serves}</span>
            <span style={{ color: COLORS.emerald, fontWeight: 600 }}>💰 {meal.costPer}</span>
          </div>
          <div style={{ display: "flex", gap: 8, fontSize: 12, marginBottom: 8, color: "#555" }}>
            <span>{meal.calories} cal</span><span>·</span><span>{meal.protein} protein</span><span>·</span><span>{meal.fiber} fiber</span>
          </div>
          <div>{meal.tags.slice(0,3).map(t => <TagBadge key={t} tag={t} />)}</div>
        </div>
        <ChevronRight size={18} color="#ccc" />
      </div>
    </div>
  );
}

function RecipeDetail({ meal, onBack }) {
  const [activeTab, setActiveTab] = useState("recipe");
  const tabs = [{ id: "recipe", label: "Recipe" }, { id: "science", label: "Science" }, { id: "shop", label: "Where to Buy" }];
  return (
    <div style={{ height: "100%", overflowY: "auto" }}>
      <div style={{ position: "sticky", top: 0, background: "#fff", zIndex: 10, padding: "12px 16px", borderBottom: "0.5px solid #eee", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.emerald, padding: 0, display: "flex", alignItems: "center", gap: 4 }}>
          <ArrowLeft size={20} /><span style={{ fontSize: 14, fontWeight: 500 }}>Back</span>
        </button>
      </div>
      <div style={{ padding: "20px 16px" }}>
        <div style={{ fontSize: 52, textAlign: "center", marginBottom: 12 }}>{meal.emoji}</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", textAlign: "center", marginBottom: 8, lineHeight: 1.3 }}>{meal.name}</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 12, fontSize: 13, color: "#666" }}>
          <span>⏱ {meal.time}</span><span>👥 {meal.serves} servings</span><DifficultyDot level={meal.difficulty} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 16 }}>
          {meal.tags.map(t => <TagBadge key={t} tag={t} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
          {[["Cal", meal.calories],[  "Protein", meal.protein],["Fiber", meal.fiber],["Cost", meal.costPer]].map(([k, v]) => (
            <div key={k} style={{ background: COLORS.lightBg, borderRadius: 12, padding: "10px 6px", textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.emerald }}>{v}</div>
              <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{k}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", borderBottom: "0.5px solid #eee", marginBottom: 20, gap: 0 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ flex: 1, padding: "10px 0", fontSize: 14, fontWeight: 500, background: "none", border: "none", cursor: "pointer", borderBottom: activeTab === t.id ? `2px solid ${COLORS.emerald}` : "2px solid transparent", color: activeTab === t.id ? COLORS.emerald : "#888", transition: "all 0.2s" }}>{t.label}</button>
          ))}
        </div>
        {activeTab === "recipe" && (
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.navy, marginBottom: 12 }}>Ingredients</h3>
            <div style={{ marginBottom: 20 }}>
              {meal.ingredients.map((ing, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "0.5px solid #f0f0f0" }}>
                  <div style={{ width: 8, height: 8, borderRadius: 4, background: COLORS.sage, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "#333" }}>{ing}</span>
                </div>
              ))}
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.navy, marginBottom: 12 }}>Method</h3>
            {meal.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, borderRadius: 14, background: COLORS.emerald, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i+1}</div>
                <p style={{ fontSize: 14, color: "#333", lineHeight: 1.6, margin: 0, paddingTop: 4 }}>{step}</p>
              </div>
            ))}
            <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.navy, marginBottom: 12, marginTop: 20 }}>Health Benefits</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {meal.benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: COLORS.lightBg, borderRadius: 10, padding: "10px 12px" }}>
                  <Check size={16} color={COLORS.emerald} />
                  <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "science" && (
          <div>
            <div style={{ background: "#E8F0FE", borderRadius: 14, padding: 16, marginBottom: 16, borderLeft: `4px solid ${COLORS.navy}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.navy, marginBottom: 8 }}>🔬 Scientific Research</div>
              <p style={{ fontSize: 13, color: "#333", lineHeight: 1.7, margin: 0 }}>{meal.science}</p>
            </div>
            <div style={{ background: COLORS.lightBg, borderRadius: 14, padding: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.emerald, marginBottom: 8 }}>🧪 Key Compounds</div>
              {meal.tags.map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "0.5px solid #ddd" }}>
                  <TagBadge tag={t} />
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "shop" && (
          <div>
            <div style={{ background: COLORS.lightGold || "#FFF8E7", borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.gold, marginBottom: 8 }}>🛒 Where to Buy & Estimated Costs</div>
              <p style={{ fontSize: 13, color: "#333", lineHeight: 1.7, margin: 0 }}>{meal.where}</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, border: "0.5px solid #eee", padding: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.navy, marginBottom: 8 }}>💡 Shopping Tips</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>
                • Buy frozen berries at Costco — frozen at peak ripeness, 40% cheaper<br/>
                • Indian grocery stores sell spices 70-80% cheaper than McCormick<br/>
                • Rao's marinara sauce at Costco offers the best quality-to-value ratio<br/>
                • Compare unit prices, not package prices for best value
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function HomeTab({ onMealPress, today }) {
  const todayPlan = weekPlan[0][today % 7];
  const b = getMealById(todayPlan.b);
  const l = getMealById(todayPlan.l);
  const d = getMealById(todayPlan.d);
  const dailyCal = b.calories + l.calories + d.calories;

  return (
    <div style={{ padding: "0 0 20px" }}>
      <div style={{ background: `linear-gradient(135deg, ${COLORS.emerald} 0%, ${COLORS.teal} 100%)`, padding: "24px 16px 20px", color: "#fff" }}>
        <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>Today's Meal Plan</div>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{fullDayNames[today % 7]}</div>
        <div style={{ fontSize: 13, opacity: 0.85 }}>~{dailyCal} cal · Vegetarian · Brain + Heart Optimized</div>
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
          {[["🧠", "MIND Diet", "Active"], ["❤️", "Heart Safe", "All meals"], ["🌱", "Plant Based", "100%"]].map(([ic, label, val]) => (
            <div key={label} style={{ background: COLORS.lightBg, borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{ic}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: COLORS.emerald }}>{label}</div>
              <div style={{ fontSize: 10, color: "#666" }}>{val}</div>
            </div>
          ))}
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>Today's Meals</h3>
        {[["🌅 Breakfast", b], ["🥗 Lunch", l], ["🌙 Dinner", d]].map(([label, meal]) => (
          <div key={label} onClick={() => onMealPress(meal)} style={{ background: "#fff", borderRadius: 14, border: "0.5px solid #e8e8e8", padding: 14, marginBottom: 10, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 32 }}>{meal.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: COLORS.teal, fontWeight: 600, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}>{meal.name}</div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{meal.calories} cal · {meal.time} · {meal.costPer}</div>
            </div>
            <ChevronRight size={18} color="#ccc" />
          </div>
        ))}
        <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, marginBottom: 12, marginTop: 20 }}>Today's Nutrients</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
          {[["Calories", `~${dailyCal}`, "kcal"],["Protein", `~${parseInt(b.protein)+parseInt(l.protein)+parseInt(d.protein)}g`,"goal: 60g+"],
            ["Fiber", `~${parseInt(b.fiber)+parseInt(l.fiber)+parseInt(d.fiber)}g`,"goal: 35g+"],["Cost", `~$${(parseFloat(b.costPer.replace("$",""))+parseFloat(l.costPer.replace("$",""))+parseFloat(d.costPer.replace("$",""))).toFixed(2)}`,"per day"]].map(([k,v,sub]) => (
            <div key={k} style={{ background: "#fff", borderRadius: 12, border: "0.5px solid #eee", padding: "12px 14px" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.emerald }}>{v}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{k}</div>
              <div style={{ fontSize: 11, color: "#999" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MealPlanTab({ onMealPress }) {
  const [activeWeek, setActiveWeek] = useState(0);
  const weekData = weekPlan[activeWeek];
  return (
    <div style={{ padding: "0 0 20px" }}>
      <div style={{ background: COLORS.navy, padding: "20px 16px 16px", color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>30-Day Meal Calendar</div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Week 1","Week 2","Week 3","Week 4"].map((w, i) => (
            <button key={w} onClick={() => setActiveWeek(i)} style={{ flex: 1, padding: "7px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, background: activeWeek === i ? COLORS.gold : "rgba(255,255,255,0.15)", color: activeWeek === i ? "#1a1a1a" : "#fff", transition: "all 0.2s" }}>{w}</button>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        {weekData.map((day, di) => {
          const b = getMealById(day.b), l = getMealById(day.l), d = getMealById(day.d);
          return (
            <div key={di} style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.navy, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: COLORS.lightBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: COLORS.emerald }}>{dayNames[di]}</div>
                <span>{fullDayNames[di]}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {[["🌅", b], ["🥗", l], ["🌙", d]].map(([ic, meal]) => (
                  <div key={meal.id} onClick={() => onMealPress(meal)} style={{ background: meal.color || "#fff", borderRadius: 12, padding: "10px 8px", cursor: "pointer", border: "0.5px solid #e8e8e8" }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>{meal.emoji}</div>
                    <div style={{ fontSize: 10, color: COLORS.teal, fontWeight: 600, marginBottom: 2 }}>{ic === "🌅" ? "Breakfast" : ic === "🥗" ? "Lunch" : "Dinner"}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}>{meal.name.length > 28 ? meal.name.substring(0,28)+"…" : meal.name}</div>
                    <div style={{ fontSize: 10, color: "#777", marginTop: 4 }}>{meal.costPer}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecipesTab({ onMealPress }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filters = ["All","Breakfast","Lunch","Dinner","Easy","Medium","Hard"];
  const allMeals = [...meals.breakfasts, ...meals.lunches, ...meals.dinners];
  const filtered = allMeals.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchFilter = filter === "All" || (filter === "Breakfast" && m.id.startsWith("b")) || (filter === "Lunch" && m.id.startsWith("l")) || (filter === "Dinner" && m.id.startsWith("d")) || m.difficulty === filter;
    return matchSearch && matchFilter;
  });
  return (
    <div style={{ padding: "0 0 20px" }}>
      <div style={{ background: COLORS.teal, padding: "20px 16px 16px", color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>All 21 Recipes</div>
        <div style={{ position: "relative" }}>
          <Search size={16} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#666" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search recipes or nutrients…" style={{ width: "100%", padding: "10px 12px 10px 36px", borderRadius: 10, border: "none", fontSize: 14, boxSizing: "border-box", color: "#333" }} />
        </div>
      </div>
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 12, scrollbarWidth: "none" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ flexShrink: 0, padding: "7px 14px", borderRadius: 20, border: `1px solid ${filter === f ? COLORS.emerald : "#ddd"}`, background: filter === f ? COLORS.emerald : "#fff", color: filter === f ? "#fff" : "#555", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>{f}</button>
          ))}
        </div>
        <div style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{filtered.length} recipes</div>
        {filtered.map(m => <RecipeCard key={m.id} meal={m} onPress={onMealPress} />)}
      </div>
    </div>
  );
}

function ShopTab() {
  const [view, setView] = useState("stores");
  return (
    <div style={{ padding: "0 0 20px" }}>
      <div style={{ background: COLORS.rust, padding: "20px 16px 16px", color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Shopping Guide</div>
        <div style={{ display: "flex", gap: 8 }}>
          {[["stores","Stores"],["costs","Cost Analysis"],["tips","Smart Tips"]].map(([id, label]) => (
            <button key={id} onClick={() => setView(id)} style={{ flex: 1, padding: "7px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, background: view === id ? "#fff" : "rgba(255,255,255,0.2)", color: view === id ? COLORS.rust : "#fff", transition: "all 0.2s" }}>{label}</button>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        {view === "stores" && (
          <div>
            <p style={{ fontSize: 14, color: "#555", marginBottom: 16, lineHeight: 1.6 }}>Strategic shopping at the right stores saves 40-60% on your grocery bill while maintaining the highest quality ingredients.</p>
            {STORES.map(store => (
              <div key={store.name} style={{ background: "#fff", borderRadius: 14, border: "0.5px solid #eee", padding: 16, marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{store.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: COLORS.navy }}>{store.name}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{store.specialty}</div>
                  </div>
                  <div style={{ marginLeft: "auto", background: COLORS.lightBg, borderRadius: 8, padding: "4px 10px" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.emerald }}>{store.savings}</span>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{store.items}</div>
              </div>
            ))}
          </div>
        )}
        {view === "costs" && (
          <div>
            <div style={{ background: COLORS.lightBg, borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.emerald, textAlign: "center" }}>$9.40</div>
              <div style={{ textAlign: "center", fontSize: 13, color: "#555" }}>per day, all three meals</div>
              <div style={{ textAlign: "center", fontSize: 12, color: "#888", marginTop: 4 }}>vs. $15-25/day US average</div>
            </div>
            <div style={{ borderRadius: 14, border: "0.5px solid #eee", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: COLORS.navy, color: "#fff", padding: "10px 12px" }}>
                {["Category","Daily","Weekly","Monthly"].map(h => <div key={h} style={{ fontSize: 12, fontWeight: 600 }}>{h}</div>)}
              </div>
              {COST_DATA.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "10px 12px", background: row.isTotal ? COLORS.lightBg : i%2===0?"#fff":"#fafafa", borderBottom: "0.5px solid #f0f0f0" }}>
                  <div style={{ fontSize: 12, fontWeight: row.isTotal ? 700 : 400, color: row.isTotal ? COLORS.emerald : "#333" }}>{row.category}</div>
                  <div style={{ fontSize: 12, fontWeight: row.isTotal ? 700 : 400, color: row.isTotal ? COLORS.emerald : "#555" }}>{row.daily}</div>
                  <div style={{ fontSize: 12, fontWeight: row.isTotal ? 700 : 400, color: row.isTotal ? COLORS.emerald : "#555" }}>{row.weekly}</div>
                  <div style={{ fontSize: 12, fontWeight: row.isTotal ? 700 : 400, color: row.isTotal ? COLORS.emerald : "#555" }}>{row.monthly}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#FFF8E7", borderRadius: 12, padding: 14, marginTop: 16, border: "0.5px solid #f0e0a0" }}>
              <div style={{ fontSize: 13, color: "#7a6020", fontWeight: 600, marginBottom: 4 }}>💡 True Cost Comparison</div>
              <div style={{ fontSize: 12, color: "#7a6020", lineHeight: 1.7 }}>The cost of NOT eating well — medical bills, lost productivity, reduced longevity — is estimated at $3,000–10,000/year. This plan saves money on both groceries AND future healthcare.</div>
            </div>
          </div>
        )}
        {view === "tips" && (
          <div>
            {[
              { tip: "Buy pantry staples in bulk", detail: "Costco/Amazon for dried lentils, quinoa, oats, canned tomatoes, olive oil, frozen berries — save 40-60%" },
              { tip: "Shop seasonal produce", detail: "Costs 30-50% less and is nutritionally superior (picked at peak ripeness). Farmer's markets often cheapest." },
              { tip: "Freeze strategically", detail: "Cooked lentils/beans freeze 3 months. Berries, spinach, herbs freeze well. Eliminates food waste." },
              { tip: "Grow your own herbs", detail: "Basil, parsley, cilantro cost $1-2 as a plant and provide months of harvests. Rosemary grows year-round in Florida." },
              { tip: "Buy spices at Indian grocery", detail: "70-80% cheaper than McCormick for turmeric, cumin, coriander, cardamom. Same quality or better." },
              { tip: "Use the Dirty Dozen guide", detail: "Buy organic: strawberries, spinach, kale, bell peppers. Conventional OK: avocados, onions, sweet potatoes." },
              { tip: "Batch cook on Sundays", detail: "Cook a pot of lentils + quinoa + roasted vegetables for the week. Saves 45 min/day in cooking time." },
              { tip: "Compare unit prices always", detail: "Price per ounce often reveals bulk bins at Whole Foods beat packaged items at Publix." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, border: "0.5px solid #eee", padding: 14, marginBottom: 10, display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 32, height: 32, borderRadius: 16, background: COLORS.emerald, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{i+1}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.navy, marginBottom: 4 }}>{item.tip}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ScienceTab() {
  const [activeSection, setActiveSection] = useState("facts");
  const sections = [["facts","Key Findings"],["pillars","7 Pillars"],["supplements","Supplements"]];
  return (
    <div style={{ padding: "0 0 20px" }}>
      <div style={{ background: COLORS.navy, padding: "20px 16px 16px", color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>The Science</div>
        <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 12 }}>Evidence-based nutrition for your brain & heart</div>
        <div style={{ display: "flex", gap: 8 }}>
          {sections.map(([id, label]) => (
            <button key={id} onClick={() => setActiveSection(id)} style={{ flex: 1, padding: "7px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, background: activeSection === id ? COLORS.gold : "rgba(255,255,255,0.15)", color: activeSection === id ? "#1a1a1a" : "#fff", transition: "all 0.2s" }}>{label}</button>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        {activeSection === "facts" && (
          <div>
            <p style={{ fontSize: 14, color: "#555", marginBottom: 16, lineHeight: 1.6 }}>Every recommendation in this plan is backed by peer-reviewed research. Here are the landmark findings that form its scientific foundation.</p>
            {SCIENCE_FACTS.map((fact, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, border: "0.5px solid #eee", padding: 16, marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ fontSize: 32 }}>{fact.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.navy, marginBottom: 4 }}>{fact.title}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 32, fontWeight: 700, color: COLORS.emerald, lineHeight: 1 }}>{fact.stat}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5, marginBottom: 6 }}>{fact.desc}</div>
                    <div style={{ fontSize: 11, color: "#999", fontStyle: "italic" }}>Source: {fact.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeSection === "pillars" && (
          <div>
            <p style={{ fontSize: 14, color: "#555", marginBottom: 16, lineHeight: 1.6 }}>Every meal in this plan is engineered around 7 scientifically validated nutritional strategies.</p>
            {[
              { n:1, title:"Anti-Inflammatory Architecture", color: COLORS.emerald, desc: "Every recipe includes at minimum one potent anti-inflammatory compound — curcumin, omega-3s, quercetin, resveratrol, or sulforaphane. These target NF-κB, the master inflammatory transcription factor." },
              { n:2, title:"Fiber Maximization", color: COLORS.teal, desc: "Target: 35-45g fiber daily (American average: 15g). Diverse fiber types feed different bacterial species, promoting microbiome diversity — the #1 marker of a healthy microbiome." },
              { n:3, title:"Polyphenol Density", color: COLORS.navy, desc: "Target: 1,500+ mg polyphenols daily. Polyphenols act through direct antioxidant activity, epigenetic modification (sirtuin longevity genes), and prebiotic effects." },
              { n:4, title:"Heart-Healthy Fat Architecture", color: COLORS.rust, desc: "Fat quality, not quantity, determines cardiovascular risk. Focus on: olive oil (oleic acid + oleocanthal), avocado (monounsaturated + lutein), walnuts and flaxseed (ALA omega-3)." },
              { n:5, title:"Glycemic Intelligence", color: COLORS.gold, desc: "Every carbohydrate is paired with fiber, protein, or fat. Consistently elevated blood glucose glycates brain proteins (forming AGEs), accelerating neurodegeneration. All grains are whole-grain." },
              { n:6, title:"Complete Amino Acid Profiles", color: COLORS.teal, desc: "Each day provides all 9 essential amino acids through strategic combining: legumes + grains (complementary), tofu (complete), quinoa (complete). Amino acids are neurotransmitter precursors." },
              { n:7, title:"Micronutrient Saturation", color: COLORS.navy, desc: "Key nutrients for brain and heart — B12, folate, magnesium, zinc, iron, iodine, selenium — specifically targeted. Each nutritional gap is addressed through food and supplementation." },
            ].map(p => (
              <div key={p.n} style={{ background: "#fff", borderRadius: 14, border: `2px solid ${p.color}20`, padding: 16, marginBottom: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: p.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>{p.n}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: p.color, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeSection === "supplements" && (
          <div>
            <div style={{ background: "#FFF3E0", borderRadius: 14, padding: 16, marginBottom: 16, border: "0.5px solid #f0c060" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#7a4020", marginBottom: 8 }}>⚠️ Essential for Vegetarians</div>
              <div style={{ fontSize: 13, color: "#7a4020", lineHeight: 1.6 }}>Even with this optimal whole-food diet, vegetarians need targeted supplementation for three nutrients that are difficult to get from plant foods alone.</div>
            </div>
            {[
              { supp: "Vitamin B12", dose: "500mcg methylcobalamin daily OR 2,500mcg weekly", why: "Myelin sheath integrity, red blood cell formation, neurological function. Deficiency causes irreversible nerve damage.", cost: "~$8-15/month", brands: "Jarrow Methylcobalamin, Country Life B12, Solgar" },
              { supp: "Vitamin D3", dose: "2,000–4,000 IU daily (especially October–March)", why: "Bone health, immune function, mood regulation, cardiovascular health. 80% of Americans are deficient. Get blood levels tested.", cost: "~$5-10/month", brands: "Nature Made D3, Thorne, NOW Foods D3 softgels" },
              { supp: "Algae-Based DHA/EPA", dose: "250-500mg combined DHA+EPA daily", why: "40% of brain myelin is DHA. Algae omega-3 is the original source (fish get it from algae) — direct and without mercury/contamination.", cost: "~$15-25/month", brands: "Nordic Naturals Algae Omega, Ovega-3, Testa Omega-3" },
              { supp: "Iodine (if no sea vegetables)", dose: "150mcg iodine daily", why: "Essential for thyroid hormones that regulate brain metabolism. Deficiency is the world's #1 preventable cause of cognitive impairment.", cost: "~$5-8/month", brands: "Thorne Iodine + Selenomethionine, Life Extension Iodine" },
            ].map(s => (
              <div key={s.supp} style={{ background: "#fff", borderRadius: 14, border: "0.5px solid #eee", padding: 16, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: COLORS.navy }}>{s.supp}</div>
                  <div style={{ background: COLORS.lightBg, borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 600, color: COLORS.emerald }}>{s.cost}</div>
                </div>
                <div style={{ background: "#E8F0FE", borderRadius: 8, padding: "8px 12px", marginBottom: 10, fontSize: 12, color: "#1B2A4A", fontWeight: 500 }}>💊 {s.dose}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5, marginBottom: 8 }}>{s.why}</div>
                <div style={{ fontSize: 12, color: "#888" }}>Recommended brands: {s.brands}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function NourishApp() {
  const [tab, setTab] = useState("home");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [today, setToday] = useState(new Date().getDay() || 7 - 1);

  const tabs = [
    { id: "home", label: "Today", Icon: Heart },
    { id: "plan", label: "Plan", Icon: Calendar },
    { id: "recipes", label: "Recipes", Icon: BookOpen },
    { id: "shop", label: "Shop", Icon: ShoppingCart },
    { id: "science", label: "Science", Icon: FlaskConical },
  ];

  const handleMealPress = (meal) => setSelectedMeal(meal);
  const handleBack = () => setSelectedMeal(null);

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", background: "#f8f8f8", minHeight: 700, display: "flex", flexDirection: "column", border: "0.5px solid #ddd", borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <div style={{ flex: 1, overflowY: "auto", background: "#f8f8f8" }}>
        {selectedMeal ? (
          <RecipeDetail meal={selectedMeal} onBack={handleBack} />
        ) : (
          <>
            {tab === "home" && <HomeTab onMealPress={handleMealPress} today={today} />}
            {tab === "plan" && <MealPlanTab onMealPress={handleMealPress} />}
            {tab === "recipes" && <RecipesTab onMealPress={handleMealPress} />}
            {tab === "shop" && <ShopTab />}
            {tab === "science" && <ScienceTab />}
          </>
        )}
      </div>
      {!selectedMeal && (
        <div style={{ display: "flex", background: "#fff", borderTop: "0.5px solid #e8e8e8", padding: "8px 0 4px" }}>
          {tabs.map(({ id, label, Icon }) => (
            <button key={id} onClick={() => setTab(id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "6px 0", border: "none", background: "none", cursor: "pointer", transition: "all 0.15s" }}>
              <Icon size={22} color={tab === id ? COLORS.emerald : "#aaa"} strokeWidth={tab === id ? 2.5 : 1.8} />
              <span style={{ fontSize: 10, fontWeight: tab === id ? 700 : 400, color: tab === id ? COLORS.emerald : "#aaa" }}>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
