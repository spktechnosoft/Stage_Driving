import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, PixelRatio, ImageBackground } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

  const aspImg = (src)=>{
    const aspCalc = Image.resolveAssetSource(src).width / Image.resolveAssetSource(src).height;
    return aspCalc;
  };

const AddBalanceScreen = ({navigation}) => {

    const [PaymentSelection,setPaymentSelection] = useState('wallet');
    const [readPrivacy, setReadPrivacy] =useState(false);

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
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>
      <View style={{borderWidth:1, borderColor:'#FF6107', borderRadius:dpx(10), padding:dpx(8), marginVertical:dpx(8),}}>
      <Text style={{color:'#FF6107', fontFamily:'Roboto-Bold', fontSize:dpx(20), alignSelf:'center',}}>Add Balance to wallet</Text>
      <View style={{backgroundColor:'#FF6107', height:dpx(0.5), width: windowWidth-dpx(50), alignSelf:'center',}}></View>
      <ImageBackground source={require('./assets/img/CardBg.png')} style={[StyleComponent.WalletScreenCardBg,{aspectRatio:aspImg(require('./assets/img/CardBg.png'))}]}>
      <View style={StyleComponent.WalletScreenCardTitleBalanceView}>
      <Text style={StyleComponent.WalletScreenCardTitleText}>SD Wallet Balance</Text>
      <Text style={StyleComponent.WalletScreenCardBalanceText}>€ 241.45</Text>
      </View>
      <Text style={StyleComponent.WalletScreenCardNameText}>Mathew Hadison</Text>
      </ImageBackground>

      <View style={{flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#B8B8B8', borderRadius:dpx(8), padding:dpx(8), margin:dpx(8),}}>
      <Text style={{color:'#124781', fontFamily:'Inter-Black', fontSize:dpx(32),}}>€</Text>
      <TextInput
      style={{flex:1, color:'#124781', fontFamily:'Commissioner-Medium', fontSize:dpx(16),}}
      placeholder='Enter Amount'
      placeholderTextColor='#8A9AAC'
      />
      </View>
      </View>

      <View style={StyleComponent.BookingSummaryBorderedView}>
<Text style={StyleComponent.BookingSummaryHeadingText}>Select Payment Method</Text>

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

<TouchableOpacity disabled={readPrivacy!==true ? true : false} style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:readPrivacy!==true ? '#979797' : '#EC5D41',}]}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>LOAD BALANCE</Text>
</TouchableOpacity>
      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default AddBalanceScreen;