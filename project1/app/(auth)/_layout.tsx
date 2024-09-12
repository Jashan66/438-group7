import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native'; // Assuming you're using Lucide icons

const Layout = () => {
  const router = useRouter();
  const segments = useSegments();

  const handleBackPress = () => {
    if (segments.length > 1) {
      router.back(); // Navigates to the previous page
    }
  };

  return (
    <View style={styles.container}>
      {segments.length > 1 && (
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <ChevronLeft size={20} color="#007AFF" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}

      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  backButtonText: {
    fontSize: 17,
    color: '#007AFF',
    marginLeft: 6,
  },
});

export default Layout;

