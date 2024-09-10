import { Stack, Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function Layout() {

 const isLoggedIn = false;

  return (
    <Stack>
      {isLoggedIn ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(registration)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}