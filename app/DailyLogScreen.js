import React, { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Alert, Button, TouchableOpacity} from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { Picker } from '@react-native-picker/picker';
import { auth } from '../firebase'; 
import { doc, getDoc, setDoc, collection, firestore } from '../firebase';
import Logo from '../assets/images/Logo.png';
import moment from 'moment';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/core';

// TODO: Connect to Firebase Firestore to send and receive data


const DailyLogScreen = () => {
  const [activity, setActivity] = useState('');
  const [triggers, setTriggers] = useState(0);
  const [signs, setSigns] = useState(0);
  const [anxietyLevel, setAnxietyLevel] = useState(0);
  const [strategies, setStrategies] = useState(0);
  const [customStrategies, setCustomStrategies] = useState('');
  const [body, setBody] = useState(0);
  const [customBody, setCustomBody] = useState('');
  const [mind, setMind] = useState(0);
  const [customMind, setCustomMind] = useState('');
  const [emotion, setEmotion] = useState(0);
  const [customEmotion, setCustomEmotion] = useState('');
  const [behavior, setBehavior] = useState(0);
  const [customBehavior, setCustomBehavior] = useState('');

  // const activityData = ['','Exercise 🏃', 'Meditation 🧘', 'Reading 📖'];
  
  const triggersData = ['', 'Home', 'School', 'Work', 'Social Life'];
  const signsData = ['', 'Body', 'Mind', 'Emotion', 'Behavior'];
  const bodyData = [
    '',
    'Headaches ',
    'Skin Irriation ',
    'High Blood Pressure ',
    'Fatigue ',
    'Palpitations ',
    'Difficulty Breathing ',
    'Custom ',
  ];
  const mindData = [
    '',
    'Worrying ',
    'Muddled Thinking ',
    'Impaired Judgement ',
    'Indecision ',
    'Difficulty Concentrating ',
    'Custom ',
  ];
  const emotionsData = [
    '',
    'Fear ',
    'Irritability ',
    'Depression ',
    'Apathy ',
    'Alienation ',
    'Loss of Confidence ',
    'Custom ',
  ];
  const behaviorData = [
    '',
    'Addiction ',
    'Less Appetite ',
    'Less Sex Drive ',
    'Insomnia ',
    'Restlessness ',
    'Accident Prone ',
    'Custom ',
  ];
  const stressedLevel = ['', '1', '2', '3', '4', '5'];
  const strategiesData = [
    '',
    'Breathing ',
    'Positive self-talk ',
    'Listening to music ',
    'Talking to a friend ',
    'Group Support ',
    'Custom ',
  ];

  const user = auth.currentUser;
  const navigation = useNavigation();

  //const today = new Date();
  //const myDate = moment(today).format('YYYY-MM-DD');
  const myDate = new Date().toISOString().split('T')[0];

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const waitData = async () => {

    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if (doc.exists) {
      feeling = data()['feeling'];
    } else {
      console.log('not found');
    }

    return data
  }

  let feeling = 'placeholder';
  const docRef = doc(collection(firestore,'DailyLog',user.uid,'dates'),myDate);
  const data = waitData()

    
  async function doc1Data() {
  const doc1 = doc(collection(firestore,'DailyLog',user.uid,'dates'),myDate);
  const docSnap = await getDoc(docRef);
  const data1 = docSnap.data(); 

    if (doc1.exists) {
      stressor = doc1.data()['triggers'];
    } else {
      console.log('not found');
    }
  }
  
  const handlePress = async () => {
    const bodyFinal = body == 7 ? customBody : bodyData[body];
    const emotionFinal = emotion == 7 ? customEmotion : emotionsData[emotion];
    const mindFinal = mind == 6 ? customMind : mindData[mind];
    const behaviorFinal =
      behavior == 7 ? customBehavior : behaviorData[behavior];
    const strategiesFinal =
      strategies == 6 ? customStrategies : strategiesData[strategies];

    if (!activity) Alert.alert('Please pick an activity answer');
    else if (!triggers) Alert.alert('Please pick a triggers answer');
    else if (!signs) Alert.alert('Please pick a signs answer');
    else if (!anxietyLevel) Alert.alert('Please pick a number');
    else if (!strategies) Alert.alert('Please pick a strategies answer');
    else {
    const dailyLogDoc = doc(collection(firestore,'DailyLog',user.uid,'dates'),myDate)
    try {
      await setDoc(doc(firestore, 'DailyLog', user.uid, 'dates', myDate), {
        activity: activity,
        triggers: triggersData[triggers],
        signs: signsData[signs],
        body: bodyFinal,
        mind: mindFinal,
        emotion: emotionFinal,
        behavior: behaviorFinal,
        stressedLevel: anxietyLevel,
        strategies: strategiesFinal,
        feeling: feeling,
        stressor: triggersData[triggers],
      });
    } catch (error) {
      console.log('Error writing document: ', error);
    }
     
    navigation.navigate('MoodDiaryScreen');
  }
  };

  return (
    <ScrollView>
      <SafeAreaView style={[styles.root]}>
        <View style={styles.header}>
          <View style={{ width: 150 }}>
            <CustomButton
              text="<"
              href="OptionScreen"
              type="blackBackButton"
            />
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View style={{ marginRight: 150 }}>
              <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Text style={styles.title}>Daily Log</Text>

          <View style={styles.containter}>
            <Text style={styles.label}>What activity did you do?</Text>

            <CustomInput
              value={activity}
              setValue={setActivity}
              placeholder="Ex. Meditation, Reading, Gym, etc."
              secureTextEntry={false}
            />

            <Text style={styles.label}>What trigger did you experience?</Text>
            <Picker
              selectedValue={triggers}
              onValueChange={(itemValue) => setTriggers(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {triggersData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>

            <Text style={styles.label}>What sign did you experience?</Text>
            <Picker
              selectedValue={signs}
              onValueChange={(itemValue) => setSigns(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {signsData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>

            <Text style={styles.label}>Body</Text>
            <Picker
              selectedValue={body}
              onValueChange={(itemValue) => setBody(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {bodyData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>
            <CustomInput
              value={customBody}
              setValue={setCustomBody}
              secureTextEntry={false}
            />

            <Text style={styles.label}>Mind</Text>
            <Picker
              selectedValue={mind}
              onValueChange={(itemValue) => setMind(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {mindData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>
            <CustomInput
              value={customMind}
              setValue={setCustomMind}
              secureTextEntry={false}
            />

            <Text style={styles.label}>Emotions</Text>
            <Picker
              selectedValue={emotion}
              onValueChange={(itemValue) => setEmotion(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {emotionsData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>
            <CustomInput
              value={customEmotion}
              setValue={setCustomEmotion}
              secureTextEntry={false}
            />

            <Text style={styles.label}>Behavior</Text>
            <Picker
              selectedValue={behavior}
              onValueChange={(itemValue) => setBehavior(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {behaviorData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>
            <CustomInput
              value={customBehavior}
              setValue={setCustomBehavior}
              secureTextEntry={false}
            />

            <Text style={styles.label}>How stressed are you?</Text>
            <Picker
              selectedValue={anxietyLevel}
              onValueChange={(itemValue) => setAnxietyLevel(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {stressedLevel.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>

            <Text style={styles.label}>What strategies can you use?</Text>
            <Picker
              selectedValue={strategies}
              onValueChange={(itemValue) => setStrategies(itemValue)}
              style={styles.picker}
              numberOfLines={5}
            >
              {strategiesData.map((item, index) => {
                return <Picker.Item value={index} label={item} key={index} />;
              })}
            </Picker>
            <CustomInput
              value={customStrategies}
              setValue={setCustomStrategies}
              secureTextEntry={false}
            />
          </View>
          <Modal
            isVisible={isModalVisible}
            onModalHide={() => setModalVisible(false)}
          >
            <View style={styles.modal}>
              <Text style={styles.modalText}>Anger:</Text>
              <Text style={styles.modalSmallText}>
                {' '}
                Bitter, Livid, Resentful, Furios, Irritated, Annoyed,
                Frustrated, Mad, Upset
              </Text>
              <Text style={styles.modalText}>Sad:</Text>
              <Text style={styles.modalSmallText}>
                {' '}
                Unhappy, Blue, Dejected, Depressed, Disappointed, Mournful,
                Crushed, Heavy, Lonely
              </Text>
              <Text style={styles.modalText}>Afraid:</Text>
              <Text style={styles.modalSmallText}>
                Nervous, Fearful, Scared, Uneasy, Panicky, Intimidated,
                Insecure, Shocked, Threatened
              </Text>
              <Text style={styles.modalText}>Confusion:</Text>
              <Text style={styles.modalSmallText}>
                Unclear, Puzzled, Rattled, Baffled, Bewildered, Stumped,
                Confounded, Helpless, Incapable
              </Text>
              <Text style={styles.modalText}>Anxious:</Text>
              <Text style={styles.modalSmallText}>
                Stressed, Confused, Worried, Nervous, Apprehensive, Insecure,
                Skittish, Uneasy, Perplexed
              </Text>
              <Button
                style={styles.modalButton}
                title="Hide"
                onPress={toggleModal}
              />
            </View>
          </Modal>

          <CustomButton
            style={styles.iButton}
            text="Emotion Examples"
            onPress={toggleModal}
            type="INFO"
          />
      <View style={styles.container_SECONDARY}>
        <TouchableOpacity
          onPress={() => handlePress()}>
        
          <Text style={styles.text_SECONDARY}>Submit</Text>
          </TouchableOpacity>
        
      </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF7F5',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 10,
  },
  containter: {
    width: '85%',
  },
  picker: {
    backgroundColor: '#D6CBCB',
    color: '#736468',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#736468',
    marginTop: 2,
  },
  volume: {
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 28,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalSmallText: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
  },
  modal: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 25,
    backgroundColor: '#7BB4CB',
  },
  iButton: {
    backgroundColor: 'red',

    borderRadius: 20,
  },
  container_SECONDARY: {
    backgroundColor: '#457f9d',
    width: 150,
    padding: 8.5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
  },
  text_SECONDARY: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});

export default DailyLogScreen;
