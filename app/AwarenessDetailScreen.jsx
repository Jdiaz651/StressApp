import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import Background2 from '../assets/images/Background2.png';
import { Stack } from "expo-router";

const AwarenessDetailScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const { option } = route.params;
  const { height } = useWindowDimensions();
  
  const data = {

    Body: ['\n\n • Difficulty breathing \n • Fatigue  \n • Headaches \n • High Blood Pressure\n • Palpitations \n • Skin Irritation \n', ],

    Feelings: ['\n\n • Alienation \n • Apathy \n • Depression \n • Fear \n • Irritability \n • Loss of confidence \n',],

    Mind: ['\n\n • Difficulty concentrating \n • Impaired judgement \n • Indecision \n • Muddled thinking \n • Negativity \n • Worrying \n',],

    Behavior: ['\n\n • Accident Prone \n • Insomnia  \n • Loss of appetite \n • Loss of sex drive \n • More addiction  \n • Restlessness \n'],
    '': [],
  };

  return (
    <SafeAreaView style={[styles.root]}>
    <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton text="<" href="AwarenessScreen" type="blackBackButton" />
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>
        <Text style={{ fontWeight: 'bold' }}> {option}{'\n'} </Text>
      </Text>

      <View style={styles.container}>
        <Image
          source={Background2}
          style={(styles.container, { height: height * 0.65 })}
          resizeMode="contain"
        />
        
        <View style={styles.viewQuadText}>
            <Text style={styles.title2}>{'\n This may look like:'} </Text>
            <Text style={{fontSize: 25}}>  {data[option]}   </Text>
          
        </View>
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
        fontWeight: 'bold',
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
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        marginVertical: 2,
        textAlign: 'center',
      },
      title2: {
        fontSize: 30,
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
        fontSize: 28,
        fontWeight: 'normal',
        color: 'black',
        marginVertical: 1,
        textAlign: 'left',
      },
      viewQuadText: {
        position: 'absolute',
      },
});

export default AwarenessDetailScreen;
