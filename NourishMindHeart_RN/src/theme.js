export const COLORS = {
  emerald: '#2D6A4F',
  teal: '#40916C',
  sage: '#74C69D',
  gold: '#C4920F',
  rust: '#A63A1A',
  navy: '#1B2A4A',
  cream: '#F8F5F0',
  lightBg: '#EAF4EE',
  lightGold: '#FFF8E7',
  lightBlue: '#E8F0FE',
  white: '#FFFFFF',
  text: '#1A1A1A',
  text2: '#555555',
  text3: '#888888',
  border: '#E8E8E8',
  background: '#F5F5F5',
};

export const FONTS = {
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  extrabold: { fontWeight: '800' },
  black: { fontWeight: '900' },
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 24,
};

export const SHADOW = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
};

export const TAG_COLORS = {
  'omega-3': '#C8EDD8',
  'antioxidants': '#DDD0F0',
  'heart': '#FFCECE',
  'brain': '#C8DCFF',
  'fiber': '#C8EDB8',
  'anti-inflammatory': '#FFF0B0',
  'curcumin': '#FFEAB0',
  'MCT': '#D8CCFF',
  'lycopene': '#FFD0D0',
  'folate': '#B8D8FF',
  'nitrates': '#FFB8D0',
  'sulforaphane': '#B8ECC8',
  'probiotics': '#C8EDD0',
  'protein': '#FFDAB0',
  'choline': '#DCC8FF',
  'vitamin D': '#FFF0A0',
  'ergothioneine': '#FFEC90',
  'isoflavones': '#FFCCDF',
  'GABA': '#C0DDF0',
  'lutein': '#C0ECFF',
  'fermented protein': '#C0DCC0',
  'complete protein': '#B8ECD8',
  'lowers LDL': '#B0D8FF',
  'sesamin': '#ECCCE8',
  'low glycemic': '#C8F0B8',
  'calcium': '#D0D8FF',
  'dietary nitrates': '#FFB8CC',
  'blood pressure': '#FFCCCC',
  'Nrf2 activation': '#A8FFCC',
  'butyrate': '#CCFFB0',
  'DASH diet': '#B8ECFF',
  'beta-carotene': '#FFDCB0',
  'anthocyanins': '#D8C8FF',
  'ACE inhibitor': '#FFCCCC',
  'nasunin': '#D0C0F0',
  'lemongrass': '#C0F0C8',
  'B12': '#B0D8FF',
  'iodine': '#D0D8FF',
  'heart health': '#FFCECE',
  'Mediterranean': '#CCDDFF',
  'iron': '#FFE0C0',
  '22% lower heart risk': '#FFCECE',
  'cognitive protection': '#C8DCFF',
};

export function getTagColor(tag) {
  return TAG_COLORS[tag] || '#EBEBEB';
}
