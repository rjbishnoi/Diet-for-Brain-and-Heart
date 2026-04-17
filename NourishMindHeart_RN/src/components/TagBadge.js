import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTagColor } from '../theme';

export default function TagBadge({ tag, large = false }) {
  return (
    <View style={[styles.badge, { backgroundColor: getTagColor(tag) }, large && styles.large]}>
      <Text style={[styles.text, large && styles.largeText]}>{tag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },
  large: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  largeText: {
    fontSize: 12,
  },
});
