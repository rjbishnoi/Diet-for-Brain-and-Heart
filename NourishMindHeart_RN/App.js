import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import PlanScreen from './src/screens/PlanScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import ShopScreen from './src/screens/ShopScreen';
import ScienceScreen from './src/screens/ScienceScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const EMERALD = '#2D6A4F';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const stackOpts = { headerShown: false };

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function PlanStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="PlanMain" component={PlanScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function RecipesStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="RecipesMain" component={RecipesScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function ShopStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="ShopMain" component={ShopScreen} />
    </Stack.Navigator>
  );
}

function ScienceStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="ScienceMain" component={ScienceScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: EMERALD,
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 82 : 60,
            paddingBottom: Platform.OS === 'ios' ? 24 : 8,
            paddingTop: 6,
            borderTopColor: '#E8E8E8',
            borderTopWidth: 0.5,
            backgroundColor: '#fff',
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Today"
          component={HomeStack}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>❤️</Text> }}
        />
        <Tab.Screen
          name="Plan"
          component={PlanStack}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>📅</Text> }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesStack}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>📖</Text> }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopStack}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛒</Text> }}
        />
        <Tab.Screen
          name="Science"
          component={ScienceStack}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🔬</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
