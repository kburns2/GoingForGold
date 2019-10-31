import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,Button, Alert} from "react-native";

export default class HomeActivity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>AceAi</Text>
        <Text style={styles.body}>an AI app for Tennis</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(146, 212, 194)"
  },
  headerText: {
    fontSize: 64,
    textAlign: "center",
    margin: 10,
    color: 'rgb(222, 230, 124)',
    fontWeight: "bold"
  },
  body: {
    fontSize:12,
    textAlign:"center",
   
  }
});