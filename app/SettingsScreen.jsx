import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-toast-message';
import { Stack } from "expo-router";
//TODO: Complete the Settings Screen
const SettingsScreen = () => {
  
  const navigation = useNavigation()

  const empty = () => {
    console.log("Test")
    Toast.show({
      type: 'info',
      text1: 'Currently empty',
      position: 'top',
    });
    navigation.navigate('ProfilePage')
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.root}>
        <CustomButton text="<" href="ProfilePage" type="whiteBackButton" />
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.options}>
          {'\n'}
        </Text>
        </View>
        <View style={styles.container_greenButton}>
        <TouchableOpacity
        
        onPress={() => empty()}>
        
        <Text style={styles.text_greenButton}>Settings</Text>
        </TouchableOpacity>
      
      </View>
    <Toast />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderBottomWidth: 300,
    borderBottomColor: '#FFF7F5',
    backgroundColor: '#736467',
  },
  
  title: {
    fontSize: 28,
    color: 'white',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  subtitle: {
    fontSize: 22,
    color: 'black',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  options: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    marginHorizontal: 30,
    marginVertical: 5,
  },
  container_greenButton: {
    backgroundColor: '#f27c7a',
    width: 350,
    padding: 18,
    alignSelf: 'center',
    borderRadius: 30,
  },
  text_greenButton: {
    color: '#FFFFFF',
    fontSize: 24,
    alignSelf: 'center',
  },
  
});

export default SettingsScreen;
