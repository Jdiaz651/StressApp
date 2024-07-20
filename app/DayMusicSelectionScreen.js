import React, { useState } from 'react';
import { View, SafeAreaView,  Text,  Image,  StyleSheet,  Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';
import { CustomSelect } from '../components/CustomSelect';
import Logo from '../assets/images/Logo.png';
import { Stack } from "expo-router";

const DayMusicSelectionScreen = () => {
  const [music, setMusic] = useState('');
  const [cycle, setCycle] = useState(0);
  const navigation = useNavigation();
  const musicData = ['Rain', 'Waves', 'Fire', 'Forest', 'Meditation', 'Birds'];
  const cycleData = [1, 2, 3, 5, 10];

  const handlePress = (music, cycle) => {
    if (!music) {
      Alert.alert('Please pick a music choice');
      return;
    }

    if (!cycle) {
      Alert.alert('Please select the number of cycles');
      return;
    }

    navigation.navigate('DayTimerScreen', {music: music[0], cycle: cycle});
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton text="<" href="DayBreathingScreen" type="blackBackButton" />
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
        <TouchableOpacity style={styles.container_SECONDARY}
          onPress={() => handlePress(music, cycle)}>
          <Text style={styles.text_SECONDARY}>Start</Text>
        </TouchableOpacity>
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

export default DayMusicSelectionScreen;