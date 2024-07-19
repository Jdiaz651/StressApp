// This is only a demo of what the pages are supposed to look like for the StressData Screen inside Dashboard.
//The final product should involve the retrieval of data from the Firebase firestore.


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { LineChart } from 'react-native-chart-kit';
import { CustomButton } from '../components/CustomButton';
import { Stack } from "expo-router";

// Stress level linechart data
const dummyData1 = {
  '2024-07-02': { stressedLevel: 4},
  '2024-07-03': { stressedLevel: 1 },
  '2024-07-04': { stressedLevel: 5  },
  '2024-07-05': { stressedLevel: 4 },
  '2024-07-06': { stressedLevel: 3  },
};



const lineChartData = {
  labels: Object.keys(dummyData1).map((dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate() + 1}`;
  }),
  datasets: [
    {
      data: Object.values(dummyData1).map((log) => log.stressedLevel),
    },
  ],
};

const StressDataScreen2 = () => {

  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ header: () => null }} />
        <View style={styles.root}>
        <Text>{'\n'}</Text>
        <CustomButton text="<" href="HomeScreen" type="whiteBackButton" />
        <Text style={styles.title}>Dashboard {'(2/4)\n'}</Text>
        
        
        </View>
    <View style={styles.container}>
    <Text style={styles.title2}>Stress Level</Text>
      <LineChart
        data={lineChartData}
        width={360} 
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#add8e6',
          backgroundGradientTo: 'white',
          backgroundGradientFrom: 'white',
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(68, 85, 90, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(68, 85, 90, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#add8e6',
          },
        }}
        bezier
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
        
      />
      <Text style={styles.title2}>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
    onPress={() => navigation.navigate("StressDataScreen1")}
    style={styles.button}
   >
    <Text style={styles.buttonText}>Back</Text>
   </TouchableOpacity>
   <Text style={fontSize=20}>                         {'\n'}</Text>
   <TouchableOpacity
    onPress={() => navigation.navigate("StressDataScreen3")}
    style={styles.button}
   >
    <Text style={styles.buttonText}>Next</Text>
   </TouchableOpacity>
   </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        borderBottomWidth: 0,
        borderBottomColor: '#FFF7F5',
        backgroundColor: '#59849b',
       
    },
    title: {
        fontSize: 28,
        color: 'white',
        marginVertical: -25,
        alignSelf: 'center',
        marginHorizontal: 8,
      },
      title2: {
        fontSize: 28,
        color: 'black',
        
        alignSelf: 'center',
        marginHorizontal: 8,
      },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      flexDirection: 'row',
      padding: 1
     },
    button: {
      backgroundColor: '#59849b',
      width: '50%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      
     },
     buttonText:  {
      color: 'white',
      fontWeight: '700',
      fontSize: 18,
     },
});

export default StressDataScreen2;
