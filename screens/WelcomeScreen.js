import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('./assets/img/welcome-bg.png')} style={StyleComponent.container}>
    <View style={StyleComponent.LogoView}>
    <Image source={require('./assets/logoWhiteVertical.png')} style={StyleComponent.LogoVertical} />
    </View>
    <View style={StyleComponent.welcomeContentView}>
    <Text style={StyleComponent.welcomeTitle}>Hi, Nice to meet you!</Text>
    <Text style={StyleComponent.welcomeText}>To continue using the app please choose an option</Text>
    <View style={StyleComponent.welcomeHr}></View>
    <Text style={StyleComponent.welcomeActionTitle}>Haven't registered yet?</Text>
    <TouchableOpacity style={StyleComponent.welcomeActionBtnView} onPress={()=>navigation.navigate('RegisterScreen')}>
    <Text style={StyleComponent.welcomeActionBtnText}>Sign up</Text>
    </TouchableOpacity>
    <Text style={StyleComponent.welcomeActionTitle}>Already a user?</Text>
    <TouchableOpacity style={StyleComponent.welcomeActionSecondBtnView} onPress={()=>navigation.navigate('LoginScreen')}>
    <Text style={StyleComponent.welcomeActionSecondBtnText}>Sign in</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row', alignItems:"flex-start", justifyContent:'space-between', marginVertical:30,}}>
    <View style={StyleComponent.welcomeHrMid}></View>
    <Text style={{marginHorizontal:8}}>Or</Text>
    <View style={StyleComponent.welcomeHrMid}></View>
    </View>
    <TouchableOpacity>
    <Text style={StyleComponent.welcomeGuestText}>Continue as Guest</Text>
    </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', flex:1,}}>
    <TouchableOpacity>
    <Text style={StyleComponent.welcomeTOStext}>Terms of Service</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text style={StyleComponent.welcomeTOStext}>Privacy Policy</Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default WelcomeScreen;