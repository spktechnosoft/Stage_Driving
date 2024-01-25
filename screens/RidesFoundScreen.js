import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;

const RidesFoundScreen = ({navigation}) => {

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      <TouchableOpacity style={[StyleComponent.SearchTopMainFilterTouch,{backgroundColor:'transparent', position:'absolute', right:15, bottom:0,}]}>
      <View style={[StyleComponent.SearchTopMainFilterTouchDividerViewOne,{backgroundColor:'#fff',}]}></View>
      <View style={[StyleComponent.SearchTopMainFilterTouchDividerViewTwo,{backgroundColor:'#fff',}]}></View>
      <View style={[StyleComponent.SearchTopMainFilterTouchDividerViewThree,{backgroundColor:'#fff',}]}></View>
      </TouchableOpacity>
      </View>
      <View style={[StyleComponent.mainBody]}>
      
      <View style={StyleComponent.RidesFoundScreenHeaderView}>
      <Text style={StyleComponent.RidesFoundScreenHeaderEventNameText}>Rock n roll Italy</Text>
      <Text style={StyleComponent.RidesFoundScreenHeaderRidesNumberText}>34 Rides found</Text>
      </View>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:15,}}>

      <Text style={StyleComponent.RidesFoundScreenContentHeaderText}>Driver you might know</Text>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <Text style={StyleComponent.RidesFoundScreenContentHeaderText}>Other Drivers</Text>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={StyleComponent.RidesFoundScreenContentItemView} onPress={()=>navigation.navigate('RouteDetailsScreen')}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Calender.png')).height,}]} source={require('./assets/img/RideScreenIcons/Calender.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowTextBold}>12/08/2023, 18:00</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Location.png')).height,}]} source={require('./assets/img/RideScreenIcons/Location.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Saint Christophe 11020, Aosta Valley, Italy</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewRow}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Ticket.png')).height,}]} source={require('./assets/img/RideScreenIcons/Ticket.png')} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewRowText}>Ticket already bought</Text>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonRow}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconView}>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewIcons}>
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      <Image style={[StyleComponent.RidesFoundScreenContentItemLeftViewRowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFill.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFill.png')} />
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewTextView}>
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonIconViewText}>1 Seats Available</Text>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashView}>
      <Image source={require('./assets/img/RideScreenIcons/Cash.png')} style={[StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).width / Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Cash.png')).height,}]} />
      <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewText}>€ 9.75 <Text style={StyleComponent.RidesFoundScreenContentItemLeftViewPersonCashViewTextLight} >/ Seat</Text></Text>
      </View>
      </View>
      </View>
      <View style={StyleComponent.RidesFoundScreenContentItemRightView}>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewImageView}>
      <Image source={require('./assets/img/DriverImage.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/DriverImage.png')).width / Image.resolveAssetSource(require('./assets/img/DriverImage.png')).height,}]} />
      <Image source={require('./assets/img/FemaleIcon.png')} style={[StyleComponent.RidesFoundScreenContentItemRightViewImageGenderIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).width / Image.resolveAssetSource(require('./assets/img/FemaleIcon.png')).height,}]} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewNameText}>Smith John</Text>
      <View style={StyleComponent.RidesFoundScreenContentItemRightViewStarRow}>
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/FullStar.png')} />
      <Image style={StyleComponent.RidesFoundScreenContentItemRightViewStarRowIcon} source={require('./assets/img/StarsIcon/HalfStar.png')} />
      </View>
      <Text style={StyleComponent.RidesFoundScreenContentItemRightViewRatingNumberText}>353 ratings</Text>
      </View>
      </TouchableOpacity>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Rides'} />
    </View>
  );
}

export default RidesFoundScreen;