import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';

const Layout = () => {
    // i tried to used the children prop but like it didnt work 
  const router = useRouter();
  const segments = useSegments();

  const handleBackPress = () => {
    if (segments.length > 1) {
      router.back(); // Navigates to the previous page
    }
  };

  return (
    <View style={styles.container}>
      {/* Back button logic */}
      {segments.length > 1 && (
        <Button title="Go Back" onPress={handleBackPress} />
      )}

      {/* Stack to handle routes and layout */}
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Layout;
