import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomButton } from '../../components/CustomButton';

const AboutUsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomButton text="<" href="OptionScreen" type="whiteBackButton" />
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.normal}>
          HowRU is an innovative application designed to assist in the
          management of stress and anxiety. The application offers a variety of
          features, including a daily mood diary, where you can document your
          emotional state through responses to carefully curated questions.
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
  root: {
    flex: 1,
    borderBottomWidth: 600,
    borderBottomColor: '#FFF7F5',
    backgroundColor: '#457f9d',
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
  options: {
    fontSize: 10,
    color: 'white',
    alignSelf: 'flex-end',
    marginHorizontal: 30,
    marginVertical: 5,
  },
  normal: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#000000',
    marginVertical: 45,
    textAlign: 'left',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
  },
});

export default AboutUsScreen;
