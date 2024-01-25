import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

  const aspImg = (src)=>{
    const aspCalc = Image.resolveAssetSource(src).width / Image.resolveAssetSource(src).height;
    return aspCalc;
  };

const FaqScreen = ({navigation}) => {

  const [FaqOpenIndex, setFaqOpenIndex] = useState(0);

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>
      <Text style={StyleComponent.ScreenHeaderBgText}>Frequently Asked Questions</Text>
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11), paddingVertical:dpx(15),}}>
      
      <TouchableOpacity style={StyleComponent.FaqTouch} onPress={()=>{
        FaqOpenIndex===1 ? setFaqOpenIndex(0) : setFaqOpenIndex(1);
      }}>
      <View style={StyleComponent.FaqTouchRow}>
      <Text style={StyleComponent.FaqTouchRowText}>How can I get refund?</Text>
      <Image style={[StyleComponent.FaqTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), transform:[{rotate: FaqOpenIndex===1 ? '90deg' : '0deg' },], }]}source={require('./assets/img/ArrowIconColored.png')} />
      </View>
      {
        FaqOpenIndex===1 ? 
        <Text style={StyleComponent.FaqTouchMsgText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        :''
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.FaqTouch} onPress={()=>{
        FaqOpenIndex===2 ? setFaqOpenIndex(0) : setFaqOpenIndex(2);
      }}>
      <View style={StyleComponent.FaqTouchRow}>
      <Text style={StyleComponent.FaqTouchRowText}>Do Stage Driving book event tickets?</Text>
      <Image style={[StyleComponent.FaqTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), transform:[{rotate: FaqOpenIndex===2 ? '90deg' : '0deg' },], }]}source={require('./assets/img/ArrowIconColored.png')} />
      </View>
      {
        FaqOpenIndex===2 ? 
        <Text style={StyleComponent.FaqTouchMsgText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        :''
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.FaqTouch} onPress={()=>{
        FaqOpenIndex===3 ? setFaqOpenIndex(0) : setFaqOpenIndex(3);
      }}>
      <View style={StyleComponent.FaqTouchRow}>
      <Text style={StyleComponent.FaqTouchRowText}>Where to complain about event?</Text>
      <Image style={[StyleComponent.FaqTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), transform:[{rotate: FaqOpenIndex===3 ? '90deg' : '0deg' },], }]}source={require('./assets/img/ArrowIconColored.png')} />
      </View>
      {
        FaqOpenIndex===3 ? 
        <Text style={StyleComponent.FaqTouchMsgText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        :''
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.FaqTouch} onPress={()=>{
        FaqOpenIndex===4 ? setFaqOpenIndex(0) : setFaqOpenIndex(4);
      }}>
      <View style={StyleComponent.FaqTouchRow}>
      <Text style={StyleComponent.FaqTouchRowText}>How can I report about a driver?</Text>
      <Image style={[StyleComponent.FaqTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), transform:[{rotate: FaqOpenIndex===4 ? '90deg' : '0deg' },], }]}source={require('./assets/img/ArrowIconColored.png')} />
      </View>
      {
        FaqOpenIndex===4 ? 
        <Text style={StyleComponent.FaqTouchMsgText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        :''
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.FaqTouch} onPress={()=>{
        FaqOpenIndex===5 ? setFaqOpenIndex(0) : setFaqOpenIndex(5);
      }}>
      <View style={StyleComponent.FaqTouchRow}>
      <Text style={StyleComponent.FaqTouchRowText}>How to book a ride?</Text>
      <Image style={[StyleComponent.FaqTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), transform:[{rotate: FaqOpenIndex===5 ? '90deg' : '0deg' },], }]}source={require('./assets/img/ArrowIconColored.png')} />
      </View>
      {
        FaqOpenIndex===5 ? 
        <Text style={StyleComponent.FaqTouchMsgText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        :''
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.FaqTouch} onPress={()=>{
        FaqOpenIndex===6 ? setFaqOpenIndex(0) : setFaqOpenIndex(6);
      }}>
      <View style={StyleComponent.FaqTouchRow}>
      <Text style={StyleComponent.FaqTouchRowText}>How to offer a ride?</Text>
      <Image style={[StyleComponent.FaqTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), transform:[{rotate: FaqOpenIndex===6 ? '90deg' : '0deg' },], }]}source={require('./assets/img/ArrowIconColored.png')} />
      </View>
      {
        FaqOpenIndex===6 ? 
        <Text style={StyleComponent.FaqTouchMsgText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        :''
      }
      </TouchableOpacity>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default FaqScreen;