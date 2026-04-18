import React from 'react';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PlanScreen from './src/screens/PlanScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import ShopScreen from './src/screens/ShopScreen';
import ScienceScreen from './src/screens/ScienceScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const SO = { headerShown: false };

const Stacks = {
  Home: [['HomeMain', HomeScreen], ['RecipeDetail', RecipeDetailScreen]],
  Plan: [['PlanMain', PlanScreen], ['RecipeDetail', RecipeDetailScreen]],
  Recipes: [['RecipesMain', RecipesScreen], ['RecipeDetail', RecipeDetailScreen]],
  Shop: [['ShopMain', ShopScreen]],
  Science: [['ScienceMain', ScienceScreen]],
};

function makeStack(screens) {
  return () => (
    <Stack.Navigator screenOptions={SO}>
      {screens.map(([name, Comp]) => (
        <Stack.Screen key={name} name={name} component={Comp} />
      ))}
    </Stack.Navigator>
  );
}

const TABS = [
  { name: 'Today',   emoji: '❤️',  Stack: makeStack(Stacks.Home) },
  { name: 'Plan',    emoji: '📅',  Stack: makeStack(Stacks.Plan) },
  { name: 'Recipes', emoji: '📖',  Stack: makeStack(Stacks.Recipes) },
  { name: 'Shop',    emoji: '🛒',  Stack: makeStack(Stacks.Shop) },
  { name: 'Science', emoji: '🔬',  Stack: makeStack(Stacks.Science) },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2D6A4F',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 82 : 60,
            paddingBottom: Platform.OS === 'ios' ? 24 : 8,
            paddingTop: 6,
            borderTopColor: '#E8E8E8',
            borderTopWidth: 0.5,
            backgroundColor: '#fff',
          },
          tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
        }}
      >
        {TABS.map(({ name, emoji, Stack }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={Stack}
            options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>{emoji}</Text> }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
