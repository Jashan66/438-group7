import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import WeatherCard from '@/components/util/WeatherCard';

// Define a type for the city data
interface City {
  city: string;
  temperature: string;
  condition: string;
  windSpeed: string;
  precipitation: string;
}

const cities: City[] = [
  {
    city: 'New York',
    temperature: '28°C',
    condition: 'Sunny',
    windSpeed: '10 km/h',
    precipitation: '2 mm',
  },
  {
    city: 'London',
    temperature: '18°C',
    condition: 'Cloudy',
    windSpeed: '8 km/h',
    precipitation: '5 mm',
  },
  {
    city: 'Tokyo',
    temperature: '22°C',
    condition: 'Rainy',
    windSpeed: '15 km/h',
    precipitation: '10 mm',
  },
];

export default function HomeScreen() {
  const renderWeatherCard = ({ item }: { item: City }) => (
    <WeatherCard
      city={item.city}
      temperature={item.temperature}
      condition={item.condition}
      windSpeed={item.windSpeed}
      precipitation={item.precipitation}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast</Text>
      <FlatList
        data={cities}
        renderItem={renderWeatherCard}
        keyExtractor={(item) => item.city}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardList: {
    paddingBottom: 20,
  },
});
