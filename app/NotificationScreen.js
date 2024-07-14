import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import PushNotification from 'react-native-push-notification';
import DateTimePicker from '@react-native-community/datetimepicker';

const NotificationScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'my-channel',
      title: 'Daily Reminder',
      message: "Hello! Don't forget to fill out your daily entries.",
      date: new Date(date),
      allowWhileIdle: true,
      repeatType: 'day',
      repeatTime: 1,
    });
    Toast.show({
      type: 'success',
      text1: 'Notifications scheduled',
      position: 'bottom',
      bottomOffset: 100,
    });
  };

  const closeNotification = () => {
    PushNotification.cancelAllLocalNotifications();
    Toast.show({
      type: 'success',
      text1: 'All notifications cleared',
      position: 'bottom',
      bottomOffset: 100,
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
      <CustomButton
        text="Select Time"
        onPress={() => setShow(true)}
        type="greenButton"
      />
      {show && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Text>{'\n'}</Text>
      <CustomButton
        text="Schedule Daily Notifications"
        onPress={scheduleNotification}
        type="greenButton"
      />

      <Text>{'\n'}</Text>
      <CustomButton
        text="End All Notifications"
        onPress={closeNotification}
        type="redButton"
      />
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
});

export default NotificationScreen;
