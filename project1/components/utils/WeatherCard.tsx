import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Sun, CloudRain, Cloud, CloudSnow, CloudLightning } from 'lucide-react-native';

interface WeatherCardProps {
  city: string;
  condition: string;
  temperature: number;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return <Sun color="orange" size={32} />;
    case 'rainy':
      return <CloudRain color="blue" size={32} />;
    case 'cloudy':
      return <Cloud color="gray" size={32} />;
    case 'snow':
      return <CloudSnow color="lightblue" size={32} />;
    case 'stormy':
      return <CloudLightning color="purple" size={32} />;
    default:
      return <Sun color="yellow" size={32} />;
  }
};

const WeatherCard: React.FC<WeatherCardProps> = ({ city, condition, temperature }) => {
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
});

export default WeatherCard;

