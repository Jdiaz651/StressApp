// This is only a demo of what the pages are supposed to look like for the StressData Screen inside Dashboard.
//The final product should involve the retrieval of data from the Firebase firestore.

import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { CustomButton } from '../components/CustomButton';
import { Stack } from "expo-router";

// Intention to Change bar chart data
const dummyData1 = {
  '2024-07-02': { Intention: 4},
  '2024-07-03': { Intention: 1 },
  '2024-07-04': { Intention: 5  },
  '2024-07-05': { Intention: 4 },
  '2024-07-06': { Intention: 3  },
};
// In Control bar chart data
const dummyData2 = {
  '2024-07-02': { Control: 2},
  '2024-07-03': { Control: 1 },
  '2024-07-04': { Control: 3  },
  '2024-07-05': { Control: 5 },
  '2024-07-06': { Control: 2  },
};


const barChartDataIntention = {
  labels: Object.keys(dummyData1).map((dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate() + 1}`;
  }),
  datasets: [
    {
      data: Object.values(dummyData1).map((log) => log.Intention),
      color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
    },
  ],
};

const barChartDataControl = {
  labels: Object.keys(dummyData2).map((dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate() + 1}`;
  }),
  datasets: [
    {
      data: Object.values(dummyData2).map((log) => log.Control),
      color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
    },
  ],
};

const StressDataScreen1 = () => {

  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ header: () => null }} />
        <View style={styles.root}>
        <Text>{'\n'}</Text>
        <CustomButton text="<" href="HomeScreen" type="whiteBackButton" />
        <Text style={styles.title}>Dashboard {'(1/4)\n'}</Text>
        
        
        </View>
    <View style={styles.container}>
    <Text style={styles.title2}>Intention to Change</Text>
    <BarChart
        data={barChartDataIntention}
        width={330}
        height={220}
        chartConfig={{
          backgroundColor: '#add8e6',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForBackgroundLines: {
            stroke: 'transparent', // Make the grid lines transparent
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#add8e6',
          },
        }}
      />
      <Text style={styles.title2}>{'\n'}In Control</Text>
    <BarChart
        data={barChartDataControl}
        width={330}
        height={220}
        chartConfig={{
          backgroundColor: '#add8e6',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForBackgroundLines: {
            stroke: 'transparent', // Make the grid lines transparent
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#add8e6',
          },
        }}
      />
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity
    onPress={() => navigation.navigate("StressDataScreen4")}
    style={styles.button}
   >
    <Text style={styles.buttonText}>Back</Text>
   </TouchableOpacity>
   <Text style={fontSize=20}>                         {'\n'}</Text>
   <TouchableOpacity
    onPress={() => navigation.navigate("StressDataScreen2")}
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
        borderBottomWidth: 10,
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

export default StressDataScreen1;
