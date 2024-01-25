import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, PixelRatio } from 'react-native';
import {React, useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };
  

const SavedVehicleScreen = ({navigation}) => {

    const [SavedVehiclesTabActive, setSavedVehiclesTabActive] = useState(true);
    const [VehicleActive, setVehicleActive] = useState(0);
    const VehicleTypeList = [{value:'Example'}, {value:'Example 1'}, {value:'Example 2'}, {value:'Example 3'}];
    const [VehicleTypevalue, setVehicleTypevalue] = useState(null);
    const [VehicleTypeisFocus, VehicleTypesetIsFocus] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>
      
      <View style={StyleComponent.RouteDetailsScreenHeaderView}>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: SavedVehiclesTabActive !== true ? 'transparent' : '#FF6107',}]} onPress={()=>setSavedVehiclesTabActive(!SavedVehiclesTabActive)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:SavedVehiclesTabActive!== true ? '#607388':'#FF6107', }]}>Saved Vehicles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: SavedVehiclesTabActive !== true ? '#FF6107' : 'transparent',}]} onPress={()=>setSavedVehiclesTabActive(!SavedVehiclesTabActive)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:SavedVehiclesTabActive!== true ? '#FF6107':'#607388', }]}>Add Vehicle</Text>
      </TouchableOpacity>
      </View>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      {
        SavedVehiclesTabActive===true ? 
        <View>

        <Text style={StyleComponent.SavedVehiclesTitleText}>Your Saved Vehicles</Text>

<TouchableOpacity style={[StyleComponent.SavedVehiclesItemRowTouch,{borderColor: VehicleActive==1 ? '#FF6107':'transparent',}]} onPress={()=>setVehicleActive(1)}>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeft}>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRow}>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowKeyText}>Vehicle  :</Text>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowValueText}>MITSUBISHI XPANDER</Text>
</View>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRow}>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowKeyText}>Reg. No  :</Text>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowValueText}>AB 1234 CD</Text>
</View>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRow}>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowKeyText}>Color  :</Text>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowValueText}>WHITE</Text>
</View>
</View>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerRight}>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerRightImageView}>
<Image style={StyleComponent.SavedVehiclesItemRowTouchInnerRightImage} source={require('./assets/img/VehiclePhoto.png')} />
</View>
</View>
</TouchableOpacity>

<TouchableOpacity style={[StyleComponent.SavedVehiclesItemRowTouch,{borderColor:VehicleActive==2 ? '#FF6107':'transparent',}]} onPress={()=>setVehicleActive(2)}>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeft}>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRow}>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowKeyText}>Vehicle  :</Text>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowValueText}>TOYATA FORTUNER</Text>
</View>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRow}>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowKeyText}>Reg. No  :</Text>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowValueText}>MN 1221 BO</Text>
</View>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRow}>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowKeyText}>Color  :</Text>
<Text style={StyleComponent.SavedVehiclesItemRowTouchInnerLeftTextRowValueText}>Black</Text>
</View>
</View>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerRight}>
<View style={StyleComponent.SavedVehiclesItemRowTouchInnerRightImageView}>
<Image style={StyleComponent.SavedVehiclesItemRowTouchInnerRightImage} source={require('./assets/img/VehiclePhoto.png')} />
</View>
</View>
</TouchableOpacity>

<TouchableOpacity disabled={VehicleActive<1 ? true : false} style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:VehicleActive<1 ? '#979797' : '#EC5D41',}]} onPress={()=>navigation.navigate('OfferRideScreen')}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>SELECT</Text>
</TouchableOpacity>

        </View>
: 
<View style={{paddingBottom:dpx(30), alignItems:'center',}}>

<Text style={StyleComponent.SavedVehiclesTitleText}>Add New Vehicle</Text>
<Text style={StyleComponent.SavedVehiclesSubTitleText}>Add a new vehicle to your profile</Text>

