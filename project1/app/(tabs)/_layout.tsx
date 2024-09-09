import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings, LogOut, UserPlus, LogIn } from 'lucide-react-native';

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
        name="createaccount"
        component={CreateAccountScreen}
        options={{
          title: 'Create Account',
          tabBarIcon: ({ color, size }) => <UserPlus color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ color, size }) => <LogIn color={color} size={size} />,
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
      <Tab.Screen
        name="logout"
        component={LogOutScreen}
        options={{
          title: 'Log Out',
          tabBarIcon: ({ color, size }) => <LogOut color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{
        headerShown: false,       
      }}/>
    </Stack>
  );
}

function CreateAccountScreen() {
  return (
    <Stack>
      <Stack.Screen name="createaccount"  options={{
        headerShown: false,       
      }}/>
    </Stack>
  );
}

function LoginScreen() {
  return (
    <Stack>
      <Stack.Screen name="login"  options={{
        headerShown: false,       
      }}/>
    </Stack>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>Placeholder</Text>
    </View>
  );
}

function LogOutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Log Out Screen</Text>
      <Text>Placeholder</Text>
    </View>
  );
}