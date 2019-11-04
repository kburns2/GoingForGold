import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import {Video} from 'expo';

export default class Settings_Activity extends Component {

  static navigationOptions =
    {
      title: 'Settings Activity',
    };

  render() {

    return (

      <View style={styles.MainContainer}>

        <Text style={{ marginTop: 40, fontSize: 20 }}>This is where the camera should land</Text>
        <View style={styles.container}>
        
        {/* <Video source={{uri: "./assets/tennis_serving.mp4"}}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo} /> */}
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>

          <Text style={styles.text}>Go to Home Tab</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Details')}>

          <Text style={styles.text}>Goto Detail Screen</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Profile')}>

          <Text style={styles.text}>Goto Profile Screen</Text>

        </TouchableOpacity>

      </View>

    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }

});