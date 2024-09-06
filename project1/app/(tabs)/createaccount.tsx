import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { User, Mail, Lock } from 'lucide-react-native';
import { initDB, addUser } from '../db/db';

export default function CreateAccountScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleCreateAccount = () => {
    console.log(`Account created... ${username} + ${password}`);

    createAccount(username, password);
  };

  async function createAccount(username: string, password: string){
    const userAdded = await addUser(username, password);

    if (userAdded){
      //go to home page
    }else{
      //error message
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <View style={styles.inputContainer}>
        <User color="gray" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Mail color="gray" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Lock color="gray" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Lock color="gray" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});
