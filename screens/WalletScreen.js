import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio, ImageBackground } from 'react-native';
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

const WalletScreen = ({navigation}) => {

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>

    <ImageBackground source={require('./assets/img/CardBg.png')} style={[StyleComponent.WalletScreenCardBg,{aspectRatio:aspImg(require('./assets/img/CardBg.png'))}]}>
    <View style={StyleComponent.WalletScreenCardTitleBalanceView}>
    <Text style={StyleComponent.WalletScreenCardTitleText}>SD Wallet Balance</Text>
    <Text style={StyleComponent.WalletScreenCardBalanceText}>€ 241.45</Text>
    </View>
    <Text style={StyleComponent.WalletScreenCardNameText}>Mathew Hadison</Text>
    </ImageBackground>

    <View style={StyleComponent.WalletScreenBtnRow}>
    <TouchableOpacity style={StyleComponent.WalletScreenBtnTouch} onPress={()=>navigation.navigate('AddBalanceScreen')}>
    <Text style={StyleComponent.WalletScreenBtnTouchText}>ADD BALANCE</Text>
    </TouchableOpacity>
    <TouchableOpacity style={StyleComponent.WalletScreenBtnTouch} onPress={()=>navigation.navigate('WithdrawScreen')}>
    <Text style={StyleComponent.WalletScreenBtnTouchText}>WITHDRAW</Text>
    </TouchableOpacity>
    </View>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      <View style={StyleComponent.WalletScreenHistoryMainView}>
      <Text style={StyleComponent.WalletScreenHistoryHeading}>Wallet Transactions History</Text>
      <View style={StyleComponent.WalletScreenHistoryTable}>
      <View style={StyleComponent.WalletScreenHistoryTableHeadingRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingRowText}>Date</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingRowText}>Desc</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingRowText}>Tnx</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingRowText}>Amount</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Booked Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#FF1919'}]}>- 8.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Offered Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Booked Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#FF1919'}]}>- 8.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Offered Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Booked Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#FF1919'}]}>- 8.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Offered Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Offered Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Balance Added</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Offered Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      <View style={StyleComponent.WalletScreenHistoryTableHeadingItemRow}>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>12-08-2023</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>Offered Ride</Text>
      <Text style={StyleComponent.WalletScreenHistoryTableHeadingItemRowText}>13554487875155</Text>
      <Text style={[StyleComponent.WalletScreenHistoryTableHeadingItemRowText,{fontFamily:'Commissioner-Bold', color:'#2DC090'}]}>+ 39.25</Text>
      </View>

      </View>
      </View>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default WalletScreen;