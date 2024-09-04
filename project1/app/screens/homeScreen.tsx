import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sun, CloudRain, Wind, Thermometer } from 'lucide-react-native';

export default function HomeScreen() {
    //dummy data its just place holder for now
  const weatherData = {
    temperature: '28°C',
    condition: 'Sunny',
    windSpeed: '10 km/h',
    precipitation: '2 mm',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Weather</Text>

      <View style={styles.weatherContainer}>
        <Sun color="orange" size={48} />
        <Text style={styles.temperature}>{weatherData.temperature}</Text>
        <Text style={styles.condition}>{weatherData.condition}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Wind color="gray" size={24} />
          <Text style={styles.detailText}>Wind: {weatherData.windSpeed}</Text>
        </View>
        <View style={styles.detailItem}>
          <CloudRain color="gray" size={24} />
          <Text style={styles.detailText}>Precipitation: {weatherData.precipitation}</Text>
        </View>
        <View style={styles.detailItem}>
          <Thermometer color="gray" size={24} />
          <Text style={styles.detailText}>Temperature: {weatherData.temperature}</Text>
        </View>
      </View>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  weatherContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  condition: {
    fontSize: 24,
    color: '#666',
    marginTop: 5,
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
