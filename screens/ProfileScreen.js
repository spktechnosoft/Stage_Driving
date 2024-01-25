import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert, Switch } from 'react-native';
import {React, useState, useEffect} from 'react';
import StyleComponent from './components/StyleComponent';
import AppIntroSlider from 'react-native-app-intro-slider';
import RNRestart from 'react-native-restart';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;
const genderList = [{value:'Male'}, {value:'Female'}];
const countryList = [{value:'India'}, {value:'Pakistan'}, {value:'Italy'}, {value:'United States'}, {value:'United Kingdom'}];
const cityList = [{value:'Asansol'}, {value:'Kolkata'}, {value:'New Delhi'}, {value:'Hyderabad'}];
const favoriteList = [{value:'List One'}, {value:'List Two'}];

const ProfileScreen = ({navigation}) => {
  const [Gendervalue, setGendervalue] = useState(null);
  const [GenderisFocus, GendersetIsFocus] = useState(false);
  const [Countryvalue, setCountryvalue] = useState(null);
  const [CountryisFocus, CountrysetIsFocus] = useState(false);
  const [Cityvalue, setCityvalue] = useState(null);
  const [CityisFocus, CitysetIsFocus] = useState(false);
  const [Performancevalue, setPerformancevalue] = useState(null);
  const [PerformanceisFocus, PerformancesetIsFocus] = useState(false);
  const [Favoritevalue, setFavoritevalue] = useState(null);
  const [FavoriteisFocus, FavoritesetIsFocus] = useState(false);
  const [isEnabledSwitchOne, setIsEnabledSwitchOne] = useState(false);
  const toggleSwitchSwitchOne = () => setIsEnabledSwitchOne(previousState => !previousState);
  const [isEnabledSwitchTwo, setIsEnabledSwitchTwo] = useState(true);
  const toggleSwitchSwitchTwo = () => setIsEnabledSwitchTwo(previousState => !previousState);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [ProfilePicUri, SetProfilePicUri]=useState(require('./assets/img/profilePicture.png'));
  
  return (
    <View style={StyleComponent.ScreenContainer}>
      <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={StyleComponent.headerBackBtnTouch} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={StyleComponent.headerBackBtn} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>

      <View style={StyleComponent.mainBody}>

      <View style={StyleComponent.ProfileTopView}>
      <TouchableOpacity style={StyleComponent.ProfileTopImageContainer} onPress={async ()=>{
        const result = await launchImageLibrary({mediaType:'photo'});
        console.log(result.assets[0].uri);
        SetProfilePicUri({uri: result.assets[0].uri});
      }}>
      <Image style={StyleComponent.ProfileTopImage} source={ProfilePicUri} />
      <Image style={StyleComponent.ProfileTopImageCameraIcon} source={require('./assets/img/CameraIcon.png')} />
      </TouchableOpacity>
      <View style={StyleComponent.ProfileTopTextContainer}>
      <Text style={StyleComponent.ProfileTopTextOne}>Welcome Alice!</Text>
      <Text style={StyleComponent.ProfileTopTextTwo}>Please complete your profile</Text>
      </View>
      </View>

      <View style={StyleComponent.ProfileScreenTopDivider}></View>
      <Text style={StyleComponent.ProfileScreenTopDividerTextOne}>Your data is safe with us, it is only used to show you events and rides recommendation according to your personal info and data.</Text>
      <Text style={StyleComponent.ProfileScreenTopDividerTextTwo}>We do not sell or share your data with any 3rd party.</Text>
      <View style={StyleComponent.ProfileScreenTopDivider}></View>

      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:'100%', paddingHorizontal:15, alignItems:'center', justifyContent:'center',}}>
      <View style={StyleComponent.ProfileScreenFormLabelInputView}>
      <Text style={StyleComponent.ProfileScreenLabel}>Gender</Text>
      <Dropdown
      style={[StyleComponent.ProfileScreenDropdown, { borderColor: !GenderisFocus?'transparent':'#FF8616' }]}
      placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
      selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
      inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
      iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
      data={genderList}
      maxHeight={300}
      labelField="value"
      valueField="value"
      placeholder={!GenderisFocus ? 'Choose' : Gendervalue}
      searchPlaceholder="Search..."
      value={Gendervalue}
      onFocus={() => GendersetIsFocus(true)}
      onBlur={() => GendersetIsFocus(false)}
      onChange={item => {
        setGendervalue(item.value);
        GendersetIsFocus(false);
      }}
        renderItem={(item) => {
          return(
         <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
         <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
         </View>
          );
        }}
        renderLeftIcon={() => (
          <Image source={require('./assets/img/GenderIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
        )}
      />
      </View>

      <View style={StyleComponent.ProfileScreenFormLabelInputView}>
      <Text style={StyleComponent.ProfileScreenLabel}>Date of Birth</Text>
      <TouchableOpacity style={StyleComponent.DatePickerRow} onPress={() => setOpen(true)}>
      <Image source={require('./assets/img/DOBIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
      <Text style={StyleComponent.DatePickerRowText}>{String(date.getDate()+'/'+Number(date.getMonth()+1)+'/'+Number(date.getFullYear()))}</Text>
      <Image source={require('./assets/img/CalendarIcon.png')} style={StyleComponent.DatePickerRowRightIcon} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        minimumDate={new Date('1945-01-01')}
        maximumDate={new Date('2005-12-31')}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
      </View>

      <View style={StyleComponent.ProfileScreenFormLabelInputView}>
      <Text style={StyleComponent.ProfileScreenLabel}>Country</Text>
      <Dropdown
      style={[StyleComponent.ProfileScreenDropdown, { borderColor: !CountryisFocus?'transparent':'#FF8616' }]}
      placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
      selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
      inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
      iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
      data={countryList}
      maxHeight={300}
      labelField="value"
      valueField="value"
      placeholder={!CountryisFocus ? 'Country' : Countryvalue}
      searchPlaceholder="Search..."
      value={Countryvalue}
      onFocus={() => CountrysetIsFocus(true)}
      onBlur={() => CountrysetIsFocus(false)}
      onChange={item => {
        setCountryvalue(item.value);
        CountrysetIsFocus(false);
      }}
        renderItem={(item) => {
          return(
         <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
         <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
         </View>
          );
        }}
        renderLeftIcon={() => (
          <Image source={require('./assets/img/CountryIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
        )}
      />
      </View>

      <View style={StyleComponent.ProfileScreenFormLabelInputView}>
      <Text style={StyleComponent.ProfileScreenLabel}>City</Text>
      <Dropdown
      style={[StyleComponent.ProfileScreenDropdown, { borderColor: !CityisFocus?'transparent':'#FF8616' }]}
      placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
      selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
      inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
      iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
      data={cityList}
      maxHeight={300}
      labelField="value"
      valueField="value"
      placeholder={!CityisFocus ? 'City' : Cityvalue}
      searchPlaceholder="Search..."
      value={Cityvalue}
      onFocus={() => CitysetIsFocus(true)}
      onBlur={() => CitysetIsFocus(false)}
      onChange={item => {
        setCityvalue(item.value);
        CitysetIsFocus(false);
      }}
        renderItem={(item) => {
          return(
         <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
         <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
         </View>
          );
        }}
        renderLeftIcon={() => (
          <Image source={require('./assets/img/CityIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
        )}
      />
      </View>
      
      <View style={StyleComponent.ProfileScreenFormLabelInputView}>
      <Text style={StyleComponent.ProfileScreenLabel}>Favourite Event</Text>
      <Dropdown
      style={[StyleComponent.ProfileScreenDropdown, { borderColor: !FavoriteisFocus?'transparent':'#FF8616' }]}
      placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
      selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
      inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
      iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
      data={favoriteList}
      maxHeight={300}
      labelField="value"
      valueField="value"
      placeholder={!FavoriteisFocus ? 'Pop / Songwriting' : Favoritevalue}
      searchPlaceholder="Search..."
      value={Favoritevalue}
      onFocus={() => FavoritesetIsFocus(true)}
      onBlur={() => FavoritesetIsFocus(false)}
      onChange={item => {
        setFavoritevalue(item.value);
        FavoritesetIsFocus(false);
      }}
        renderItem={(item) => {
          return(
         <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
         <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
         </View>
          );
        }}
        renderLeftIcon={() => (
          <Image source={require('./assets/img/FavouriteIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
        )}
      />
      </View>

      <View style={StyleComponent.ProfileScreenFormLabelInputView}>
      <Text style={StyleComponent.ProfileScreenLabel}>If you were an artist where would you perform?</Text>
      <Dropdown
      style={[StyleComponent.ProfileScreenDropdown, { borderColor: !PerformanceisFocus?'transparent':'#FF8616' }]}
      placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
      selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
      inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
      iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
      data={favoriteList}
      maxHeight={300}
      labelField="value"
      valueField="value"
      placeholder={!PerformanceisFocus ? 'Terrace' : Performancevalue}
      searchPlaceholder="Search..."
      value={Performancevalue}
      onFocus={() => PerformancesetIsFocus(true)}
      onBlur={() => PerformancesetIsFocus(false)}
      onChange={item => {
        setPerformancevalue(item.value);
        PerformancesetIsFocus(false);
      }}
        renderItem={(item) => {
          return(
         <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
         <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
         </View>
          );
        }}
        renderLeftIcon={() => (
          <Image source={require('./assets/img/PerformanceIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
        )}
      />
      </View>
      </View>
      </ScrollView>

      <View style={StyleComponent.ProfileScreenSwitchRow}>
      <Text style={StyleComponent.ProfileScreenSwitchRowText}>Show my activity to other users</Text>
      <Switch
        trackColor={{false: '#767577', true: '#FF8616'}}
        thumbColor={isEnabledSwitchOne ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchSwitchOne}
        value={isEnabledSwitchOne}
      />
      </View>

      <View style={StyleComponent.ProfileScreenSwitchRow}>
      <Text style={StyleComponent.ProfileScreenSwitchRowText}>I want to receive offers and commercial
      communications</Text>
      <Switch
        trackColor={{false: '#767577', true: '#FF8616'}}
        thumbColor={isEnabledSwitchTwo ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchSwitchTwo}
        value={isEnabledSwitchTwo}
      />
      </View>

      <TouchableOpacity style={[StyleComponent.formMainButtonTouch,{marginTop:15,}]} onPress={()=>navigation.navigate('HomeScreen')}>
      <Text style={StyleComponent.formMainButtonTouchText}>SAVE</Text>
      </TouchableOpacity>


      </View>
    </View>
  )
}

export default ProfileScreen;