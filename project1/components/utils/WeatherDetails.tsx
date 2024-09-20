import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {
  Sun,
  Wind,
  Thermometer,
  Cloud,
  Eye,
  Droplet,
  BarChart,
  Umbrella,
  Star,
} from 'lucide-react-native';

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
  onFavoriteToggle?: (cityName: string) => void;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!weatherData) {
    return <Text style={styles.errorText}>No weather data available.</Text>;
  }

  const { location, current } = weatherData;

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle && location?.name) {
      onFavoriteToggle(location.name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>
          {location?.name}, {location?.country}
        </Text>
        <Text style={styles.localtime}>Local Time: {location?.localtime}</Text>
      </View>

      <View style={styles.weatherInfo}>
        <Text style={styles.temperature}>{current?.temperature}°C</Text>
        <Text style={styles.weatherDescription}>{current?.weather_descriptions?.[0]}</Text>
      </View>

      {renderDetailRow(
        <Wind size={24} color="#333" />,
        `Wind: ${current?.wind_speed} km/h ${current?.wind_dir}`
      )}
      {renderDetailRow(
        <Thermometer size={24} color="#333" />,
        `Feels Like: ${current?.feelslike}°C`
      )}
      {renderDetailRow(
        <Droplet size={24} color="#333" />,
        `Humidity: ${current?.humidity}%`
      )}
      {renderDetailRow(
        <BarChart size={24} color="#333" />,
        `Pressure: ${current?.pressure} mb`
      )}
      {renderDetailRow(
        <Cloud size={24} color="#333" />,
        `Cloud Cover: ${current?.cloudcover}%`
      )}
      {renderDetailRow(
        <Umbrella size={24} color="#333" />,
        `Precipitation: ${current?.precip} mm`
      )}
      {renderDetailRow(
        <Eye size={24} color="#333" />,
        `Visibility: ${current?.visibility} km`
      )}
      {renderDetailRow(
        <Sun size={24} color="#333" />,
        `UV Index: ${current?.uv_index}`
      )}

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavoriteToggle}
        testID="favorite-button"
      >
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
