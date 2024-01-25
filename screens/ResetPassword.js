import { View, Text, Image,TouchableOpacity, TextInput } from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';

const ResetPassword = ({navigation}) => {
  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={StyleComponent.headerNav}>
    <TouchableOpacity style={StyleComponent.headerBackBtnTouch} onPress={()=>navigation.goBack()}>
    <Image source={require('./assets/img/backBtn.png')} style={StyleComponent.headerBackBtn} />
    </TouchableOpacity>
    <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
    </View>

    <View style={StyleComponent.mainBody}>

    <Text style={StyleComponent.loginHeaderText}>Reset Password</Text>
    <Text style={StyleComponent.loginSubHeaderText}>Create your new password</Text>

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
    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/passLock.png')} style={StyleComponent.inputIcon}  />
      <TextInput
      style={StyleComponent.textInputStyle}
      secureTextEntry={true}
      placeholder="Confirm Password"
      placeholderTextColor={'#8A9AAC'}  />
      <TouchableOpacity>
      <Image source={require('./assets/img/eye.png')} style={StyleComponent.inputIcon} />
      </TouchableOpacity>
      </View>

    <TouchableOpacity style={StyleComponent.formMainButtonTouch} onPress={()=>navigation.navigate('HomeScreen')}>
    <Text style={StyleComponent.formMainButtonTouchText}>RESET</Text>
    </TouchableOpacity>

    </View>

  </View>
  )
}

export default ResetPassword;