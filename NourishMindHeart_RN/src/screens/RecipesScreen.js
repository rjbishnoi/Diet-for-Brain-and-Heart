import React, { useState, useMemo } from 'react';
import {
  View, Text, FlatList, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, RADIUS } from '../theme';
import { ALL_MEALS } from '../data';
import MealCard from '../components/MealCard';

const FILTERS = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Easy', 'Medium', 'Hard'];

export default function RecipesScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    let items = ALL_MEALS;
    if (activeFilter === 'Breakfast') items = items.filter(m => m.type === 'Breakfast');
    else if (activeFilter === 'Lunch') items = items.filter(m => m.type === 'Lunch');
    else if (activeFilter === 'Dinner') items = items.filter(m => m.type === 'Dinner');
    else if (['Easy', 'Medium', 'Hard'].includes(activeFilter)) {
      items = items.filter(m => m.difficulty === activeFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return items;
  }, [search, activeFilter]);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header with Search */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All 21 Recipes</Text>
        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes or nutrients…"
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />
        </View>
      </View>

      {/* Filter Pills */}
      <View style={styles.filterWrap}>
        <FlatList
          data={FILTERS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.filterList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.filterPill, activeFilter === item && styles.filterPillActive]}
              onPress={() => setActiveFilter(item)}
            >
              <Text style={[styles.filterText, activeFilter === item && styles.filterTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Results Count */}
      <Text style={styles.resultCount}>
        {filtered.length} recipe{filtered.length !== 1 ? 's' : ''}
      </Text>

      {/* Recipe List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onPress={() => navigation.navigate('RecipeDetail', { meal: item })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>No recipes found for "{search}"</Text>
            <TouchableOpacity onPress={() => { setSearch(''); setActiveFilter('All'); }}>
              <Text style={styles.emptyAction}>Clear search</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },

  header: {
    backgroundColor: COLORS.teal,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: { fontSize: 22, ...FONTS.extrabold, color: '#FFF', letterSpacing: -0.5, marginBottom: 12 },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: RADIUS.md,
    paddingHorizontal: 12,
    height: 42,
    gap: 8,
  },
  searchIcon: { fontSize: 14 },
  searchInput: {
    flex: 1, color: '#FFF', fontSize: 14,
  },

  filterWrap: { backgroundColor: COLORS.white, borderBottomWidth: 0.5, borderBottomColor: COLORS.border },
  filterList: { paddingHorizontal: 14, paddingVertical: 10, gap: 7 },
  filterPill: {
    paddingHorizontal: 14, paddingVertical: 7,
    borderRadius: 20, borderWidth: 1, borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  filterPillActive: { backgroundColor: COLORS.emerald, borderColor: COLORS.emerald },
  filterText: { fontSize: 12, ...FONTS.semibold, color: COLORS.text2 },
  filterTextActive: { color: '#FFF' },

  resultCount: {
    fontSize: 12, color: COLORS.text3, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 4,
  },

  listContent: { paddingHorizontal: 14, paddingTop: 4, paddingBottom: 30 },

  empty: { alignItems: 'center', paddingTop: 60, gap: 8 },
  emptyIcon: { fontSize: 40 },
  emptyText: { fontSize: 15, color: COLORS.text2, textAlign: 'center' },
  emptyAction: { fontSize: 14, color: COLORS.emerald, fontWeight: '700', marginTop: 8 },
});
