import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, Switch, PixelRatio, BackHandler } from 'react-native';
import {React, useState, useEffect} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';
import DatePicker from 'react-native-date-picker';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

const OfferRideScreen = ({navigation}) => {

    const [OneWayTripTabActive, setOneWayTripTabActive] = useState(true);
    const VehicleTypeList = [{value:'Example'}, {value:'Example 1'}, {value:'Example 2'}, {value:'Example 3'}];
    const [VehicleTypevalue, setVehicleTypevalue] = useState(null);
    const [VehicleTypeisFocus, VehicleTypesetIsFocus] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [readPrivacy, setReadPrivacy] =useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(null);
    const [TimeOpen, setTimeOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [CharacteristicsOpen, setCharacteristicsOpen] = useState(false);

  const [CharacteristicObj, setCharacteristicObj] = useState([]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (CharacteristicsOpen) {
          setCharacteristicsOpen(false);
          return true;
        }
        return false;
      }
    );
  
    return () => {
      backHandler.remove();
    };
  }, [CharacteristicsOpen]);

  const removeValue = (valueToRemove) => {
    const updatedArray = CharacteristicObj.filter((item) => item !== valueToRemove);
    setCharacteristicObj(updatedArray);
  };

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>CharacteristicsOpen?setCharacteristicsOpen(false):navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>
      

      {
        CharacteristicsOpen ? 
        <View style={{width:windowWidth, alignItems:'center', alignSelf:'center', height:'100%', backgroundColor:'#fff',}}>

        <View style={[StyleComponent.RouteDetailsScreenHeaderView,{alignItems:'center', justifyContent:'center',}]}>
        <Text style={{fontSize:dpx(20), fontFamily:'Commissioner-SemiBold', color:'#FF6107', paddingVertical:dpx(17), }}>Select Characteristics</Text>
        </View>

        <View style={StyleComponent.CharacteristicsMainView}>
        
        <TouchableOpacity style={StyleComponent.CharacteristicsTouch} onPress={()=>{
  if(CharacteristicObj.includes('Smoke')){
    removeValue('Smoke');
  }else{setCharacteristicObj([...CharacteristicObj,'Smoke']);}}}>
        <Image style={StyleComponent.CharacteristicsTouchIcon} source={require('./assets/img/CharacteristicIcons/Smoke.png')} />
        <View style={StyleComponent.CharacteristicsTouchTextView}><Text style={StyleComponent.CharacteristicsTouchText}>Smoke</Text></View>
        {CharacteristicObj.includes('Smoke') ? <Image style={StyleComponent.CharacteristicsTouchTickIcon} source={require('./assets/img/CheckIcon.png')} /> : ''}
        </TouchableOpacity>

        <TouchableOpacity style={StyleComponent.CharacteristicsTouch} onPress={()=>{
  if(CharacteristicObj.includes('Music')){
    removeValue('Music');
  }else{setCharacteristicObj([...CharacteristicObj,'Music']);}}}>
        <Image style={StyleComponent.CharacteristicsTouchIcon} source={require('./assets/img/CharacteristicIcons/Music.png')} />
        <View style={StyleComponent.CharacteristicsTouchTextView}><Text style={StyleComponent.CharacteristicsTouchText}>Music</Text></View>
        {CharacteristicObj.includes('Music') ? <Image style={StyleComponent.CharacteristicsTouchTickIcon} source={require('./assets/img/CheckIcon.png')} /> : ''}
        </TouchableOpacity>

        <TouchableOpacity style={StyleComponent.CharacteristicsTouch} onPress={()=>{
  if(CharacteristicObj.includes('Pets')){
    removeValue('Pets');
  }else{setCharacteristicObj([...CharacteristicObj,'Pets']);}}}>
        <Image style={StyleComponent.CharacteristicsTouchIcon} source={require('./assets/img/CharacteristicIcons/Pets.png')} />
        <View style={StyleComponent.CharacteristicsTouchTextView}><Text style={StyleComponent.CharacteristicsTouchText}>Pets / Animal</Text></View>
        {CharacteristicObj.includes('Pets') ? <Image style={StyleComponent.CharacteristicsTouchTickIcon} source={require('./assets/img/CheckIcon.png')} /> : ''}
        </TouchableOpacity>

        <TouchableOpacity style={StyleComponent.CharacteristicsTouch} onPress={()=>{
  if(CharacteristicObj.includes('Minor')){
    removeValue('Minor');
  }else{setCharacteristicObj([...CharacteristicObj,'Minor']);}}}>
        <Image style={StyleComponent.CharacteristicsTouchIcon} source={require('./assets/img/CharacteristicIcons/Smoke.png')} />
        <View style={StyleComponent.CharacteristicsTouchTextView}><Text style={StyleComponent.CharacteristicsTouchText}>Minor</Text></View>
        {CharacteristicObj.includes('Minor') ? <Image style={StyleComponent.CharacteristicsTouchTickIcon} source={require('./assets/img/CheckIcon.png')} /> : ''}
        </TouchableOpacity>

        <TouchableOpacity style={StyleComponent.CharacteristicsTouch} onPress={()=>{
  if(CharacteristicObj.includes('Food')){
    removeValue('Food');
  }else{setCharacteristicObj([...CharacteristicObj,'Food']);}}}>
        <Image style={StyleComponent.CharacteristicsTouchIcon} source={require('./assets/img/CharacteristicIcons/FoodBeverage.png')} />
        <View style={StyleComponent.CharacteristicsTouchTextView}><Text style={StyleComponent.CharacteristicsTouchText}>Food & Beverages</Text></View>
        {CharacteristicObj.includes('Food') ? <Image style={StyleComponent.CharacteristicsTouchTickIcon} source={require('./assets/img/CheckIcon.png')} /> : ''}
        </TouchableOpacity>

        </View>

        </View>
         :
         <View>

         <View style={StyleComponent.RouteDetailsScreenHeaderView}>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: OneWayTripTabActive !== true ? 'transparent' : '#FF6107',}]} onPress={()=>setOneWayTripTabActive(!OneWayTripTabActive)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:OneWayTripTabActive!== true ? '#607388':'#FF6107', }]}>One Way Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: OneWayTripTabActive !== true ? '#FF6107' : 'transparent',}]} onPress={()=>setOneWayTripTabActive(!OneWayTripTabActive)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:OneWayTripTabActive!== true ? '#FF6107':'#607388', }]}>Round Trip</Text>
      </TouchableOpacity>
      </View>

         </View>
      }
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      {
        OneWayTripTabActive===true ? 
        <View style={{paddingBottom:dpx(30), alignItems:'center',}}>

<Text style={StyleComponent.SavedVehiclesTitleText}>Add Ride Details</Text>
<Text style={StyleComponent.SavedVehiclesSubTitleText}>Please fill in the ride details you’re offering</Text>

<View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:windowWidth-dpx(11), marginBottom:dpx(8),}]}>
<Dropdown
style={[StyleComponent.ProfileScreenDropdown, { borderColor: !VehicleTypeisFocus?'transparent':'#FF8616', paddingHorizontal:dpx(8), alignSelf:'center', }]}
placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
data={VehicleTypeList}
maxHeight={300}
labelField="value"
valueField="value"
placeholder={!VehicleTypeisFocus ? 'Select Event *' : VehicleTypevalue}
searchPlaceholder="Search..."
value={VehicleTypevalue}
onFocus={() => VehicleTypesetIsFocus(true)}
onBlur={() => VehicleTypesetIsFocus(false)}
onChange={item => {
  setVehicleTypevalue(item.value);
  VehicleTypesetIsFocus(false);
}}
  renderItem={(item) => {
    return(
   <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
   <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
   </View>
    );
  }}
  renderLeftIcon={() => (
    <Image source={require('./assets/img/FormIcons/EventIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
  )}
  renderRightIcon={() => (
    <Image source={require('./assets/img/FormIcons/DropdownIcon.png')} style={{width:dpx(19), height:dpx(19),}} />
  )}
/>
</View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/PickupIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter Pickup Location *"
      placeholderTextColor={'#8A9AAC'}  />
      <Image source={require('./assets/img/FormIcons/SearchIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/AddIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Add Stopover"
      placeholderTextColor={'#8A9AAC'}  />
      <Image source={require('./assets/img/FormIcons/SearchIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
    </View>

    <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between', marginBottom:dpx(10), }}>
    <View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:'48%',}]}>
    <TouchableOpacity style={StyleComponent.DatePickerRow}>
    <Image source={require('./assets/img/FormIcons/DateIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
    <Text style={StyleComponent.DatePickerRowText}>{time!==null?time:'Select Date *'}</Text>

    <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
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
    <View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:'48%',}]}>
      <TouchableOpacity style={StyleComponent.DatePickerRow}>
      <Image source={require('./assets/img/FormIcons/TimeIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
      <Text style={StyleComponent.DatePickerRowText}>{time!==null?time:'Select Time *'}</Text>
      
      </TouchableOpacity>
      </View>
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/TimeIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter Maximum Waiting Time *"
      placeholderTextColor={'#8A9AAC'}  />
      <View style={{flexDirection:'row', alignItems:'center',}}>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/MinusIcon.png')} style={{width:dpx(25), height:dpx(25), marginRight:dpx(8),}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/PlusIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
      </TouchableOpacity>
      </View>
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/SeatIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter how many seats are you offering? *"
      placeholderTextColor={'#8A9AAC'}  />
      <View style={{flexDirection:'row', alignItems:'center',}}>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/MinusIcon.png')} style={{width:dpx(25), height:dpx(25), marginRight:dpx(8),}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/PlusIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
      </TouchableOpacity>
      </View>
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/CurrencyIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter Price per Seat *"
      placeholderTextColor={'#8A9AAC'}  />
      <View style={{flexDirection:'row', alignItems:'center',}}>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/MinusIcon.png')} style={{width:dpx(25), height:dpx(25), marginRight:dpx(8),}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/PlusIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
      </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={StyleComponent.inputView} onPress={()=>setCharacteristicsOpen(true)}>
      <Image source={require('./assets/img/FormIcons/CharactersticIcon.png')} style={StyleComponent.inputIcon} />
      <Text style={[StyleComponent.textInputStyle,{color:'#8A9AAC', paddingVertical:dpx(13)}]}> Characteristics </Text>
      <Image source={require('./assets/img/FormIcons/DropdownIcon.png')} style={{width:dpx(25), height:dpx(25), transform:[{rotate:'-90deg'}],}} />
    </TouchableOpacity>

    <View style={[StyleComponent.BookingSummaryTcRow,{marginTop:dpx(18)}]}>
<TouchableOpacity style={StyleComponent.BookingSummarySelectSquareTouch} onPress={()=>setReadPrivacy(!readPrivacy)}>
<View style={[StyleComponent.BookingSummarySelectSquareTouchInner, {backgroundColor: readPrivacy === true ? '#FF6107' : '#fff'}]}></View>
</TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}>I’ve read the</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Terms & Condition</Text></TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}> ,</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Cancellation Policy</Text></TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}> &</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Privacy Policy.</Text></TouchableOpacity>
</View>

    <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%',}}>
    <TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41', paddingHorizontal:dpx(25),}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>DRAFT</Text>
</TouchableOpacity>
<TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41', paddingHorizontal:dpx(25),}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>PUBLISH</Text>
</TouchableOpacity>
    </View>

<View style={StyleComponent.OfferRideBottomNoteView}>
<Text style={StyleComponent.OfferRideBottomNoteViewSecondaryText}>Note: </Text>
<Text style={StyleComponent.OfferRideBottomNoteViewText}>Fields marked with “</Text>
<Text style={StyleComponent.OfferRideBottomNoteViewSecondaryText}>*</Text>
<Text style={StyleComponent.OfferRideBottomNoteViewText}>” are mandatory</Text>
</View>

</View>
: 
<View style={{paddingBottom:dpx(30), alignItems:'center',}}>

<Text style={StyleComponent.SavedVehiclesTitleText}>Add Ride Details</Text>
<Text style={StyleComponent.SavedVehiclesSubTitleText}>Please fill in the ride details you’re offering</Text>


<View style={[StyleComponent.inputView,{marginTop:dpx(10),}]}>
      <Image source={require('./assets/img/FormIcons/PickupIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter Pickup Location *"
      placeholderTextColor={'#8A9AAC'}  />
      <Image source={require('./assets/img/FormIcons/SearchIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/AddIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Add Stopover"
      placeholderTextColor={'#8A9AAC'}  />
      <Image source={require('./assets/img/FormIcons/SearchIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
    </View>

    <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between', marginBottom:dpx(10), }}>
    <View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:'48%',}]}>
    <TouchableOpacity style={StyleComponent.DatePickerRow}>
    <Image source={require('./assets/img/FormIcons/DateIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
    <Text style={StyleComponent.DatePickerRowText}>{time!==null?time:'Pickup Date *'}</Text>

    <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
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
    <View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:'48%',}]}>
      <TouchableOpacity style={StyleComponent.DatePickerRow}>
      <Image source={require('./assets/img/FormIcons/TimeIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
      <Text style={StyleComponent.DatePickerRowText}>{time!==null?time:'Pickup Time *'}</Text>
      
      </TouchableOpacity>
      </View>
    </View>

<View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:windowWidth-dpx(11), marginBottom:dpx(8),}]}>
<Dropdown
style={[StyleComponent.ProfileScreenDropdown, { borderColor: !VehicleTypeisFocus?'transparent':'#FF8616', paddingHorizontal:dpx(8), alignSelf:'center', }]}
placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
data={VehicleTypeList}
maxHeight={300}
labelField="value"
valueField="value"
placeholder={!VehicleTypeisFocus ? 'Select Event *' : VehicleTypevalue}
searchPlaceholder="Search..."
value={VehicleTypevalue}
onFocus={() => VehicleTypesetIsFocus(true)}
onBlur={() => VehicleTypesetIsFocus(false)}
onChange={item => {
  setVehicleTypevalue(item.value);
  VehicleTypesetIsFocus(false);
}}
  renderItem={(item) => {
    return(
   <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center', padding:10,}}>
   <Text style={StyleComponent.textInputStyle}>{item.value}</Text>
   </View>
    );
  }}
  renderLeftIcon={() => (
    <Image source={require('./assets/img/FormIcons/EventIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
  )}
  renderRightIcon={() => (
    <Image source={require('./assets/img/FormIcons/DropdownIcon.png')} style={{width:dpx(19), height:dpx(19),}} />
  )}
/>
</View>

<View style={[StyleComponent.inputView,{marginTop:dpx(10),}]}>
      <Image source={require('./assets/img/FormIcons/PickupIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter Dropoff Location *"
      placeholderTextColor={'#8A9AAC'}  />
      <Image source={require('./assets/img/FormIcons/SearchIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/AddIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Add Stopover"
      placeholderTextColor={'#8A9AAC'}  />
      <Image source={require('./assets/img/FormIcons/SearchIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
    </View>

    <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between', marginBottom:dpx(10), }}>
    <View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:'48%',}]}>
    <TouchableOpacity style={StyleComponent.DatePickerRow}>
    <Image source={require('./assets/img/FormIcons/DateIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
    <Text style={StyleComponent.DatePickerRowText}>{time!==null?time:'Return Date *'}</Text>

    <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
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
    <View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:'48%',}]}>
      <TouchableOpacity style={StyleComponent.DatePickerRow}>
      <Image source={require('./assets/img/FormIcons/TimeIcon.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
      <Text style={StyleComponent.DatePickerRowText}>{time!==null?time:'Return Time *'}</Text>
      
      </TouchableOpacity>
      </View>
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/SeatIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter how many seats are you offering? *"
      placeholderTextColor={'#8A9AAC'}  />
      <View style={{flexDirection:'row', alignItems:'center',}}>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/MinusIcon.png')} style={{width:dpx(25), height:dpx(25), marginRight:dpx(8),}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/PlusIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
      </TouchableOpacity>
      </View>
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/CurrencyIcon.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Enter Price per Seat *"
      placeholderTextColor={'#8A9AAC'}  />
      <View style={{flexDirection:'row', alignItems:'center',}}>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/MinusIcon.png')} style={{width:dpx(25), height:dpx(25), marginRight:dpx(8),}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./assets/img/FormIcons/PlusIcon.png')} style={{width:dpx(25), height:dpx(25),}} />
      </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={StyleComponent.inputView} onPress={()=>setCharacteristicsOpen(true)}>
      <Image source={require('./assets/img/FormIcons/CharactersticIcon.png')} style={StyleComponent.inputIcon} />
      <Text style={[StyleComponent.textInputStyle,{color:'#8A9AAC', paddingVertical:dpx(13)}]}> Characteristics </Text>
      <Image source={require('./assets/img/FormIcons/DropdownIcon.png')} style={{width:dpx(25), height:dpx(25), transform:[{rotate:'-90deg'}],}} />
    </TouchableOpacity>

    <View style={[StyleComponent.BookingSummaryTcRow,{marginTop:dpx(18)}]}>
<TouchableOpacity style={StyleComponent.BookingSummarySelectSquareTouch} onPress={()=>setReadPrivacy(!readPrivacy)}>
<View style={[StyleComponent.BookingSummarySelectSquareTouchInner, {backgroundColor: readPrivacy === true ? '#FF6107' : '#fff'}]}></View>
</TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}>I’ve read the</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Terms & Condition</Text></TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}> ,</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Cancellation Policy</Text></TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}> &</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Privacy Policy.</Text></TouchableOpacity>
</View>

    <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%',}}>
    <TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41', paddingHorizontal:dpx(25),}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>DRAFT</Text>
</TouchableOpacity>
<TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41', paddingHorizontal:dpx(25),}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>PUBLISH</Text>
</TouchableOpacity>
    </View>

<View style={StyleComponent.OfferRideBottomNoteView}>
<Text style={StyleComponent.OfferRideBottomNoteViewSecondaryText}>Note: </Text>
<Text style={StyleComponent.OfferRideBottomNoteViewText}>Fields marked with “</Text>
<Text style={StyleComponent.OfferRideBottomNoteViewSecondaryText}>*</Text>
<Text style={StyleComponent.OfferRideBottomNoteViewText}>” are mandatory</Text>
</View>

</View>
      }

      </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{width:windowWidth, height:'100%', backgroundColor:'rgba(47, 56, 66, 0.9);', alignItems:'center', justifyContent:'center', padding:15,}}>
          <View style={{backgroundColor:'#fff', borderColor:'#FF6107', borderWidth:2, borderRadius:25, padding:15, alignItems:'center', width:'100%',}}>
            
            <Text style={{color:'#FF6107', fontFamily:'Commissioner-Bold', fontSize:dpx(32),}}>Have Tickets?</Text>

            <View style={{flexDirection:'row', alignItems:'center', marginBottom:dpx(30,)}}>
            <Text style={{color:'#607388', fontFamily:'Commissioner-Bold', fontSize:dpx(20), marginRight:dpx(8)}}>Do you have event tickets?</Text>
            <View style={{alignItems:'center',}}>
            <Switch
        trackColor={{false: '#767577', true: '#FF8616'}}
        thumbColor={'#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            </View>
            </View>

            {
              !isEnabled ? 

              <View>
              <TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41',}]}>
              <Text style={StyleComponent.VehicleDetailsBookRideTouchText}>BUY TICKETS</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', alignItems:'center',}}>
            <View style={{height:dpx(3), backgroundColor:'#979797', flex:1,}}></View>
            <Text style={{fontFamily:'Commissioner-Medium', fontSize:dpx(20), color:'#607388', marginHorizontal:dpx(25),}}>Or</Text>
            <View style={{height:dpx(3), backgroundColor:'#979797', flex:1,}}></View>
            </View>
              </View>

              :''
            }
            

            <TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41',}]}>
              <Text style={StyleComponent.VehicleDetailsBookRideTouchText}>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding:dpx(10), position:'absolute', right:0, top:dpx(-50),}} onPress={()=>setModalVisible(!modalVisible)}>
          <Image source={require('./assets/img/FormIcons/CloseIcon.png')} style={{width:dpx(35), height:dpx(35),}} />
          </TouchableOpacity>

          </View>
          
        </View>
      </Modal>

      </View>

      <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  );
}

export default OfferRideScreen;