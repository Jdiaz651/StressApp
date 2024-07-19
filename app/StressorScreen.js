import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import { useNavigation } from '@react-navigation/core';
import { Stack } from "expo-router";

const StressorScreen = () => {
  const today = new Date();
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton
            text="<"
            href="InControlScreen"
            type="blackBackButton"
          />
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Stressor of the day</Text>

      <View style={styles.row}>

        <TouchableOpacity
            onPress={() => navigation.navigate('ReasonsScreen', { stressor: 'home'})}
            style={[styles.container_STRESSOR]}
          >
            <Text style={styles.text_STRESSOR}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('ReasonsScreen', { stressor: 'work'})}
            style={[styles.container_STRESSOR]}
          >
            <Text style={styles.text_STRESSOR}>Work</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity
            onPress={() => navigation.navigate('ReasonsScreen', { stressor: 'school'})}
            style={[styles.container_STRESSOR]}
          >
            <Text style={styles.text_STRESSOR}>School</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('ReasonsScreen', { stressor: 'social'})}
            style={[styles.container_STRESSOR]}
          >
            <Text style={styles.text_STRESSOR}>Social</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF7F5',
  },
  header: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  volume: {
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 25,
    textAlign: 'center',
  },
  row: {
    width: '100%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  container_STRESSOR: {
    backgroundColor: '#457f9d',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text_STRESSOR: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
});

export default StressorScreen;
