import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function FormComponent() {

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create an Account</Text>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder='Username'/>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
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
  }
});