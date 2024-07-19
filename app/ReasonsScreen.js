import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Alert, Button, TextInput, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomSelect } from '../components/CustomSelect';
import Logo from '../assets/images/Logo.png';
import { auth, firestore, doc, setDoc, collection } from '../firebase.js';
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { Stack } from "expo-router";

const ReasonsScreen = () => {
  const route = useRoute();
  const [reasons, setReasons] = useState([]);
  const [reasonsCustom, setReasonsCustom] = useState('');
  const { stressor } = route.params;
  const user = auth.currentUser;
  const today = new Date();
  const myDate = moment(today).format('YYYY-MM-DD');
  const navigation = useNavigation();

  const data = {

    work: ['Colleagues','Boss','Employees','Work Load','Culture','Toxic environment',
      'Communication','Decision Making','Time Management','Dealing with Change', ],

    home: ['Partner','Family','In laws','Children','Financial','Domestic duties',
      'Sickness',],

    school: ['Homework','Making new friends','Exam pressure','Performance','Organization',
      'Time management','Work/financial','Bullying',],

    social: ['Social Media', 'Bullying','Isolation','Traffic','Friends dispute','Sports performance',
      'Organization','Climate Change','Economic Situation','War','Pandemic',],
    '': [],
  };

  //TODO: Send data to Firestore
  const handlePress = async () => {
    if (reasons.length < 1) {
      Alert.alert('Please pick a reason');
    } else {
      try {
        const userDocRef = doc(firestore, 'stressors', user.uid, 'dates', myDate);
        await setDoc(userDocRef, {"stressors": stressor, "reasons": reasons})
        
        navigation.navigate('AwarenessScreen');
      } catch (error) {
        console.log('Error writing document: ', error);
      }
    }
  };

  const handleAdd = () => {
    if (reasonsCustom == '') {
      Alert.alert('Custom Reason cannot be empty.');
    }
    else{
      setReasons([...reasons, reasonsCustom]);
      setReasonsCustom('');
    Toast.show({
      type: 'success',
      text1: 'Stressor Recorded',
      position: 'top',
      
    })
  };
  };

  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton
            text="<"
            href="StressorScreen"
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

      <Text style={styles.title}>What are your {stressor} stressors?</Text>

      <CustomSelect
        data={data[stressor]}
        onSelect={(value) => setReasons(value)}
        type="SECONDARY"
      />
      <View style={styles.inputContainer}>
        <TextInput
         placeholder="Add Custom Reasons"
         value={reasonsCustom}
         onChangeText={setReasonsCustom}
         style={styles.input}
         />
         </View>
      <Text style={fontsize=20}>{'\n'}</Text>
      <Button color="#F2A1A6" title="Add" onPress={handleAdd} />
      <Text style={fontsize=60}>{'\n'}{'\n'}{'\n'}</Text>
      <View style={styles.container_SECONDARY}>
      
      <TouchableOpacity
        
        onPress={() => navigation.navigate('AwarenessScreen')}>
        
        <Text style={styles.text_SECONDARY}>Continue</Text>
        </TouchableOpacity>
        </View>
      <Toast />
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 50,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
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

export default ReasonsScreen;
