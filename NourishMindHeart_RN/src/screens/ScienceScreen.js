import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';
import { SCIENCE_FACTS, PILLARS, SUPPLEMENTS } from '../data';

const SUB_TABS = ['Key Findings', 'Pillars', 'Supplements'];

export default function ScienceScreen() {
  const [activeTab, setActiveTab] = useState('Key Findings');

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>The Science</Text>
        <Text style={styles.headerSub}>Evidence-based nutrition for brain & heart</Text>
        <View style={styles.subTabs}>
          {SUB_TABS.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.subTab, activeTab === tab && styles.subTabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.subTabText, activeTab === tab && styles.subTabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {activeTab === 'Key Findings' && <FactsTab />}
        {activeTab === 'Pillars' && <PillarsTab />}
        {activeTab === 'Supplements' && <SupplementsTab />}
      </ScrollView>
    </SafeAreaView>
  );
}

function FactsTab() {
  return (
    <View>
      <Text style={styles.introText}>
        Every recommendation in this plan is grounded in peer-reviewed, randomized controlled trials and large
        cohort studies. These are the landmark findings forming the scientific foundation.
      </Text>
      {SCIENCE_FACTS.map((fact, i) => (
        <View key={i} style={styles.factCard}>
          <View style={styles.factRow}>
            <Text style={styles.factIcon}>{fact.icon}</Text>
            <View style={styles.factBody}>
              <Text style={styles.factTitle}>{fact.title}</Text>
              <Text style={styles.factStat}>{fact.stat}</Text>
              <Text style={styles.factDesc}>{fact.description}</Text>
              <Text style={styles.factSource}>Source: {fact.source}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

function PillarsTab() {
  return (
    <View>
      <Text style={styles.introText}>
        Every meal in this 30-day plan is engineered around 7 scientifically validated nutritional strategies
        addressing every major mechanism of cardiovascular and neurological aging.
      </Text>
      {PILLARS.map((pillar) => (
        <View key={pillar.number} style={styles.pillarCard}>
          <View style={[styles.pillarNum, { backgroundColor: pillar.color }]}>
            <Text style={styles.pillarNumText}>{pillar.number}</Text>
          </View>
          <View style={styles.pillarBody}>
            <Text style={[styles.pillarTitle, { color: pillar.color }]}>{pillar.title}</Text>
            <Text style={styles.pillarDesc}>{pillar.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function SupplementsTab() {
  return (
    <View>
      {/* Warning Box */}
      <View style={styles.warnBox}>
        <Text style={styles.warnTitle}>⚠️  Essential for All Vegetarians & Vegans</Text>
        <Text style={styles.warnText}>
          Even with this optimal whole-food diet, three nutrients are consistently insufficient from plant
          foods alone. These supplements are the evidence-based safety net that makes vegetarian eating fully
          safe and optimal for the long term.
        </Text>
      </View>

      {SUPPLEMENTS.map((supp, i) => (
        <View key={i} style={styles.suppCard}>
          <View style={styles.suppHeader}>
            <Text style={styles.suppName}>{supp.name}</Text>
            <View style={styles.suppCostBadge}>
              <Text style={styles.suppCostText}>{supp.cost}</Text>
            </View>
          </View>
          <View style={styles.doseBadge}>
            <Text style={styles.doseText}>💊  {supp.dose}</Text>
          </View>
          <Text style={styles.suppWhy}>{supp.why}</Text>
          <Text style={styles.suppBrands}>Recommended brands: {supp.brands}</Text>
        </View>
      ))}
    </View>
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
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 3, marginBottom: 14 },

  subTabs: { flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.18)', borderRadius: 9, padding: 3 },
  subTab: { flex: 1, paddingVertical: 7, borderRadius: 7, alignItems: 'center' },
  subTabActive: { backgroundColor: '#FFF' },
  subTabText: { fontSize: 10, ...FONTS.bold, color: 'rgba(255,255,255,0.8)' },
  subTabTextActive: { color: COLORS.navy },

  introText: { fontSize: 12, color: COLORS.text2, lineHeight: 19, marginBottom: 14 },

  factCard: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border,
    padding: 14, marginBottom: 11, ...SHADOW.small,
  },
  factRow: { flexDirection: 'row', gap: 12 },
  factIcon: { fontSize: 34 },
  factBody: { flex: 1 },
  factTitle: { fontSize: 13, ...FONTS.extrabold, color: COLORS.navy, marginBottom: 3 },
  factStat: { fontSize: 34, ...FONTS.black, color: COLORS.emerald, lineHeight: 40, marginBottom: 3 },
  factDesc: { fontSize: 12, color: COLORS.text2, lineHeight: 18, marginBottom: 4 },
  factSource: { fontSize: 10, color: COLORS.text3, fontStyle: 'italic' },

  pillarCard: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border,
    padding: 14, marginBottom: 10,
    flexDirection: 'row', gap: 12, alignItems: 'flex-start',
  },
  pillarNum: {
    width: 36, height: 36, borderRadius: 18,
    justifyContent: 'center', alignItems: 'center', flexShrink: 0,
  },
  pillarNumText: { color: '#FFF', ...FONTS.black, fontSize: 16 },
  pillarBody: { flex: 1 },
  pillarTitle: { fontSize: 14, ...FONTS.extrabold, marginBottom: 5 },
  pillarDesc: { fontSize: 12, color: COLORS.text2, lineHeight: 19 },

  warnBox: {
    backgroundColor: '#FFF3E0', borderRadius: RADIUS.md,
    padding: 14, marginBottom: 14,
    borderWidth: 0.5, borderColor: '#f0c060',
  },
  warnTitle: { fontSize: 13, ...FONTS.extrabold, color: '#7a4020', marginBottom: 6 },
  warnText: { fontSize: 12, color: '#7a4020', lineHeight: 19 },

  suppCard: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border,
    padding: 14, marginBottom: 11, ...SHADOW.small,
  },
  suppHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 7 },
  suppName: { fontSize: 15, ...FONTS.extrabold, color: COLORS.navy, flex: 1, marginRight: 8 },
  suppCostBadge: { backgroundColor: COLORS.lightBg, borderRadius: 7, paddingHorizontal: 9, paddingVertical: 4 },
  suppCostText: { fontSize: 11, ...FONTS.bold, color: COLORS.emerald },
  doseBadge: {
    backgroundColor: COLORS.lightBlue, borderRadius: RADIUS.sm,
    paddingHorizontal: 12, paddingVertical: 8, marginBottom: 8,
  },
  doseText: { fontSize: 12, color: '#2c3e70', fontWeight: '600' },
  suppWhy: { fontSize: 12, color: COLORS.text2, lineHeight: 19, marginBottom: 6 },
  suppBrands: { fontSize: 11, color: COLORS.text3, lineHeight: 17 },
});
