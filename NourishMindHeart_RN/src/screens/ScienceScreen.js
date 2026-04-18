import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../theme';
import { SCIENCE_FACTS, PILLARS, SUPPLEMENTS } from '../data';

export default function ScienceScreen() {
  const [tab, setTab] = useState('Facts');
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.hdr}>
        <Text style={s.htitle}>The Science</Text>
        <Text style={s.hsub}>Evidence-based nutrition for brain and heart</Text>
        <View style={s.stabs}>
          {['Facts','Pillars','Supplements'].map(t => (
            <TouchableOpacity key={t} style={[s.stab, tab===t && s.staba]} onPress={() => setTab(t)}>
              <Text style={[s.stabt, tab===t && s.stabta]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.cnt}>
        {tab==='Facts' && SCIENCE_FACTS.map((f,i) => (
          <View key={i} style={s.fcard}>
            <Text style={s.fic}>{f.icon}</Text>
            <View style={{flex:1}}>
              <Text style={s.ftit}>{f.title}</Text>
              <Text style={s.fstat}>{f.stat}</Text>
              <Text style={s.fdesc}>{f.description}</Text>
              <Text style={s.fsrc}>Source: {f.source}</Text>
            </View>
          </View>
        ))}
        {tab==='Pillars' && PILLARS.map(p => (
          <View key={p.number} style={s.pcard}>
            <View style={[s.pnum,{backgroundColor:p.color}]}><Text style={s.pnumt}>{p.number}</Text></View>
            <View style={{flex:1}}>
              <Text style={[s.ptit,{color:p.color}]}>{p.title}</Text>
              <Text style={s.pdesc}>{p.description}</Text>
            </View>
          </View>
        ))}
        {tab==='Supplements' && <>
          <View style={s.warnbox}>
            <Text style={s.warntit}>Essential for All Vegetarians</Text>
            <Text style={s.warntxt}>Even with this optimal whole-food diet, three nutrients are consistently insufficient from plant foods alone. These supplements are the evidence-based safety net.</Text>
          </View>
          {SUPPLEMENTS.map((sp,i) => (
            <View key={i} style={s.spcard}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:7}}>
                <Text style={s.spnm}>{sp.name}</Text>
                <View style={s.spcost}><Text style={s.spcostt}>{sp.cost}</Text></View>
              </View>
              <View style={s.spdose}><Text style={s.spdoset}>{sp.dose}</Text></View>
              <Text style={s.spwhy}>{sp.why}</Text>
              <Text style={s.spbr}>{sp.brands}</Text>
            </View>
          ))}
        </>}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:C.bg},
  hdr:{backgroundColor:C.navy,padding:16,paddingTop:20},
  htitle:{fontSize:22,fontWeight:'800',color:'#fff'},
  hsub:{fontSize:12,color:'rgba(255,255,255,0.8)',marginTop:3,marginBottom:14},
  stabs:{flexDirection:'row',backgroundColor:'rgba(0,0,0,0.18)',borderRadius:9,padding:3},
  stab:{flex:1,paddingVertical:7,borderRadius:7,alignItems:'center'},
  staba:{backgroundColor:'#fff'},
  stabt:{fontSize:11,fontWeight:'700',color:'rgba(255,255,255,0.8)'},
  stabta:{color:C.navy},
  cnt:{padding:14,paddingBottom:30},
  fcard:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginBottom:11,flexDirection:'row',gap:12},
  fic:{fontSize:32},
  ftit:{fontSize:13,fontWeight:'800',color:C.navy,marginBottom:3},
  fstat:{fontSize:34,fontWeight:'900',color:C.emerald,lineHeight:40,marginBottom:3},
  fdesc:{fontSize:12,color:C.text2,lineHeight:18,marginBottom:4},
  fsrc:{fontSize:10,color:C.text3,fontStyle:'italic'},
  pcard:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginBottom:10,flexDirection:'row',gap:12},
  pnum:{width:36,height:36,borderRadius:18,justifyContent:'center',alignItems:'center'},
  pnumt:{color:'#fff',fontWeight:'900',fontSize:16},
  ptit:{fontSize:14,fontWeight:'800',marginBottom:5},
  pdesc:{fontSize:12,color:C.text2,lineHeight:19},
  warnbox:{backgroundColor:'#FFF3E0',borderRadius:12,padding:14,marginBottom:14,borderWidth:0.5,borderColor:'#f0c060'},
  warntit:{fontSize:13,fontWeight:'800',color:'#7a4020',marginBottom:6},
  warntxt:{fontSize:12,color:'#7a4020',lineHeight:19},
  spcard:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginBottom:11},
  spnm:{fontSize:15,fontWeight:'800',color:C.navy,flex:1,marginRight:8},
  spcost:{backgroundColor:C.lightBg,borderRadius:7,paddingHorizontal:9,paddingVertical:4},
  spcostt:{fontSize:11,fontWeight:'700',color:C.emerald},
  spdose:{backgroundColor:C.lightBlue,borderRadius:8,paddingHorizontal:12,paddingVertical:8,marginBottom:8},
  spdoset:{fontSize:12,color:'#2c3e70',fontWeight:'600'},
  spwhy:{fontSize:12,color:C.text2,lineHeight:19,marginBottom:6},
  spbr:{fontSize:11,color:C.text3,lineHeight:17},
});
