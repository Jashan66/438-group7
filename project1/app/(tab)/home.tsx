import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import WeatherDeatils from '@/components/utils/WeatherCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsername } from '@/db/db';
import { useFocusEffect } from 'expo-router';
import WeatherDetails from '@/components/utils/WeatherDetails';

const dummyWeatherData = {
  location: {
    name: "San Francisco",
    country: "USA",
    region: "California",
    localtime: "2024-09-11 12:00",
  },
  current: {
    temperature: 20,
    weather_descriptions: ["Partly Cloudy"],
    wind_speed: 10,
    wind_dir: "NW",
    pressure: 1015,
    humidity: 60,
    cloudcover: 50,
    feelslike: 18,
    uv_index: 5,
    visibility: 10,
    precip: 0,
  },
};

export default function HomeScreen() {
  const [username, setUsername] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // You can handle fetching weather data for the searched city here
  };

  return (
    <View style={styles.container}>
      {username && <Text style={styles.greeting}>Hey, {username}</Text>}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a city..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={styles.title}>Weather Forecast</Text>
      {/* Render the weather details card */}
      <WeatherDetails weatherData={dummyWeatherData} />
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
