import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import WeatherDetails from '@/components/utils/WeatherDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = '21bd6d8eb8a5391ab51ccead52094efc';
const API_URL = 'https://api.weatherstack.com/current';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState<string>('Monterey');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 
  const [username, setUsername] = useState<string | null>(null); 

  const fetchWeatherData = async (city: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}?query=${city}&access_key=${API_KEY}`);
      if (!response.ok) throw new Error('City not found'); // Check for response status
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    fetchWeatherData(searchQuery);
    setSearchQuery(''); // Clear search field after submit
  };

  const checkLoginStatus = async () => {
    try {
      const userId = await AsyncStorage.getItem('user_id');
      const savedUsername = await AsyncStorage.getItem('username');
      setIsLoggedIn(!!userId);
      setUsername(savedUsername);
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const favoriteCity = async () => {
    if (!weatherData) return;

    // Check if user is logged in
    if (!isLoggedIn) {
      Alert.alert('Login Required', 'You must be logged in to favorite cities.');
      return;
    }

    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favCities = favorites ? JSON.parse(favorites) : [];
      
      if (!favCities.some((city: any) => city.city === weatherData.location.name)) {
        favCities.push({
          city: weatherData.location.name,
          temperature: weatherData.current.temperature,
          condition: weatherData.current.weather_descriptions[0],
        });
        await AsyncStorage.setItem('favorites', JSON.stringify(favCities));
        Alert.alert('Success', `${weatherData.location.name} has been added to your favorites.`);
      } else {
        Alert.alert('Notice', 'This city is already in your favorites.');
      }
    } catch (error) {
      console.error('Error saving favorite city:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>
          {isLoggedIn && username ? `Welcome, ${username}!` : 'Welcome!'}
        </Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a city..."
        value={searchQuery} // Controlled input
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearchSubmit}
      />
      <Button title="Add to Favorites" onPress={favoriteCity} disabled={loading} />
      {loading ? <Text>Loading...</Text> : weatherData && <WeatherDetails weatherData={weatherData} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
});
