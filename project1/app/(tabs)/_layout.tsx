import { Tabs } from 'expo-router';
import { Home, Cloud, Settings } from 'lucide-react-native';
import React from 'react';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="forecast"
        options={{
          tabBarLabel: 'Forecast',
          tabBarIcon: ({ color, size }) => (
            <Cloud color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
