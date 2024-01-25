import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

const RouteDetailsScreen = ({navigation}) => {

    const [RouteDetailsTabActive, setRouteDetailsTabActive] = useState(true);
    const [SeatCounter, setSeatCounter] = useState(1);
    const [SeatAvailable, setSeatAvailable] = useState(3);
    const [PricePerSeat, setPricePerSeat] = useState(9.25);

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
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: RouteDetailsTabActive !== true ? 'transparent' : '#FF6107',}]} onPress={()=>setRouteDetailsTabActive(!RouteDetailsTabActive)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{ color:RouteDetailsTabActive!== true ? '#607388':'#FF6107', }]}>Route Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: RouteDetailsTabActive !== true ? '#FF6107' : 'transparent',}]} onPress={()=>setRouteDetailsTabActive(!RouteDetailsTabActive)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{ color:RouteDetailsTabActive!== true ? '#FF6107':'#607388', }]}>Vehicle Details</Text>
      </TouchableOpacity>
      </View>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:15,}}>

      {
        RouteDetailsTabActive===true ? 
        <View>
<Text style={[StyleComponent.RidesFoundScreenContentHeaderText, {textDecorationLine:'underline',}]}>Route Details</Text>

<View style={StyleComponent.RouteDetailsScreenItem}>
<View style={[StyleComponent.RouteDetailsScreenItemLeft,{marginTop:dpx(50),}]}>
  <View style={StyleComponent.RouteDetailsScreenItemLeftDotDark}></View>
  <View style={[StyleComponent.RouteDetailsScreenItemLeftVerticalLine, { height: dpx(56), }]}></View>
</View>
<View style={StyleComponent.RouteDetailsScreenItemRight}>
  <View style={StyleComponent.RouteDetailsScreenItemRightText}>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextDarkText1}>Leaving from</Text>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextDarkText2}>
      Saint Christophe, 11020, Aosta Valley
    </Text>
  </View>
  <Text style={StyleComponent.RouteDetailsScreenItemRightTime}>8:10</Text>
</View>
</View>

<View style={StyleComponent.RouteDetailsScreenItem}>
<View style={[StyleComponent.RouteDetailsScreenItemLeft,{marginTop:dpx(50),}]}>
  <View style={StyleComponent.RouteDetailsScreenItemLeftDotLight}></View>
  <View style={[StyleComponent.RouteDetailsScreenItemLeftVerticalLine, { height: dpx(56), }]}></View>
</View>
<View style={StyleComponent.RouteDetailsScreenItemRightLight}>
  <View style={StyleComponent.RouteDetailsScreenItemRightText}>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightText1}>Stopover at</Text>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightText2}>Ads Villarboit Nord, A4 Torino-Trieste
    </Text>
    <View style={StyleComponent.RouteDetailsScreenItemRightTextLightBottomTextView}>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightBottomText}>Breakfast</Text>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightBottomText}>15 mins</Text>
    </View>
  </View>
  <Text style={StyleComponent.RouteDetailsScreenItemRightTimeLight}>9:40</Text>
</View>
</View>

<View style={StyleComponent.RouteDetailsScreenItem}>
<View style={[StyleComponent.RouteDetailsScreenItemLeft,{marginTop:dpx(50),}]}>
  <View style={StyleComponent.RouteDetailsScreenItemLeftDotLight}></View>
  <View style={[StyleComponent.RouteDetailsScreenItemLeftVerticalLine, { height: dpx(56), }]}></View>
</View>
<View style={StyleComponent.RouteDetailsScreenItemRightLight}>
  <View style={StyleComponent.RouteDetailsScreenItemRightText}>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightText1}>Stopover at</Text>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightText2}>Ads Villarboit Nord, A4 Torino
    </Text>
    <View style={StyleComponent.RouteDetailsScreenItemRightTextLightBottomTextView}>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightBottomText}>Food</Text>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextLightBottomText}>30 mins</Text>
    </View>
  </View>
  <Text style={StyleComponent.RouteDetailsScreenItemRightTimeLight}>14:00</Text>
</View>
</View>

<View style={StyleComponent.RouteDetailsScreenItem}>
<View style={[StyleComponent.RouteDetailsScreenItemLeft,{marginTop:dpx(30), marginLeft:dpx(3)}]}>
  <View style={StyleComponent.RouteDetailsScreenItemLeftDotDark}></View>
