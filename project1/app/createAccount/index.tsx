import { View, Text, StyleSheet } from 'react-native';
import FormComponent from '@/components/FormComponent';

export default function CreateAccount() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome to the Weather App</Text>
      <FormComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50
  },
});