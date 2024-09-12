import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import WeatherCard from '@/components/utils/WeatherCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsername } from '@/db/db';
import { useFocusEffect } from 'expo-router';

interface City {
  city: string;
  temperature: string;
  condition: string;
  windSpeed: string;
  precipitation: string;
}

const cities: City[] = [
  {
    city: 'New York',
    temperature: '28°C',
    condition: 'Sunny',
    windSpeed: '10 km/h',
    precipitation: '2 mm',
  },
  {
    city: 'London',
    temperature: '18°C',
    condition: 'Cloudy',
    windSpeed: '8 km/h',
    precipitation: '5 mm',
  },
  {
    city: 'Tokyo',
    temperature: '22°C',
    condition: 'Rainy',
    windSpeed: '15 km/h',
    precipitation: '10 mm',
  },
];

export default function HomeScreen() {
  const [username, setUsername] = useState<string | null>(null);


  const getUserName = async(userId: string) => {
    //get username from database
    const username = await getUsername(userId);
    return username; 
  };


  const checkUserId = async () => {
    try {
      const userId = await AsyncStorage.getItem('user_id');
   
      if (userId !== null) {
        // User is logged in, try to get username
        const userName = await getUserName(userId);
  
        if (userName === -1) {
          // If no username is found, set to null
          setUsername(null); 
        } else {
           // Cast to string 
          setUsername(userName as string);
        }
        
      } else {
        // No user ID found
        setUsername(null); 
      }
    } catch (e) {
      // Handle error
      console.error('Failed to retrieve the user ID.', e);
    }
  };

  //checks user session on page load
  useFocusEffect(
    useCallback(() => {
      checkUserId();
    }, [])
  );

  



  const renderWeatherCard = ({ item }: { item: City }) => (
    <WeatherCard
      city={item.city}
      temperature={item.temperature}
      condition={item.condition}
      windSpeed={item.windSpeed}
      precipitation={item.precipitation}
    />
  );

  return (
    //TODO add like a search bar
  
    <View style={styles.container}>

       {username && <Text style={styles.greeting}>Hey, {username}</Text>}

      <Text style={styles.title}>Weather Forecast</Text>
      <FlatList
        data={cities}
        renderItem={renderWeatherCard}
        keyExtractor={(item) => item.city}
        contentContainerStyle={styles.cardList}
      />
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
  cardList: {
    paddingBottom: 20,
  },
});