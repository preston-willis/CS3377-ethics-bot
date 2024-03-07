import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer MD = Michael DeWeese
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Double check that import in correct MD
import { StyleSheet, Text, View } from 'react-native';
import AboutUsPage from './AboutUsPage';//imported from AboutUsPage.js MD
import ResultsPage from './ResultsPage';//imported from ResultsPage.js MD


const Stack = createNativeStackNavigator();//imported from react-navigation/native-stack MD

export default function App() {
  return (
    <NavigationContainer> {/* Wrap EthicsBotin a NavigationContainer */}//Wrap the entire app in a NavigationContainer MD
      <Stack.Navigator initialRouteName="AboutUs">//Defining AboutUs route MD
        {/* 'About Us''Results' */}//Defining AboutUs and Results screens MD
        <Stack.Screen name="AboutUs" component={AboutUsPage} options={{ title: 'About Us' }} /> //Defining AboutUs screen MD
        <Stack.Screen name="Results" component={ResultsPage} options={{ title: 'Results' }} /> //Defining Results screen MD
      </Stack.Navigator>//Defining the stack navigator MD
      <StatusBar style="auto" /> {/* StatusBar can stay outside NavigationContainer*/}
    </NavigationContainer> //Close NavigationContainer MD

    /* Commented the below out because I am not familiar enough to  delete and needed to add Navigation to set up wireframe. MD */
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
