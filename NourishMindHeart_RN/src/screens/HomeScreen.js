import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';
import { BREAKFASTS, LUNCHES, DINNERS, WEEK_PLAN, DAY_NAMES } from '../data';

function getTodayIndex() {
  const day = new Date().getDay(); // 0 = Sunday
  return day === 0 ? 6 : day - 1;  // Convert to Mon=0 ... Sun=6
}

export default function HomeScreen({ navigation }) {
  const todayIdx = getTodayIndex();
  const plan = WEEK_PLAN[0][todayIdx];
  const breakfast = BREAKFASTS[plan.b];
  const lunch = LUNCHES[plan.l];
  const dinner = DINNERS[plan.d];

  const totalCal = breakfast.calories + lunch.calories + dinner.calories;
  const totalPro = parseInt(breakfast.protein) + parseInt(lunch.protein) + parseInt(dinner.protein);
  const totalFib = parseInt(breakfast.fiber) + parseInt(lunch.fiber) + parseInt(dinner.fiber);
  const totalCost = (
    parseFloat(breakfast.cost.replace('$', '')) +
    parseFloat(lunch.cost.replace('$', '')) +
    parseFloat(dinner.cost.replace('$', ''))
  ).toFixed(2);

  const openMeal = (meal) => navigation.navigate('RecipeDetail', { meal });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Today's Plan</Text>
          <Text style={styles.headerSub}>{DAY_NAMES[todayIdx]} · Brain & Heart Optimized</Text>
        </View>

        <View style={styles.content}>
          {/* Hero Stats */}
          <View style={styles.heroGrid}>
            {[
              { icon: '🧠', label: 'MIND Diet', sub: 'Active today' },
              { icon: '❤️', label: 'Heart Safe', sub: 'All 3 meals' },
              { icon: '🌱', label: '100% Plant', sub: 'Based meals' },
            ].map((s) => (
              <View key={s.label} style={styles.heroCard}>
                <Text style={styles.heroIcon}>{s.icon}</Text>
                <Text style={styles.heroLabel}>{s.label}</Text>
                <Text style={styles.heroSub}>{s.sub}</Text>
              </View>
            ))}
          </View>

          {/* Today's Meals */}
          <Text style={styles.sectionTitle}>Today's Meals</Text>
          {[
            { label: '🌅  Breakfast', meal: breakfast },
            { label: '🥗  Lunch', meal: lunch },
            { label: '🌙  Dinner', meal: dinner },
          ].map(({ label, meal }) => (
            <TouchableOpacity
              key={meal.id}
              style={styles.mealRow}
              onPress={() => openMeal(meal)}
              activeOpacity={0.8}
            >
              <Text style={styles.mealEmoji}>{meal.emoji}</Text>
              <View style={styles.mealInfo}>
                <Text style={styles.mealType}>{label}</Text>
                <Text style={styles.mealName}>{meal.name}</Text>
                <Text style={styles.mealMeta}>{meal.calories} cal · {meal.time} · {meal.cost}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}

          {/* Nutrition Summary */}
          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Today's Nutrition</Text>
          <View style={styles.nutrGrid}>
            {[
              { val: `~${totalCal}`, name: 'Calories', sub: 'kcal total' },
              { val: `~${totalPro}g`, name: 'Protein', sub: 'goal: 60g+' },
              { val: `~${totalFib}g`, name: 'Fiber', sub: 'goal: 35g+' },
              { val: `$${totalCost}`, name: 'Daily Cost', sub: '3 full meals' },
            ].map((n) => (
              <View key={n.name} style={styles.nutrCard}>
                <Text style={styles.nutrVal}>{n.val}</Text>
                <Text style={styles.nutrName}>{n.name}</Text>
                <Text style={styles.nutrSub}>{n.sub}</Text>
              </View>
            ))}
          </View>

          {/* Science Quote */}
          <View style={styles.scienceBox}>
            <Text style={styles.scienceLabel}>📚  SCIENCE OF THE DAY</Text>
            <Text style={styles.scienceText}>
              Following this plant-based MIND diet pattern for just one year is associated with cognitive
              function equivalent to being{' '}
              <Text style={{ fontWeight: '800' }}>7.5 years younger</Text>
              {' '}than peers eating a standard Western diet.
              {'\n\n'}
              <Text style={styles.scienceSource}>Morris et al., Alzheimer's & Dementia, 2015</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  scroll: { flex: 1 },

  header: {
    backgroundColor: COLORS.emerald,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: { fontSize: 22, ...FONTS.extrabold, color: '#FFF', letterSpacing: -0.5 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 3 },

  content: { padding: 16 },

  heroGrid: { flexDirection: 'row', gap: 10, marginBottom: 18 },
  heroCard: {
    flex: 1, backgroundColor: COLORS.lightBg,
    borderRadius: RADIUS.md, padding: 12, alignItems: 'center',
  },
  heroIcon: { fontSize: 20, marginBottom: 4 },
  heroLabel: { fontSize: 11, ...FONTS.bold, color: COLORS.emerald, textAlign: 'center' },
  heroSub: { fontSize: 10, color: COLORS.text3, textAlign: 'center', marginTop: 2 },

  sectionTitle: { fontSize: 16, ...FONTS.extrabold, color: COLORS.navy, marginBottom: 10 },

  mealRow: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border,
    padding: 14, marginBottom: 10,
    flexDirection: 'row', alignItems: 'center', gap: 12,
    ...SHADOW.small,
  },
  mealEmoji: { fontSize: 34 },
  mealInfo: { flex: 1 },
  mealType: { fontSize: 10, color: COLORS.teal, ...FONTS.bold, marginBottom: 2 },
  mealName: { fontSize: 14, ...FONTS.bold, color: COLORS.text, lineHeight: 20, marginBottom: 2 },
  mealMeta: { fontSize: 11, color: COLORS.text3 },
  chevron: { fontSize: 22, color: '#CCC' },

  nutrGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  nutrCard: {
    width: '47%', backgroundColor: COLORS.white,
    borderRadius: RADIUS.md, borderWidth: 0.5,
    borderColor: COLORS.border, padding: 12,
  },
  nutrVal: { fontSize: 20, ...FONTS.extrabold, color: COLORS.emerald },
  nutrName: { fontSize: 13, ...FONTS.semibold, color: COLORS.text },
  nutrSub: { fontSize: 10, color: COLORS.text3, marginTop: 1 },

  scienceBox: {
    backgroundColor: '#E8F4F8', borderRadius: RADIUS.md,
    padding: 14, borderLeftWidth: 3, borderLeftColor: COLORS.teal,
  },
  scienceLabel: { fontSize: 10, ...FONTS.extrabold, color: '#1B4A5A', marginBottom: 6, letterSpacing: 0.5 },
  scienceText: { fontSize: 13, color: '#1B4A5A', lineHeight: 20 },
  scienceSource: { fontSize: 11, color: '#4a7a8a', fontStyle: 'italic' },
});
