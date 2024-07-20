import { View, SafeAreaView, Text, Image, StyleSheet, ImageBackground,} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Logo from '../assets/images/Logo.png';
import Cloud from '../assets/gif/cloud.gif';
import { Stack } from "expo-router";

const FocusBreathingScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen options={{ header: () => null }} />
      <ImageBackground source={Cloud} style={styles.background}>
        <View style={styles.header}>
          <View style={{ width: 100 }}>
            <CustomButton text="<" type="whiteBackButton" href="ExercisesScreen" />
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View style={{ marginRight: 100 }}>
              <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>4-4-4 Focus Exercise</Text>

        <Text style={styles.italic}>To help you focus.</Text>

        <Text style={styles.baseText}>
          Pinch one nostril and breathe in through the other nostril for
          <Text style={styles.italic}> 4 </Text>
          <Text style={styles.baseText}>seconds.</Text>
        </Text>

        <Text style={styles.baseText}>
          Pinch both nostrils and hold your breathe for
          <Text style={styles.italic}> 4 </Text>
          <Text style={styles.baseText}>
            seconds.
          </Text>
        </Text>

        <Text style={styles.baseText}>
          Release the other nostril and breathe out through that nostril for{' '}
          <Text style={styles.italic}> 4 </Text>
          <Text style={styles.baseText}>
            seconds.
          </Text>
        </Text>

        <View style={styles.button}>
          <CustomButton href="FocusMusicSelectionScreen" text="Next" type="SECONDARY" />
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
    backgroundColor: 'rgba(0,100,0,0.5)',
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
    color: 'white',
    marginVertical: 5,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  baseText: {
    fontSize: 22,
    fontWeight: 'normal',
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  italic: {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 50,
  },
});

export default FocusBreathingScreen;
