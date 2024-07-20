import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, ImageBackground,} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import NightSkyGif from '../assets/gif/NightSkyGif.gif';
import { Stack } from "expo-router";

const NightBreathingScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen options={{ header: () => null }} />
      <ImageBackground source={NightSkyGif} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={{ width: 100 }}>
            <CustomButton text="<" href="ExercisesScreen" type="whiteBackButton" />
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View style={{ marginRight: 100 }}>
              <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>4-7-8 Sleep Exercise</Text>

        <Text style={styles.italic}>To help you relax.</Text>

        <Text> {'\n\n'} </Text>

        <Text style={styles.baseText}>
          Breathe in through your nose for{' '}
          <Text style={styles.italic}> 4 </Text>
          <Text style={styles.baseText}>
            {' '}
            seconds.<Text>{'\n'}</Text>
          </Text>
        </Text>

        <Text style={styles.baseText}>
          Hold your breathe for <Text style={styles.italic}> 7 </Text>
          <Text style={styles.baseText}>
            {' '}
            seconds.<Text>{'\n'}</Text>
          </Text>
        </Text>

        <Text style={styles.baseText}>
          Breathe out through mouth for <Text style={styles.italic}> 8 </Text>
          <Text style={styles.baseText}>
            {' '}
            seconds.<Text>{'\n'}</Text>
          </Text>
        </Text>

        <View style={styles.button}>
          <CustomButton text="Next" href="NightMusicSelectionScreen" type="SECONDARY" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(30,25,70,0.4)',
  },
  background: {
    flex: 1,
    alignItems: 'center',
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
  timer: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 50,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {},

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 5,
    textAlign: 'center',
  },
  baseText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
    textAlign: 'left',
  },
  italic: {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 50,
  },
});

export default NightBreathingScreen;
