import React, { useCallback, useContext, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogOut, Trash } from 'lucide-react-native';
import { router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserId = async () => {
    try {
      const userId = await AsyncStorage.getItem('user_id');
   
      if (userId !== null) {
        // User is logged in, hide log in & create account buttons
        setIsLoggedIn(true);
        
      } else {
        // No user ID found hide delete account and log out buttons
        setIsLoggedIn(false);
      }
    } catch (e) {
      // Handle error
      console.error('Failed to retrieve the user ID.', e);
    }
  };

//checks user session on page load
useFocusEffect(
    useCallback(() => {
    checkUserId();
    }, [])
);


  const handleLogout = async() => {
    // Placeholder code
    try {
      // Remove the user ID 
      await AsyncStorage.removeItem('user_id'); 

      Alert.alert('Logged out', 'You have been logged out successfully.');
      setIsLoggedIn(false);
     
      router.replace("/home");

    } catch (e) {
      console.error('Failed to log out.', e);
    }
    
  };

  const handleDeleteAccount = () => {
    // Placeholder code
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => Alert.alert('Account deleted') }
      ]
    );
  };

  // Navigate to login screen
  const handleNavigateToLogin = () => {
    router.push('/(auth)/login'); 
  };

  // Navigate to create account screen
  const handleNavigateToCreateAccount = () => {
    router.push('(auth)/createaccount'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {isLoggedIn ? (
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <LogOut width={24} height={24} />
            <Button title="Log Out" onPress={handleLogout} />
          </View>
          <View style={styles.button}>
            <Trash width={24} height={24} />
            <Button title="Delete Account" onPress={handleDeleteAccount} />
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleNavigateToLogin} />
          <Button title="Create Account" onPress={handleNavigateToCreateAccount} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsScreen;