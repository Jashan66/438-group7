import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LucideUser, LucideLock } from 'lucide-react-native';
import { initDB, checkLogin, getID } from '../../db/db'
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await initDB();
      } catch (error) {
        console.error('Error initializing the database:', error);
      }
    };

    initializeDatabase();
  }, []);

  const handleLogin = () => {
    if (username === "" || password === "") {
      setErrorMessage("Username or password cannot be empty!");
      return;
    } else {
      loginUser(username, password);
    }
  };

  async function loginUser(username: string, password: string) {
    const loggedIn = await checkLogin(username, password);

    if (loggedIn) {
      setErrorMessage("");
      console.log("User logged in");

      const userId = await getID(username, password);

      if (userId != -1) {
        await storeUserId(userId);
        router.replace("/home");
      } else {
        setErrorMessage("Error Logging In! Please Try Again.");
      }
    } else {
      setErrorMessage("Incorrect username or password!");
    }
  }

  const storeUserId = async (userId: number) => {
    try {
      await AsyncStorage.setItem('user_id', userId.toString());
    } catch (e) {
      console.error('Failed to save the user ID.', e);
      setErrorMessage("Error Logging In! Please Try Again.");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <LucideUser size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <LucideLock size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1C1C1E',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#1C1C1E',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

