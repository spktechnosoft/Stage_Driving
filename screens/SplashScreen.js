import { View, Image, Dimensions } from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SplashScreen = () => {
  return (
    <View style={{
        height:windowHeight,
        width:windowWidth,
    }}>
      <Image style={{
        width:'100%',
        height:'100%',
      }} source={require('./assets/SplashScreen.png')}
      resizeMode='cover' />
    </View>
  )
}

export default SplashScreen;