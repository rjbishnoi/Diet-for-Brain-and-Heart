import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';
import { STORES, COST_DATA, SHOPPING_TIPS } from '../data';

const SUB_TABS = ['Stores', 'Costs', 'Tips'];

export default function ShopScreen() {
  const [activeTab, setActiveTab] = useState('Stores');

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shopping Guide</Text>
        <Text style={styles.headerSub}>Buy smart, eat optimally, save money</Text>
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
        {activeTab === 'Stores' && <StoresTab />}
        {activeTab === 'Costs' && <CostsTab />}
        {activeTab === 'Tips' && <TipsTab />}
      </ScrollView>
    </SafeAreaView>
  );
}

function StoresTab() {
  return (
    <View>
      <Text style={styles.introText}>
        Strategic multi-store shopping cuts your grocery bill 40–60% while maintaining the highest ingredient quality.
      </Text>
      {STORES.map((store, i) => (
        <View key={i} style={styles.storeCard}>
          <View style={styles.storeRow}>
            <Text style={styles.storeIcon}>{store.icon}</Text>
            <View style={styles.storeInfo}>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={styles.storeType}>{store.type}</Text>
            </View>
            <View style={styles.savingsBadge}>
              <Text style={styles.savingsText}>{store.savings}</Text>
            </View>
          </View>
          <Text style={styles.storeItems}>{store.items}</Text>
        </View>
      ))}
    </View>
  );
}

function CostsTab() {
  return (
    <View>
      {/* Savings Hero */}
      <View style={styles.savingsHero}>
        <Text style={styles.savingsHeroVal}>$9.40</Text>
        <Text style={styles.savingsHeroLbl}>per day · all three full meals</Text>
        <Text style={styles.savingsHeroSub}>vs. $15–25/day US average · saves $2,000–5,000/year</Text>
      </View>

      {/* Cost Table */}
      <View style={styles.costTable}>
        {/* Header */}
        <View style={styles.costHeader}>
          <Text style={[styles.costCell, styles.costCellWide, styles.costHdrText]}>Category</Text>
          <Text style={[styles.costCell, styles.costHdrText]}>Daily</Text>
          <Text style={[styles.costCell, styles.costHdrText]}>Weekly</Text>
          <Text style={[styles.costCell, styles.costHdrText]}>Monthly</Text>
        </View>
        {COST_DATA.map((row, i) => (
          <View key={i} style={[styles.costRow, row.isTotal && styles.costRowTotal, i % 2 === 0 && !row.isTotal && styles.costRowAlt]}>
            <Text style={[styles.costCell, styles.costCellWide, row.isTotal && styles.costTotalText]} numberOfLines={2}>{row.label}</Text>
            <Text style={[styles.costCell, row.isTotal && styles.costTotalText]}>{row.daily}</Text>
            <Text style={[styles.costCell, row.isTotal && styles.costTotalText]}>{row.weekly}</Text>
            <Text style={[styles.costCell, row.isTotal && styles.costTotalText]}>{row.monthly}</Text>
          </View>
        ))}
      </View>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>💡 True Cost Comparison</Text>
        <Text style={styles.infoText}>
          The cost of NOT eating well — medical bills, lost productivity, and premature cognitive decline — is
          estimated at $3,000–10,000 per person per year. This plan saves money on both groceries AND long-term
          healthcare costs. The best return on investment in nutrition science.
        </Text>
      </View>
    </View>
  );
}

