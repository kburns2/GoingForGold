//now the camera page
import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
//import {Permissions} from 'expo-permissions';
import { ExpoLinksView } from '@expo/samples';
import styles from './styleslink'

export default class CameraPage extends React.Component{
  camera = null;

  state ={
    hasCameraPermission: null,
  };
  async componentDidMount(){
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

    this.setState({ hasCameraPermission });
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
        return <View />;
    } else if (hasCameraPermission === false) {
        return <Text>Access to camera has been denied.</Text>;
    }

    return (
        <View>
            <Camera
                style={styles.preview}
                ref={Camera => this.Camera = Camera}
            />
        </View>
    );
};
};


// export default function LinksScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       {/**
//        * Go ahead and delete ExpoLinksView and replace it with your content;
//        * we just wanted to provide you with some helpful links.
//        */}
//       <ExpoLinksView />
//     </ScrollView>
//   );
// }

// LinksScreen.navigationOptions = {
//   title: 'Links',
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
