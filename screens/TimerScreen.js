import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { CustomButton } from '../components/CustomButton';
import Logo from '../../assets/images/Logo.png';
import Volume from '../../assets/images/Volume.png';
import Waves from '../../assets/gif/waves3.gif';
import Rain from '../../assets/gif/rain2.gif';
import Fire from '../../assets/gif/fire.gif';
import Forest from '../../assets/gif/forest3.gif';
import Meditation from '../../assets/gif/meditation3.gif';
import Birds from '../../assets/gif/birds3.gif';

const TimerScreen = ({ route, navigation }) => {
  const [timer, setTimer] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const window = useWindowDimensions();
  const size = window.width - 100;

  const { music, cycle } = route.params;

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const [pos, setPos] = useState(new Animated.ValueXY(0, 0));
  //DESTRESS YOUR DAY
  const min = Math.floor(timer / 60);
  const sec = timer % 60 < 10 ? '0' + (timer % 60).toString() : timer % 60;
  const stage = Math.ceil(timer / 4) % 4;
  const text = ['Breathe In', 'Hold', 'Breathe Out', 'Hold'];

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
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pos.y, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pos.x, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: cycle }
    ).start();
  };

  useEffect(() => {
    if (music === 'Waves') {
      setBackgroundImage(Waves);
    } else if (music === 'Rain') {
      setBackgroundImage(Rain);
    } else if (music === 'Fire') {
      setBackgroundImage(Fire);
    } else if (music === 'Forest') {
      setBackgroundImage(Forest);
    } else if (music === 'Meditation') {
      setBackgroundImage(Meditation);
    } else if (music === 'Birds') {
      setBackgroundImage(Birds);
    }

    pos.x.resetAnimation();
    pos.y.resetAnimation();
    animation();
    setTimer(16 * cycle);
    var counter = 0;
    var countdown = setInterval(() => {
      setTimer((lastTimer) => {
        lastTimer <= 1 && clearInterval(countdown);
        return lastTimer - 1;
      });
      counter++;
      if (counter == 16 * cycle) {
        clearInterval(countdown);
        pos.stopAnimation();
        navigation.navigate('Exercises');
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={{ width: 100 }}>
            <CustomButton
              text="<"
              onPress={() => navigation.goBack()}
              type="blackBackButton"
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

        <View style={styles.container}>
          <Svg height={size} width={size} style={styles.slider}>
            <G scale={size / 244}>
              <AnimatedCircle cx={posX} cy={posY} r="12" fill="#EDE9E9" />
              <G fill="#EDE9E9">
                <Path
                  origin="122, 122"
                  y="30"
                  rotation="0"
                  d="M10.5 182C10.5 182.828 11.1716 183.5 12 183.5C12.8284 183.5 13.5 182.828 13.5 182H10.5ZM13.0607 0.939346C12.4749 0.353546 11.5251 0.353546 10.9393 0.939346L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939346ZM13.5 182L13.5 2H10.5L10.5 182H13.5Z"
                />
                <Path
                  origin="122, 122"
                  x="-30"
                  rotation="90"
                  d="M10.5 182C10.5 182.828 11.1716 183.5 12 183.5C12.8284 183.5 13.5 182.828 13.5 182H10.5ZM13.0607 0.939346C12.4749 0.353546 11.5251 0.353546 10.9393 0.939346L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939346ZM13.5 182L13.5 2H10.5L10.5 182H13.5Z"
                />
                <Path
                  origin="122, 122"
                  y="-30"
                  rotation="180"
                  d="M10.5 182C10.5 182.828 11.1716 183.5 12 183.5C12.8284 183.5 13.5 182.828 13.5 182H10.5ZM13.0607 0.939346C12.4749 0.353546 11.5251 0.353546 10.9393 0.939346L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939346ZM13.5 182L13.5 2H10.5L10.5 182H13.5Z"
                />
                <Path
                  origin="122, 122"
                  x="30"
                  rotation="270"
                  d="M10.5 182C10.5 182.828 11.1716 183.5 12 183.5C12.8284 183.5 13.5 182.828 13.5 182H10.5ZM13.0607 0.939346C12.4749 0.353546 11.5251 0.353546 10.9393 0.939346L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939346ZM13.5 182L13.5 2H10.5L10.5 182H13.5Z"
                />
              </G>
            </G>
          </Svg>
          <Animated.Text style={styles.text}>{text[stage]}</Animated.Text>
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
    backgroundColor: 'rgba(27, 45, 100, 0.3)',
  },
  background: {
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
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 50,
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

export default TimerScreen;
