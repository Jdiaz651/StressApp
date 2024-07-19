import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, useWindowDimensions } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import Lake from '../assets/MenuScreen/lake.png';
import { Stack } from "expo-router";

const HelpScreen = () => {

  const { height } = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ height: height }}>
      <Stack.Screen options={{ header: () => null }} />
      
      <ImageBackground source={Lake} style={styles.background}>
      <CustomButton text="<" href="ProfilePage" type="whiteBackButton" />
        <Image
          source={Logo}
          style={(styles.logo, { height: height * 0.2 })}
          resizeMode="contain"
        />
      </ImageBackground>
      <View style={styles.root}/> 
      <Text style={styles.title}>Help</Text>
      <Text style={styles.normal}>
      <Text style={styles.subtitle}>Channel Your Relief{'\n'}{'\n'}</Text>
        Knowing how to channel your stress and anxiety is crucial for maintaining a healthy mental state.
        Here, we provide some tips and resources to help you manage these challenges.
          {'\n'}{'\n'}
      <Text style={styles.subtitle}>Quick Tips for Stress Relief{'\n'}{'\n'}</Text>
        1.Take deep breaths. Deep breaths are known to reduce tension and help relax the body.{'\n'}{'\n'}
        2.Practice mindfulness. Being present in the moment can help you manage your stress better.{'\n'}{'\n'}
        3.Exercise regularly. Physical activity releases endorphins, which are natural stress relievers.{'\n'}{'\n'}
        4.Get enough sleep. Quality sleep helps your body recover and handle stress more effectively.{'\n'}{'\n'}
        5.Connect with loved ones. Talking to friends and family can provide emotional support and reduce stress.{'\n'}{'\n'}
      <Text style={styles.subtitle}>Quick Tips for Dealing with Anxiety{'\n'}{'\n'}</Text>
          1.Recognize and understand your triggers. Identifying what causes your anxiety can help you manage it better.{'\n'}{'\n'}
          2.Maintain a healthy diet. Eating well-balanced meals can improve your overall well-being.{'\n'}{'\n'}
          3.Stay active. Regular exercise can reduce anxiety symptoms and improve your mood.{'\n'}{'\n'}
          4.Limit caffeine and alcohol. These substances can increase anxiety levels in some people.{'\n'}{'\n'}

        </Text>
      <View/>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignSelf: 'flex-end',
    marginHorizontal: 30,
    marginVertical: 5,
  },
  logo: {
    maxWidth: 300,
    maxHeight: 200,
    opacity: 100,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  normal: {
    fontSize: 20,
    color: '#000000',
    marginVertical: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    alignSelf: 'center',
  },
});

export default HelpScreen;
