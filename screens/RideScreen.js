import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert, Switch, FlatList, PixelRatio, ActivityIndicator } from 'react-native';
import {React, useState, useEffect, useRef} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };
  
  const RideImageAsp =Image.resolveAssetSource(require('./assets/img/slideGraphic1.png')).width / Image.resolveAssetSource(require('./assets/img/slideGraphic1.png')).height

const RideScreen = ({navigation}) => {

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>

      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:15,}}>

      <Image source={require('./assets/img/slideGraphic1.png')} style={[StyleComponent.RideScreenMainImage,{aspectRatio:RideImageAsp,}]} />

      <View style={StyleComponent.RideScreenActionView}>
      <Text style={StyleComponent.RideScreenActionViewTitleText}>You need a Ride?</Text>
      <Text style={StyleComponent.RideScreenActionViewSubTitleText}>Do you need a ride for an event?</Text>
      <TouchableOpacity style={[StyleComponent.RideScreenActionViewTouch,{backgroundColor:'#EC5D41',}]} onPress={()=>navigation.navigate('FindRideScreen')}>
      <Text style={[StyleComponent.RideScreenActionViewTouchText,{color:'#fff',}]}>FIND A RIDE</Text>
      </TouchableOpacity>
      </View>

      <View style={StyleComponent.RideScreenActionView}>
      <Text style={StyleComponent.RideScreenActionViewTitleText}>Want to Offer Ride?</Text>
      <Text style={StyleComponent.RideScreenActionViewSubTitleText}>Do you want to be a guide for an event?</Text>
      <TouchableOpacity style={[StyleComponent.RideScreenActionViewTouch,{backgroundColor:'#E8E8E8',}]} onPress={()=>navigation.navigate('SavedVehicleScreen')}>
      <Text style={[StyleComponent.RideScreenActionViewTouchText,{color:'#EC5D41',}]}>OFFER RIDE</Text>
      </TouchableOpacity>
      </View>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  );
}

export default RideScreen;