import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth } from '../firebase.js';
import { firestore, getDoc, doc, setDoc } from '../firebase.js';
import {CustomButton} from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import { Stack } from "expo-router";
import { useNavigation } from '@react-navigation/core';

const FeelingsScreen = () => {

  const [pressedOption, setPressedOption] = useState(null);
  const [userData, setUserData] = useState(null);
  const user = auth.currentUser;
  const colors = ['#F07575','#F0B275','#E8E850','#B2F075','#75F075'];
  const myDate = new Date().toISOString().split('T')[0];
  const navigation = useNavigation();


  const handleOptionPress = (option) => {
    setPressedOption(option);
  };

  // Retrieve name of user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } else {
        
        setUserData(null);
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  // TODO: Send the data to the Firestore with the following or check with the original in screens:
  const handle = async (number) => {
    const [value, setValue] = useState(null);
    const [prev, setPrev] = useState(null);
    
    setValue(number);
    
    const userDocRef = doc(collection(firestore, 'DailyLog', user.uid, 'dates'), myDate);
      await setDoc(userDocRef, 
        {feeling: number})
        .then(() => {
          navigation.navigate('InControlScreen');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
        setPrev(number);
/*
    try {
      await setDoc(doc(firestore, 'DailyLog', user.uid, 'dates', myDate), {
        feeling: number,
      });
    } catch (error) {
      console.log('Error writing document: ', error);
    }
    setPrev(number);*/
  };


  return (
    <SafeAreaView style={[styles.container]}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" href='HomeScreen' type="blackBackButton"/></View>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
            </View>
      </View>
      <Text style={styles.title}>Hello {userData?.displayName || '(user)'},{'\n'}How are you feeling today?</Text>
      <View style={styles.optionsContainer}>
        {['Angry 😠 ','Sad 😔','Indifferent 😐 ','Happy 🙂','Excited 😆'].map((option, index) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              { backgroundColor: colors[index] },
              pressedOption === option && styles.pressedOption,
            ]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.container_SECONDARY}>
      <TouchableOpacity
        disabled={!pressedOption}
        onPress={() => navigation.navigate('InControlScreen')}>
        
        <Text style={styles.text_SECONDARY}>Continue</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
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
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    justifyContent: 'space-around',
    width: '69%',
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 24,
    alignItems: 'center',
  },
  pressedOption: {
    borderWidth: 2,
  },
  optionText: {
    fontSize: 24,
    color: '#000',
    
  },
  container_SECONDARY: {
    backgroundColor: '#457f9d',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  text_SECONDARY: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});

export default FeelingsScreen;