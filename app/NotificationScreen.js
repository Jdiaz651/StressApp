import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import PushNotification from 'react-native-push-notification';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Stack } from "expo-router";

const NotificationScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const scheduleNotification = () => {
    // TODO: Apply notification settings
    /*
    PushNotification.localNotificationSchedule({
      channelId: 'my-channel',
      title: 'Daily Reminder',
      message: "Hello! Don't forget to fill out your daily entries.",
      date: new Date(date),
      allowWhileIdle: true,
      repeatType: 'day',
      repeatTime: 1,
    });
    */
    Toast.show({
      type: 'success',
      text1: 'Notifications scheduled',
      position: 'top',
      
    });
  };

  const closeNotification = () => {
    // TODO: Apply notification settings
    //PushNotification.cancelAllLocalNotifications();
    Toast.show({
      type: 'success',
      text1: 'All notifications cleared',
      position: 'top',
      
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.root}>
        <CustomButton text="<" href="ProfilePage" type="whiteBackButton" />
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.top} />
        <Text style={styles.options}>
          {'\n'}
          {'\n'}
        </Text>
      </View>

      <Text style={styles.subtitle}>
          {'\n'}
          {'\n'}
        </Text>

      <View style={styles.container_greenButton}>
      <TouchableOpacity
        
        onPress={() => setShow(true)}>
        
      <Text style={styles.text_greenButton}>Select Time</Text>
      </TouchableOpacity>
      
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}

      <Text>{'\n'}</Text>
      
      <View style={styles.container_greenButton}>
      <TouchableOpacity
        
        onPress={() => scheduleNotification()}>
        
      <Text style={styles.text_greenButton}>Schedule Daily Notifications</Text>
      </TouchableOpacity>
      </View>
      <Text>{'\n'}</Text>
      
      <View style={styles.container_greenButton}>
      <TouchableOpacity
        
        onPress={() => closeNotification()}>
        
      <Text style={styles.text_greenButton}>End All Notifications</Text>
      </TouchableOpacity>
      </View>
      <Toast />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#736467',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  subtitle: {
    fontSize: 22,
    color: 'black',
    marginVertical: -35,
    alignSelf: 'center',
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  options: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    marginHorizontal: 30,
    marginVertical: 5,
  },
  container_greenButton: {
    backgroundColor: '#f27c7a',
    width: 350,
    padding: 18,
    alignSelf: 'center',
    borderRadius: 30,
  },
  text_greenButton: {
    color: '#FFFFFF',
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default NotificationScreen;
