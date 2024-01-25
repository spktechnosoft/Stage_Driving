import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, Switch, PixelRatio } from 'react-native';
import {React, useState, useEffect} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoding from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

Geocoding.init("AIzaSyBTqdYEuUBkUwmSU0bh_5ELb-3KYqsbhHs");

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

  const data = [
    { label: 'Event 1', value: '1' },
    { label: 'Event 2', value: '2' },
    { label: 'Event 3', value: '3' },
    { label: 'Event 4', value: '4' },
    { label: 'Event 5', value: '5' },
    { label: 'Event 6', value: '6' },
    { label: 'Event 7', value: '7' },
    { label: 'Event 8', value: '8' },
  ];

const FindRideScreen = ({navigation}) => {
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  const [locationName, setLocationName] = useState(null);
  const [PicuplocationVal, setPicuplocationVal] = useState('');
  const [DroplocationVal, setDroplocationVal] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [DateGiven,setDateGiven]=useState(false);
  const [DateTime, setDateTime] = useState(new Date());
  const [OpenTime, setOpenTime] = useState(false);
  const [TimeGiven,setTimeGiven]=useState(false);

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        const { latitude, longitude } = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.00,
          longitudeDelta: 0.00,
        });

        Geocoding.from({ latitude, longitude })
          .then((json) => {
            const addressComponent = json.results[0].formatted_address;
            setLocationName(addressComponent);
            setPicuplocationVal(addressComponent);
          })
          .catch((error) => console.warn(error));

    },(err)=>{
      console.log(err);
    },{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }, []);

  return (
    <View style={StyleComponent.ScreenContainer}>
      
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>

      <View style={[StyleComponent.mainBody, {position:'relative',}]}>

      <View style={StyleComponent.FindRideScreenTopSearchView}>

      
      <View style={StyleComponent.FindRideScreenTopSearchViewRow}>
      <Image source={require('./assets/img/LocationIconNew.png')} style={[StyleComponent.FindRideScreenTopSearchViewRowIcon,{aspectRatio:aspImg(require('./assets/img/LocationIconNew.png')),}]} />
      <View style={StyleComponent.FindRideScreenTopSearchViewInputRow}>
      <GooglePlacesAutocomplete
        placeholder="Enter Pickup Location"
        onPress={(data, details = null) => {
          console.log(details);
        }}
        query={{
          key: 'AIzaSyBTqdYEuUBkUwmSU0bh_5ELb-3KYqsbhHs',
          language: 'en',
        }}
        currentLocation={false}
        styles={{
          textInput: {
            flex:1,
            color:'#607388',
            fontFamily:'Commissioner-Medium',
            fontSize:dpx(16),
          },
          poweredContainer: {
            display:'none',
          },
          description: {
            color:'#607388',
            fontFamily:'Commissioner-Medium',
            fontSize:dpx(16),
          },
        }}
      />
      <Image source={require('./assets/img/SearchIconNew.png')} style={[StyleComponent.FindRideScreenTopSearchViewInputRowIcon,{aspectRatio:aspImg(require('./assets/img/SearchIconNew.png')),}]} />
      </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%',}}>
      <Image source={require('./assets/img/DottedLocationAtoB.png')} style={{width:dpx(3), height:'auto', aspectRatio:aspImg(require('./assets/img/DottedLocationAtoB.png')), marginLeft:dpx(10),}} />
      <Image source={require('./assets/img/ArrowUpDown.png')} style={{width:dpx(29), height:'auto', aspectRatio:aspImg(require('./assets/img/ArrowUpDown.png')),}} />
      </View>

      <View style={StyleComponent.FindRideScreenTopSearchViewRow}>
      <Image source={require('./assets/img/LocationGroup.png')} style={[StyleComponent.FindRideScreenTopSearchViewRowIcon,{aspectRatio:aspImg(require('./assets/img/LocationGroup.png')),}]} />
      <Dropdown
          style={{
          flex:1, 
          backgroundColor:'#fff', 
          paddingHorizontal:dpx(8), 
          paddingVertical:dpx(5),
          marginLeft:dpx(8), 
          borderColor:'#FF8616',
          borderWidth:dpx(0.5),
          borderRadius:dpx(8),
        }}
          placeholderStyle={{
            color:'#607388',
            fontFamily:'Commissioner-Medium',
            fontSize:dpx(16),
          }}
          selectedTextStyle={{
            color:'#607388',
            fontFamily:'Commissioner-Medium',
            fontSize:dpx(16),
          }}
          inputSearchStyle={{
            color:'#607388',
            fontFamily:'Commissioner-Medium',
            fontSize:dpx(16),
          }}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Event' : '...'}
          searchPlaceholder="Search"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderItem={(item) => {
            return(
           <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
           <Text style={StyleComponent.FindRideScreenTopSearchViewInputRowTextInput}>{item.label}</Text>
           </View>
            );
          }}
        />

      </View>

      <View style={StyleComponent.FindRideScreenselectDateTimeRow}>
      <View style={StyleComponent.FindRideScreenselectDateTimeRowItemView}>
      <Image source={require('./assets/img/CalendarIconNew.png')} style={[StyleComponent.FindRideScreenselectDateTimeRowIcon, {aspectRatio:aspImg(require('./assets/img/CalendarIconNew.png')),}]} />
      <TouchableOpacity style={StyleComponent.FindRideScreenselectDateTimeRowTouch} onPress={()=>setOpenDate(true)}>
      <Text style={StyleComponent.FindRideScreenselectDateTimeRowTouchText}>{!DateGiven? 'Select Date' : date.getDate()+' / '+date.getMonth()+1+' / '+date.getFullYear()}</Text>
      <DatePicker
        modal
        mode='date'
        open={openDate}
        date={date}
        minimumDate={date}
        onConfirm={(date) => {
          setOpenDate(false);
          setDate(date);
          setDateGiven(true);
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
      </View>
      <View style={[StyleComponent.FindRideScreenselectDateTimeRowItemView,{marginLeft:dpx(10), marginRight:dpx(25),}]}>
      <Image source={require('./assets/img/ClockIcon.png')} style={[StyleComponent.FindRideScreenselectDateTimeRowIcon, {aspectRatio:aspImg(require('./assets/img/ClockIcon.png')),}]} />
      <TouchableOpacity style={StyleComponent.FindRideScreenselectDateTimeRowTouch} onPress={()=>setOpenTime(true)}>
      <Text style={StyleComponent.FindRideScreenselectDateTimeRowTouchText}>{!TimeGiven? 'Select Time' : date.getHours()+' : '+date.getMinutes()}</Text>
      <DatePicker
        modal
        mode="time"
        open={OpenTime}
        date={DateTime}
        minimumDate={DateTime}
        onConfirm={(time) => {
          setOpenTime(false);
          setDateTime(time);
          setTimeGiven(true);
          console.log(time);
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
      </View>
      </View>

      <View style={StyleComponent.FindRideScreenSwitchRow}>
      <View style={StyleComponent.FindRideScreenSwitchRowTextView}>
      <Image source={require('./assets/img/RoundTripIcon.png')} style={[StyleComponent.FindRideScreenSwitchRowTextViewIcon,{aspectRatio:1,}]} />
      <Text style={StyleComponent.FindRideScreenSwitchRowTextViewText}>Book round trip</Text>
      </View>
      <Switch
        style={StyleComponent.FindRideScreenSwitchRowSwitch}
        trackColor={{false: '#8A9AAC', true: '#FF6107'}}
        thumbColor={isEnabled ? '#fff' : '#FFE9D4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

      <TouchableOpacity style={StyleComponent.FindRideScreenSearchTouch} onPress={()=>navigation.navigate('RidesFoundScreen')}>
      <Text style={StyleComponent.FindRideScreenSearchTouchText}>SEARCH RIDES</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.containerMap}>

      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={position} >

      <Marker
      coordinate={position}
      title={'Yor are here'}
      description={'0 miles away'} >
      <Image source={require('./assets/img/FindRideLocationIcon.png')} style={{width:dpx(30), height:'auto', aspectRatio:aspImg(require('./assets/img/FindRideLocationIcon.png')),}} />
      </Marker>
      </MapView>
    </View>

    <TouchableOpacity 
    style={{ position: 'absolute', bottom: dpx(70), right: dpx(35), }} 
    onPress={() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        const { latitude, longitude } = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.00,
          longitudeDelta: 0.00,
        });

        Geocoding.from({ latitude, longitude })
          .then((json) => {
            const addressComponent = json.results[0].formatted_address;
            setLocationName(addressComponent);
            setPicuplocationVal(addressComponent);
          })
          .catch((error) => console.warn(error));

    },(err)=>{
      console.log(err);
    },{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }}
>
  <Image
    source={require('./assets/img/FindRideGpsIcon.png')}
    style={{
      width: dpx(40),
      height: 'auto',
      aspectRatio: aspImg(require('./assets/img/FindRideGpsIcon.png')),
    }}
  />
</TouchableOpacity>

        </View>

        <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  )
}

export default FindRideScreen;

const styles = StyleSheet.create({
  containerMap: {
    width:windowWidth,
    height:'100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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