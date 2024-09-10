import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings } from 'lucide-react-native';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: '#555',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

function SettingsScreen() {
  return (
    <Stack>
      <Stack.Screen
        name="settingsMain" // Changed name to avoid conflict with Tab.Screen
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
