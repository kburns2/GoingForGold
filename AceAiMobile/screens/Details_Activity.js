import React, {Component} from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default class Details_Activity extends Component {

  static navigationOptions =
  {
     title: 'Details Activity',
  };

  render() {

    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Try out a video</Text>
        {/* <Video
          source={require("./../assets/serve.mp4")}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        /> */}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
