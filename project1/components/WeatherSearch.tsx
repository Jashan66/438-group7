import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { fetchWeatherData } from '../api/API'; // Adjust the path based on your file structure

const WeatherSearch = () => {
  const [cityName, setCityName] = useState<string>('New York, United States of America');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(cityName);

      // Logging for debugging purposes
      console.log('Weather data:', data);

      if (data.error) {
        setError(data.error.info);
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data.');
    }
    setLoading(false);
  };

  const handleCityChange = (city: string) => {
    setCityName(city);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={cityName}
        onChangeText={handleCityChange}
      />

      <Button title="Get Weather" onPress={handleFetchWeatherData} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && (
        <View style={styles.resultContainer}>
          <Text style={styles.info}>Location: {weatherData.location.name}</Text>
          <Text style={styles.info}>Country: {weatherData.location.country}</Text>
          <Text style={styles.info}>Region: {weatherData.location.region}</Text>
          <Text style={styles.info}>Local Time: {weatherData.location.localtime}</Text>
          <Text style={styles.info}>Current Temperature: {weatherData.current.temperature}°C</Text>
          <Text style={styles.info}>Weather: {weatherData.current.weather_descriptions.join(', ')}</Text>
          <Image
            source={{ uri: weatherData.current.weather_icons[0] }}
            style={styles.weatherIcon}
          />
          <Text style={styles.info}>Wind Speed: {weatherData.current.wind_speed} km/h</Text>
          <Text style={styles.info}>Humidity: {weatherData.current.humidity}%</Text>
          <Text style={styles.info}>Feels Like: {weatherData.current.feelslike}°C</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
  },
  weatherIcon: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default WeatherSearch;
