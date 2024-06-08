/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import { Link } from 'expo-router'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const DashboardScreen = ({ navigation }) => {

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <CustomButton text= "≡" href='/' type="dropButton"/>
      <Text style={styles.title}>
        Home
      </Text>
      <Text>
      {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
      </Text>
      
        <CustomButton text= "Dashboard" href='/' type="moodButton"/>
        <Text>
          {"\n"}
          
        </Text>
        
        <CustomButton text= "Exercises" href='/' type="exercisesButton"/>
        <Text>
          {"\n"}
          
        </Text>
        
        <CustomButton text= "Daily Log" href='/' type="moodButton"/>
        <Text>
          {"\n"}
          
        </Text>
        
        <CustomButton text= "Emotion & Control" href='/' type="exercisesButton"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF7F5'
  },
  title: {
    fontSize: 37,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginVertical: -78,
  },
  
});

export default DashboardScreen;
