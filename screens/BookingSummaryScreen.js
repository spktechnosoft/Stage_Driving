import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import {React, useState, useEffect} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };
  
const BookingSummaryScreen = ({navigation, route}) => {

    const [SeatCounter, setSeatCounter] = useState(0);
    const [PricePerSeat, setPricePerSeat] = useState(0);
    const [GrandTotal, setGrandTotal] = useState(0);
    const [PaymentSelection,setPaymentSelection] = useState('wallet');
    const [readPrivacy, setReadPrivacy] =useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
      setSeatCounter(route.params.count);
      setPricePerSeat(route.params.price);
      setGrandTotal(route.params.price*route.params.count);
  },[]);

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

<View style={StyleComponent.BookingSummaryBorderedView}>
<Text style={StyleComponent.BookingSummaryHeadingText}>Booking Summary</Text>

<View style={StyleComponent.BookingSummaryTopItemRow}>
<Text style={StyleComponent.BookingSummaryTopItemTextLeft}>Amount</Text>
<Text style={StyleComponent.BookingSummaryTopItemTextRight}>{SeatCounter} * € {PricePerSeat}</Text>
</View>

<View style={StyleComponent.BookingSummaryTopItemRow}>
<Text style={StyleComponent.BookingSummaryTopItemTextLeft}>Subtotal</Text>
<Text style={StyleComponent.BookingSummaryTopItemTextRight}>€ {GrandTotal}</Text>
</View>

<View style={StyleComponent.BookingSummaryTopItemRow}>
<Text style={StyleComponent.BookingSummaryTopItemTextLeft}>Discount</Text>
<Text style={StyleComponent.BookingSummaryTopItemTextRight}>- € 0.15</Text>
</View>

<View style={StyleComponent.BookingSummaryTopItemRow}>
<Text style={StyleComponent.BookingSummaryTopItemTextLeft}>Coupon Discount</Text>
<Text style={StyleComponent.BookingSummaryTopItemTextRight}>- € 0.10</Text>
</View>

<View style={StyleComponent.BookingSummaryTopItemRow}>
<Text style={StyleComponent.BookingSummaryTopItemTextLeft}>Tax</Text>
<Text style={StyleComponent.BookingSummaryTopItemTextRight}>€ 1.05</Text>
</View>

<View style={StyleComponent.BookingSummaryTopItemRow}>
<Text style={StyleComponent.BookingSummaryTopItemTextTotalLeft}>Grand Total</Text>
<Text style={StyleComponent.BookingSummaryTopItemTexTotaltRight}>€ {(GrandTotal)+(1.05)-(0.25)}</Text>
</View>
</View>

<View style={StyleComponent.BookingSummaryBorderedView}>
<Text style={StyleComponent.BookingSummaryHeadingText}>Select Payment Method</Text>

<Text style={StyleComponent.BookingSummaryPayHeadingText}>Preferred Payment Method</Text>

<View style={StyleComponent.BookingSummaryPayItemRow}>
<TouchableOpacity style={StyleComponent.BookingSummarySelectCircleTouch} onPress={()=>setPaymentSelection('wallet')}>
<View style={[StyleComponent.BookingSummarySelectCircleTouchInner,{backgroundColor: PaymentSelection === 'wallet' ? '#FF6107' : '#fff'}]}></View>
</TouchableOpacity>
<Image style={StyleComponent.BookingSummarySelectIcon} source={require('./assets/img/WalletIcon.png')} />
<Text style={StyleComponent.BookingSummarySelectText}>Wallet Payment</Text>
</View>

<Text style={StyleComponent.BookingSummaryPayHeadingText}>Credit / Debit Card Payment</Text>

<View style={StyleComponent.BookingSummaryPayItemRow}>
<TouchableOpacity style={StyleComponent.BookingSummarySelectCircleTouch} onPress={()=>setPaymentSelection('paypal')}>
<View style={[StyleComponent.BookingSummarySelectCircleTouchInner,{backgroundColor: PaymentSelection === 'paypal' ? '#FF6107' : '#fff'}]}></View>
</TouchableOpacity>
<Image style={StyleComponent.BookingSummarySelectIcon} source={require('./assets/img/paypal.png')} />
<Text style={StyleComponent.BookingSummarySelectText}>Paypal</Text>
</View>

<Text style={StyleComponent.BookingSummarySelectInfoText}>Please select a preferred payment gateway to make the booking.</Text>

<View style={StyleComponent.BookingSummaryTcRow}>
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

</View>

<TouchableOpacity disabled={readPrivacy!==true ? true : false} style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:readPrivacy!==true ? '#979797' : '#EC5D41',}]} onPress={()=>setModalVisible(true)}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>PAY & BOOK</Text>
</TouchableOpacity>

      </View>
      </ScrollView>
    
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{width:windowWidth, height:'100%', backgroundColor:'rgba(47, 56, 66, 0.9)', alignItems:'center', justifyContent:'center', padding:15,}}>
        
      <View style={{backgroundColor:'#FFE9D4', borderRadius:25, padding:15, alignSelf:'center', alignItems:'center',}}> 
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <Image source={require('./assets/img/RightTickIcon.png')} style={{width:dpx(36),height:dpx(36), marginRight:dpx(4),}} />
        <Text style={{fontFamily:'Roboto-Bold', fontSize:dpx(24), color:'#00A424'}}>Booking Confirmed!</Text>
        </View>
        
        <Text style={{fontFamily:'Commissioner-Medium', fontSize:dpx(12), color:'#6E6E6E', marginVertical:dpx(8)}}>Congratulation! Your ride is successfully booked.</Text>
        <Text style={{fontFamily:'Commissioner-Medium', fontSize:dpx(14), color:'#606060', marginVertical:dpx(8)}}>Booking Id : #AA1263749</Text>
        <Text style={{fontFamily:'Commissioner-Medium', fontSize:dpx(14), color:'#606060', marginVertical:dpx(8)}}>Booking Date : 10/12/2023</Text>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', width:windowWidth, paddingHorizontal:dpx(8), justifyContent:'space-between', marginTop:dpx(30),}}>
        <TouchableOpacity style={{marginRight:dpx(4), backgroundColor:'#EC5D41', paddingHorizontal:dpx(15), paddingVertical:dpx(0), borderRadius:dpx(20),}} onPress={()=>setModalVisible(!modalVisible)}>
        <Text style={{fontFamily:'Commissioner-Bold', fontSize:dpx(24), color:'#fff',}}>SHARE RIDE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:dpx(4), backgroundColor:'#EC5D41', paddingHorizontal:dpx(15), paddingVertical:dpx(0), borderRadius:dpx(20),}} onPress={()=>navigation.navigate('CancelRideScreen')}>
        <Text style={{fontFamily:'Commissioner-Bold', fontSize:dpx(24), color:'#fff',}}>CANCEL RIDE</Text>
        </TouchableOpacity>
        </View>

      </View>
    </Modal>

      </View>

      <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  );
}

export default BookingSummaryScreen;