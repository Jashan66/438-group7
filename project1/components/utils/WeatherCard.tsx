import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Sun, CloudRain, Cloud, CloudSnow, CloudLightning, Star } from 'lucide-react-native';

interface WeatherCardProps {
  city: string;
  condition: string;
  temperature: number;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return <Sun testID="icon-sunny" color="orange" size={32} />;
    case 'rainy':
      return <CloudRain testID="icon-rainy" color="blue" size={32} />;
    case 'cloudy':
      return <Cloud testID="icon-cloudy" color="gray" size={32} />;
    case 'snow':
      return <CloudSnow testID="icon-snow" color="lightblue" size={32} />;
    case 'stormy':
      return <CloudLightning testID="icon-stormy" color="purple" size={32} />;
    default:
      return <Sun testID="icon-default" color="yellow" size={32} />;
  }
};

const WeatherCard: React.FC<WeatherCardProps> = ({ city, condition, temperature }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {getWeatherIcon(condition)}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.cityText}>{city}</Text>
        <Text style={styles.weatherText}>{condition}</Text>
        <Text style={styles.tempText}>{temperature}°C</Text>
      </View>
      <TouchableOpacity
        onPress={toggleFavorite}
        style={styles.favoriteButton}
        testID="favorite-button" 
      >
        <Star
          size={30}
          color={isFavorite ? '#FFD700' : '#CCCCCC'}
          testID="star-icon" 
        />
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 12,
    width: '90%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  iconContainer: {
    marginRight: 24,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  weatherText: {
    fontSize: width * 0.04,
    color: '#666',
    marginBottom: 4,
  },
  tempText: {
    fontSize: width * 0.045,
    fontWeight: '500',
    color: '#111',
  },
  favoriteButton: {
    padding: 10,
  },
});

export default WeatherCard;
