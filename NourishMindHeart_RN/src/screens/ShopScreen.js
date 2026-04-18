import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../theme';
import { STORES, COST_DATA, SHOPPING_TIPS } from '../data';

export default function ShopScreen() {
  const [tab, setTab] = useState('Stores');
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.hdr}>
        <Text style={s.htitle}>Shopping Guide</Text>
        <Text style={s.hsub}>Buy smart, eat optimally, save money</Text>
        <View style={s.stabs}>
          {['Stores','Costs','Tips'].map(t => (
            <TouchableOpacity key={t} style={[s.stab, tab===t && s.staba]} onPress={() => setTab(t)}>
              <Text style={[s.stabt, tab===t && s.stabta]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.cnt}>
        {tab==='Stores' && STORES.map((st,i) => (
          <View key={i} style={s.stcard}>
            <View style={s.strow}>
              <Text style={s.stic}>{st.icon}</Text>
              <View style={{flex:1}}><Text style={s.stnm}>{st.name}</Text><Text style={s.stty}>{st.type}</Text></View>
              <View style={s.svbadge}><Text style={s.svtxt}>{st.savings}</Text></View>
            </View>
            <Text style={s.stit}>{st.items}</Text>
          </View>
        ))}
        {tab==='Costs' && <>
          <View style={s.svhero}>
            <Text style={s.svval}>$9.40</Text>
            <Text style={s.svlbl}>per day for all 3 meals</Text>
            <Text style={s.svsub}>vs $15-25 US average, saves $2000-5000/year</Text>
          </View>
          <View style={s.ctbl}>
            <View style={s.cthdr}><Text style={[s.ctcell,s.ctwide,s.cthdrT]}>Category</Text><Text style={[s.ctcell,s.cthdrT]}>Daily</Text><Text style={[s.ctcell,s.cthdrT]}>Weekly</Text><Text style={[s.ctcell,s.cthdrT]}>Monthly</Text></View>
            {COST_DATA.map((r,i) => (
              <View key={i} style={[s.ctrow, r.isTotal && s.cttot, i%2===0 && !r.isTotal && s.ctalt]}>
                <Text style={[s.ctcell,s.ctwide, r.isTotal && s.cttotT]} numberOfLines={2}>{r.label}</Text>
                <Text style={[s.ctcell, r.isTotal && s.cttotT]}>{r.daily}</Text>
                <Text style={[s.ctcell, r.isTotal && s.cttotT]}>{r.weekly}</Text>
                <Text style={[s.ctcell, r.isTotal && s.cttotT]}>{r.monthly}</Text>
              </View>
            ))}
          </View>
        </>}
        {tab==='Tips' && SHOPPING_TIPS.map((tip,i) => (
          <View key={i} style={s.tipcard}>
            <View style={s.tipnum}><Text style={s.tipnumt}>{i+1}</Text></View>
            <View style={{flex:1}}><Text style={s.tipti}>{tip.title}</Text><Text style={s.tipde}>{tip.detail}</Text></View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:C.bg},
  hdr:{backgroundColor:C.rust,padding:16,paddingTop:20},
  htitle:{fontSize:22,fontWeight:'800',color:'#fff'},
  hsub:{fontSize:12,color:'rgba(255,255,255,0.8)',marginTop:3,marginBottom:14},
  stabs:{flexDirection:'row',backgroundColor:'rgba(0,0,0,0.18)',borderRadius:9,padding:3},
  stab:{flex:1,paddingVertical:7,borderRadius:7,alignItems:'center'},
  staba:{backgroundColor:'#fff'},
  stabt:{fontSize:11,fontWeight:'700',color:'rgba(255,255,255,0.8)'},
  stabta:{color:C.navy},
  cnt:{padding:14,paddingBottom:30},
  stcard:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginBottom:10},
  strow:{flexDirection:'row',alignItems:'center',gap:10,marginBottom:9},
  stic:{fontSize:28}, stnm:{fontSize:15,fontWeight:'800',color:C.navy}, stty:{fontSize:11,color:C.text3},
  svbadge:{backgroundColor:C.lightBg,borderRadius:7,paddingHorizontal:9,paddingVertical:4},
  svtxt:{fontSize:11,fontWeight:'700',color:C.emerald},
  stit:{fontSize:12,color:C.text2,lineHeight:19},
  svhero:{backgroundColor:C.lightBg,borderRadius:12,padding:16,alignItems:'center',marginBottom:14},
  svval:{fontSize:40,fontWeight:'900',color:C.emerald,lineHeight:46},
  svlbl:{fontSize:13,color:C.text2,marginTop:4},
  svsub:{fontSize:11,color:C.text3,marginTop:2,textAlign:'center'},
  ctbl:{borderRadius:9,overflow:'hidden',borderWidth:0.5,borderColor:C.border,marginBottom:14},
  cthdr:{flexDirection:'row',backgroundColor:C.navy,padding:10},
  ctrow:{flexDirection:'row',paddingHorizontal:10,paddingVertical:9,borderBottomWidth:0.5,borderBottomColor:'#f0f0f0'},
  ctalt:{backgroundColor:'#fafafa'}, cttot:{backgroundColor:C.lightBg},
  ctcell:{flex:1,fontSize:11,color:C.text2,textAlign:'center'},
  ctwide:{flex:2,textAlign:'left'}, cthdrT:{color:'#fff',fontWeight:'700'},
  cttotT:{fontWeight:'800',color:C.emerald},
  tipcard:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:13,marginBottom:9,flexDirection:'row',gap:11,alignItems:'flex-start'},
  tipnum:{width:28,height:28,borderRadius:14,backgroundColor:C.emerald,justifyContent:'center',alignItems:'center'},
  tipnumt:{color:'#fff',fontWeight:'800',fontSize:12},
  tipti:{fontSize:13,fontWeight:'700',color:C.navy,marginBottom:4},
  tipde:{fontSize:12,color:C.text2,lineHeight:19},
});
