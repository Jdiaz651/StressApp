import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Animated,} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { useRoute } from '@react-navigation/native';
import Logo from '../assets/images/Logo.png';
import Volume from '../assets/images/Volume.png';
import NightTimeGif from '../assets/gif/NightTimeGif.gif'; // Gif is not in sync with timer, longer times will decrease quality
import WavesImage from '../assets/gif/waves3.gif';
import RainImage from '../assets/gif/rain2.gif';
import FireImage from '../assets/gif/fire.gif';
import ForestImage from '../assets/gif/forest3.gif';
import MeditationImage from '../assets/gif/meditation3.gif';
import BirdsImage from '../assets/gif/birds3.gif';
import { useNavigation } from 'expo-router';
import { Audio } from 'expo-av';
import { Stack } from "expo-router";

const soundFiles = {
  'waves.mp3': require('../assets/sounds/waves.mp3'),
  'rain.mp3': require('../assets/sounds/rain.mp3'),
  'fire.mp3': require('../assets/sounds/fire.mp3'),
  'forest.mp3': require('../assets/sounds/forest.mp3'),
  'meditation.mp3': require('../assets/sounds/meditation.mp3'),
  'birds.mp3': require('../assets/sounds/birds.mp3'),
};

const NightTimerScreen = () => {

  const route = useRoute();
  const { music, cycle } = route.params;
  const [timer, setTimer] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [sound, setSound] = useState();
  const navigation = useNavigation();
  const window = useWindowDimensions();
  const size = window.width - 100;

  const [pos, setPos] = useState(new Animated.ValueXY(0, 0));
  //EASE YOUR SLEEP
  const min = Math.floor(timer / 60);
  const sec = timer % 60 < 10 ? '0' + (timer % 60).toString() : timer % 60;
  // Apply the following animated text
  const stage = [4,7,8]
  const text = ['Breathe In', 'Hold', 'Breathe Out'];

  const posX = pos.x.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 232],
  });
  const posY = pos.y.interpolate({
    inputRange: [0, 1],
    outputRange: [232, 12],
  });

  const animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pos.y, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pos.x, {
          toValue: 1,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(pos.y, {
          toValue: 0,
          duration: 8000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: cycle }
    ).start();
  };

  const soundRef = useRef(null);

  useEffect(() => {
    async function playSound(soundFile) {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(soundFiles[soundFile]);
      soundRef.current = sound;
  
      console.log('Playing Sound');
      await sound.playAsync();
    }

    const setBackground = () => {
      let soundFile = '';
      switch (music) {
        case 'Waves':
          setBackgroundImage(WavesImage);
          soundFile = 'waves.mp3';
          break;
        case 'Rain':
          setBackgroundImage(RainImage);
          soundFile = 'rain.mp3';
          break;
        case 'Fire':
          setBackgroundImage(FireImage);
          soundFile = 'fire.mp3';
          break;
        case 'Forest':
          setBackgroundImage(ForestImage);
          soundFile = 'forest.mp3';
          break;
        case 'Meditation':
          setBackgroundImage(MeditationImage);
          soundFile = 'meditation.mp3';
          break;
        case 'Birds':
          setBackgroundImage(BirdsImage);
          soundFile = 'birds.mp3';
          break;
      }
        if (soundFile) {
            playSound(soundFile);
          }
      }

    setBackground();
    pos.x.resetAnimation();
    pos.y.resetAnimation();
    animation();
    setTimer(23 * cycle);
    var counter = 0;
    const countdown = setInterval(() => {
    setTimer((lastTimer) => {
      if (lastTimer <= 1) {
        clearInterval(countdown);
        pos.stopAnimation();
        if (soundRef.current) {
          soundRef.current.stopAsync(); // Stop the sound
        }
        navigation.navigate('NightBreathingScreen');
      }
      return lastTimer - 1;
    });
  }, 1000);

   return () => {
    clearInterval(countdown);
    if (soundRef.current) {
      soundRef.current.unloadAsync();
    }
  };
}, []);

  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen options={{ header: () => null }} />
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={{ width: 100 }}>
            <CustomButton
              text="<"
              href="NightMusicSelectionScreen"
              type="whiteBackButton"
            />
          </View>
          <Image source={Logo} style={styles.logo} resizeMode="cover" />

          <View style={{ width: 100 }}>
            <Image source={Volume} style={styles.volume} resizeMode="cover" />
          </View>
        </View>

        <Text style={styles.timer}>
          {min}:{sec}
          </Text>
        {/*<Text style={styles.timer}>
          <Animated.Text style={styles.text}>{'\n'}{text[stage]}</Animated.Text>
        </Text>*/}
        <View style={styles.container}>
        <Image source={NightTimeGif} style={styles.NightTimeGif} />
        <Text style={{fontSize:30}}>{'\n'}</Text>
        
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
    backgroundColor: 'rgba(27,45,100,0.3)',
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
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 20,
  },
  NightTimeGif: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 600,
    maxHeight: 600,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {},
  text: {
    position: 'absolute',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default NightTimerScreen;
