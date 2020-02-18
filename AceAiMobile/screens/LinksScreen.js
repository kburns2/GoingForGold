import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text , Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Camera, MediaLibrary} from 'expo-camera';
import { CameraRoll } from "react-native";
import * as Permissions from 'expo-permissions';
import { ExpoLinksView } from '@expo/samples';
import styles from './StylesLinksScreen.js';

export default class CameraPage extends React.Component{
  camera = null;

  state ={
    hasCameraPermission: null,
  };

  async startRecording() {
    console.log("Start Recording");
    this.setState({ recording: true });
    const { uri, codec = "mp4" } = await this.camera.recordAsync();

    try{ 
      console.log(uri);
      let saved = CameraRoll.saveToCameraRoll(uri, "video");
    }catch(e){ 
      console.log(e);
    }

    };


  stopRecording() {
    console.log("Stop Recording"); 
    if (this.recording) this.camera.stopRecording();
    this.recording = false;
   
    
    /**
     * After recording has finished, we need to send the video through posenet
     */
  }
  async componentDidMount(){
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const camera_roll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted' && camera_roll.status === "granted");

    this.setState({ hasCameraPermission });
  };

  render() {
    const { hasCameraPermission } = this.state;
    const {recording, processing} = this.state; 

    if (hasCameraPermission === null) {
        return <View />;
    } else if (hasCameraPermission === false) {
        return <Text>Access to camera has been denied.</Text>;
    }

    let button = (
      <TouchableOpacity
        onPress = {this.startRecording.bind(this)}
        style={styles.button}
      > 
        <Text style={styles.text}>RECORD SERVE</Text>
      </TouchableOpacity>
    );

    if (recording){  //if user is recording, change button to stop button 
      button = (
        <TouchableOpacity
          onPress={this.stopRecording.bind(this)}
          style={styles.button}
        >
          <Text style={styles.text}> STOP </Text>
        </TouchableOpacity>
      );
    }

    if(processing){ 
      button = (
        <View style ={styles.capture}>
          <ActivityIndicator animating size={18}/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
      <Camera
        ref={ref => {this.camera = ref; }}
        style={styles.preview}
      />
      <View style={styles.clickMe}>
        {button}
      </View>
    </View>
    );
    
    
  };
  
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center'
//   },
//   image: {
//     marginTop: 50
//   },
//   heading: {
//     ...palette.heading, ...{
//       marginTop: 40
//     }
//   },
//   text: {
//     ...palette.text, ...{
//       marginHorizontal: 8,
//       marginVertical: 10
//     }
//   }
// })
