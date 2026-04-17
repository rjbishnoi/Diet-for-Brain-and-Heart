import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';
import TagBadge from '../components/TagBadge';

const DIFF_COLORS = { Easy: COLORS.teal, Medium: '#C4920F', Hard: '#A63A1A' };

export default function RecipeDetailScreen({ route, navigation }) {
  const { meal } = route.params;
  const [activeTab, setActiveTab] = useState('recipe');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
        {/* Sticky Header */}
        <View style={styles.stickyHdr}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={styles.stickyType}>{meal.type}</Text>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>{meal.emoji}</Text>
          <Text style={styles.heroName}>{meal.name}</Text>
          <View style={styles.heroMeta}>
            <Text style={styles.metaTxt}>⏱ {meal.time}</Text>
            <Text style={styles.metaTxt}>  👥 {meal.servings} servings</Text>
            <Text style={[styles.metaDiff, { color: DIFF_COLORS[meal.difficulty] || COLORS.text3 }]}>
              {'  '}● {meal.difficulty}
            </Text>
          </View>
          <View style={styles.tagsWrap}>
            {meal.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
          </View>

          {/* Metric Row */}
          <View style={styles.metricRow}>
            {[
              ['Cal', meal.calories],
              ['Protein', meal.protein],
              ['Fiber', meal.fiber],
              ['Cost', meal.cost],
            ].map(([label, val]) => (
              <View key={label} style={styles.metricCard}>
                <Text style={styles.metricVal}>{val}</Text>
                <Text style={styles.metricLbl}>{label}</Text>
              </View>
            ))}
          </View>

          {/* Sub Tabs */}
          <View style={styles.tabs}>
            {['recipe', 'science', 'shop'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tab Content */}
        <View style={styles.tabContent}>
          {activeTab === 'recipe' && <RecipeTab meal={meal} />}
          {activeTab === 'science' && <ScienceTab meal={meal} />}
          {activeTab === 'shop' && <ShopTab meal={meal} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function RecipeTab({ meal }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {meal.ingredients.map((ing, i) => (
        <View key={i} style={styles.ingRow}>
          <View style={styles.ingDot} />
          <Text style={styles.ingText}>{ing}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Method</Text>
      {meal.steps.map((step, i) => (
        <View key={i} style={styles.stepRow}>
          <View style={styles.stepNum}>
            <Text style={styles.stepNumText}>{i + 1}</Text>
          </View>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Health Benefits</Text>
      {meal.benefits.map((b, i) => (
        <View key={i} style={styles.benefitRow}>
          <Text style={styles.checkmark}>✓</Text>
          <Text style={styles.benefitText}>{b}</Text>
        </View>
      ))}
    </View>
  );
}

function ScienceTab({ meal }) {
  return (
    <View>
      <View style={styles.sciBox}>
        <Text style={styles.sciLabel}>🔬  PEER-REVIEWED RESEARCH</Text>
        <Text style={styles.sciText}>{meal.science}</Text>
      </View>

      <Text style={styles.sectionTitle}>Bioactive Compounds</Text>
      <View style={styles.tagsWrapLarge}>
        {meal.tags.map(tag => <TagBadge key={tag} tag={tag} large />)}
      </View>

      <View style={styles.nutrProfileBox}>
        <Text style={styles.nutrProfileTitle}>📊  NUTRITIONAL PROFILE</Text>
        <View style={styles.nutrGrid}>
          {[
            ['Calories', `${meal.calories} kcal`],
            ['Protein', meal.protein],
            ['Fiber', meal.fiber],
            ['Cost/serving', meal.cost],
            ['Difficulty', meal.difficulty],
            ['Servings', `${meal.servings}`],
          ].map(([k, v]) => (
            <View key={k} style={styles.nutrCell}>
              <Text style={styles.nutrVal}>{v}</Text>
              <Text style={styles.nutrKey}>{k}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function ShopTab({ meal }) {
  return (
    <View>
      <View style={styles.shopBox}>
        <Text style={styles.shopLabel}>🛒  WHERE TO BUY & ESTIMATED COSTS</Text>
        <Text style={styles.shopText}>{meal.shopping}</Text>
      </View>

      <View style={styles.tipsBox}>
        <Text style={styles.tipsTitle}>💡  PRO SHOPPING TIPS</Text>
        {[
          'Indian grocery stores sell spices 70–80% cheaper than McCormick',
          'Costco gives the best price on nuts, oils, frozen berries, and canned goods',
          'Frozen fruits & vegetables are often MORE nutritious than "fresh"',
          'Compare $/oz unit prices — never compare shelf prices',
        ].map((tip, i) => (
          <View key={i} style={styles.tipRow}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },

  stickyHdr: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 16, paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.97)',
    borderBottomWidth: 0.5, borderBottomColor: COLORS.border,
  },
  backBtn: { paddingRight: 8 },
  backText: { fontSize: 16, ...FONTS.bold, color: COLORS.emerald },
  stickyType: { fontSize: 13, color: COLORS.text3, ...FONTS.medium },

  hero: { padding: 18, paddingTop: 16, alignItems: 'center' },
  heroEmoji: { fontSize: 64, marginBottom: 12 },
  heroName: {
    fontSize: 20, ...FONTS.extrabold, color: COLORS.text,
    textAlign: 'center', lineHeight: 28, marginBottom: 10, paddingHorizontal: 10,
  },
  heroMeta: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', justifyContent: 'center' },
  metaTxt: { fontSize: 12, color: COLORS.text3 },
  metaDiff: { fontSize: 12, fontWeight: '700' },
  tagsWrap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 14 },
  tagsWrapLarge: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 14 },

  metricRow: { flexDirection: 'row', gap: 8, marginBottom: 14, width: '100%' },
  metricCard: {
    flex: 1, backgroundColor: COLORS.lightBg,
    borderRadius: RADIUS.sm, paddingVertical: 10, alignItems: 'center',
  },
  metricVal: { fontSize: 15, ...FONTS.extrabold, color: COLORS.emerald },
  metricLbl: { fontSize: 10, color: COLORS.text3, marginTop: 2 },

  tabs: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: COLORS.border, width: '100%' },
  tab: { flex: 1, paddingVertical: 11, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: COLORS.emerald },
  tabText: { fontSize: 13, ...FONTS.semibold, color: '#AAA' },
  tabTextActive: { color: COLORS.emerald },

  tabContent: { paddingHorizontal: 16, paddingTop: 6, paddingBottom: 40 },

  sectionTitle: { fontSize: 15, ...FONTS.extrabold, color: COLORS.navy, marginTop: 18, marginBottom: 10 },

  ingRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: '#F5F5F5' },
  ingDot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: COLORS.sage, flexShrink: 0 },
  ingText: { fontSize: 13, color: COLORS.text, flex: 1 },

  stepRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', marginBottom: 12 },
  stepNum: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: COLORS.emerald, justifyContent: 'center', alignItems: 'center', flexShrink: 0,
  },
  stepNumText: { color: '#FFF', ...FONTS.extrabold, fontSize: 12 },
  stepText: { fontSize: 13, color: COLORS.text2, lineHeight: 20, flex: 1, paddingTop: 4 },

  benefitRow: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 10,
    backgroundColor: COLORS.lightBg, borderRadius: RADIUS.sm,
    padding: 10, marginBottom: 7,
  },
  checkmark: { fontSize: 15, color: COLORS.emerald, fontWeight: '700' },
  benefitText: { fontSize: 12, ...FONTS.semibold, color: COLORS.text, flex: 1, lineHeight: 18 },

  sciBox: {
    backgroundColor: COLORS.lightBlue, borderRadius: RADIUS.md,
    padding: 14, borderLeftWidth: 3, borderLeftColor: COLORS.navy, marginTop: 10,
  },
  sciLabel: { fontSize: 10, ...FONTS.extrabold, color: COLORS.navy, marginBottom: 6, letterSpacing: 0.5 },
  sciText: { fontSize: 12, color: '#2c3e70', lineHeight: 20 },

  nutrProfileBox: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border, padding: 14, marginTop: 14,
  },
  nutrProfileTitle: { fontSize: 10, ...FONTS.extrabold, color: COLORS.navy, marginBottom: 10, letterSpacing: 0.5 },
  nutrGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  nutrCell: {
    width: '30%', backgroundColor: COLORS.lightBg,
    borderRadius: RADIUS.sm, padding: 10, alignItems: 'center',
  },
  nutrVal: { fontSize: 14, ...FONTS.extrabold, color: COLORS.emerald },
  nutrKey: { fontSize: 10, color: COLORS.text3, marginTop: 2, textAlign: 'center' },

  shopBox: {
    backgroundColor: COLORS.lightGold, borderRadius: RADIUS.md,
    padding: 14, marginTop: 10,
  },
  shopLabel: { fontSize: 10, ...FONTS.extrabold, color: '#8B6914', marginBottom: 7, letterSpacing: 0.5 },
  shopText: { fontSize: 12, color: '#5a4010', lineHeight: 20 },

  tipsBox: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border, padding: 14, marginTop: 12,
  },
  tipsTitle: { fontSize: 10, ...FONTS.extrabold, color: COLORS.navy, marginBottom: 10, letterSpacing: 0.5 },
  tipRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
  tipBullet: { fontSize: 16, color: COLORS.emerald, lineHeight: 20 },
  tipText: { fontSize: 12, color: COLORS.text2, flex: 1, lineHeight: 19 },
});
