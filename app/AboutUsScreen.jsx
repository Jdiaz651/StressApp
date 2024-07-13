import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomButton } from '../components/CustomButton';

const AboutUsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
      <View style={styles.root}>
        <CustomButton text="<" href="ProfilePage" type="whiteBackButton" />
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.normal}>
          HowRU is an innovative application designed to assist in the
          management of stress and anxiety. The application offers a variety of
          features, including a daily mood diary, where you can document your
          emotional state through responses to carefully curated questions.
          {'\n'}{'\n'}
          Furthermore, HowRU also provides immediate access to guided breathing
          exercises, offering an effective solution for instant anxiety relief.
          This multifaceted tool serves as your personalized ally in mental
          health maintenance and immediate stress reduction.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#457f9d',
  },
  root: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginVertical: 20,
    alignSelf: 'center',
    fontWeight: "bold",
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
    borderRadius: 10,
    width: '100%',
  },
});

export default AboutUsScreen;
