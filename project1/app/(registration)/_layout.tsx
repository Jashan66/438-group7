import React from 'react';
import { Tabs } from 'expo-router';
import { Stack } from 'expo-router';

export default function RegistrationLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="createaccount" options={{ title: 'Create Account' }} />
    //   <Stack.Screen name="login" options={{ title: 'Login' }} />
    // </Stack>

      <Tabs>
        <Tabs.Screen name="createaccount" options={{ title: 'Create Account' }} />
        <Tabs.Screen name="index" options={{ title: 'Login' }} />
      </Tabs>
  );
}
