import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';

const ForgotPasswordStep2Screen = ({navigation}) => {
  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={StyleComponent.headerNav}>
    <TouchableOpacity style={StyleComponent.headerBackBtnTouch} onPress={()=>navigation.goBack()}>
    <Image source={require('./assets/img/backBtn.png')} style={StyleComponent.headerBackBtn} />
    </TouchableOpacity>
    <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
    </View>

    <View style={StyleComponent.mainBody}>

    <Text style={StyleComponent.loginHeaderText}>Verify Your Account</Text>
    <Text style={StyleComponent.loginSubHeaderText}>Please enter the OTP we’ve sent in your email & mobile</Text>

    <View style={StyleComponent.OTPinputView }>
    <View style={StyleComponent.OTPinputBox }>
    <TextInput 
    style={StyleComponent.OTPinputText }
    maxLength={1}
    inputMode='numeric'
    secureTextEntry={true}
    />
    </View>
    <View style={StyleComponent.OTPinputBox }>
    <TextInput 
    style={StyleComponent.OTPinputText }
    maxLength={1}
    inputMode='numeric'
    secureTextEntry={true}
    />
    </View>
    <View style={StyleComponent.OTPinputBox }>
    <TextInput 
    style={StyleComponent.OTPinputText }
    maxLength={1}
    inputMode='numeric'
    secureTextEntry={true}
    />
    </View>
    <View style={StyleComponent.OTPinputBox }>
    <TextInput 
    style={StyleComponent.OTPinputText }
    maxLength={1}
    inputMode='numeric'
    secureTextEntry={true}
    />
    </View>
    </View>

    <TouchableOpacity style={StyleComponent.formMainButtonTouch} onPress={()=>navigation.navigate('ResetPassword')}>
    <Text style={StyleComponent.formMainButtonTouchText}>VERIFY</Text>
    </TouchableOpacity>

    </View>

  </View>
  )
}

export default ForgotPasswordStep2Screen;