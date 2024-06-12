import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Home</Text>

        <Text style={styles.options}>
          {'\n'}
          {'\n'}
        </Text>

        <Text style={styles.normal}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
    //backgroundColor :'#736467',
    backgroundColor: '#457f9d',
    justifyContent: 'center', // add this line
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
    borderWidth: 1, // set the border thickness
    borderColor: 'black', // set the border color
    backgroundColor: 'white', // set the background color of the box
    padding: 10, // set the space between text and border
    borderRadius: 15,
  },
});

export default HomeScreen;
