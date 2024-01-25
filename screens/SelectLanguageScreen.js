import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio} from 'react-native';
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
    const aspExtract = Image.resolveAssetSource(src).width / Image.resolveAssetSource(src).height;
    return aspExtract;
  };

const SelectLanguageScreen = ({navigation}) => {

  const [LangSelectedIndex, setLangSelectedIndex] = useState(1);

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>
      <Text style={StyleComponent.ScreenHeaderBgText}>Select Language</Text>
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11), paddingVertical:dpx(15),}}>
      
      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===1 ? setLangSelectedIndex(0) : setLangSelectedIndex(1);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag.png')), }]}source={require('./assets/img/LanguageIcons/Flag.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>English</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>English</Text>
      </View>
      {
        LangSelectedIndex===1 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===2 ? setLangSelectedIndex(0) : setLangSelectedIndex(2);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag-1.png')), }]}source={require('./assets/img/LanguageIcons/Flag-1.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>Hindi</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>Hindi</Text>
      </View>
      {
        LangSelectedIndex===2 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===3 ? setLangSelectedIndex(0) : setLangSelectedIndex(3);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag-2.png')), }]}source={require('./assets/img/LanguageIcons/Flag-2.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>Arabic</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>Arabic</Text>
      </View>
      {
        LangSelectedIndex===3 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===4 ? setLangSelectedIndex(0) : setLangSelectedIndex(4);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag-3.png')), }]}source={require('./assets/img/LanguageIcons/Flag-3.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>French</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>French</Text>
      </View>
      {
        LangSelectedIndex===4 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===5 ? setLangSelectedIndex(0) : setLangSelectedIndex(5);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag-4.png')), }]}source={require('./assets/img/LanguageIcons/Flag-4.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>German</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>German</Text>
      </View>
      {
        LangSelectedIndex===5 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===6 ? setLangSelectedIndex(0) : setLangSelectedIndex(6);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag-5.png')), }]}source={require('./assets/img/LanguageIcons/Flag-5.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>Portuguese</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>Portuguese</Text>
      </View>
      {
        LangSelectedIndex===6 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===7 ? setLangSelectedIndex(0) : setLangSelectedIndex(7);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Flag-6.png')), }]}source={require('./assets/img/LanguageIcons/Flag-6.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>Turkish</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>Turkish</Text>
      </View>
      {
        LangSelectedIndex===7 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenTouch} onPress={()=>{
        LangSelectedIndex===8 ? setLangSelectedIndex(0) : setLangSelectedIndex(8);
      }}>
      <Image style={[StyleComponent.LanguageScreenFlagIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Dutch.png')), }]}source={require('./assets/img/LanguageIcons/Dutch.png')} />
      <View style={StyleComponent.LanguageScreenTouchTextRow}>
      <Text style={StyleComponent.LanguageScreenTouchRowText1}>Dutch</Text>
      <Text style={StyleComponent.LanguageScreenTouchRowText2}>Dutch</Text>
      </View>
      {
        LangSelectedIndex===8 ? 
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check2.png')), }]}source={require('./assets/img/LanguageIcons/Check2.png')} />
        :
        <Image style={[StyleComponent.LanguageScreenTouchRowIcon,{aspectRatio:aspImg(require('./assets/img/LanguageIcons/Check1.png')), }]}source={require('./assets/img/LanguageIcons/Check1.png')} />
      }
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.LanguageScreenSaveButtonTouch}>
      <Text style={StyleComponent.LanguageScreenSaveButtonTouchText}>SAVE</Text>
      </TouchableOpacity>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default SelectLanguageScreen;