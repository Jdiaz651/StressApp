import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-toast-message';
//TODO: Complete the Settings Screen
const SettingsScreen = () => {
  
  const navigation = useNavigation()

  const empty = () => {
    console.log("Test")
    Toast.show({
      type: 'info',
      text1: 'Currently empty',
      position: 'top',
      //bottomOffset: 100,
    });
    navigation.navigate('ProfilePage')
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <CustomButton text="<" href="ProfilePage" type="whiteBackButton" />
        <Text style={styles.title}>Settings</Text>
        <View style={styles.top} />
        <Text style={styles.options}>
          {'\n'}
          {'\n'}
        </Text>
      </View>

      <Text style={styles.subtitle}>
          {'\n'}
          {'\n'}
        </Text>
      <CustomButton
        text="Settings"
        onPress={empty}
        type="greenButton"
      />
    <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default SettingsScreen;
