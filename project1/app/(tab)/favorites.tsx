import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import { getUsername } from "@/db/db";
import WeatherCard from "@/components/utils/WeatherCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function FavoriteScreen() {

  interface City {
    city: string;
    temperature: number;
    condition: string;
  }

  const cities: City[] = [
    {
      city: 'New York',
      temperature: 28,
      condition: 'sunny',
    },
    {
      city: 'London',
      temperature: 18,
      condition: 'cloudy',
    },
    {
      city: 'Tokyo',
      temperature: 22,
      condition: 'rainy',
    },
  ];

  const renderWeatherCard = ({ item }: { item: City }) => (
    <WeatherCard
      city={item.city}
      temperature={item.temperature}
      condition={item.condition}
    />
  );

  const [username, setUsername] = useState<string | null>(null);

  const getUserName = async (userId: string): Promise<string | null> => {
    const username = await getUsername(userId);
    return username !== -1 ? username : null;
  };

  const checkUserId = async () => {
    try {
      const userId = await AsyncStorage.getItem('user_id');

      if (userId) {
        const userName = await getUserName(userId);
        setUsername(userName); // Set username or null based on response
      } else {
        setUsername(null); // No user ID found
      }
    } catch (e) {
      console.error('Failed to retrieve the user ID.', e);
      setUsername(null); // Ensure the UI updates even in case of error
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkUserId();
    }, [])
  );

  return (
    <View style={styles.container}>
      {username ? (
        <Text style={styles.greeting}>Hey, {username} - here are some cities you have favorited.</Text>
      ) : (
        <Text style={styles.greeting}>Login or Create an Account to favorite some cities.</Text>
      )}

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
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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

