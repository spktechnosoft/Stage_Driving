import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, PixelRatio, ImageBackground } from 'react-native';
import {React} from 'react';
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

const WithdrawScreen = ({navigation}) => {

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
      <Text style={{color:'#FF6107', fontFamily:'Roboto-Bold', fontSize:dpx(20), alignSelf:'center',}}>Withdraw Fund</Text>
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

      <View style={{width:'95%', alignSelf:'center', borderWidth:1, borderColor:'#B8B8B8', borderRadius:dpx(8), padding:dpx(8), margin:dpx(8),}}>
      <TextInput
      style={{width:'100%', height:dpx(100), color:'#124781', fontFamily:'Commissioner-Medium', fontSize:dpx(16),}}
      placeholder='Add your note...'
      placeholderTextColor='#8A9AAC'
      />
      </View>

      <View style={{width:'95%', alignSelf:'center', borderWidth:1, borderColor:'#B8B8B8', borderRadius:dpx(8), paddingHorizontal:dpx(8), margin:dpx(8),}}>
      <TextInput
      style={{width:'100%', height:'auto', color:'#124781', fontFamily:'Commissioner-Medium', fontSize:dpx(16),}}
      placeholder='Enter your payment id *'
      placeholderTextColor='#8A9AAC'
      />
      </View>

      </View>

      <Text style={{color:'#8A9AAC', fontFamily:'Commissioner-Regular', fontSize:dpx(11), marginBottom:dpx(30),}}><Text style={{color:'#FF6107', fontFamily:'Commissioner-Medium',}}>Note:</Text> Your request will be processed within next 48 hours, and the amount will be
      credited to your account within next 72 hours.</Text>

<TouchableOpacity style={[StyleComponent.VehicleDetailsBookRideTouch, {alignSelf:'center', marginVertical:dpx(22), backgroundColor:'#EC5D41', paddingHorizontal:dpx(20),}]}>
<Text style={StyleComponent.VehicleDetailsBookRideTouchText}>REQUEST WITHDRAW</Text>
</TouchableOpacity>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default WithdrawScreen;