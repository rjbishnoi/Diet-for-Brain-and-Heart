import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../theme';
import { BREAKFASTS, LUNCHES, DINNERS, WEEK_PLAN, DAY_NAMES } from '../data';

function todayIdx() { const d = new Date().getDay(); return d === 0 ? 6 : d - 1; }

export default function HomeScreen({ navigation }) {
  const idx = todayIdx();
  const p = WEEK_PLAN[0][idx];
  const b = BREAKFASTS[p.b], l = LUNCHES[p.l], d = DINNERS[p.d];
  const totC = b.calories + l.calories + d.calories;
  const totP = parseInt(b.protein) + parseInt(l.protein) + parseInt(d.protein);
  const totF = parseInt(b.fiber) + parseInt(l.fiber) + parseInt(d.fiber);
  const totCo = (parseFloat(b.cost.replace('$','')) + parseFloat(l.cost.replace('$','')) + parseFloat(d.cost.replace('$',''))).toFixed(2);
  const open = m => navigation.navigate('RecipeDetail', { meal: m });

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.hdr}>
          <Text style={s.htitle}>Today's Plan</Text>
          <Text style={s.hsub}>{DAY_NAMES[idx]} · Brain and Heart Optimized</Text>
        </View>
        <View style={s.cnt}>
          <View style={s.hgrid}>
            {[['🧠','MIND Diet','Active'],['❤️','Heart Safe','All meals'],['🌱','100% Plant','Based']].map(([ic,lb,sb]) => (
              <View key={lb} style={s.hcard}><Text style={s.hic}>{ic}</Text><Text style={s.hlb}>{lb}</Text><Text style={s.hsb}>{sb}</Text></View>
            ))}
          </View>
          <Text style={s.sec}>Today's Meals</Text>
          {[['🌅 Breakfast',b],['🥗 Lunch',l],['🌙 Dinner',d]].map(([lbl,meal]) => (
            <TouchableOpacity key={meal.id} style={s.mrow} onPress={() => open(meal)} activeOpacity={0.8}>
              <Text style={s.memi}>{meal.emoji}</Text>
              <View style={s.minfo}>
                <Text style={s.mtype}>{lbl}</Text>
                <Text style={s.mname}>{meal.name}</Text>
                <Text style={s.mmeta}>{meal.calories} cal · {meal.time} · {meal.cost}</Text>
              </View>
              <Text style={s.chev}>›</Text>
            </TouchableOpacity>
          ))}
          <Text style={[s.sec,{marginTop:20}]}>Today's Nutrition</Text>
          <View style={s.ngrid}>
            {[['~'+totC,'Calories','kcal'],['~'+totP+'g','Protein','goal 60g+'],['~'+totF+'g','Fiber','goal 35g+'],['$'+totCo,'Cost','3 meals']].map(([v,n,sb]) => (
              <View key={n} style={s.ncard}><Text style={s.nval}>{v}</Text><Text style={s.nnm}>{n}</Text><Text style={s.nsb}>{sb}</Text></View>
            ))}
          </View>
          <View style={s.scibox}>
            <Text style={s.scilbl}>SCIENCE OF THE DAY</Text>
            <Text style={s.scitxt}>Following this MIND diet pattern for one year is associated with cognitive function equivalent to being <Text style={{fontWeight:'800'}}>7.5 years younger</Text> than peers on a Western diet.{'\n'}Morris et al., Alzheimer's and Dementia, 2015</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:C.bg}, cnt:{padding:16},
  hdr:{backgroundColor:C.emerald,padding:16,paddingTop:20},
  htitle:{fontSize:22,fontWeight:'800',color:'#fff',letterSpacing:-0.5},
  hsub:{fontSize:12,color:'rgba(255,255,255,0.85)',marginTop:3},
  hgrid:{flexDirection:'row',gap:10,marginBottom:18},
  hcard:{flex:1,backgroundColor:C.lightBg,borderRadius:12,padding:12,alignItems:'center'},
  hic:{fontSize:18,marginBottom:3}, hlb:{fontSize:11,fontWeight:'700',color:C.emerald,textAlign:'center'},
  hsb:{fontSize:10,color:C.text3,textAlign:'center'},
  sec:{fontSize:16,fontWeight:'800',color:C.navy,marginBottom:10},
  mrow:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginBottom:10,flexDirection:'row',alignItems:'center',gap:12,shadowColor:'#000',shadowOffset:{width:0,height:1},shadowOpacity:0.05,shadowRadius:4,elevation:2},
  memi:{fontSize:32}, minfo:{flex:1},
  mtype:{fontSize:10,color:C.teal,fontWeight:'700',marginBottom:2},
  mname:{fontSize:14,fontWeight:'700',color:C.text,lineHeight:20,marginBottom:2},
  mmeta:{fontSize:11,color:C.text3}, chev:{fontSize:22,color:'#ccc'},
  ngrid:{flexDirection:'row',flexWrap:'wrap',gap:8,marginBottom:16},
  ncard:{width:'47%',backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:12},
  nval:{fontSize:20,fontWeight:'800',color:C.emerald}, nnm:{fontSize:13,fontWeight:'600',color:C.text},
  nsb:{fontSize:10,color:C.text3,marginTop:1},
  scibox:{backgroundColor:'#E8F4F8',borderRadius:12,padding:14,borderLeftWidth:3,borderLeftColor:C.teal},
  scilbl:{fontSize:10,fontWeight:'800',color:'#1B4A5A',marginBottom:6,letterSpacing:0.5},
  scitxt:{fontSize:12,color:'#1B4A5A',lineHeight:20},
});
