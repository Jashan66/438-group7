import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LucideUser, LucideLock } from 'lucide-react-native';
import { initDB, checkLogin } from '../db/db';

const LoginScreen: React.FC = () => {
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
    console.log('Logging in with', username, password);
    // Example: Navigate to another screen
    // navigation.navigate('HomeScreen');

    if (username === "" || password === "") {
      setErrorMessage("Username or password cannot be empty!");
      return;
    }else{
      loginUser(username, password);
    }

  };

  async function loginUser(username:string, password:string){
    const loggedIn = await checkLogin(username, password);

    if(loggedIn){
      setErrorMessage("");
      console.log("User logged in");
      
      //navigate to Home
    }else{ 
      setErrorMessage("Incorrect username or password!");
    }

  }

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

      <View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
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
  errorMessage: {
    color:"red",
    fontSize: 17,
    textAlign: "center",
    marginTop: 30


  },
});
