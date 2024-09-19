import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';

const WeatherSearch = () => {
  const [cityName, setCityName] = useState<string>('King City');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.weatherstack.com/current?access_key=29de631dd1f3d2ca4c1ea7227fea4fb9&query=${encodeURIComponent(cityName)}`);
      const data = await response.json();

      // Logging for debugging purposes
      console.log('Raw weather data:', data);

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

      <Button title="Get Weather" onPress={fetchWeatherData} />

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
});

export default WeatherSearch;
