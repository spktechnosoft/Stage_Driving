import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, PixelRatio} from 'react-native';
import {React, useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
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

  const countries = [
    {
      ISOCode: 'IN',
      ISDCode: '91',
      flag: require('./assets/img/countryFlags/in.png'),
    },
    {
      ISOCode: 'AF',
      ISDCode: '93',
      flag: require('./assets/img/countryFlags/af.png'),
    },
    {
      ISOCode: 'AL',
      ISDCode: '355',
      flag: require('./assets/img/countryFlags/al.png'),
    },
    {
      ISOCode: 'AR',
      ISDCode: '54',
      flag: require('./assets/img/countryFlags/ar.png'),
    },
    {
      ISOCode: 'AU',
      ISDCode: '61',
      flag: require('./assets/img/countryFlags/au.png'),
    },
    {
      ISOCode: 'CA',
      ISDCode: '1',
      flag: require('./assets/img/countryFlags/ca.png'),
    },
    {
      ISOCode: 'EG',
      ISDCode: '20',
      flag: require('./assets/img/countryFlags/eg.png'),
    },
    {
      ISOCode: 'DE',
      ISDCode: '49',
      flag: require('./assets/img/countryFlags/de.png'),
    },
    {
      ISOCode: 'IT',
      ISDCode: '39',
      flag: require('./assets/img/countryFlags/it.png'),
    },
    {
      ISOCode: 'LY',
      ISDCode: '218',
      flag: require('./assets/img/countryFlags/ly.png'),
    },
  ];  

const ContactUsScreen = ({navigation}) => {

  const [SelectedCountryCode,setSelectedCountryCode]=useState(countries[0]);

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>
      <Text style={StyleComponent.ScreenHeaderBgText}>Contact Us</Text>
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11), paddingVertical:dpx(15),}}>

      <View style={StyleComponent.ContactUsAddressMainView}>
      <Text style={StyleComponent.ContactUsAddressTitle}>Address</Text>
      <Text style={StyleComponent.ContactUsAddressText}>SPK TechnoSoft Private Limited OK Road, Railpar, Near Taj Variety Store, Asansol North P.S, Burdwan, W.B, India - 713301</Text>
      <Text style={StyleComponent.ContactUsCallText}><Text style={StyleComponent.ContactUsCallDarkText}>Call :</Text> +91-89000-11103</Text>
      <Text style={StyleComponent.ContactUsCallText}><Text style={StyleComponent.ContactUsCallDarkText}>Email :</Text> info@spktechnosoft.in</Text>
      </View>

      <View style={StyleComponent.ContactUsAddressDivider}></View>

      <Text style={StyleComponent.ContactUsFormTitle}>Send Message</Text>

      <View style={StyleComponent.ContactUsFormTextInputView}>
      <TextInput 
      style={StyleComponent.ContactUsFormTextInput}
      placeholder='Name'
      placeholderTextColor='#D0D0D0'
      />
      </View>

      <View style={StyleComponent.ContactUsFormTextInputView}>
      <TextInput 
      style={StyleComponent.ContactUsFormTextInput}
      placeholder='Email'
      placeholderTextColor='#D0D0D0'
      />
      </View>

      <View style={StyleComponent.ContactUsFormCountryCodeMapInputView}>
      <View style={StyleComponent.ContactUsFormCountryCodeMapView}>
      <TouchableOpacity style={StyleComponent.ContactUsFormCountryCodeMapIconView}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countries}
        maxHeight={300}
        labelField="ISDCode"
        valueField="ISDCode"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={SelectedCountryCode}
        onChange={item => {
          setSelectedCountryCode(item);
        }}
        renderLeftIcon={() => (
          <Image source={SelectedCountryCode.flag} style={{width:dpx(35), height:'auto', aspectRatio:aspImg(SelectedCountryCode.flag),}} />
        )}
        renderItem={(item)=>{
          return <Text style={{alignSelf:'center', color:'#262626',
          fontFamily:'Inter-Medium',
          fontSize:dpx(16),}}>+{item.ISDCode}</Text>
        }}
      />
      </TouchableOpacity>
      <Text style={StyleComponent.ContactUsFormCountryCodeText}>+{SelectedCountryCode.ISDCode}</Text>
      </View>
      <View></View>
      <TextInput 
      style={StyleComponent.ContactUsFormTextInput}
      placeholder='Your mobile number'
      placeholderTextColor='#D0D0D0'
      />
      </View>

      <View style={StyleComponent.ContactUsFormTextInputView}>
      <TextInput 
      style={StyleComponent.ContactUsFormTextInput}
      placeholder='Subject'
      placeholderTextColor='#D0D0D0'
      />
      </View>

      <View style={StyleComponent.ContactUsFormTextAreaInputView}>
      <TextInput 
      style={StyleComponent.ContactUsFormTextAreaTextInput}
      placeholder='Write your text'
      placeholderTextColor='#D0D0D0'
      />
      </View>

      <TouchableOpacity style={StyleComponent.LanguageScreenSaveButtonTouch}>
      <Text style={StyleComponent.LanguageScreenSaveButtonTouchText}>SEND MESSAGE</Text>
      </TouchableOpacity>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default ContactUsScreen;

const styles = StyleSheet.create({
  dropdown: {
   
  },
  icon: {
  
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});