function TipsTab() {
  return (
    <View>
      {SHOPPING_TIPS.map((tip, i) => (
        <View key={i} style={styles.tipCard}>
          <View style={styles.tipNum}>
            <Text style={styles.tipNumText}>{i + 1}</Text>
          </View>
          <View style={styles.tipBody}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDetail}>{tip.detail}</Text>
          </View>
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
    backgroundColor: COLORS.rust,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: { fontSize: 22, ...FONTS.extrabold, color: '#FFF', letterSpacing: -0.5 },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 3, marginBottom: 14 },

  subTabs: { flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.18)', borderRadius: 9, padding: 3 },
  subTab: { flex: 1, paddingVertical: 7, borderRadius: 7, alignItems: 'center' },
  subTabActive: { backgroundColor: '#FFF' },
  subTabText: { fontSize: 11, ...FONTS.bold, color: 'rgba(255,255,255,0.8)' },
  subTabTextActive: { color: COLORS.navy },

  introText: { fontSize: 12, color: COLORS.text2, lineHeight: 19, marginBottom: 14 },

  storeCard: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border,
    padding: 14, marginBottom: 10, ...SHADOW.small,
  },
  storeRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 9 },
  storeIcon: { fontSize: 30 },
  storeInfo: { flex: 1 },
  storeName: { fontSize: 15, ...FONTS.extrabold, color: COLORS.navy },
  storeType: { fontSize: 11, color: COLORS.text3 },
  savingsBadge: { backgroundColor: COLORS.lightBg, borderRadius: 7, paddingHorizontal: 9, paddingVertical: 4 },
  savingsText: { fontSize: 11, ...FONTS.bold, color: COLORS.emerald },
  storeItems: { fontSize: 12, color: COLORS.text2, lineHeight: 19 },

  savingsHero: {
    backgroundColor: COLORS.lightBg, borderRadius: RADIUS.md,
    padding: 16, alignItems: 'center', marginBottom: 14,
  },
  savingsHeroVal: { fontSize: 40, ...FONTS.black, color: COLORS.emerald, lineHeight: 46 },
  savingsHeroLbl: { fontSize: 13, color: COLORS.text2, marginTop: 4 },
  savingsHeroSub: { fontSize: 11, color: COLORS.text3, marginTop: 2, textAlign: 'center' },

  costTable: { borderRadius: RADIUS.sm, overflow: 'hidden', borderWidth: 0.5, borderColor: COLORS.border, marginBottom: 14 },
  costHeader: { flexDirection: 'row', backgroundColor: COLORS.navy, padding: 10 },
  costRow: { flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 9, borderBottomWidth: 0.5, borderBottomColor: '#F0F0F0' },
  costRowAlt: { backgroundColor: '#FAFAFA' },
  costRowTotal: { backgroundColor: COLORS.lightBg },
  costCell: { flex: 1, fontSize: 11, color: COLORS.text2, textAlign: 'center' },
  costCellWide: { flex: 2, textAlign: 'left' },
  costHdrText: { color: '#FFF', fontWeight: '700', fontSize: 11 },
  costTotalText: { fontWeight: '800', color: COLORS.emerald, fontSize: 11 },

  infoBox: {
    backgroundColor: COLORS.lightGold, borderRadius: RADIUS.md,
    padding: 14, borderWidth: 0.5, borderColor: '#f0c060',
  },
  infoTitle: { fontSize: 12, ...FONTS.extrabold, color: '#7a4020', marginBottom: 6 },
  infoText: { fontSize: 12, color: '#7a4020', lineHeight: 19 },

  tipCard: {
    backgroundColor: COLORS.white, borderRadius: RADIUS.md,
    borderWidth: 0.5, borderColor: COLORS.border,
    padding: 13, marginBottom: 9,
    flexDirection: 'row', gap: 11, alignItems: 'flex-start',
    ...SHADOW.small,
  },
  tipNum: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: COLORS.emerald, justifyContent: 'center', alignItems: 'center',
  },
  tipNumText: { color: '#FFF', ...FONTS.extrabold, fontSize: 12 },
  tipBody: { flex: 1 },
  tipTitle: { fontSize: 13, ...FONTS.bold, color: COLORS.navy, marginBottom: 4 },
  tipDetail: { fontSize: 12, color: COLORS.text2, lineHeight: 19 },
});
