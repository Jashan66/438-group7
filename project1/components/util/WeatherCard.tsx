import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Sun, CloudRain, Wind } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const cardHeight = width * (9 / 21); // Maintain 21:9 aspect ratio
const iconSize = cardHeight * 0.15;

interface WeatherCardProps {
  city: string;
  temperature: string;
  condition: string;
  windSpeed: string;
  precipitation: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  condition,
  windSpeed,
  precipitation,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.temperature}>{temperature}</Text>
      </View>
      <View style={styles.conditionDetailsContainer}>
        <View style={styles.detailItem}>
          {condition === 'Sunny' && <Sun color="orange" size={iconSize} />}
          {condition === 'Cloudy' && <CloudRain color="gray" size={iconSize} />}
          {condition === 'Rainy' && <CloudRain color="blue" size={iconSize} />}
          <Text style={styles.condition}>{condition}</Text>
        </View>
        <View style={styles.detailItem}>
          <Wind color="gray" size={iconSize * 0.6} />
          <Text style={styles.detailText}>Wind: {windSpeed}</Text>
        </View>
        <View style={styles.detailItem}>
          <CloudRain color="gray" size={iconSize * 0.6} />
          <Text style={styles.detailText}>Precipitation: {precipitation}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default WeatherCard;
