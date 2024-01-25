import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, PixelRatio } from 'react-native';
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
    const aspExtract = Image.resolveAssetSource(src).width / Image.resolveAssetSource(src).height;
    return aspExtract;
  };

const UserScreen = ({navigation}) => {

    const [PeopleFollowTab, setPeopleFollowTab] = useState(false);

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
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: PeopleFollowTab !== true ? '#FF6107' : 'transparent', paddingLeft:dpx(40), paddingRight:dpx(20),}]} onPress={()=>setPeopleFollowTab(false)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:PeopleFollowTab!== true ? '#FF6107':'#607388', }]}>Search Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: PeopleFollowTab !== true ? 'transparent' : '#FF6107', paddingRight:dpx(20),}]} onPress={()=>setPeopleFollowTab(true)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:PeopleFollowTab!== true ? '#607388':'#FF6107', }]}>People you Follow</Text>
      </TouchableOpacity>
      </View>

      {
        !PeopleFollowTab ?
    <View style={StyleComponent.userScreenSearchRow}>
      <TextInput
      style={StyleComponent.userScreenSearchRowTextInput}
      placeholder='Search Users...'
      placeholderTextColor={'#8A9AAC'}
      />
      <TouchableOpacity style={StyleComponent.userScreenSearchRowTouch}>
      <Image source={require('./assets/img/SearchIconWhite.png')} style={[StyleComponent.userScreenSearchRowIcon,{aspectRatio:aspImg(require('./assets/img/SearchIconWhite.png')),}]} />
      </TouchableOpacity>
    </View>
      : ''
      }
      
      <ScrollView style={{width:windowWidth,}}>

      {
        !PeopleFollowTab ?
      
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      <View style={StyleComponent.UserProfileReviewMainView}>
      
      <Text style={StyleComponent.UserProfileReviewMainViewHeadingText}>User you might know...</Text>
      
      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

 

      </View>

      </View>

      :
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      <View style={[StyleComponent.UserProfileReviewMainView,{borderTopWidth:0,}]}>
      
      <Text style={StyleComponent.UserProfileReviewMainViewHeadingText}>Users you follow</Text>

      <View style={{width:windowWidth, alignSelf:'center', backgroundColor:'#FF8616', height:dpx(1), marginBottom:dpx(10),}}></View>
      
      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileReviewItemMainView}>
      <View style={StyleComponent.UserProfileReviewItemView}>
      <View style={StyleComponent.UserProfileReviewItemImageView}>
      <Image style={[StyleComponent.UserProfileReviewItemImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileReviewItemTextView}>
      <Text style={StyleComponent.UserProfileReviewItemNameText}>Johny Deo</Text>
      <View style={StyleComponent.UserProfileReviewItemStarView}>
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileReviewItemStarIcon, {aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      </View>
      <TouchableOpacity style={{marginLeft:'auto', backgroundColor:'#EC5D41', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/BlockIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/BlockIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:dpx(8), backgroundColor:'#FF8616', flexDirection:'row', alignItems:'center', paddingHorizontal:dpx(8), paddingVertical:dpx(4), borderRadius:30,}}>
      <Image source={require('./assets/img/ChatIcon.png')} style={{ aspectRatio:aspImg(require('./assets/img/ChatIcon.png')), width:dpx(18), height:'auto', marginLeft:'auto' }} />
      <Text style={{color:'#fff', marginLeft:dpx(5), fontFamily:'Roboto-SemiBold', fontSize:dpx(16)}}>Chat</Text>
      </TouchableOpacity>
      <Image source={require('./assets/img/ArrowIconColored.png')} style={{ aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')), width:dpx(15), height:'auto', marginLeft:'auto' }} />
      </View>
      </TouchableOpacity>

 

      </View>

      </View>
      }

      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Users'} />
    </View>
  );
}

export default UserScreen;