import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, PixelRatio } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

const CancelRideScreen = ({navigation, route}) => {

    const [readPrivacy, setReadPrivacy] =useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [CheckedRowId, setCheckedRowId]=useState([]);

    const removeValue = (valueToRemove) => {
      const updatedArray = CheckedRowId.filter((item) => item !== valueToRemove);
      setCheckedRowId(updatedArray);
    };

  return (
    <View style={StyleComponent.ScreenContainer}>

    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>

      <View style={[StyleComponent.mainBody]}>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(8),}}>

<View style={[StyleComponent.BookingSummaryBorderedView,{alignItems:'center',}]}>
<Text style={StyleComponent.CancelRideHeadingText}>Cancel Ride</Text>
<Text style={StyleComponent.CancelRideSubHeadingText}>Please select a reason for ride cancellation</Text>

<TouchableOpacity style={StyleComponent.CancelRideTouchRow} onPress={()=>{
  if(CheckedRowId.includes(1)){
    removeValue(1);
  }else{setCheckedRowId([...CheckedRowId,1]);}
  
}}>
<View style={StyleComponent.CancelRideRowCheckBoxImageRow}>
{CheckedRowId.includes(1)?<Image style={StyleComponent.CancelRideRowCheckBoxImage} source={require('./assets/img/CheckIcon.png')} />:''}
</View>
<Text style={StyleComponent.CancelRideRowText}>Waiting for long time</Text>
</TouchableOpacity>

<TouchableOpacity style={StyleComponent.CancelRideTouchRow} onPress={()=>{
  if(CheckedRowId.includes(2)){
    removeValue(2);
  }else{setCheckedRowId([...CheckedRowId,2]);}
  
}}>
<View style={StyleComponent.CancelRideRowCheckBoxImageRow}>
{CheckedRowId.includes(2)?<Image style={StyleComponent.CancelRideRowCheckBoxImage} source={require('./assets/img/CheckIcon.png')} />:''}
</View>
<Text style={StyleComponent.CancelRideRowText}>Unable to contact driver</Text>
</TouchableOpacity>

<TouchableOpacity style={StyleComponent.CancelRideTouchRow} onPress={()=>{
  if(CheckedRowId.includes(3)){
    removeValue(3);
  }else{setCheckedRowId([...CheckedRowId,3]);}
  
}}>
<View style={StyleComponent.CancelRideRowCheckBoxImageRow}>
{CheckedRowId.includes(3)?<Image style={StyleComponent.CancelRideRowCheckBoxImage} source={require('./assets/img/CheckIcon.png')} />:''}
</View>
<Text style={StyleComponent.CancelRideRowText}>Driver denied to go to destination / event</Text>
</TouchableOpacity>

<TouchableOpacity style={StyleComponent.CancelRideTouchRow} onPress={()=>{
  if(CheckedRowId.includes(4)){
    removeValue(4);
  }else{setCheckedRowId([...CheckedRowId,4]);}
  
}}>
<View style={StyleComponent.CancelRideRowCheckBoxImageRow}>
{CheckedRowId.includes(4)?<Image style={StyleComponent.CancelRideRowCheckBoxImage} source={require('./assets/img/CheckIcon.png')} />:''}
</View>
<Text style={StyleComponent.CancelRideRowText}>Driver denied to come to pickup point</Text>
</TouchableOpacity>

<TouchableOpacity style={StyleComponent.CancelRideTouchRow} onPress={()=>{
  if(CheckedRowId.includes(5)){
    removeValue(5);
  }else{setCheckedRowId([...CheckedRowId,5]);}
  
}}>
<View style={StyleComponent.CancelRideRowCheckBoxImageRow}>
{CheckedRowId.includes(5)?<Image style={StyleComponent.CancelRideRowCheckBoxImage} source={require('./assets/img/CheckIcon.png')} />:''}
</View>
<Text style={StyleComponent.CancelRideRowText}>Price is not reasonable</Text>
</TouchableOpacity>

<TouchableOpacity style={StyleComponent.CancelRideTouchRow} onPress={()=>{
  if(CheckedRowId.includes(6)){
    removeValue(6);
  }else{setCheckedRowId([...CheckedRowId,6]);}
  
}}>
<View style={StyleComponent.CancelRideRowCheckBoxImageRow}>
{CheckedRowId.includes(6)?<Image style={StyleComponent.CancelRideRowCheckBoxImage} source={require('./assets/img/CheckIcon.png')} />:''}
</View>
<Text style={StyleComponent.CancelRideRowText}>Other reason (please mention below)</Text>
</TouchableOpacity>

<View style={StyleComponent.CancelRideTextInputView}>
<TextInput
style={StyleComponent.CancelRideTextInput}
placeholder='Other reason define here....'
placeholderTextColor='#B6C0CC'
multiline={true} />
</View>

<View style={[StyleComponent.BookingSummaryTcRow,{alignSelf:'center', marginTop:dpx(8),}]}>
<TouchableOpacity style={StyleComponent.BookingSummarySelectSquareTouch} onPress={()=>setReadPrivacy(!readPrivacy)}>
<View style={[StyleComponent.BookingSummarySelectSquareTouchInner, {backgroundColor: readPrivacy === true ? '#FF6107' : '#fff'}]}></View>
</TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}>I’ve read the</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Terms & Condition</Text></TouchableOpacity>
<Text style={StyleComponent.BookingSummaryTcRowText}> &</Text>
<TouchableOpacity><Text style={StyleComponent.BookingSummaryTcRowTouchText}> Cancellation Policy.</Text></TouchableOpacity>
</View>

<TouchableOpacity disabled={readPrivacy!==true ? true : false} style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginBottom:dpx(20), marginTop:dpx(4), backgroundColor:readPrivacy!==true ? '#979797' : '#EC5D41',}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>CANCEL RIDE</Text>
</TouchableOpacity>

</View>



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
            <Text style={{color:'#FF6107', fontFamily:'Commissioner-Bold', fontSize:dpx(36),}}>Are you sure </Text>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Text style={{color:'#607388', fontFamily:'Commissioner-Bold', fontSize:dpx(20), marginRight:10,}}>want to cancel the ride?</Text>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:dpx(8), justifyContent:'center', marginTop:dpx(30),}}>
        <TouchableOpacity style={{marginRight:dpx(8), backgroundColor:'#E6E6E6', paddingHorizontal:dpx(30), paddingVertical:dpx(0), borderRadius:dpx(20),}} onPress={()=>{
            setModalVisible(!modalVisible);
            navigation.navigate('RideScreen')
        }}>
        <Text style={{fontFamily:'Commissioner-Bold', fontSize:dpx(24), color:'#FF6107',}}>YES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#EC5D41', paddingHorizontal:dpx(30), paddingVertical:dpx(0), borderRadius:dpx(20),}} onPress={()=>setModalVisible(!modalVisible)}>
        <Text style={{fontFamily:'Commissioner-Bold', fontSize:dpx(24), color:'#fff',}}>NO</Text>
        </TouchableOpacity>
        </View>
          </View>
        </View>
      </Modal>

      </View>

      <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  );
}

export default CancelRideScreen;