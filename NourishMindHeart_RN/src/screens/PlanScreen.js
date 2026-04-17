import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';
import { BREAKFASTS, LUNCHES, DINNERS, WEEK_PLAN, DAY_NAMES, DAY_SHORT } from '../data';
import MealCard from '../components/MealCard';

export default function PlanScreen({ navigation }) {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const weekPlan = WEEK_PLAN[selectedWeek];

  const openMeal = (meal) => navigation.navigate('RecipeDetail', { meal });

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>30-Day Meal Calendar</Text>
        <Text style={styles.headerSub}>Tap any meal to see its full recipe & science</Text>

        {/* Week Selector */}
        <View style={styles.weekTabs}>
          {[0, 1, 2, 3].map((i) => (
            <TouchableOpacity
              key={i}
              style={[styles.weekTab, selectedWeek === i && styles.weekTabActive]}
              onPress={() => setSelectedWeek(i)}
            >
              <Text style={[styles.weekTabText, selectedWeek === i && styles.weekTabTextActive]}>
                Week {i + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {weekPlan.map((day, dayIndex) => {
          const breakfast = BREAKFASTS[day.b];
          const lunch = LUNCHES[day.l];
          const dinner = DINNERS[day.d];

          return (
            <View key={dayIndex} style={styles.dayRow}>
              {/* Day Label */}
              <View style={styles.dayLabel}>
                <View style={styles.dayChip}>
                  <Text style={styles.dayChipText}>{DAY_SHORT[dayIndex]}</Text>
                </View>
                <Text style={styles.dayName}>{DAY_NAMES[dayIndex]}</Text>
              </View>

              {/* Meal Cells */}
              <View style={styles.mealGrid}>
                <MealCard
                  meal={breakfast}
                  compact
                  onPress={() => openMeal(breakfast)}
                />
                <MealCard
                  meal={lunch}
                  compact
                  onPress={() => openMeal(lunch)}
                />
                <MealCard
                  meal={dinner}
                  compact
                  onPress={() => openMeal(dinner)}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  scroll: { flex: 1 },
  content: { padding: 14, paddingBottom: 30 },

  header: {
    backgroundColor: COLORS.navy,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: { fontSize: 22, ...FONTS.extrabold, color: '#FFF', letterSpacing: -0.5 },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 3, marginBottom: 14 },

  weekTabs: { flexDirection: 'row', gap: 6 },
  weekTab: {
    flex: 1, paddingVertical: 7, borderRadius: 7,
    backgroundColor: 'rgba(255,255,255,0.15)', alignItems: 'center',
  },
  weekTabActive: { backgroundColor: '#FFF' },
  weekTabText: { fontSize: 11, ...FONTS.bold, color: 'rgba(255,255,255,0.8)' },
  weekTabTextActive: { color: COLORS.navy },

  dayRow: { marginBottom: 18 },
  dayLabel: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  dayChip: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: COLORS.lightBg, justifyContent: 'center', alignItems: 'center',
  },
  dayChipText: { fontSize: 10, ...FONTS.extrabold, color: COLORS.emerald },
  dayName: { fontSize: 15, ...FONTS.bold, color: COLORS.navy },

  mealGrid: { flexDirection: 'row', gap: 6 },
});
