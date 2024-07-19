import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Text, Image, StyleSheet,} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/core';
import Logo from '../assets/images/Logo.png';
import { Stack } from "expo-router";

const AwarenessScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.root]}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton
            text="<"
            href="StressorScreen"
            type="blackBackButton"
            color="white"
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

      <Text style={styles.normal}>
        <Text style={{ fontWeight: 'bold' }}> Stress = </Text>
        Body Reaction + Situation
      </Text>

      <Text style={styles.normal}>
        <Text style={{ fontWeight: 'bold' }}> Anxiety = </Text>
        Anticipation + Event (real or imagined)
      </Text>

      <View style={styles.buttonContainer}>
        
        <View style={{backgroundColor: '#df7a84',  width: 370, padding: 8.5, marginVertical: 15, alignItems: 'center', borderRadius: 25,}}>
        <TouchableOpacity
        
        onPress={() => navigation.navigate('AwarenessDetailScreen', { option: 'Body'})}>
        
        <Text style={styles.text_SECONDARY}>Body</Text>
        </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#f8806f',  width: 370, padding: 8.5, marginVertical: 15, alignItems: 'center', borderRadius: 25,}}>
        <TouchableOpacity
        
        onPress={() => navigation.navigate('AwarenessDetailScreen', { option: 'Mind'})}>
        
        <Text style={styles.text_SECONDARY}>Mind</Text>
        </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#d46766',  width: 370, padding: 8.5, marginVertical: 15, alignItems: 'center', borderRadius: 25,}}>
        <TouchableOpacity
        
        onPress={() => navigation.navigate('AwarenessDetailScreen', { option: 'Feelings'})}>
        
        <Text style={styles.text_SECONDARY}>Feelings</Text>
        </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#a44c5f',  width: 370, padding: 8.5, marginVertical: 15, alignItems: 'center', borderRadius: 25,}}>
        <TouchableOpacity
        
        onPress={() => navigation.navigate('AwarenessDetailScreen', { option: 'Behavior'})}>
        
        <Text style={styles.text_SECONDARY}>Behavior</Text>
        </TouchableOpacity>
        
        </View>
      </View>
      
      <Text style={{fontSize: 33,}}>{'\n'}</Text>
      <View style={styles.container_SECONDARY}>
      
      <TouchableOpacity
        
        onPress={() => navigation.navigate('IntentionScreen')}>
        
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 24,}}>Continue</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
  },
  row: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  normal: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  quadForm: {
    maxWidth: 400,
    maxHeight: 400,
    marginVertical: 5,
  },
  quadText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'black',
    marginVertical: 1,
    textAlign: 'left',
  },
  viewQuadText: {
    position: 'absolute',
  },
  button: {
    width: 300, // Adjust the width as per your requirement
    height: 60, // Adjust the height as per your requirement
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
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  btcont: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 10,
  },
  smallSecondaryButton: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#457F9D',
    borderRadius: 40,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
  },
  smallButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 33,
  },
  container_SECONDARY: {
    backgroundColor: '#457f9d',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default AwarenessScreen;
