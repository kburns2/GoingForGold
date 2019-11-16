import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
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

        <View style={styles.loginContainer}>
          <Text style={styles.userinfo}>Username: </Text>
          <Text> </Text>
          <Text style={styles.userinfo}>Password: </Text>
          <Text> </Text>
        </View>

        <DevelopmentModeNotice />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#b2f5d9',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 40,
    marginRight:40,
    backgroundColor: '#fff',
    borderRadius:25,
    paddingTop: 10,
    paddingBottom:10,
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
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  developmentModeText: {
    marginTop: 150,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  title: {
    fontSize: 72,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 72,
    marginBottom: 20,
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
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
