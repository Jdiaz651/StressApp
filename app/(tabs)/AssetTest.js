import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Logo from '../../assets/images/Logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={Logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,  // specify a width for the image
    height: 200, // specify a height for the image
  },
});

