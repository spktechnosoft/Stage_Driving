import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, PixelRatio } from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';
import { formatDistanceToNow, format } from 'date-fns';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

  const NotificationDateFunc = (NotificationDate) => {
    const currentDate = new Date();
    const sampleDate = new Date(NotificationDate);

    const differenceInDays = Math.floor(
      (currentDate - sampleDate) / (24 * 60 * 60 * 1000)
    );
  
    let formattedDate;
    if (differenceInDays === 0) {
      formattedDate = 'Today';
    } else if (differenceInDays === 1) {
      formattedDate = 'Yesterday';
    } else if (differenceInDays < 30) {
      formattedDate = `${differenceInDays} Days Ago`;
    } else {
      formattedDate = format(sampleDate, 'MMMM dd yyyy');
    }
    return formattedDate;
  };

  const NotificationsList = [
    {
        Id:1,
        Date:'2023-12-26',
        Title:'Hurray! Ride Confirmed',
        Message:'Congratulations! Your ride has been confirmed',
        Icon:require('./assets/img/NotificationIcons/RideConfirmed.png'),
        IconAsp:Image.resolveAssetSource(require('./assets/img/NotificationIcons/RideConfirmed.png')).width / Image.resolveAssetSource(require('./assets/img/NotificationIcons/RideConfirmed.png')).height,
    },
    {
        Id:2,
        Date:'2023-12-22',
        Title:'Payment Successful',
        Message:'Congratulations! You have successfully made the payment for your ride.',
        Icon:require('./assets/img/NotificationIcons/PaymentSuccess.png'),
        IconAsp:Image.resolveAssetSource(require('./assets/img/NotificationIcons/PaymentSuccess.png')).width / Image.resolveAssetSource(require('./assets/img/NotificationIcons/PaymentSuccess.png')).height,
    },
    {
        Id:3,
        Date:'2023-12-22',
        Title:'New Follow Request',
        Message:'You have got an follow request from Marcello. Do you know him?',
        Icon:require('./assets/img/NotificationIcons/FollowRequest.png'),
        IconAsp:Image.resolveAssetSource(require('./assets/img/NotificationIcons/FollowRequest.png')).width / Image.resolveAssetSource(require('./assets/img/NotificationIcons/FollowRequest.png')).height,
    },
    {
        Id:4,
        Date:'2023-10-30',
        Title:'Follow Request Confirmed!',
        Message:'Marcello had accepted your follow request',
        Icon:require('./assets/img/NotificationIcons/FollowRequest.png'),
        IconAsp:Image.resolveAssetSource(require('./assets/img/NotificationIcons/FollowRequest.png')).width / Image.resolveAssetSource(require('./assets/img/NotificationIcons/FollowRequest.png')).height,
    },
    {
        Id:5,
        Date:'2023-11-03',
        Title:'Hurray! Ride Confirmed',
        Message:'Congratulations! Your ride has been confirmed',
        Icon:require('./assets/img/NotificationIcons/RideConfirmed.png'),
        IconAsp:Image.resolveAssetSource(require('./assets/img/NotificationIcons/RideConfirmed.png')).width / Image.resolveAssetSource(require('./assets/img/NotificationIcons/RideConfirmed.png')).height,
    },
    {
        Id:6,
        Date:'2023-11-06',
        Title:'Payment Successful',
        Message:'Congratulations! You have successfully made the payment for your ride.',
        Icon:require('./assets/img/NotificationIcons/PaymentSuccess.png'),
        IconAsp:Image.resolveAssetSource(require('./assets/img/NotificationIcons/PaymentSuccess.png')).width / Image.resolveAssetSource(require('./assets/img/NotificationIcons/PaymentSuccess.png')).height,
    },
  ];

const NotificationScreen = ({navigation}) => {

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav,{justifyContent:'flex-start',}]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Text style={[StyleComponent.HeaderEventTitle,{marginLeft:50,}]}>Notification</Text>
      <TouchableOpacity style={StyleComponent.NotificationScreenThreeDotTopTouch}>
      <View style={StyleComponent.NotificationScreenThreeDotTopTouchView}></View>
      <View style={StyleComponent.NotificationScreenThreeDotTopTouchView}></View>
      <View style={StyleComponent.NotificationScreenThreeDotTopTouchView}></View>
      </TouchableOpacity>
      </View>
      <View style={[StyleComponent.mainBody]}>

      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:15, paddingTop:dpx(4), paddingBottom:dpx(31),}}>

      {
        NotificationsList.map((item, index)=>{
            return(
      <View key={item.Id} >
      <Text style={StyleComponent.NotificationBoxDateText}>{NotificationDateFunc(item.Date)}</Text>
      <TouchableOpacity style={StyleComponent.NotificationBoxInnerView}>
      <Image source={item.Icon} style={[StyleComponent.NotificationBoxInnerViewIcon,{aspectRatio:item.IconAsp,}]} />
      <View style={StyleComponent.NotificationBoxInnerViewTextView}>
      <Text style={StyleComponent.NotificationBoxInnerViewTitleText}>{item.Title}</Text>
      <Text style={StyleComponent.NotificationBoxInnerViewMessageText}>{item.Message}</Text>
      </View>
      </TouchableOpacity>
      </View>
            )
        })
      }

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Stage'} />
    </View>
  );
}

export default NotificationScreen;