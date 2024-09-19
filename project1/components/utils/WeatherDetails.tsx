import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Sun, Wind, Thermometer, Cloud, Eye, Droplet, BarChart, Umbrella, Star } from 'lucide-react-native';

interface WeatherDetailsProps {
  weatherData?: {
    location?: {
      name?: string;
      country?: string;
      region?: string;
      localtime?: string;
    };
    current?: {
      temperature?: number;
      weather_descriptions?: string[];
      wind_speed?: number;
      wind_dir?: string;
      pressure?: number;
      humidity?: number;
      cloudcover?: number;
      feelslike?: number;
      uv_index?: number;
      visibility?: number;
      precip?: number;
    };
  };
  onFavoriteToggle?: (cityName: string) => void; // Added prop to handle favorite toggle
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Guard clause to handle undefined or missing data
  if (!weatherData || !weatherData.location || !weatherData.current) {
    return <Text style={styles.errorText}>No weather data available.</Text>;
  }

  const { location, current } = weatherData;

  const details = [
    { icon: <Wind color="#6C757D" size={24} />, text: `Wind: ${current.wind_speed ?? 'N/A'} km/h ${current.wind_dir ?? ''}` },
    { icon: <Thermometer color="#6C757D" size={24} />, text: `Feels Like: ${current.feelslike ?? 'N/A'}°C` },
    { icon: <Droplet color="#1E90FF" size={24} />, text: `Humidity: ${current.humidity ?? 'N/A'}%` },
    { icon: <BarChart color="#6C757D" size={24} />, text: `Pressure: ${current.pressure ?? 'N/A'} mb` },
    { icon: <Cloud color="#6C757D" size={24} />, text: `Cloud Cover: ${current.cloudcover ?? 'N/A'}%` },
    { icon: <Umbrella color="#1E90FF" size={24} />, text: `Precipitation: ${current.precip ?? 'N/A'} mm` },
    { icon: <Eye color="#6C757D" size={24} />, text: `Visibility: ${current.visibility ?? 'N/A'} km` },
    { icon: <Sun color="#FFA500" size={24} />, text: `UV Index: ${current.uv_index ?? 'N/A'}` },
  ];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle && location.name) {
      onFavoriteToggle(location.name); // Pass the city name when toggled
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>
          {location.name ?? 'Unknown City'}, {location.country ?? 'Unknown Country'}
        </Text>
        <Text style={styles.localtime}>Local Time: {location.localtime ?? 'N/A'}</Text>
      </View>

      <View style={styles.weatherInfo}>
        <View>
          <Text style={styles.temperature}>{current.temperature ?? 'N/A'}°C</Text>
          <Text style={styles.weatherDescription}>{current.weather_descriptions?.[0] ?? 'No description'}</Text>
        </View>
      </View>

      <FlatList
        data={details}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => renderDetailRow(item.icon, item.text)}
      />

      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Star size={30} color={isFavorite ? '#FFD700' : '#CCCCCC'} />
      </TouchableOpacity>
    </View>
  );
};

const renderDetailRow = (icon: JSX.Element, text: string) => (
  <View style={styles.detailRow}>
    {icon}
    <Text style={styles.detailText}>{text}</Text>
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
    width: width * 0.9,
    alignSelf: 'center',
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  city: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  localtime: {
    fontSize: 14,
    color: '#A1A1A1',
    marginTop: 4,
    textAlign: 'center',
  },
  weatherInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  temperature: {
    fontSize: 52,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  weatherDescription: {
    fontSize: 18,
    color: '#A1A1A1',
    marginTop: 4,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  detailText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    marginTop: 20,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
});

export default WeatherDetails;
