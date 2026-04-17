import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import PlanScreen from './src/screens/PlanScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import ShopScreen from './src/screens/ShopScreen';
import ScienceScreen from './src/screens/ScienceScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import { COLORS } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ── Each tab wraps its screen + shared RecipeDetail in a Stack ──

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

// ── Tab Icon Helper ──
function TabIcon({ emoji, focused }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.55, transform: [{ scale: focused ? 1.15 : 1 }] }}>
        {emoji}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E8E8E8',
            borderTopWidth: 0.5,
            paddingBottom: 6,
            paddingTop: 6,
            height: 62,
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
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="❤️" focused={focused} />,
            tabBarLabel: 'Today',
          }}
        />
        <Tab.Screen
          name="Plan"
          component={PlanStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="📅" focused={focused} />,
            tabBarLabel: 'Plan',
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="📖" focused={focused} />,
            tabBarLabel: 'Recipes',
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="🛒" focused={focused} />,
            tabBarLabel: 'Shop',
          }}
        />
        <Tab.Screen
          name="Science"
          component={ScienceStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="🔬" focused={focused} />,
            tabBarLabel: 'Science',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