<View style={[StyleComponent.ProfileScreenFormLabelInputView,{width:windowWidth-dpx(11), marginBottom:dpx(8),}]}>
<Dropdown
style={[StyleComponent.ProfileScreenDropdown, { borderColor: !VehicleTypeisFocus?'transparent':'#FF8616' }]}
placeholderStyle={StyleComponent.ProfileScreenDropdownPlaceholderStyle}
selectedTextStyle={StyleComponent.ProfileScreenDropdownSelectedTextStyle}
inputSearchStyle={StyleComponent.ProfileScreenDropdownInputSearchStyle}
iconStyle={StyleComponent.ProfileScreenDropdownIconStyle}
data={VehicleTypeList}
maxHeight={300}
labelField="value"
valueField="value"
placeholder={!VehicleTypeisFocus ? 'VehicleType' : VehicleTypevalue}
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
    <Image source={require('./assets/img/FormIcons/VehicleType.png')} style={StyleComponent.ProfileScreenDropdownLeftIcon} />
  )}
  renderRightIcon={() => (
    <Image source={require('./assets/img/FormIcons/DropdownIcon.png')} style={{width:dpx(19), height:dpx(19),}} />
  )}
/>
</View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/VehicleManufacturer.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Vehicle Manufacturer"
      placeholderTextColor={'#8A9AAC'}  />
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/VeicleModel.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Vehicle Model"
      placeholderTextColor={'#8A9AAC'}  />
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/VehicleRegNo.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Vehicle Reg. No."
      placeholderTextColor={'#8A9AAC'}  />
    </View>

    <View style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/VehicleColor.png')} style={StyleComponent.inputIcon} />
      <TextInput
      style={StyleComponent.textInputStyle}
      placeholder="Vehicle Color"
      placeholderTextColor={'#8A9AAC'}  />
    </View>

    <TouchableOpacity style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/DrivingLicenseNo.png')} style={StyleComponent.inputIcon} />
      <Text style={[StyleComponent.textInputStyle,{color:'#8A9AAC', paddingVertical:dpx(13)}]}> Upload Driving License </Text>
      <Image source={require('./assets/img/FormIcons/AttachIcon.png')} style={{width:dpx(34), height:dpx(34),}} />
    </TouchableOpacity>

    <TouchableOpacity style={StyleComponent.inputView}>
      <Image source={require('./assets/img/FormIcons/UploadImageIcon.png')} style={StyleComponent.inputIcon} />
      <Text style={[StyleComponent.textInputStyle,{color:'#8A9AAC', paddingVertical:dpx(13)}]}> Upload Vehicle Photo </Text>
      <Image source={require('./assets/img/FormIcons/AttachIcon.png')} style={{width:dpx(34), height:dpx(34),}} />
    </TouchableOpacity>

    <TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41',}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>ADD VEHICLE</Text>
</TouchableOpacity>

<Text style={StyleComponent.SavedVehicleBottomNoteText}><Text style={StyleComponent.SavedVehicleBottomNoteTextStar}>*</Text>  Your previously added vehicles will be shown under “Saved Vehicle” tab. If you want to ride with previously added vehicle please select the saved one under “Saved Vehicle” tab.</Text>

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
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <View style={{alignItems:'center', margin:dpx(15),}}>
            <TouchableOpacity style={{alignItems:'center', margin:dpx(15), borderWidth:2, borderColor:'#FF6107', width:dpx(80), height:dpx(80), borderRadius:dpx(80), alignItems:'center', justifyContent:'center',}} onPress={async ()=>{
              const resultGallery = await launchImageLibrary({mediaType:'photo'});
            }}>
            <Image source={require('./assets/img/FormIcons/UploadImageIcon.png')} style={{width:dpx(50), height:dpx(50),}} />
            </TouchableOpacity>
            <Text style={{color:'#FF6107', fontSize:dpx(20), fontFamily:'Roboto-SemiBold',}}>Upload Image</Text>
            </View>
            <View style={{alignItems:'center', margin:dpx(15),}}>
            <TouchableOpacity style={{alignItems:'center', margin:dpx(15), borderWidth:2, borderColor:'#FF6107', width:dpx(80), height:dpx(80), borderRadius:dpx(80), alignItems:'center', justifyContent:'center',}} onPress={async ()=>{
              const resultCamera = await launchCamera({mediaType:'photo'});
            }}>
            <Image source={require('./assets/img/FormIcons/GalleryIcon.png')} style={{width:dpx(50), height:dpx(50),}} />
            </TouchableOpacity>
            <Text style={{color:'#FF6107', fontSize:dpx(20), fontFamily:'Roboto-SemiBold',}}>Take Picture</Text>
            </View>
            
            </View>
            <TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41',}]}>
              <Text style={StyleComponent.VehicleDetailsBookRideTouchText}>UPLOAD</Text>
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

export default SavedVehicleScreen;