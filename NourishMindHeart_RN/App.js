import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Platform } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import PlanScreen from './src/screens/PlanScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import ShopScreen from './src/screens/ShopScreen';
import ScienceScreen from './src/screens/ScienceScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import { COLORS } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function PlanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlanMain" component={PlanScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function RecipesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipesMain" component={RecipesScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function ShopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShopMain" component={ShopScreen} />
    </Stack.Navigator>
  );
}

function ScienceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScienceMain" component={ScienceScreen} />
    </Stack.Navigator>
  );
}

function TabIcon({ emoji, focused }) {
  return (
    <Text style={{
      fontSize: 22,
      opacity: focused ? 1 : 0.5,
      transform: [{ scale: focused ? 1.1 : 1 }],
    }}>
      {emoji}
    </Text>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E8E8E8',
            borderTopWidth: 0.5,
            paddingBottom: Platform.OS === 'ios' ? 20 : 8,
            paddingTop: 6,
            height: Platform.OS === 'ios' ? 82 : 62,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            marginTop: 2,
          },
          tabBarActiveTintColor: COLORS.emerald,
          tabBarInactiveTintColor: '#AAAAAA',
        }}
      >
        <Tab.Screen
          name="Today"
          component={HomeStack}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="❤️" focused={focused} /> }}
        />
        <Tab.Screen
          name="Plan"
          component={PlanStack}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="📅" focused={focused} /> }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesStack}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="📖" focused={focused} /> }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopStack}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🛒" focused={focused} /> }}
        />
        <Tab.Screen
          name="Science"
          component={ScienceStack}
          options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🔬" focused={focused} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
