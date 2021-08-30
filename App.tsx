import React from 'react';
import { SignIn } from './src/screens/signIn';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SignIn />
    </View>
  )
}