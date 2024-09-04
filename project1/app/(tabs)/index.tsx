import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User, LogIn } from 'lucide-react-native';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import CreateAccountScreen from '../screens/createaccountScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let IconComponent;

          if (route.name === 'Home') {
            IconComponent = Home;
          } else if (route.name === 'Login') {
            IconComponent = LogIn;
          } else if (route.name === 'Create Account') {
            IconComponent = User;
          }

          return <IconComponent color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Create Account" component={CreateAccountScreen} />
    </Tab.Navigator>
  );
}
