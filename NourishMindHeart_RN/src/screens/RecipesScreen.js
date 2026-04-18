import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C, tagColor } from '../theme';
import { ALL_MEALS } from '../data';

const FILTERS = ['All','Breakfast','Lunch','Dinner','Easy','Medium','Hard'];

export default function RecipesScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filt, setFilt] = useState('All');
  const items = useMemo(() => {
    let r = ALL_MEALS;
    if (['Breakfast','Lunch','Dinner'].includes(filt)) r = r.filter(m => m.type === filt);
    else if (['Easy','Medium','Hard'].includes(filt)) r = r.filter(m => m.difficulty === filt);
    if (search.trim()) { const q = search.toLowerCase(); r = r.filter(m => m.name.toLowerCase().includes(q) || m.tags.some(t => t.toLowerCase().includes(q))); }
    return r;
  }, [search, filt]);

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.hdr}>
        <Text style={s.htitle}>All 21 Recipes</Text>
        <View style={s.si}>
          <Text style={s.sic}>🔍</Text>
          <TextInput style={s.sinput} placeholder="Search recipes or nutrients..." placeholderTextColor="rgba(255,255,255,0.5)" value={search} onChangeText={setSearch} />
        </View>
      </View>
      <FlatList
        data={FILTERS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i}
        style={s.fbar}
        contentContainerStyle={{padding:10,gap:7}}
        renderItem={({item}) => (
          <TouchableOpacity style={[s.fp, filt===item && s.fpa]} onPress={() => setFilt(item)}>
            <Text style={[s.fpt, filt===item && s.fpta]}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={s.rc}>{items.length} recipe{items.length!==1?'s':''}</Text>
      <FlatList
        data={items}
        keyExtractor={m => m.id}
        contentContainerStyle={s.list}
        showsVerticalScrollIndicator={false}
        renderItem={({item:m}) => (
          <TouchableOpacity style={s.card} onPress={() => navigation.navigate('RecipeDetail',{meal:m})} activeOpacity={0.8}>
            <View style={s.crow}>
              <Text style={s.emi}>{m.emoji}</Text>
              <View style={s.ci}>
                <Text style={s.cn}>{m.name}</Text>
                <Text style={s.cm}>⏱ {m.time}   👥 {m.servings}   <Text style={s.cc}>💰 {m.cost}</Text></Text>
                <Text style={s.cnu}>{m.calories} cal · {m.protein} protein · {m.fiber} fiber</Text>
                <View style={s.tags}>{m.tags.slice(0,4).map(t => <View key={t} style={[s.tag,{backgroundColor:tagColor(t)}]}><Text style={s.tagt}>{t}</Text></View>)}</View>
              </View>
              <Text style={s.chev}>›</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:C.bg},
  hdr:{backgroundColor:C.teal,padding:16,paddingTop:20},
  htitle:{fontSize:22,fontWeight:'800',color:'#fff',marginBottom:12},
  si:{flexDirection:'row',alignItems:'center',backgroundColor:'rgba(255,255,255,0.2)',borderRadius:12,paddingHorizontal:12,height:42,gap:8},
  sic:{fontSize:14}, sinput:{flex:1,color:'#fff',fontSize:14},
  fbar:{backgroundColor:C.white,borderBottomWidth:0.5,borderBottomColor:C.border,maxHeight:52},
  fp:{paddingHorizontal:14,paddingVertical:7,borderRadius:20,borderWidth:1,borderColor:C.border,backgroundColor:C.white},
  fpa:{backgroundColor:C.emerald,borderColor:C.emerald},
  fpt:{fontSize:12,fontWeight:'600',color:C.text2}, fpta:{color:'#fff'},
  rc:{fontSize:12,color:C.text3,paddingHorizontal:14,paddingVertical:8},
  list:{paddingHorizontal:14,paddingBottom:30},
  card:{backgroundColor:C.white,borderRadius:12,borderWidth:0.5,borderColor:C.border,padding:14,marginBottom:10,shadowColor:'#000',shadowOffset:{width:0,height:1},shadowOpacity:0.05,shadowRadius:4,elevation:2},
  crow:{flexDirection:'row',alignItems:'flex-start',gap:12},
  emi:{fontSize:36,lineHeight:42}, ci:{flex:1},
  cn:{fontSize:14,fontWeight:'700',color:C.text,marginBottom:4,lineHeight:20},
  cm:{fontSize:11,color:C.text3,marginBottom:4}, cc:{color:C.emerald,fontWeight:'700'},
  cnu:{fontSize:11,color:C.text2,marginBottom:6},
  tags:{flexDirection:'row',flexWrap:'wrap',gap:3},
  tag:{borderRadius:20,paddingHorizontal:8,paddingVertical:3},
  tagt:{fontSize:10,fontWeight:'600',color:'#333'},
  chev:{fontSize:22,color:'#ccc',alignSelf:'center'},
});
