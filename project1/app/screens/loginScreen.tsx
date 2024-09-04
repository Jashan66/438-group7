import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LucideUser, LucideLock } from 'lucide-react-native';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with', username, password);
    // Example: Navigate to another screen
    // navigation.navigate('HomeScreen');
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
      
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 15,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});
