import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { LogBox, View } from 'react-native';
import { AuthContext, AuthProvider } from './src/hooks/auth';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={"light"} translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </View>
  )
}