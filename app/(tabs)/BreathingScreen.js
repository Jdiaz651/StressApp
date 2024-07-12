import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../../components/CustomButton';
import { CustomSelect } from '../../components/CustomSelect';
import Logo from '../../assets/images/Logo.png';
import { Audio } from 'expo-av';

const BreathingScreen = () => {
  const [music, setMusic] = useState('');
  const [cycle, setCycle] = useState(0);
  const navigation = useNavigation();
  let soundLength = 0;
  const musicData = ['Rain', 'Waves', 'Fire', 'Forest', 'Meditation', 'Birds'];
  const cycleData = [1, 2, 3, 5, 10];

  const handlePress = async (music, cycle) => {
    async function playSound(filePath, cycles) {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(filePath);

      console.log('Playing Sound');
      for (let i = 0; i < cycles; i++) {
        try {
          await sound.setPositionAsync(0);
          await sound.playAsync().then(function (result) {
            soundLength = result.durationMillis;
          });
          const durationInSeconds = soundLength;
          await new Promise((resolve) =>
            setTimeout(resolve, durationInSeconds)
          );
        } catch (error) {
          console.error('Error playing sound:', error);
        }
      }
    }

    if (!music) {
      Alert.alert('Please pick a music choice');
      return;
    }

    if (!cycle) {
      Alert.alert('Please select the number of cycles');
      return;
    }

    let soundFile = '';
    switch (music[0]) {
      case 'Waves':
        soundFile = 'explosion_3.mp3';
        break;
      case 'Rain':
        soundFile = 'explosion_3.mp3';
        break;
      case 'Fire':
        soundFile = 'explosion_3.mp3';
        break;
      case 'Forest':
        soundFile = 'explosion_3.mp3';
        break;
      case 'Meditation':
        soundFile = 'explosion_3.mp3';
        break;
      case 'Birds':
        soundFile = 'explosion_3.mp3';
        break;
      default:
        console.log('Invalid music choice');
        return;
    }

    if (soundFile) {
      const pagePath = window.location.href;
      
      navigation.navigate('TimerScreen', {music: music, cycle: cycle, reference:pagePath});
      await playSound(`../../assets/sounds/${soundFile}`, cycle);
    }
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton text="<" href="/" type="blackBackButton" />
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Music choice?</Text>

      <CustomSelect
        radio={true}
        data={musicData}
        onSelect={(value) => setMusic(value)}
        type="PRIMARY"
      />

      <Text style={styles.title}>Number of cycles?</Text>

      <CustomSelect
        radio={true}
        data={cycleData}
        onSelect={(value) => setCycle(value)}
        type="PRIMARY"
      />

      <View style={styles.button}>
        <CustomButton
          text="Start"
          href=""
          onPress={() => handlePress(music, cycle)}
          type="SECONDARY"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
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
    marginVertical: 5,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 10,
  },
});

export default BreathingScreen;
