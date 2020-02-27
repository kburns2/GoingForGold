import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform, ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity, View, TextInput, Linking } from 'react-native';
const styles = EStyleSheet.create({
    background: {
      //flex: 1,
      backgroundColor: '#E0EFED',
    },
    contentContainer: {
      //paddingTop: '7rem',
    },
    welcomeContainer: {
      alignItems: 'center',
      
      marginTop: '10rem',
      marginBottom: '10rem',
    },
    loginContainer: {
      alignItems: 'center',
      //marginTop: '10rem',
      //marginLeft: '10rem',
      //marginRight: '10rem',
      backgroundColor: '#fff',
      borderRadius:'20rem',
      //paddingTop: '20rem',
      paddingBottom:'30rem',
      //paddingRight:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      //marginTop: '3rem',
      //marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      //marginHorizontal: '40rem',
      //marginVertical: '10rem',
    },
    homeScreenFilename: {
      //marginVertical: '20rem',
    },
    buttons:{
      backgroundColor: '#fff',
      borderRadius: '2rem', 
      alignItems: 'center', 
      margin: '30rem',
      height: '20rem',
         shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6
    },
  
    buttonsText: {
      //marginTop: '10rem',
      textAlign: 'center',
      fontSize: 16,
      color: '#17333C',
      fontWeight: "bold"
    },
  
    container: {
      //paddingTop: '10rem'
   },
   input: {
      height: 20,
      width: 70,
      borderColor: '#E0EFED',
      borderRadius: '25rem', 
      color: '#17333C',
      borderWidth: '2rem', 
      paddingLeft: '10rem', 
      textAlign: 'left',
      marginBottom: '10rem',
   },
   loginLink: {
      color: 'blue',
      alignItems: 'center',
      marginTop: 10,
      paddingLeft: 100,
      textDecorationLine: 'underline',
   },
   submitButton: {
      backgroundColor: '#BFD225',
      borderRadius: 25, 
      alignItems: 'center', 
      margin: '15rem',
      height: '40rem',
   },
   submitButtonText:{
      marginTop: '10rem',
      textAlign: 'center',
      fontSize: '16rem',
      color: 'white',
      fontWeight: "bold"
   },
  
    codeHighlightText: {
      color: '#17333C',
    },
    codeHighlightContainer: {
      backgroundColor: '#17333C',
      borderRadius: '3rem',
      paddingHorizontal: '4rem',
    },
  
    title: {
      fontSize: '72rem',
      color: '#17333C',
      lineHeight: '72rem',
      marginBottom: '20rem',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    getStartedText: {
      fontSize: '19rem',
      color: '#17333C',
      lineHeight: '24rem',
      textAlign: 'center',
    },
    userinfo: {
      fontSize: '24rem',
      color: 'rgba(96,100,109, 1)',
      lineHeight: '24rem',
      textAlign: 'left',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: '2rem',
        },
        android: {
          elevation: '20rem',
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: '10rem',
    },
    tabBarInfoText: {
      fontSize: '17rem',
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: '5rem',
    },
    helpContainer: {
      marginTop: '15rem',
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: '10rem',
    },
    helpLinkText: {
      fontSize: '10rem',
      color: '#2e78b7',
    },
  });
  let{height,width} = Dimensions.get('window');
  EStyleSheet.build({
      $rem: width > 340 ? 18 : 16
  })