// DO NOT EDIT FILE
import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Redirect } from "expo-router"

const HomeScreen = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Redirect href={"LoginScreen"} />
      <View style={styles.root}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.normal}>
          Loading...
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

  normal: {
    fontSize: 69,
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
