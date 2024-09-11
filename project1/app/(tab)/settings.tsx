import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogOut, Trash } from 'lucide-react-native';
import { router } from 'expo-router';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Placeholder code
    Alert.alert('Logged out', 'You have been logged out successfully.');
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

      {/* New buttons for navigation */}
      <View style={styles.buttonContainer}>
        <Button title="Go to Login" onPress={handleNavigateToLogin} />
        <Button title="Create Account" onPress={handleNavigateToCreateAccount} />
      </View>
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