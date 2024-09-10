import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Sun, CloudRain, Wind } from 'lucide-react-native';

const cities = [
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
  const renderWeatherCard = ({ item }) => (
    <View style={styles.card}>
      {}
      <View style={styles.headerContainer}>
        <Text style={styles.city}>{item.city}</Text>
        <Text style={styles.temperature}>{item.temperature}</Text>
      </View>

      {}
      <View style={styles.conditionDetailsContainer}>
        <View style={styles.detailItem}>
          {item.condition === 'Sunny' && <Sun color="orange" size={iconSize} />}
          {item.condition === 'Cloudy' && <CloudRain color="gray" size={iconSize} />}
          {item.condition === 'Rainy' && <CloudRain color="blue" size={iconSize} />}
          <Text style={styles.condition}>{item.condition}</Text>
        </View>
        <View style={styles.detailItem}>
          <Wind color="gray" size={iconSize * 0.6} />
          <Text style={styles.detailText}>Wind: {item.windSpeed}</Text>
        </View>
        {/* // yea this dont work with flex box 
        <View style={styles.detailItem}>
          <CloudRain color="gray" size={iconSize * 0.6} />
          <Text style={styles.detailText}>Precipitation: {item.precipitation}</Text>
      </View>
*/}
        
      </View>
    </View>
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

const { width } = Dimensions.get('window');
const cardHeight = width * (9 / 21); // Maintain 21:9 aspect ratio
const iconSize = cardHeight * 0.15; // Smaller icon size relative to card height
// yea i came up these ratios and it works but it is kinda wack 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: width * 0.06, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardList: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    marginBottom: 20,
    padding: 20,
    width: '100%',
    height: cardHeight,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  city: {
    fontSize: cardHeight * 0.14, 
    fontWeight: '600',
  },
  temperature: {
    fontSize: cardHeight * 0.18, 
    fontWeight: 'bold',
    color: '#333',
  },
  conditionDetailsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  condition: {
    fontSize: cardHeight * 0.1, 
    color: '#666',
    marginLeft: 5,
  },
  detailItem: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginRight: 10,
  },
  detailText: {
    fontSize: cardHeight * 0.1, 
    marginLeft: 5,
  },
});
