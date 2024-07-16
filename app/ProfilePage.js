import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, StyleSheet, useWindowDimensions, ImageBackground, ToastAndroid, SafeAreaView, TouchableOpacity} from 'react-native';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth, signOut } from '../firebase.js';
import { firestore, getDoc, doc } from '../firebase.js';
import { CustomButton } from '../components/CustomButton/index';
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-toast-message';
import notifications from '../assets/MenuScreen/bell.png';
import home from '../assets/MenuScreen/home.png';
import logout from '../assets/MenuScreen/logout.png';
import profile from '../assets/MenuScreen/profile.png';
import settings from '../assets/MenuScreen/settings.png';
import about from '../assets/MenuScreen/about.png';
import help from '../assets/MenuScreen/help.png';
import new_lake from '../assets/MenuScreen/new_lake.png';
import policy from '../assets/MenuScreen/policy.png';
import { StatusBar } from 'react-native';
import { Stack } from "expo-router";

// Google Sign in/ Sign up currently not implemented
/*
const signOutGoogle = async (navigation) => {
  Alert.alert('Log Out', 'Are you sure you want to log out?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: async () => {
        try {
          if ((await GoogleSignin.isSignedIn()) === true) {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            auth()
              .signOut()
              .then(() => {
                showToastAndroid();
                navigation.navigate('Home');
              });
          } else {
            auth().signOut();
            showToastAndroid();
            navigation.navigate('Home');
          }
        } catch (error) {
          console.error(error);
        }
      },
    },
  ]);
};

const showToastAndroid = () => {
  ToastAndroid.show('LOGGED OUT', ToastAndroid.SHORT);
};
*/


const ProfilePage = () => {
  
  const { height } = useWindowDimensions();
  const [currentTab, setCurrentTab] = useState('Home') ;
  const navigation = useNavigation()
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserEmail(user.email);
        const docRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } else {
        setUserEmail(null);
        setUserData(null);
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate("LoginScreen")
    })
    .catch(error => alert(error.message))
  }

  const TabButton = (currentTab, setCurrentTab, title, image, navigation) => {
    return (
      <TouchableOpacity
        onPress={() => {
          switch (title) {
            case 'Home':
              navigation.navigate('HomeScreen');
              break;
            case 'Settings':
              navigation.navigate('SettingsScreen');
              break;
            case 'Notifications':
              navigation.navigate('NotificationScreen');
              break;
            case 'About':
              navigation.navigate('AboutUsScreen');
              break;
            case 'Help':
              navigation.navigate('HelpScreen');
              break;
            case 'Policy':
              navigation.navigate('PolicyScreen');
              break;
            case 'LogOut':
              handleSignOut();
              
              break;
            default:
              setCurrentTab(title);
          }
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: currentTab == title ? 'white' : 'transparent',
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Image
            source={image}
            style={{
              width: 25,
              height: 25,
              tintColor: currentTab == title ? '#ff7570' : 'white',
            }}
          ></Image>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingLeft: 15,
              color: currentTab == title ? '#ff7570' : 'white',
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );

    
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ header: () => null }} />
      <View style={{ justifyContent: 'flex-start', padding: 0, flex: 1 }}>
        <ImageBackground
          source={new_lake}
          style={{ padding: 10, width: 500, height: 300 }}
        >
          <CustomButton
            text="<"
            href="HomeScreen"
            type="blackBackButton"
          />
          <Image
            source={profile}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginLeft: 5,
              marginTop: 5,
            }}
          ></Image>
          <Text
            style={{
              padding: 5,
              fontSize: 22,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 7,
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 5,
            }}
          >
            <Text>Email: {userEmail || '(email)'} {'\n'}</Text>
            <Text>Welcome back, {userData?.displayName || '(user)'}!</Text>
          </Text>
        </ImageBackground>

        <View style={{ flexGrow: 1, marginTop: 10 }}>
          {TabButton(currentTab, setCurrentTab, 'Home', home, navigation)}
          {TabButton(currentTab, setCurrentTab, 'Settings', settings, navigation)}
          {TabButton(currentTab, setCurrentTab, 'Notifications', notifications, navigation)}
          {TabButton(currentTab, setCurrentTab, 'About', about, navigation)}
          {TabButton(currentTab, setCurrentTab, 'Help', help, navigation)}
          {TabButton(currentTab, setCurrentTab, 'Policy', policy, navigation)}
          {TabButton(currentTab, setCurrentTab, 'LogOut', logout, navigation)}
        </View>
        <Toast />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8B9B3',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default ProfilePage;