import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio} from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;

const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

const DeleteAccount = ({navigation}) => {

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
      <Text style={StyleComponent.ScreenHeaderBgText}>Delete Account</Text>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(7), paddingVertical:dpx(15), flex:1,}}>

      <Text style={StyleComponent.DeleteAccountHeaderText}>Are you sure you want to delete your account? Please read how account deletion will affect.</Text>
      <Text style={StyleComponent.DeleteAccountMsgText}>Deleting your account removes personal information our database. However, your email & contact number becomes permanently reserved and same email or phone number cannot be re-used to register a new account in future.</Text>

      </View>
      </ScrollView>

      <TouchableOpacity style={[StyleComponent.LanguageScreenSaveButtonTouch,]} onPress={()=>setModalVisible(true)}>
      <Text style={StyleComponent.LanguageScreenSaveButtonTouchText}>DELETE ACCOUNT</Text>
      </TouchableOpacity>

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
            <Text style={{color:'#607388', fontFamily:'Commissioner-Bold', fontSize:dpx(20), marginRight:10,}}>This action will delete your account permanently?</Text>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:dpx(8), justifyContent:'center', marginTop:dpx(30),}}>
        <TouchableOpacity style={{marginRight:dpx(8), backgroundColor:'#E6E6E6', paddingHorizontal:dpx(30), paddingVertical:dpx(0), borderRadius:dpx(20),}} onPress={()=>{
            setModalVisible(!modalVisible);
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

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default DeleteAccount;