</View>
<View style={StyleComponent.RouteDetailsScreenItemRight}>
  <View style={StyleComponent.RouteDetailsScreenItemRightText}>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextDarkText1}>Going to</Text>
    <Text style={StyleComponent.RouteDetailsScreenItemRightTextDarkText2}>
    Italy Music Concert
    </Text>
  </View>
  <Text style={StyleComponent.RouteDetailsScreenItemRightTime}>16:00</Text>
</View>
</View>
</View>
: 
<View style={{paddingBottom:dpx(30),}}>

<View style={StyleComponent.VehicleDetailsTopView}>
<View style={StyleComponent.VehicleDetailsTopLeftView}>
<Text style={[StyleComponent.VehicleDetailsHeaderText, {textDecorationLine:'underline',}]}>Driver & Car Details</Text>
<Text style={StyleComponent.VehicleDetailsHeaderNameText}>Alice Johnson</Text>
<View style={StyleComponent.VehicleDetailsStarRow}>
<Image style={[StyleComponent.VehicleDetailsStarIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsStarIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsStarIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsStarIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsStarIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/HalfStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/HalfStar.png')).height,}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
<Text style={StyleComponent.VehicleDetailsStarRatings}>23 ratings</Text>
</View>
<Text style={StyleComponent.VehicleDetailsModelInfoText}>Mitusbishi Xpander || White Grey || AD 1234B</Text>
</View>
<View>
<View style={StyleComponent.VehicleDetailsDriverPhotoContainer}>
      <Image source={require('./assets/img/profilePicture.png')} style={StyleComponent.VehicleDetailsDriverPhoto} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.VehicleDetailsDriverPhotoGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
</View>
</View>
</View>

  <ScrollView horizontal>
  <View style={{paddingHorizontal:15,}}>
  <View style={StyleComponent.VehicleDetailsTagsRow}>
  <Text style={StyleComponent.VehicleDetailsTags}>Music</Text>
  <Text style={StyleComponent.VehicleDetailsTags}>Food</Text>
  <Text style={StyleComponent.VehicleDetailsTags}>Drinks</Text>
  <Text style={StyleComponent.VehicleDetailsTags}>Pet Allowed</Text>
  <Text style={StyleComponent.VehicleDetailsTags}>Laptop</Text>
  </View>
  </View>
  </ScrollView>

  <View style={StyleComponent.VehicleDetailsSelectSeatView}>
  <Text style={StyleComponent.VehicleDetailsSelectSeatHeaderText}>Select your preferred seat</Text>
  <Image style={[StyleComponent.VehicleDetailsSelectSeatImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/VehicleDesign/Occupied2.png')).width / Image.resolveAssetSource(require('./assets/img/VehicleDesign/Occupied2.png')).height,}]} source={require('./assets/img/VehicleDesign/Occupied2.png')} />
  <Text style={StyleComponent.VehicleDetailsSelectSeatSubHeaderText}>How many seats you want to book?</Text>
  <View style={StyleComponent.VehicleDetailsSelectSeatCounterRow}>
  <TouchableOpacity disabled={SeatCounter > 0 ? false : true } style={[StyleComponent.VehicleDetailsSelectSeatCounterTouch,{backgroundColor: SeatCounter > 0 ? '#EC5D41' : '#979797'}]} onPress={()=>{
    if( SeatCounter > 0){
      setSeatCounter(SeatCounter-1);
    }
  }}>
  <Image source={require('./assets/img/MinusIcon.png')} style={StyleComponent.VehicleDetailsSelectSeatCounterTouchIcon} />
  </TouchableOpacity>
  <Text style={StyleComponent.VehicleDetailsSelectSeatCounterDisplayText}>{SeatCounter}</Text>
  <TouchableOpacity disabled={SeatCounter === SeatAvailable ? true : false } style={[StyleComponent.VehicleDetailsSelectSeatCounterTouch,{backgroundColor:SeatCounter === SeatAvailable ? '#979797' : '#EC5D41'}]} onPress={()=>{
    if( SeatCounter < SeatAvailable){
      setSeatCounter(SeatCounter+1);
    }
  }}>
  <Image source={require('./assets/img/PlusIcon.png')} style={StyleComponent.VehicleDetailsSelectSeatCounterTouchIcon} />
  </TouchableOpacity>
  </View>
  <View style={StyleComponent.VehicleDetailsSelectSeatPriceAndSeatRow}>
  <View style={StyleComponent.VehicleDetailsSelectSeatPersonView}>
  <View style={StyleComponent.VehicleDetailsSelectSeatPersonIconView}>
  <Image source={require('./assets/img/RideScreenIcons/Person.png')} style={[StyleComponent.VehicleDetailsSelectSeatPersonIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} />
  <Image source={require('./assets/img/RideScreenIcons/Person.png')} style={[StyleComponent.VehicleDetailsSelectSeatPersonIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} />
  <Image source={require('./assets/img/RideScreenIcons/Person.png')} style={[StyleComponent.VehicleDetailsSelectSeatPersonIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} />
  <Image source={require('./assets/img/RideScreenIcons/PersonFill.png')} style={[StyleComponent.VehicleDetailsSelectSeatPersonIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} />
  <Image source={require('./assets/img/RideScreenIcons/PersonFill.png')} style={[StyleComponent.VehicleDetailsSelectSeatPersonIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} />
  </View>
  <Text style={StyleComponent.VehicleDetailsSelectSeatPersonIconText}>{SeatAvailable} Seats Available</Text>
  </View>
  <View style={StyleComponent.VehicleDetailsSelectSeatPriceView}>
  <Text style={StyleComponent.VehicleDetailsSelectSeatPriceHeadText}>Total Price</Text>
  <Text style={StyleComponent.VehicleDetailsSelectSeatPriceText}>€ {PricePerSeat*SeatCounter}</Text>
  </View>
  </View>
  </View>

  <View style={StyleComponent.VehicleDetailsBookRideView}>
  <TouchableOpacity disabled={SeatCounter > 0 ? false : true } style={[StyleComponent.VehicleDetailsBookRideTouch, {backgroundColor: SeatCounter > 0 ? '#EC5D41' : '#979797'}]} onPress={()=>navigation.navigate('BookingSummaryScreen',{price: PricePerSeat, count:SeatCounter})}>
  <Text style={StyleComponent.VehicleDetailsBookRideTouchText}>BOOK RIDE</Text>
  </TouchableOpacity>
  </View>

  <Text style={[StyleComponent.VehicleDetailsHeaderText, {textDecorationLine:'underline', marginBottom:dpx(16),}]}>Passengers sharing the vehicle</Text>

  <TouchableOpacity style={StyleComponent.VehicleDetailsPassengerRow}>
  <Image source={require('./assets/img/DriverImage.png')} style={StyleComponent.VehicleDetailsPassengerImage} />
  <View style={StyleComponent.VehicleDetailsPassengerTextView}>
  <Text style={StyleComponent.VehicleDetailsPassengerText}>Daniel Robert</Text>
  <View style={StyleComponent.VehicleDetailsPassengerRateRow}>
  <Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/HalfStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/HalfStar.png')).height,}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
  </View>
  </View>
  <TouchableOpacity style={StyleComponent.VehicleDetailsPassengerTouch}>
  <Image source={require('./assets/img/ArrowIconColored.png')} style={[StyleComponent.VehicleDetailsPassengerTouchIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width / Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} />
  </TouchableOpacity>
  </TouchableOpacity>

  <TouchableOpacity style={StyleComponent.VehicleDetailsPassengerRow}>
  <Image source={require('./assets/img/DriverImage.png')} style={StyleComponent.VehicleDetailsPassengerImage} />
  <View style={StyleComponent.VehicleDetailsPassengerTextView}>
  <Text style={StyleComponent.VehicleDetailsPassengerText}>Taniya Albert</Text>
  <View style={StyleComponent.VehicleDetailsPassengerRateRow}>
  <Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/FullStar.png')).height,}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
<Image style={[StyleComponent.VehicleDetailsPassengerRateIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/StarsIcon/HalfStar.png')).width / Image.resolveAssetSource(require('./assets/img/StarsIcon/HalfStar.png')).height,}]} source={require('./assets/img/StarsIcon/Star.png')} />
  </View>
  </View>
  <TouchableOpacity style={StyleComponent.VehicleDetailsPassengerTouch}>
  <Image source={require('./assets/img/ArrowIconColored.png')} style={[StyleComponent.VehicleDetailsPassengerTouchIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width / Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} />
  </TouchableOpacity>
  </TouchableOpacity>

</View>
      }

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  );
}

export default RouteDetailsScreen;