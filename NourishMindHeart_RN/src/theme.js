export const C = {
  emerald: '#2D6A4F', teal: '#40916C', sage: '#74C69D',
  gold: '#C4920F', rust: '#A63A1A', navy: '#1B2A4A',
  lightBg: '#EAF4EE', lightGold: '#FFF8E7', lightBlue: '#E8F0FE',
  white: '#FFFFFF', text: '#1A1A1A', text2: '#555', text3: '#888',
  border: '#E8E8E8', bg: '#F5F5F5',
};

export const TAG_COLORS = {
  'omega-3':'#C8EDD8','antioxidants':'#DDD0F0','heart':'#FFCECE',
  'brain':'#C8DCFF','fiber':'#C8EDB8','anti-inflammatory':'#FFF0B0',
  'MCT':'#D8CCFF','lycopene':'#FFD0D0','folate':'#B8D8FF',
  'nitrates':'#FFB8D0','sulforaphane':'#B8ECC8','probiotics':'#C8EDD0',
  'protein':'#FFDAB0','choline':'#DCC8FF','vitamin D':'#FFF0A0',
  'ergothioneine':'#FFEC90','isoflavones':'#FFCCDF','GABA':'#C0DDF0',
  'lutein':'#C0ECFF','complete protein':'#B8ECD8','lowers LDL':'#B0D8FF',
  'sesamin':'#ECCCE8','low glycemic':'#C8F0B8','calcium':'#D0D8FF',
  'dietary nitrates':'#FFB8CC','blood pressure':'#FFCCCC','butyrate':'#CCFFB0',
  'DASH diet':'#B8ECFF','beta-carotene':'#FFDCB0','anthocyanins':'#D8C8FF',
  'nasunin':'#D0C0F0','B12':'#B0D8FF','iodine':'#D0D8FF',
  'heart health':'#FFCECE','Mediterranean':'#CCDDFF','iron':'#FFE0C0',
  'fermented protein':'#C0DCC0','Nrf2 activation':'#A8FFCC',
  'ACE inhibitor':'#FFCCCC','lemongrass':'#C0F0C8',
  '22% lower heart risk':'#FFCECE','cognitive protection':'#C8DCFF',
  'curcumin':'#FFEAB0','iodine':'#D0D8FF',
};

export function tagColor(tag) { return TAG_COLORS[tag] || '#EBEBEB'; }
