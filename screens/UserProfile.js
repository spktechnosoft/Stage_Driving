import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio} from 'react-native';
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

const UserProfile = ({navigation}) => {

    const [SettingsTabActive, setSettingsTabActive] = useState(false);

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
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: SettingsTabActive !== true ? '#FF6107' : 'transparent',}]} onPress={()=>setSettingsTabActive(false)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:SettingsTabActive!== true ? '#FF6107':'#607388', }]}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: SettingsTabActive !== true ? 'transparent' : '#FF6107',}]} onPress={()=>setSettingsTabActive(true)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:SettingsTabActive!== true ? '#607388':'#FF6107', }]}>Settings</Text>
      </TouchableOpacity>
      </View>

      {
        !SettingsTabActive ?
        <View style={StyleComponent.UserProfileTopView}>
      <View style={StyleComponent.UserProfileTopViewImageView}>
      <Image style={[StyleComponent.UserProfileTopViewImage,{aspectRatio:aspImg(require('./assets/img/profilePicture.png')),}]} source={require('./assets/img/profilePicture.png')} />
      </View>
      <View style={StyleComponent.UserProfileTopViewTextView}>
      <Text style={StyleComponent.UserProfileTopViewText}>Alice Johnson</Text>
      <View style={StyleComponent.UserProfileTopViewStarRow}>
      <Image style={[StyleComponent.UserProfileTopViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileTopViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileTopViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileTopViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={[StyleComponent.UserProfileTopViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.UserProfileTopViewTextLight}>Member Since 2023</Text>
      </View>
      </View>
      : ''
      }
      
      <ScrollView style={{width:windowWidth,}}>

      {
        !SettingsTabActive ?
      
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      <View style={StyleComponent.UserProfileReviewMainView}>
      
      <Text style={StyleComponent.UserProfileReviewMainViewHeadingText}>Ratings & Reviews (12)</Text>
      
      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      <View style={StyleComponent.UserProfileReviewItemMainView}>
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
      <Text style={StyleComponent.UserProfileReviewItemDateText}>01/12/2020</Text>
      </View>
      </View>
      <Text style={StyleComponent.UserProfileReviewItemReviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </Text>
      </View>

      </View>

      </View>

      :
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>
      <Text style={StyleComponent.UserProfileSettingsHeadingText} >Account Settings</Text>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('ProfileScreen')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/ProfileIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/ProfileIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Edit Profile</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/PasswordIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/PasswordIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Change Password</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('WalletScreen')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/WalletIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/WalletIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Wallet</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/ReviewIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/ReviewIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>My Reviews</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('SelectLanguageScreen')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/TranslationIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/TranslationIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Change Language</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('FaqScreen')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/FaqIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/FaqIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Frequently Asked Questions (F.A.Q)</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('TermsAndCondition')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/TermsIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/TermsIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Terms & Conditions</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('PrivacyPolicy')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/TermsIcon1.png')),}]} source={require('./assets/img/ProfileSettingsIcons/TermsIcon1.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Privacy Policy</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('RefundPolicy')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/TermsIcon2.png')),}]} source={require('./assets/img/ProfileSettingsIcons/TermsIcon2.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Refund Policy</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch}  onPress={()=>navigation.navigate('ContactUsScreen')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/ContactIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/ContactIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Contact Us</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/LogoutIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/LogoutIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Logout</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.UserProfileSettingsTouch} onPress={()=>navigation.navigate('DeleteAccount')}>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconLeft,{aspectRatio:aspImg(require('./assets/img/ProfileSettingsIcons/DeleteIcon.png')),}]} source={require('./assets/img/ProfileSettingsIcons/DeleteIcon.png')} />
      <Text style={StyleComponent.UserProfileSettingsTouchText}>Delete my Account</Text>
      <Image style={[StyleComponent.UserProfileSettingsTouchIconRight,{aspectRatio:aspImg(require('./assets/img/ArrowIconColored.png')),}]} source={require('./assets/img/ArrowIconColored.png')} />
      </TouchableOpacity>

      </View>
      }

      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Profile'} />
    </View>
  );
}

export default UserProfile;