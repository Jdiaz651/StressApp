import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions, ScrollView, ImageBackground } from 'react-native';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase.js';
import Logo from '../assets/images/Logo.png';
import SignInBackground from '../assets/gif/SignInBackGround.gif';
import GoogleButton from '../assets/images/SignInWithGoogle.png'
import { Stack } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { height } = useWindowDimensions();
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("HomeScreen")
      }
    })

    return unsubscribe
  }, [])

const handleSignUp = () => {
    
  navigation.navigate("SignUpScreen")
  
}

  // Log In
  const handleLogin = () => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
     const user = userCredentials.user;
     console.log(userCredentials);

    })
    .catch(error => alert(error.message)) 
  }
 
 return (
  <KeyboardAvoidingView behavior="padding" style={{ height: height }}>
   <Stack.Screen options={{ header: () => null }} />
   <ImageBackground source={SignInBackground} style={styles.background}>
   <View style={styles.container} />
        <Image
          source={Logo}
          style={(styles.logo, { height: height * 0.35 })}
          
          resizeMode="contain"
        />
    <Text style={styles.title}>Welcome back!</Text>  
    <Text>{'\n'}</Text>
    
    <View style={styles.container}>
    </View>
    <View style={styles.inputContainer}>
        <TextInput
         placeholder="Email"
         value = {email}
         onChangeText={text => setEmail(text)}
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
  <View style={styles.divider} />
  <TouchableOpacity
    onPress={() => navigation.navigate("ForgotPasswordScreen")}
    >
    <Text style={styles.subTitle}>Forgot password? Click here</Text> 
    </TouchableOpacity>
    <View style={styles.divider} />
  <View style={styles.buttonContainer}>
   <TouchableOpacity
    onPress={handleLogin}
    style={styles.button}
   >
    <Text style={styles.buttonText}>Login</Text>
   </TouchableOpacity>
   <Text style={styles.buttonText}>                  </Text>
   <TouchableOpacity
    onPress={handleSignUp}
    style={[styles.button, styles.buttonOutline]}
   >
    <Text style={styles.buttonOutlineText}>Sign Up</Text>
   </TouchableOpacity>
  </View>
  
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
  </ImageBackground>
  </KeyboardAvoidingView>
 )
}

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
    logo: {
      maxWidth: 300,
      maxHeight: 200,
      opacity: 100,
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#ffffff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    subTitle: {
      fontSize: 17,
      fontWeight: "semibold",
      color: '#ffffff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
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
     width: '60%',
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
     fontSize: 20,
    },
    buttonOutlineText:  {
     color: "#0782F9",
     fontWeight: '700',
     fontSize: 20,
    },
    divider: {
      width: '90%',
      borderBottomWidth: 2,
      borderBottomColor: '#EDE9E9',
      margin: 5,
    },
 
})

export default LoginScreen
