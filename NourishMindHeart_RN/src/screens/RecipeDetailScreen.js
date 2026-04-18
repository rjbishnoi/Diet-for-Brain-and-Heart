import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C, tagColor } from '../theme';

export default function RecipeDetailScreen({ route, navigation }) {
  const { meal: m } = route.params;
  const [tab, setTab] = useState('recipe');
  const DC = { Easy: C.teal, Medium: C.gold, Hard: C.rust };

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
        <View style={s.stickyHdr}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Text style={s.back}>Back</Text></TouchableOpacity>
          <Text style={s.stype}>{m.type}</Text>
        </View>
        <View style={s.hero}>
          <Text style={s.emi}>{m.emoji}</Text>
          <Text style={s.name}>{m.name}</Text>
          <Text style={s.meta}>⏱ {m.time}   👥 {m.servings} servings   <Text style={{color:DC[m.difficulty]||C.text3,fontWeight:'700'}}>● {m.difficulty}</Text></Text>
          <View style={s.tags}>{m.tags.map(t => <View key={t} style={[s.tag,{backgroundColor:tagColor(t)}]}><Text style={s.tagt}>{t}</Text></View>)}</View>
          <View style={s.mrow}>
            {[['Cal',m.calories],['Protein',m.protein],['Fiber',m.fiber],['Cost',m.cost]].map(([k,v]) => (
              <View key={k} style={s.mc}><Text style={s.mv}>{v}</Text><Text style={s.mk}>{k}</Text></View>
            ))}
          </View>
          <View style={s.tabs}>
            {['recipe','science','shop'].map(t => (
              <TouchableOpacity key={t} style={[s.tab, tab===t && s.taba]} onPress={() => setTab(t)}>
                <Text style={[s.tabt, tab===t && s.tabta]}>{t.charAt(0).toUpperCase()+t.slice(1)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={s.content}>
          {tab==='recipe' && <>
            <Text style={s.sec}>Ingredients</Text>
            {m.ingredients.map((ing,i) => <View key={i} style={s.irow}><View style={s.idot}/><Text style={s.itxt}>{ing}</Text></View>)}
            <Text style={s.sec}>Method</Text>
            {m.steps.map((st,i) => <View key={i} style={s.srow}><View style={s.snum}><Text style={s.snumt}>{i+1}</Text></View><Text style={s.stxt}>{st}</Text></View>)}
            <Text style={s.sec}>Health Benefits</Text>
            {m.benefits.map((b,i) => <View key={i} style={s.brow}><Text style={s.bck}>✓</Text><Text style={s.btxt}>{b}</Text></View>)}
          </>}
          {tab==='science' && <>
            <View style={s.scibox}><Text style={s.scilbl}>PEER-REVIEWED RESEARCH</Text><Text style={s.scitxt}>{m.science}</Text></View>
            <Text style={s.sec}>Bioactive Compounds</Text>
            <View style={s.tags}>{m.tags.map(t => <View key={t} style={[s.tag,{backgroundColor:tagColor(t),paddingHorizontal:12,paddingVertical:5}]}><Text style={[s.tagt,{fontSize:12}]}>{t}</Text></View>)}</View>
            <View style={s.nbox}>
              <Text style={s.nboxt}>NUTRITIONAL PROFILE</Text>
              <View style={s.ngrid}>
                {[['Calories',m.calories+' kcal'],['Protein',m.protein],['Fiber',m.fiber],['Cost',m.cost],['Difficulty',m.difficulty],['Servings',''+m.servings]].map(([k,v]) => (
                  <View key={k} style={s.nc}><Text style={s.nv}>{v}</Text><Text style={s.nk}>{k}</Text></View>
                ))}
              </View>
            </View>
          </>}
          {tab==='shop' && <>
            <View style={s.shopbox}><Text style={s.shoplbl}>WHERE TO BUY</Text><Text style={s.shoptxt}>{m.shopping}</Text></View>
            <View style={s.tipbox}>
              <Text style={s.tiplbl}>PRO TIPS</Text>
              {['Indian grocery: spices 70-80% cheaper than supermarket brands','Costco: best price on nuts, oils, and frozen berries','Frozen produce is often more nutritious than fresh','Compare price per ounce, not shelf price'].map((tip,i) => (
                <View key={i} style={{flexDirection:'row',gap:8,marginBottom:8}}>
                  <Text style={{color:C.emerald,fontSize:16}}>•</Text>
                  <Text style={{fontSize:12,color:C.text2,flex:1,lineHeight:19}}>{tip}</Text>
                </View>
              ))}
            </View>
          </>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#fff'},
  stickyHdr:{flexDirection:'row',alignItems:'center',gap:10,padding:12,backgroundColor:'rgba(255,255,255,0.97)',borderBottomWidth:0.5,borderBottomColor:C.border},
  back:{fontSize:16,fontWeight:'700',color:C.emerald},
  stype:{fontSize:13,color:C.text3},
  hero:{padding:16,alignItems:'center'},
  emi:{fontSize:60,marginBottom:12},
  name:{fontSize:19,fontWeight:'800',color:C.text,textAlign:'center',lineHeight:26,marginBottom:10},
  meta:{fontSize:12,color:C.text3,marginBottom:10,textAlign:'center'},
  tags:{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginBottom:14,gap:4},
  tag:{borderRadius:20,paddingHorizontal:9,paddingVertical:3},
  tagt:{fontSize:10,fontWeight:'600',color:'#333'},
  mrow:{flexDirection:'row',gap:8,marginBottom:14,width:'100%'},
  mc:{flex:1,backgroundColor:C.lightBg,borderRadius:10,paddingVertical:10,alignItems:'center'},
  mv:{fontSize:14,fontWeight:'800',color:C.emerald},
  mk:{fontSize:10,color:C.text3,marginTop:2},
  tabs:{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:C.border,width:'100%'},
  tab:{flex:1,paddingVertical:11,alignItems:'center',borderBottomWidth:2,borderBottomColor:'transparent'},
  taba:{borderBottomColor:C.emerald},
  tabt:{fontSize:13,fontWeight:'600',color:'#aaa'},
  tabta:{color:C.emerald},
  content:{paddingHorizontal:16,paddingTop:6,paddingBottom:40},
  sec:{fontSize:15,fontWeight:'800',color:C.navy,marginTop:18,marginBottom:10},
  irow:{flexDirection:'row',alignItems:'center',gap:10,paddingVertical:8,borderBottomWidth:0.5,borderBottomColor:'#f5f5f5'},
  idot:{width:7,height:7,borderRadius:3.5,backgroundColor:C.sage},
  itxt:{fontSize:13,color:C.text,flex:1},
  srow:{flexDirection:'row',gap:12,marginBottom:12},
  snum:{width:28,height:28,borderRadius:14,backgroundColor:C.emerald,justifyContent:'center',alignItems:'center'},
  snumt:{color:'#fff',fontWeight:'800',fontSize:12},
  stxt:{fontSize:13,color:C.text2,lineHeight:20,flex:1,paddingTop:4},
  brow:{flexDirection:'row',alignItems:'flex-start',gap:10,backgroundColor:C.lightBg,borderRadius:9,padding:10,marginBottom:7},
  bck:{fontSize:15,color:C.emerald,fontWeight:'700'},
  btxt:{fontSize:12,fontWeight:'600',color:C.text,flex:1,lineHeight:18},
  scibox:{backgroundColor:C.lightBlue,borderRadius:12,padding:14,borderLeftWidth:3,borderLeftColor:C.navy,marginTop:10},
  scilbl:{fontSize:10,fontWeight:'800',color:C.navy,marginBottom:6,letterSpacing:0.5},
  scitxt:{fontSize:12,color:'#2c3e70',lineHeight:20},
  nbox:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginTop:14},
  nboxt:{fontSize:10,fontWeight:'800',color:C.navy,marginBottom:10,letterSpacing:0.5},
  ngrid:{flexDirection:'row',flexWrap:'wrap',gap:8},
  nc:{width:'30%',backgroundColor:C.lightBg,borderRadius:8,padding:9,alignItems:'center'},
  nv:{fontSize:13,fontWeight:'800',color:C.emerald},
  nk:{fontSize:10,color:C.text3,marginTop:2,textAlign:'center'},
  shopbox:{backgroundColor:C.lightGold,borderRadius:12,padding:14,marginTop:10},
  shoplbl:{fontSize:10,fontWeight:'800',color:'#8B6914',marginBottom:7,letterSpacing:0.5},
  shoptxt:{fontSize:12,color:'#5a4010',lineHeight:20},
  tipbox:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginTop:12},
  tiplbl:{fontSize:10,fontWeight:'800',color:C.navy,marginBottom:10,letterSpacing:0.5},
});
