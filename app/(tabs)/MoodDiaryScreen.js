import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Logo from '../../assets/images/Logo.png';

import { auth, db } from '../../firebase'; // Adjust the path as necessary
import { doc, getDoc, collection } from 'firebase/firestore';

const MoodDiaryScreen = ({ navigation }) => {
  const [foodFTData, setFoodData] = useState([]);
  const [dailyLogData, setDailyData] = useState([]);
  const [indexD, setIndexD] = useState(0);
  const [index, setIndex] = useState(0);

  const user = auth.currentUser;
  const today = new Date();
  const myDate = moment(today).format('YYYY-MM-DD');

  useEffect(() => {
    stressorsData('2023-03-20');
    foodData('2023-03-20');
    dailyData('2023-03-20');
  }, []);

  async function stressorsData(date) {
    try {
      const docRef = doc(collection(db, 'stressors', user.uid, 'dates'), date);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (data) {
        setStressorData([data]);
      } else {
        setStressorData([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function foodData(date) {
    try {
      const docRef = doc(collection(db, 'FoodFT', user.uid, 'dates'), date);
      const docSnap = await getDoc(docRef);
      const tempData = [];
      tempData.push(docSnap.data());
      setFoodData(tempData);
    } catch (error) {
      console.log(error);
    }
  }

  async function dailyData(date) {
    try {
      const docRef = doc(collection(db, 'DailyLog', user.uid, 'dates'), date);
      const docSnap = await getDoc(docRef);
      const tempData = [];
      tempData.push(docSnap.data());
      setDailyData(tempData);
    } catch (error) {
      console.log(error);
    }
  }

  const fields = useMemo(
    () => [
      { label: 'Activity', value: dailyLogData[0]?.activity },
      { label: 'Triggers', value: dailyLogData[0]?.triggers },
      { label: 'Signs', value: dailyLogData[0]?.signs },
      { label: 'Body', value: dailyLogData[0]?.body },
      { label: 'Mind', value: dailyLogData[0]?.mind },
      { label: 'Emotion', value: dailyLogData[0]?.emotion },
      { label: 'Behavior', value: dailyLogData[0]?.behavior },
      { label: 'Anxiety Level', value: dailyLogData[0]?.stressedLevel },
      { label: 'Strategies', value: dailyLogData[0]?.strategies },
    ],
    [dailyLogData]
  );

  const data = useMemo(
    () => [
      { label: 'Who', value: foodFTData[0]?.who },
      { label: 'What', value: foodFTData[0]?.what },
      { label: 'Where', value: foodFTData[0]?.where },
      { label: 'When', value: foodFTData[0]?.when },
      { label: 'Why', value: foodFTData[0]?.why },
    ],
    [foodFTData]
  );

  const handleLeftArrowPressDaily = useCallback(() => {
    if (indexD === 0) {
      setIndexD(fields.length - 1);
    } else {
      setIndexD(indexD - 1);
    }
  }, [indexD, fields.length]);

  const handleRightArrowPressDaily = useCallback(() => {
    if (indexD === fields.length - 1) {
      setIndexD(0);
    } else {
      setIndexD(indexD + 1);
    }
  }, [indexD, fields.length]);

  const handleLeftArrowPress = useCallback(() => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }, [index, data.length]);

  const handleRightArrowPress = useCallback(() => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [index, data.length]);

  const onDayPress = (day) => {
    const selectedDate = day.dateString;
    navigation.navigate('Data Screen', { date: selectedDate });
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton
            text="<"
            onPress={() => navigation.goBack()}
            type="blackBackButton"
          />
        </View>

        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
        </View>
      </View>

      <View style={styles.headerForText}>
        <Text style={styles.title}>Monthly Calendar</Text>
      </View>

      <View style={styles.container}>
        <Calendar
          onDayPress={onDayPress}
          style={{ backgroundColor: 'transparent' }}
          theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            dayTextColor: '#000',
            todayTextColor: '#0000ff',
            textDayFontFamily: 'System',
            textDayFontWeight: 'bold',
            textDayHeaderFontFamily: 'System',
            textDayHeaderFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            textYearFontWeight: 'bold',
            textSectionTitleColor: '#000',
            textMonthFontSize: 24,
            textYearFontSize: 24,
          }}
          markedDates={{
            [myDate]: {
              selected: true,
              marked: true,
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF7F5',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerForText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  button: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
  },
  modalSmallText: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  modal: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#736468',
  },
  iButton: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  stressorView: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FFF7F5',
  },
});

export default MoodDiaryScreen;
