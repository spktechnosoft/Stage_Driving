import { View, Text, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';

const LoginScreen = ({navigation}) => {
  return (
    <View style={StyleComponent.ScreenContainer}>
      <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={StyleComponent.headerBackBtnTouch} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={StyleComponent.headerBackBtn} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>

      <View style={StyleComponent.mainBody}>

      <Text style={StyleComponent.loginHeaderText}>Welcome!</Text>
      <Text style={StyleComponent.loginSubHeaderText}>Sign in to continue</Text>

      <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/emailPhoneIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Email / Mobile"
      placeholderTextColor={'#8A9AAC'}  />
      </View>

      <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/passLock.png')} style={StyleComponent.inputIcon}  />
      <TextInput
      style={StyleComponent.textInputStyle}
      secureTextEntry={true}
      placeholder="Password"
      placeholderTextColor={'#8A9AAC'}  />
      <TouchableOpacity>
      <Image source={require('./assets/img/eye.png')} style={StyleComponent.inputIcon} />
      </TouchableOpacity>
      </View>

      <View style={StyleComponent.loginBottomRow}>
      <View style={StyleComponent.checkBoxMainRow}>
      <View style={StyleComponent.checkBoxView}>
      <TouchableOpacity style={StyleComponent.checkBoxTouch}></TouchableOpacity>
      </View>
      <Text style={StyleComponent.checkBoxText}>Remember Me</Text>
      </View>

      <TouchableOpacity style={StyleComponent.formBottomLinkTouch} onPress={()=>navigation.navigate('ForgotPasswordStep1Screen')}>
      <Text style={StyleComponent.formBottomLinkText}>Forgot Password?</Text>
      </TouchableOpacity>

      </View>

      <TouchableOpacity style={StyleComponent.formMainButtonTouch} onPress={()=>navigation.navigate('HomeScreen')}>
      <Text style={StyleComponent.formMainButtonTouchText}>SIGN IN</Text>
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

export default LoginScreen;