import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import WeatherCard from '@/components/utils/WeatherCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

export default function FavoriteScreen() {
  const [favorites, setFavorites] = useState<any[]>([]);

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    } catch (e) {
      console.error('Failed to retrieve favorites:', e);
    }
  };

  const removeFavoriteCity = async (cityName: string) => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favCities = favorites ? JSON.parse(favorites) : [];
      
      //city to be removed
      const updatedFavorites = favCities.filter((city: any) => city.city !== cityName);
      
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites); // Update changes
      Alert.alert('Removed', `${cityName} has been removed from your favorites.`);
    } catch (error) {
      console.error('Error removing favorite city:', error);
    }
  };

  const renderWeatherCard = ({ item }: { item: any }) => (
    <WeatherCard
      city={item.city}
      temperature={item.temperature}
      condition={item.condition}
      onFavoritePress={() => removeFavoriteCity(item.city)} // Pass to WeatherCard
    />
  );

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderWeatherCard}
          keyExtractor={(item) => item.city}
          contentContainerStyle={styles.cardList}
        />
      ) : (
        <Text style={styles.noFavoritesText}>You have no favorite cities yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  cardList: {
    paddingBottom: 20,
  },
});
