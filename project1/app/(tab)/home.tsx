import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import WeatherDetails from '@/components/utils/WeatherDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsername } from '@/db/db';
import { useFocusEffect } from 'expo-router';
import { debounce } from 'lodash';

const API_KEY = '6eea1a74d6848f12b9845febff1528c4';  // API key
const API_URL = 'https://api.weatherstack.com/current';

export default function HomeScreen() {
  const [username, setUsername] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('Monterey');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getUserName = async (userId: string) => {
    const username = await getUsername(userId);
    return username;
  };

  const checkUserId = async () => {
    try {
      const userId = await AsyncStorage.getItem('user_id');
      if (userId !== null) {
        const userName = await getUserName(userId);
        if (userName === -1) {
          setUsername(null);
        } else {
          setUsername(userName as string);
        }
      } else {
        setUsername(null);
      }
    } catch (e) {
      console.error('Failed to retrieve the user ID.', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkUserId();
    }, [])
  );

  // the fetch API
  const fetchWeatherData = async (city: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}?query=${city}, US&access_key=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search handler(delays the search as it uses the API way to much, already used 3 keys)
  //NOTE:  Open weatherstack on Incognito mode for new key, it wont let me make another account
  const handleSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
      fetchWeatherData(query);  // Fetch new weather data when search query changes
    }, 3000),  // search delay
    []
  );

  useEffect(() => {
    fetchWeatherData(searchQuery);  // Default set to monterey when loading the app
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {username && <Text style={styles.greeting}>Hey, {username}</Text>}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a city..."
        onChangeText={(text) => handleSearch(text)}
      />
      <Text style={styles.title}>Weather Forecast</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <WeatherDetails weatherData={weatherData} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
