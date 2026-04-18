import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../theme';
import { BREAKFASTS, LUNCHES, DINNERS, WEEK_PLAN, DAY_NAMES, DAY_SHORT } from '../data';

export default function PlanScreen({ navigation }) {
  const [week, setWeek] = useState(0);
  const open = m => navigation.navigate('RecipeDetail', { meal: m });
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.hdr}>
        <Text style={s.htitle}>30-Day Meal Calendar</Text>
        <Text style={s.hsub}>Tap any meal to see its full recipe</Text>
        <View style={s.wtabs}>
          {[0,1,2,3].map(i => (
            <TouchableOpacity key={i} style={[s.wtab, week===i && s.wtaba]} onPress={() => setWeek(i)}>
              <Text style={[s.wtabt, week===i && s.wtabta]}>Week {i+1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.cnt}>
        {WEEK_PLAN[week].map((day, di) => {
          const b = BREAKFASTS[day.b], l = LUNCHES[day.l], d = DINNERS[day.d];
          return (
            <View key={di} style={s.drow}>
              <View style={s.dlbl}>
                <View style={s.dchip}><Text style={s.dchipT}>{DAY_SHORT[di]}</Text></View>
                <Text style={s.dname}>{DAY_NAMES[di]}</Text>
              </View>
              <View style={s.mgrid}>
                {[['B',b],['L',l],['D',d]].map(([t,meal]) => (
                  <TouchableOpacity key={t} style={[s.mcell,{backgroundColor:meal.color}]} onPress={() => open(meal)} activeOpacity={0.75}>
                    <Text style={s.memi}>{meal.emoji}</Text>
                    <Text style={s.mtype}>{t==='B'?'BREAKFAST':t==='L'?'LUNCH':'DINNER'}</Text>
                    <Text style={s.mname} numberOfLines={3}>{meal.name}</Text>
                    <Text style={s.mcost}>{meal.cost}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:C.bg},
  hdr:{backgroundColor:C.navy,padding:16,paddingTop:20},
  htitle:{fontSize:22,fontWeight:'800',color:'#fff'},
  hsub:{fontSize:12,color:'rgba(255,255,255,0.75)',marginTop:3,marginBottom:14},
  wtabs:{flexDirection:'row',gap:6},
  wtab:{flex:1,paddingVertical:7,borderRadius:7,backgroundColor:'rgba(255,255,255,0.15)',alignItems:'center'},
  wtaba:{backgroundColor:'#fff'},
  wtabt:{fontSize:11,fontWeight:'700',color:'rgba(255,255,255,0.8)'},
  wtabta:{color:C.navy},
  cnt:{padding:14,paddingBottom:30},
  drow:{marginBottom:16},
  dlbl:{flexDirection:'row',alignItems:'center',gap:10,marginBottom:8},
  dchip:{width:38,height:38,borderRadius:19,backgroundColor:C.lightBg,justifyContent:'center',alignItems:'center'},
  dchipT:{fontSize:10,fontWeight:'800',color:C.emerald},
  dname:{fontSize:15,fontWeight:'700',color:C.navy},
  mgrid:{flexDirection:'row',gap:6},
  mcell:{flex:1,borderRadius:12,padding:9,borderWidth:0.5,borderColor:C.border},
  memi:{fontSize:22,marginBottom:4},
  mtype:{fontSize:9,color:C.teal,fontWeight:'700',marginBottom:2},
  mname:{fontSize:10,fontWeight:'700',color:C.text,lineHeight:14,marginBottom:3},
  mcost:{fontSize:9,color:C.text3},
});
