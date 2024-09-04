import { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function FormComponent() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createUserAccount = () =>{
        console.log(`Creating Account... with username: ${username} and password: ${password}`);
    

        //Add backend Logic & form validation
    }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create an Account</Text>

      <View style={styles.formContainer}>
        <TextInput id="username" value={username} style={styles.input} placeholder='Username' onChangeText={setUsername}/>
        <TextInput id="password" value={password}  style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={setPassword}/>
        <Pressable onPress={createUserAccount} style={styles.button}>
            <Text>Submit</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText:{
    fontWeight: "normal",
    fontSize: 25
  },
  formContainer: {
    padding: 100,
    margin: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 7,
    shadowColor: '#000',    
    shadowRadius: 5,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    borderRadius: 5,
  },

});