//now the analysis page
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Linking } from 'react-native';

export default function SettingsScreen({navigation}) {
  /** 
   * 
   * Add logic for buttons 
   */
//   state = {
//     email: '',
//     password: ''
//  }
//  handleEmail = (text) => {
//     this.setState({ email: text })
//  }
//  handlePassword = (text) => {
//     this.setState({ password: text })
//  }
//  login = (email, pass) => {
//     alert('email: ' + email + ' password: ' + pass)
//  }
  return (
    <View style={styles.background}>
      <ScrollView  style={styles.background}  contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>       
          <Text style={styles.title}> Analysis</Text>
        </View>

        <View style={styles.loginContainer}>
          <View style = {styles.container}>
            <Text> THIS IS WHERE</Text>
            <Text> WHERE</Text>
            <Text> POSENET VIDEO</Text>
            <Text>SHOULD GO</Text>
         </View>
        </View>

        <View> 
          <Text style={styles.accuracyText}> Your Serve Accuracy: </Text>
          <TouchableOpacity
            style = {styles.buttons}
            onPress = {() => this.login(this.state.email, this.state.password)}>
            <Text style = {styles.buttonsText}> Improve Your Serve</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style = {styles.buttons}
              onPress={() => navigation.navigate('Links')}>
              <Text style = {styles.buttonsText}>Check another serve</Text>
          </TouchableOpacity>
        </View> 

      </ScrollView>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E0EFED',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius:25,
    paddingTop: 100,
    paddingBottom:100,
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

  title: {
    fontSize: 24,
    color: '#17333C',
    lineHeight: 72,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  getStartedText: {
    fontSize: 19,
    color: '#17333C',
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedContainer: {
    paddingTop: 40,
    marginLeft: 10,
    marginRight: 10, 
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
  accuracyText:{
    paddingTop: 40,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 18,
    color: '#17333C',
    fontWeight: 'bold'
  }
});
