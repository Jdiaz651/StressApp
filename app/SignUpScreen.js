/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, Alert, KeyboardAvoidingView, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/core';
//import CheckBox from '@react-native-community/checkbox';
//import { CustomInput } from '../components/CustomInput';
//import { CustomButton } from '../components/CustomButton';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase.js';
import { firestore, getDoc, setDoc, doc } from '../firebase.js';
import Logo from '../assets/images/Logo.png';
import GoogleButton from '../assets/images/SignInWithGoogle.png'
import Toast from 'react-native-toast-message';
import SignUpBackGround from '../assets/gif/SignUpBackGround.gif';

var numberRegex = new RegExp('^(?=.*[0-9])');
var specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])');
var lowercaseRegex = new RegExp('^(?=.*[a-z])');
var uppercaseRegex = new RegExp('^(?=.*[A-Z])');
var whitespaceRegex = new RegExp('^(?=.*[\\s])');

const SignUpScreen = () => {

  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  //Not Used
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userCode, setUserCode] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleSecondCheckBox, setToggleSecondCheckBox] = useState(false);
  //

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("ProfilePage")
      }
    })

    return unsubscribe
  }, [])

  // Sign Up
  const handleSignUp = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
     
     console.log(userCredentials);
     const userDocRef = doc(firestore, "users", userCredentials.user.uid );
     setDoc(userDocRef, {"email": email, "displayName": name})
		  .then(() => {
			  console.log("User successfully created:", userCredentials.user.uid);
		  })
		 
    })
    .catch(error => alert(error.message))
  }

  // TODO: Add the following passwords checks when creating a new account. Currently not implemented
  const emptyEmailToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Email',
      text2: 'Please enter an email',
    });
  };
  const shortPasswordToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password is too short',
    });
  };
  const specialCharacterToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password must contain at least 1 special character',
    });
  };
  const lowercaseToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password must contain at least 1 lowercase character',
    });
  };
  const uppercaseToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Password must contain at least 1 uppercase character',
    });
  };
  const noNameToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Name',
      text2: 'Please enter a name',
    });
  };
  const matchingPasswordToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Password',
      text2: 'Passwords do not match',
    });
  };
  const checkBoxesToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Agree to Terms',
      text2: 'Please check the boxes',
    });
  };
  
  // Not used because it breaks the page
  const checkSignUp = () => {
    if (!toggleCheckBox || !toggleSecondCheckBox) {
      checkBoxesToast();
    } else if (password !== confirmPassword) {
      matchingPasswordToast();
    } else if (password.length < 8) {
      shortPasswordToast();
    } else if (password.length > 20) {
      Alert.alert('Password is too long');
    } else if (!numberRegex.test(password)) {
      Alert.alert('Password must contain at least 1 number');
    } else if (!specialCharacterRegex.test(password)) {
      specialCharacterToast();
    } else if (!lowercaseRegex.test(password)) {
      lowercaseToast();
    } else if (!uppercaseRegex.test(password)) {
      uppercaseToast();
    } else if (whitespaceRegex.test(password)) {
      Alert.alert('Password can not contain whitespace');
    } else if (email === '') {
      emptyEmailToast();
    } else if (name === '') {
      noNameToast();
    } else {
      handleSignUp();
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ height: height }}>
    <ImageBackground source={SignUpBackGround} style={styles.background}>
      
        <View style={styles.contianer}/>
          <Image
            source={Logo}
            style={(styles.logo,  {height: height * 0.20 })}
            resizeMode="contain"
          />
          <View style={styles.container}></View>
{/*           <CustomButton
            text="✖"
            onPress={() => navigation.navigate('Home')}
            type="QUINARY"
          /> */}

          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>Please fill in the fields below</Text>

{/*           <CustomInput placeholder="Name" value={name} setValue={setName} />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Code (optional)"
            value={userCode}
            setValue={setUserCode}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry
          /> 

          <Text style={styles.parameters}>
            • Must be 8 characters or longer {'\n'}
            • Must be 20 characters or shorter {'\n'}
            • Cannot have white spaces {'\n'}
            • Must contain at least 1 uppercase character {'\n'}
            • Must contain at least 1 lowercase character {'\n'}
            • Must contain at least 1 numerical character {'\n'}
            • Must contain at least 1 special character {'\n'}
          </Text>
           <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text>I confirm that I am least 18 years old</Text>
          </View> 

           <View style={styles.checkboxContainer}>
             <CheckBox
              disabled={false}
              value={toggleSecondCheckBox}
              onValueChange={(newValue) => setToggleSecondCheckBox(newValue)}
            /> 
            <Text>
              I confirm that I have read and agreed to the terms of {''}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate('Policy')}
              >
                policy {'\n'}
                {'\n'}
              </Text>
            </Text>
          </View> 
           <CustomButton
            text="Sign Up"
            onPress={checkSignUp}
            type="QUATERNARY"
          /> */}
          <Text>{'\n'}</Text>
        
        <View style={styles.inputContainer}>
        <TextInput
         placeholder="Email"
         value = {email}
         onChangeText={text => setEmail(text)}
         style={styles.input}
         />
         <TextInput
         placeholder="Full Name"
         value = {name}
         onChangeText={text => setName(text)}
         style={styles.input}
         />
         <TextInput
         placeholder="Password"
         value = {password}
         onChangeText={text => setPassword(text)}
         style={styles.input}
         secureTextEntry
         />    
      </View>
  <View style={styles.buttonContainer}>
   <TouchableOpacity
    onPress={() => navigation.navigate("LoginScreen")}
    style={[styles.button, styles.buttonOutline]}
   >
    <Text style={styles.buttonOutlineText}>{"<-"}Return to Login</Text>
   </TouchableOpacity>
   <Text style={styles.buttonText}>         </Text>
   <TouchableOpacity
    onPress={handleSignUp}
    style={styles.button}
   >
    <Text style={styles.buttonText}>Create Account</Text>
   </TouchableOpacity>
  </View>
  <View style={styles.divider} />
  <Text style={styles.buttonText}>         </Text> 
  <TouchableOpacity
    onPress={() => console.log("This is just a visual. Actual implementation is to be applied.")}
   >
    <Image
          source={GoogleButton}
          style={(styles.logo, { height: height * 0.07 })}
          resizeMode="contain"
        /> 
   </TouchableOpacity> 
      <Toast />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(190,120,140,0.4)',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  parameters: {
    fontSize: 14,
    color: '#736468',
  },
  logo: {
    maxWidth: 300,
    maxHeight: 200,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: "semibold",
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  link: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '90%',
  },

  input: {
   backgroundColor: 'white',
   paddingHorizontal: 15,
   paddingVertical: 10,
   borderRadius: 10,
   marginTop: 5,
  },
  buttonContainer: {
   width: '90%',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 40,
   flexDirection: 'row',
   padding: 5
  },
  button: {
   backgroundColor: '#0782F9',
   width: '50%',
   padding: 15,
   borderRadius: 10,
   alignItems: 'center',
   
  },
  buttonOutline: {
   backgroundColor: 'white',
   marginTop: 5,
   borderColor: "#0782F9",
   borderWidth: 2,
  },
  buttonText:  {
   color: 'white',
   fontWeight: '700',
   fontSize: 18,
  },
  buttonOutlineText:  {
   color: "#0782F9",
   fontWeight: '700',
   fontSize: 18,
  },
  divider: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: '#EDE9E9',
    margin: 5,
  },

});

export default SignUpScreen;
