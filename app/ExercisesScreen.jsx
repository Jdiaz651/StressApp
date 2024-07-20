import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import { Stack } from "expo-router";

const ExercisesScreen = () => {

 
  return (
    <SafeAreaView style={[styles.root]}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton text="<" href='HomeScreen' type="blackBackButton" />
        </View>
        <View style={{ marginRight: 170 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
      </View>

      <Text style={styles.title}>Rest your Mind</Text>
      <Text style={styles.subtitle}>Exercises</Text>

      
      <CustomButton
        text="Destress Your Day"
        href="DayBreathingScreen"
        type="EXERCISE"
      />

      <CustomButton
        text="Ease Your Sleep"
        href= "NightBreathingScreen"
        type="EXERCISE"
      />

      <CustomButton
        text="Strengthen Your Focus"
        href='FocusBreathingScreen'
        type="EXERCISE"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    
  },
  header: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },

  // this code in css i have added
  button: {
    width: 340, // Adjust the width as per your requirement
    height: 100, // Adjust the height as per your requirement
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#457F9D',
    borderRadius: 8,
    marginBottom: 10,
  },
  blackBackButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  blackBackButtonText: {
    color: 'black',
    fontSize: 30, // You can adjust the font size if needed
    fontWeight: 'bold', // You can adjust the font weight if needed
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  container_EXERCISE: {
    backgroundColor: '#457f9d',
    width: 175,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  
  // end here
});
export default ExercisesScreen;
