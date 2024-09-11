import React, { useCallback, useEffect, useState } from 'react';
import Slot from './(tab)/_layout';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';  

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load resources, make API calls, or any other preparation here
        await new Promise(resolve => setTimeout(resolve, 1000)); // simulated wait time just to make sure stuff works
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Splash screen is still showing
  }

  return ( //loads layout from tabs but we can load other screens too based on what we route too
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Slot /> 
    </View>
  );
}
