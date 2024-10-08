/* This file is no longer being used.
  It is only here for archival purposes.
-------------------------------------------------------------------------------------------------

import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { CustomButton } from '../../components/CustomButton';
import Logo from '../../assets/images/Logo.png';
import Background2 from '../../assets/images/Background2.png';

const AwarenessBehaviorScreen = () => {
  const { height } = useWindowDimensions();

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

      <Text style={styles.title}>
        <Text style={{ fontWeight: 'bold' }}> Behavior </Text>
      </Text>

      <View style={styles.container}>
        <Image
          source={Background2}
          style={(styles.container, { height: height * 0.65 })}
          resizeMode="contain"
        />
        <View style={styles.viewQuadText}>
          <Text style={styles.quadText}>
            <Text style={styles.title}>{'\n This may look like:'} </Text>
            <Text>
              {'\n'}
              {'\n •Accident Prone \n'}
              {' •Insomnia  \n'}
              {' •Loss of appetite \n'}
              {' •Loss of sex drive\n'}
              {' •More addiction  \n'}
              {' •Restlessness \n'}
            </Text>
          </Text>
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

export default AwarenessBehaviorScreen;
*/
