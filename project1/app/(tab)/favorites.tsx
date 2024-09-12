import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import { getUsername } from "@/db/db";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";


export default function FavoriteScreen(){

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



    return (
        <View>
            {username && <Text style={styles.greeting}>Hey, {username} - here are some cities you have favorited.</Text>}

            {/* if user is not logged in */}
            {!username && <Text style={styles.greeting}>Login or Create an Account to favorite some cities.</Text>}
            <Text>Favorites Page</Text>
        </View>
        // The goal is to have favourites show up here maybe use the weathercard component
    );
}

const styles = StyleSheet.create({
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

  });