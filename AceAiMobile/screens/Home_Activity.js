import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home_Activity extends Component {

  static navigationOptions =
    {
      title: 'Home Activity',
    };

  render() {
    return (
      <View style={styles.MainContainer}>

        <Text style={styles.headerText}>AceAi</Text>
        <Text style={styles.body}>an AI app for Tennis Serves</Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Settings')}>

            <Text style={styles.text}>Record a Serve</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>

            <Text style={styles.text}>Skitty Pop pop</Text>

          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1E5DA',
    padding: 11,

  },

  headerText: {
    fontSize: 64,
    textAlign: "center",
    margin: 10,
    color: '#F2E87C',
    fontWeight: "bold",
    marginTop:100,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  text: {
    color: '#fff'
  },
  body: {
    fontSize:12,
    textAlign:"center",

  }

});