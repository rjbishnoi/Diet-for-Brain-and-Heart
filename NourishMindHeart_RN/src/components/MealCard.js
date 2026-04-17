import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SHADOW, RADIUS, FONTS } from '../theme';
import TagBadge from './TagBadge';

export default function MealCard({ meal, onPress, compact = false }) {
  if (compact) {
    return (
      <TouchableOpacity
        style={[styles.compactCard, { backgroundColor: meal.color }]}
        onPress={onPress}
        activeOpacity={0.75}
      >
        <Text style={styles.compactEmoji}>{meal.emoji}</Text>
        <Text style={styles.compactType}>{meal.type.toUpperCase()}</Text>
        <Text style={styles.compactName} numberOfLines={3}>{meal.name}</Text>
        <Text style={styles.compactCost}>{meal.cost}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.row}>
        <Text style={styles.emoji}>{meal.emoji}</Text>
        <View style={styles.info}>
          <Text style={styles.name}>{meal.name}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>⏱ {meal.time}</Text>
            <Text style={styles.meta}>  👥 {meal.servings}</Text>
            <Text style={styles.cost}>  💰 {meal.cost}</Text>
          </View>
          <View style={styles.nutriRow}>
            <Text style={styles.nutri}>{meal.calories} cal</Text>
            <Text style={styles.dot}> · </Text>
            <Text style={styles.nutri}>{meal.protein} protein</Text>
            <Text style={styles.dot}> · </Text>
            <Text style={styles.nutri}>{meal.fiber} fiber</Text>
          </View>
          <View style={styles.tags}>
            {meal.tags.slice(0, 4).map(tag => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </View>
        </View>
        <Text style={styles.chevron}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    padding: 14,
    marginBottom: 10,
    ...SHADOW.small,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  emoji: {
    fontSize: 38,
    lineHeight: 44,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.text,
    marginBottom: 5,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  meta: {
    fontSize: 11,
    color: COLORS.text3,
  },
  cost: {
    fontSize: 11,
    color: COLORS.emerald,
    fontWeight: '700',
  },
  nutriRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  nutri: {
    fontSize: 11,
    color: COLORS.text2,
  },
  dot: {
    fontSize: 11,
    color: COLORS.text3,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chevron: {
    fontSize: 22,
    color: '#CCC',
    alignSelf: 'center',
  },

  // Compact card (used in Plan calendar)
  compactCard: {
    borderRadius: RADIUS.md,
    padding: 10,
    flex: 1,
    marginHorizontal: 3,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  compactEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  compactType: {
    fontSize: 9,
    color: COLORS.teal,
    fontWeight: '700',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  compactName: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.text,
    lineHeight: 14,
    marginBottom: 4,
  },
  compactCost: {
    fontSize: 9,
    color: COLORS.text3,
  },
});
