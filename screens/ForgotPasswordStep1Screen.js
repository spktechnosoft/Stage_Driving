import { View, Text, ImageBackground, Image, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import AppIntroSlider from 'react-native-app-intro-slider';
import RNRestart from 'react-native-restart';

const windowWidth = Dimensions.get('window').width;

const ForgotPasswordStep1Screen = ({navigation}) => {
  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={StyleComponent.headerNav}>
    <TouchableOpacity style={StyleComponent.headerBackBtnTouch} onPress={()=>navigation.goBack()}>
    <Image source={require('./assets/img/backBtn.png')} style={StyleComponent.headerBackBtn} />
    </TouchableOpacity>
    <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
    </View>

    <View style={StyleComponent.mainBody}>

    <Text style={StyleComponent.loginHeaderText}>Forget Password</Text>
    <Text style={StyleComponent.loginSubHeaderText}>Please enter your email / mobile number to continue</Text>

    <View style={StyleComponent.inputView}>
    <Image source={require('./assets/img/emailPhoneIcon.png')} style={StyleComponent.inputIcon} />
    <TextInput
    style={StyleComponent.textInputStyle}
    placeholder="Email / Mobile"
    placeholderTextColor={'#8A9AAC'}  />
    </View>

    <TouchableOpacity style={StyleComponent.formMainButtonTouch} onPress={()=>navigation.navigate('ForgotPasswordStep2Screen')}>
    <Text style={StyleComponent.formMainButtonTouchText}>NEXT</Text>
    </TouchableOpacity>

    <View style={StyleComponent.loginScrDividerWithTextMainView}>
    <View style={StyleComponent.loginScrDividerFlexHr}></View>
    <Text style={StyleComponent.loginScrDividerFlexText}>Or Sign in via</Text>
    <View style={StyleComponent.loginScrDividerFlexHr}></View>
    </View>

    <View style={StyleComponent.socialLoginIconsView}>
    <TouchableOpacity style={StyleComponent.socialLoginIconsTouch}>
    <Image source={require('./assets/img/fbLogin.png')} style={StyleComponent.socialLoginIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={StyleComponent.socialLoginIconsTouch}>
    <Image source={require('./assets/img/googleLogin.png')} style={StyleComponent.socialLoginIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={StyleComponent.socialLoginIconsTouch}>
    <Image source={require('./assets/img/appleLogin.png')} style={StyleComponent.socialLoginIcon} />
    </TouchableOpacity>
    </View>

    <View style={StyleComponent.loginBottomRedirectView}>
    <Text style={StyleComponent.loginBottomRedirectText}>Don't have an account? </Text>
    <TouchableOpacity style={StyleComponent.loginBottomRedirectTouch} onPress={()=>navigation.navigate('RegisterScreen')}>
    <Text style={StyleComponent.loginBottomRedirectTouchText}>Register Now</Text>
    </TouchableOpacity>
    </View>

    </View>

  </View>
  )
}

export default ForgotPasswordStep1Screen;