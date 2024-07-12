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
              navigation.navigate('Choice');
              break;
            case 'Settings':
              break;
            case 'Notifications':
              navigation.navigate('Notifications');
              break;
            case 'About':
              navigation.navigate('About Us');
              break;
            case 'Help':
              navigation.navigate('Help');
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
      <View style={{ justifyContent: 'flex-start', padding: 0, flex: 1 }}>
        <ImageBackground
          source={new_lake}
          style={{ padding: 10, width: 500, height: 230 }}
        >
          <CustomButton
            text="<"
            onPress={() => navigation.navigate('Choice')}
            type="whiteBackButton"
          />
          <Image
            source={profile}
            style={{
              width: 90,
              height: 90,
              borderRadius: 40,
              marginLeft: 5,
              marginTop: 10,
            }}
          ></Image>
          <Text
            style={{
              padding: 5,
              fontSize: 22,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 10,
            }}
          >
            <Text>Email: {userEmail || '(email)'} {'\n'}</Text>
            <Text>Welcome back, {userData?.displayName || '(user)'}!</Text>
          </Text>
        </ImageBackground>

        <View style={{ flexGrow: 1, marginTop: 10 }}>
          {TabButton(currentTab, setCurrentTab, 'Home', home, navigation)}
          {TabButton(
            currentTab,
            setCurrentTab,
            'Settings',
            settings,
            navigation
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            'Notifications',
            notifications,
            navigation
          )}
          {TabButton(currentTab, setCurrentTab, 'About', about, navigation)}
          {TabButton(currentTab, setCurrentTab, 'Help', help, navigation)}
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