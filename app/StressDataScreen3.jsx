// This is only a demo of what the pages are supposed to look like for the StressData Screen inside Dashboard.
//The final product should involve the retrieval of data from the Firebase firestore.


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { PieChart } from 'react-native-chart-kit';
import { CustomButton } from '../components/CustomButton';
import { Stack } from "expo-router";

// Feelings pie chart data
const dummyData1 = [
  { name: '% Excited', percentage: 25, color: '#75F075', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Happy', percentage: 10, color: '#B2F075', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Indifferent', percentage: 30, color: '#E8E850', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Sad', percentage: 20, color: '#F0B275', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Angry', percentage: 15, color: '#F07575', legendFontColor: 'black', legendFontSize: 17 },
];

// Signs pie chart data
const dummyData2 = [
  { name: '% Body', percentage: 30, color: '#df7a84', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Mind', percentage: 11, color: '#f8806f', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Emotion', percentage: 42, color: '#d46766', legendFontColor: 'black', legendFontSize: 17 },
  { name: '% Behavior', percentage: 17, color: '#a44c5f', legendFontColor: 'black', legendFontSize: 17 },
];

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

const StressDataScreen3 = () => {

  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ header: () => null }} />
        <View style={styles.root}>
        <Text>{'\n'}</Text>
        <CustomButton text="<" href="HomeScreen" type="whiteBackButton" />
        <Text style={styles.title}>Dashboard {'(3/4)\n'}</Text>
  
        </View>
    <View style={styles.container}>
    <Text style={styles.title2}>Feelings</Text>
      <PieChart
        data={dummyData1}
        width={380}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="percentage"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        />
      <Text style={styles.title2}>Signs</Text>
      <PieChart
        data={dummyData2}
        width={380}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="percentage"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        />
      <View style={styles.buttonContainer}>
      <TouchableOpacity
    onPress={() => navigation.navigate("StressDataScreen2")}
    style={styles.button}
   >
    <Text style={styles.buttonText}>Back</Text>
   </TouchableOpacity>
   <Text style={fontSize=20}>                         {'\n'}</Text>
   <TouchableOpacity
    onPress={() => navigation.navigate("StressDataScreen4")}
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

export default StressDataScreen3;
