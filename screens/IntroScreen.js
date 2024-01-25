import { View, Text, ImageBackground, Image, Dimensions, ScrollView } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import AppIntroSlider from 'react-native-app-intro-slider';

const windowWidth = Dimensions.get('window').width;

const IntroFld = [
    {
    Id: 1,
    AspIcon: Image.resolveAssetSource(require('./assets/img/slideGraphic1.png')).width / Image.resolveAssetSource(require('./assets/img/slideGraphic1.png')).height,
    Icon: require('./assets/img/slideGraphic1.png'),
    Title: 'Save the',
    TitleBold: 'Fuel Price',
    SubTitle: 'Save the',
    SubTitleBold: 'Environment',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},

{
    Id: 2,
    AspIcon: Image.resolveAssetSource(require('./assets/img/slideGraphic2.png')).width / Image.resolveAssetSource(require('./assets/img/slideGraphic2.png')).height,
    Icon: require('./assets/img/slideGraphic2.png'),
    Title: 'Be a Good',
    TitleBold: 'Citizen',
    SubTitle: 'Be a Good',
    SubTitleBold: 'Human',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},

{
    Id: 3,
    AspIcon: Image.resolveAssetSource(require('./assets/img/slideGraphic3.png')).width / Image.resolveAssetSource(require('./assets/img/slideGraphic3.png')).height,
    Icon: require('./assets/img/slideGraphic3.png'),
    Title: 'Going to an',
    TitleBold: 'Event',
    SubTitle: 'Why going',
    SubTitleBold: 'Alone?',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},

{
    Id: 4,
    AspIcon: Image.resolveAssetSource(require('./assets/img/slideGraphic4.png')).width / Image.resolveAssetSource(require('./assets/img/slideGraphic4.png')).height,
    Icon: require('./assets/img/slideGraphic4.png'),
    Title: 'Having a',
    TitleBold: 'Car?',
    SubTitle: 'Start earning',
    SubTitleBold: 'Today',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},

{
    Id: 5,
    AspIcon: Image.resolveAssetSource(require('./assets/img/slideGraphic5.png')).width / Image.resolveAssetSource(require('./assets/img/slideGraphic5.png')).height,
    Icon: require('./assets/img/slideGraphic5.png'),
    Title: 'Save the',
    TitleBold: 'Fuel Price',
    SubTitle: 'Save the',
    SubTitleBold: 'Environment',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},

];


const IntroScreen = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <ImageBackground source={require('./assets/img/linear-bg.png')} style={StyleComponent.container}>
    <View style={StyleComponent.LogoView}>
    <Image source={require('./assets/logoWhite.png')} style={StyleComponent.LogoAllScr} />
    </View>
    <AppIntroSlider
        data={IntroFld}
        showSkipButton={true}
        showPrevButton={false}
        onSlideChange={(index,lastIndex) => setActiveSlide(index)}
        activeDotStyle={{width:12, height:12, borderRadius:12, backgroundColor:'#fff'}}
        dotStyle={{width:12, height:12, borderRadius:12, backgroundColor:'#ddd'}}
        renderItem={({item}) => {
            return (
                <View style={StyleComponent.introContentView}>
                <Image source={item.Icon} style={[StyleComponent.introImage,{aspectRatio:item.AspIcon}]} />
                <Text style={StyleComponent.introTitle}>{item.Title} <Text style={StyleComponent.introTitleBold}>{item.TitleBold}</Text></Text>
                <Text style={StyleComponent.introTitle}>{item.SubTitle} <Text style={StyleComponent.introTitleBold}>{item.SubTitleBold}</Text></Text>
                <ScrollView>
                <Text style={StyleComponent.introText}>{item.Message}</Text>
                </ScrollView>
                </View>
                
            );
        }}
        renderNextButton={(next)=>{
          return(
           <View style={StyleComponent.introButtonView}>
           <Text style={StyleComponent.introButtonText} >Next</Text>
           </View>
          );
         }}
         renderSkipButton={(next)=>{
          return(
            <View style={StyleComponent.introButtonView}>
            <Text style={StyleComponent.introButtonText}>Skip</Text>
            </View>
           
          );
         }}
         renderDoneButton={(next)=>{
          return(
            <View style={{width:windowWidth-60, alignItems:'center'}}>
            <View style={StyleComponent.introButtonView}>
            <Text style={StyleComponent.introButtonText}>Let's Go </Text>
            </View>
            </View>
          );
         }}
         onDone={()=>{
          navigation.navigate('WelcomeScreen')
         }}
      />
    </ImageBackground>
  )
}

export default IntroScreen;