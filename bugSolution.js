import { useFonts } from 'expo-font';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  const [fontsLoaded] = useFonts({
    'my-font': require('./assets/fonts/MyCustomFont.ttf'), // Correct path to the font
  });

  if (!fontsLoaded) {
    return <View><Text>Loading fonts...</Text></View>; // Handle loading state
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This text uses the custom font.</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'my-font', // Use the loaded font
    fontSize: 24,
  },
});