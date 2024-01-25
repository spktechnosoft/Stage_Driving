import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import {React, useState } from 'react';
import StyleComponent from './components/StyleComponent';
import { Dropdown } from 'react-native-element-dropdown';

const countries = [
  {
    ISOCode:'IN',
    ISDCode:'91',
  },
  {
    ISOCode:'AF',
    ISDCode:'93',
  },
  {
    ISOCode:'AL',
    ISDCode:'355',
  },
  {
    ISOCode:'AR',
    ISDCode:'54',
  },
  {
    ISOCode:'AU',
    ISDCode:'61',
  },
  {
    ISOCode:'CA',
    ISDCode:'1',
  },
  {
    ISOCode:'EG',
    ISDCode:'20',
  },
  {
    ISOCode:'DE',
    ISDCode:'49',
  },
  {
    ISOCode:'IT',
    ISDCode:'39',
  },
  {
    ISOCode:'LY',
    ISDCode:'218',
  },
];

const RegisterScreen = ({navigation}) => {
  const [value, setValue] = useState([countries[0].ISDCode, countries[0].ISOCode]);
  const [isFocus, setIsFocus] = useState(false);
  
  return (
    <View style={StyleComponent.ScreenContainer}>
      <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={StyleComponent.headerBackBtnTouch} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={StyleComponent.headerBackBtn} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>

      <View style={StyleComponent.mainBody}>

      <Text style={StyleComponent.loginHeaderText}>Create Account</Text>
      <Text style={StyleComponent.loginSubHeaderText}>Create your account to continue</Text>

      <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/userIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="First Name *"
      placeholderTextColor={'#8A9AAC'}  />
      </View>

      <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/userIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Last Name"
      placeholderTextColor={'#8A9AAC'}  />
      </View>

      <View style={{flexDirection:'row', alignItems:'center',}}>
      

      <Dropdown
          style={[StyleComponent.dropdown, isFocus && { borderColor: '#FF8616' }]}
          placeholderStyle={StyleComponent.placeholderStyle}
          selectedTextStyle={StyleComponent.selectedTextStyle}
          inputSearchStyle={StyleComponent.inputSearchStyle}
          iconStyle={StyleComponent.iconStyle}
          data={countries}
          search
          maxHeight={200}
          labelField="ISDCode"
          valueField="ISOCode"
          searchField="ISDCode"
          placeholder={"+"+value[0]}
          searchPlaceholder="Search..."
          value={value[0]}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue([item.ISDCode, item.ISOCode]);
            setIsFocus(false);
          }}
          renderItem={(item) => {
            return(
           <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
           <Image style={{ width: 18, height: 18, marginRight:5, }} source={{ uri: `https://flagsapi.com/${item.ISOCode}/shiny/64.png` }} />
           <Text style={StyleComponent.textInputStyle}>+{item.ISDCode}</Text>
           </View>
            );
          }}
          renderLeftIcon={() => {
            return <Image style={{ width: 30, height: 30, marginRight:8, }} source={{ uri: `https://flagsapi.com/${value[1]}/shiny/64.png` }} />;
          }}
        />
      
      <View style={[StyleComponent.inputView,{width:'70%',}]}>
      <Image source={require('./assets/img/mobileIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Mobile Number"
      placeholderTextColor={'#8A9AAC'}  />
      </View>

      </View>

      <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/emailIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Email Address"
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

      <Text style={StyleComponent.passwordTipsText}><Text style={{color:'#FF6107', fontFamily:'Commissioner-Black'}}>*</Text> Password must have at least 8 characters and should contain at least one special character, one number and a uppercase letter.</Text>

      <TouchableOpacity style={StyleComponent.formMainButtonTouch} onPress={()=>navigation.navigate('ProfileScreen')}>
      <Text style={StyleComponent.formMainButtonTouchText}>REGISTER</Text>
      </TouchableOpacity>

      <View style={StyleComponent.loginScrDividerWithTextMainView}>
      <View style={StyleComponent.loginScrDividerFlexHr}></View>
      <Text style={StyleComponent.loginScrDividerFlexText}>Or Sign up via</Text>
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
      <Text style={StyleComponent.loginBottomRedirectText}>Already have an account? </Text>
      <TouchableOpacity style={StyleComponent.loginBottomRedirectTouch}>
      <Text style={StyleComponent.loginBottomRedirectTouchText}>Login</Text>
      </TouchableOpacity>
      </View>

      </View>
      <Text style={StyleComponent.signupBottomConfirmationText}>By clicking Register, Sign up with Facebook, Google or Apple,
      you agree to our Terms & Condition and Privacy Policy.</Text>
    </View>
  )
}

export default RegisterScreen;