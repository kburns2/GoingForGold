import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Linking } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
//import { MonoText } from '../components/StyledText';

export default function HomeScreen({navigation}) {
  state = {
    email: '',
    password: ''
 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
 }
  return (
    <View style={styles.background}>
      <ScrollView  style={styles.background}  contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/tennisball.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>       
          <Text style={styles.title}> Ace AI </Text>

          <Text style={styles.getStartedText}>
           <Text> Unlocking your </Text>
            <Text style={{fontWeight: "bold", color: '#AACC0D' }}>potential </Text>
          <Text>through artifical intelligence </Text>
          </Text>
        </View>

        <View> 
          <TouchableOpacity
              style = {styles.buttons}
              onPress={() => navigation.navigate('Links')}>
              <Text style = {styles.buttonsText}>Check your serve</Text>
          </TouchableOpacity>
        </View>

        <View> 
          <TouchableOpacity
              style = {styles.buttons}
              onPress={() => navigation.navigate('Settings')}>
              <Text style = {styles.buttonsText}>Check your previous serves</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E0EFED',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 10,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius:25,
    paddingTop: 10,
    paddingBottom:10,
    paddingRight:10,
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
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  buttons:{
    backgroundColor: '#fff',
    borderRadius: 25, 
    alignItems: 'center', 
    margin: 15,
    height: 40,
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
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#17333C',
    fontWeight: "bold"
  },

  container: {
    paddingTop: 23
 },
 input: {
    height: 40,
    width: 250,
    borderColor: '#E0EFED',
    borderRadius: 25, 
    color: '#17333C',
    borderWidth: 2, 
    paddingLeft: 10, 
    textAlign: 'left',
    marginBottom: 10,
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
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: "bold"
 },

  codeHighlightText: {
    color: '#17333C',
  },
  codeHighlightContainer: {
    backgroundColor: '#17333C',
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  title: {
    fontSize: 72,
    color: '#17333C',
    lineHeight: 72,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  getStartedText: {
    fontSize: 19,
    color: '#17333C',
    lineHeight: 24,
    textAlign: 'center',
  },
  userinfo: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
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
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
