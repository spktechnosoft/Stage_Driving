import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, FlatList, PixelRatio} from 'react-native';
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

  const EventList =[
    {
      Id:1,
      Date:'08 Oct',
      Title:'Rock n Roll',
      Category:'Rock',
      RidesAvailable:150,
      EventPlace:'Mediolanum Forum',
      EventImage:require('./assets/img/EventImageGallery/Event1.png'),
      EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent1.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent1.png')).height,
    },
    {
      Id:2,
      Date:'08 Oct',
      Title:'Standing Opera',
      Category:'Rock',
      RidesAvailable:150,
      EventPlace:'Stadio di Domiziano',
      EventImage:require('./assets/img/EventImageGallery/Event2.png'),
      EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).height,
    },
    {
      Id:3,
      Date:'08 Oct',
      Title:'Rock Night',
      Category:'Rock',
      RidesAvailable:150,
      EventPlace:'Palasport di Genova',
      EventImage:require('./assets/img/EventImageGallery/Event3.png'),
      EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent3.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent3.png')).height,
    },
    {
      Id:1,
      Date:'08 Oct',
      Title:'Italy Rock Night',
      Category:'Rock',
      RidesAvailable:150,
      EventPlace:'Mediolanum Forum',
      EventImage:require('./assets/img/EventImageGallery/Event4.png'),
      EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent1.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent1.png')).height,
    },
    {
      Id:2,
      Date:'08 Oct',
      Title:'Rock Festivia',
      Category:'Rock',
      RidesAvailable:150,
      EventPlace:'Stadio di Domiziano',
      EventImage:require('./assets/img/EventImageGallery/Event5.png'),
      EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).height,
    },
    {
      Id:3,
      Date:'08 Oct',
      Title:'Jazz Party',
      Category:'Rock',
      RidesAvailable:150,
      EventPlace:'Palasport di Genova',
      EventImage:require('./assets/img/EventImageGallery/Event6.png'),
      EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent3.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent3.png')).height,
    },
  ];

  const numColumns = 2;

const AgendaScreen = ({navigation}) => {

    const [MyEventsTabActive, setMyEventsTabActive] = useState(true);
    const [LikedTabActive, setLikedTabActive] = useState(true);
    const [RidesOfferedTabActive, setRidesOfferedTabActive] = useState(true);
    const [RidesOfferedXtraTabActive,setRidesOfferedXtraTabActive] = useState('upcoming');
    const [RidesTakenXtraTabActive,setRidesTakenXtraTabActive] = useState('upcoming');
    const [RidesOfferedItemOpen, setRidesOfferedItemOpen] = useState(false);
    const [RidesTakenItemOpen, setRidesTakenItemOpen] = useState('');

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>RidesOfferedItemOpen?setRidesOfferedItemOpen(false):RidesTakenItemOpen!==''?setRidesTakenItemOpen(''):navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>
      <View style={[StyleComponent.mainBody]}>

      <View style={StyleComponent.RouteDetailsScreenHeaderView}>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: MyEventsTabActive !== true ? 'transparent' : '#FF6107',}]} onPress={()=>setMyEventsTabActive(true)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:MyEventsTabActive!== true ? '#607388':'#FF6107', }]}>My Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.RouteDetailsScreenHeaderTouch,{borderBottomColor: MyEventsTabActive !== true ? '#FF6107' : 'transparent',}]} onPress={()=>setMyEventsTabActive(false)}>
      <Text style={[StyleComponent.RouteDetailsScreenHeaderTouchText,{color:MyEventsTabActive!== true ? '#FF6107':'#607388', }]}>My Rides</Text>
      </TouchableOpacity>
      </View>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:dpx(11),}}>

      {
        MyEventsTabActive===true ? 
        <View style={{paddingBottom:dpx(30), alignItems:'center',}}>
        
        <View style={StyleComponent.AgendaScreenButtonTabsView}>
        <TouchableOpacity style={[StyleComponent.AgendaScreenButtonTabsTouch,{backgroundColor: LikedTabActive ? '#EC5D41': '#DDD',}]} onPress={()=>setLikedTabActive(!LikedTabActive)}>
        <Text style={[StyleComponent.AgendaScreenButtonTabsTouchText,{color: LikedTabActive ? '#fff': '#EC5D41',}]}>My liked event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[StyleComponent.AgendaScreenButtonTabsTouch,{backgroundColor: LikedTabActive ? '#ddd': '#EC5D41',}]} onPress={()=>setLikedTabActive(!LikedTabActive)}>
        <Text style={[StyleComponent.AgendaScreenButtonTabsTouchText,{color: LikedTabActive ? '#EC5D41': '#fff',}]}>I will participate</Text>
        </TouchableOpacity>
        </View>
        
        {
            LikedTabActive ? 
            <View style={StyleComponent.AgendaScreenFlatListEvents}>
      <FlatList 
      data={EventList}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return(
          <View style={[StyleComponent.FlatListViewEventsMainView,{marginBottom:8,}]}>
          <View style={StyleComponent.FlatListViewEventsItemView}>
          <Image source={item.EventImage} style={StyleComponent.FlatListViewEventsItemImage} />
          <View style={StyleComponent.FlatListViewEventsItemTextView}>
<TouchableOpacity onPress={()=>navigation.navigate('EventDetails')}>
          <Text style={StyleComponent.FlatListViewEventsItemTitleText}>{item.Title}</Text>
          </TouchableOpacity>
          <View style={StyleComponent.tagsAndPeopleGoingView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemCategoryTouch}>
            <Text style={StyleComponent.FlatListViewEventsItemCategoryTouchText}>{item.Category}</Text>
          </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenBuyTicketsTouch}>
            <Text style={StyleComponent.AgendaScreenBuyTicketsTouchText}>Buy Tickets</Text>
            </TouchableOpacity>
          </View>
          <View style={StyleComponent.FlatListViewEventsItemPlaceIconTextView}>
          <Image source={require('./assets/img/ItemPlaceIcon.png')} style={StyleComponent.FlatListViewEventsItemPlaceIcon} />
          <Text style={StyleComponent.FlatListViewEventsItemPlaceText}>{item.EventPlace}</Text>
          </View>

          <View style={StyleComponent.FlatListViewEventsItemButtonsView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/LikeFilled.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ShareButton.png')} />
          </TouchableOpacity>
          </View>

          </View>

          <Text style={StyleComponent.FlatListViewEventsItemDate}>{item.Date}</Text>

          </View>
          </View>
        );
      }}
      />
      </View> :

      <View style={StyleComponent.AgendaScreenFlatListEvents}>
      <FlatList 
      data={EventList}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return(
          <View style={[StyleComponent.FlatListViewEventsMainView,{marginBottom:8,}]}>
          <View style={StyleComponent.FlatListViewEventsItemView}>
          <Image source={item.EventImage} style={StyleComponent.FlatListViewEventsItemImage} />
          <View style={StyleComponent.FlatListViewEventsItemTextView}>
<TouchableOpacity onPress={()=>navigation.navigate('EventDetails')}>
          <Text style={StyleComponent.FlatListViewEventsItemTitleText}>{item.Title}</Text>
          </TouchableOpacity>
          <View style={StyleComponent.tagsAndPeopleGoingView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemCategoryTouch}>
            <Text style={StyleComponent.FlatListViewEventsItemCategoryTouchText}>{item.Category}</Text>
          </TouchableOpacity>
          </View>
          <View style={StyleComponent.FlatListViewEventsItemPlaceIconTextView}>
          <Image source={require('./assets/img/ItemPlaceIcon.png')} style={StyleComponent.FlatListViewEventsItemPlaceIcon} />
          <Text style={StyleComponent.FlatListViewEventsItemPlaceText}>{item.EventPlace}</Text>
          </View>

          <View style={StyleComponent.FlatListViewEventsItemButtonsView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ParticipateButtonFilled.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ShareButton.png')} />
          </TouchableOpacity>
          </View>

          </View>

          <Text style={StyleComponent.FlatListViewEventsItemDate}>{item.Date}</Text>

          </View>
          </View>
        );
      }}
      />
      </View>
      
        }

        </View>
        :

        <View style={{paddingBottom:dpx(30), alignItems:'center',}}>
        
        <View style={StyleComponent.AgendaScreenButtonTabsView}>
        <TouchableOpacity style={[StyleComponent.AgendaScreenButtonTabsTouch,{backgroundColor: RidesOfferedTabActive ? '#EC5D41': '#DDD',}]} onPress={()=>setRidesOfferedTabActive(true)}>
        <Text style={[StyleComponent.AgendaScreenButtonTabsTouchText,{color: RidesOfferedTabActive ? '#fff': '#EC5D41',}]}>Rides Offered</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[StyleComponent.AgendaScreenButtonTabsTouch,{backgroundColor: RidesOfferedTabActive ? '#ddd': '#EC5D41',}]} onPress={()=>setRidesOfferedTabActive(false)}>
        <Text style={[StyleComponent.AgendaScreenButtonTabsTouchText,{color: RidesOfferedTabActive ? '#EC5D41': '#fff',}]}>Rides Taken</Text>
        </TouchableOpacity>
        </View>

        {
            RidesOfferedTabActive ? RidesOfferedItemOpen ?
            <View style={{width:windowWidth, alignSelf:'center', paddingHorizontal:dpx(7),}}>
            
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemView}>

            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemTitleText}>Concert & Route Details</Text>
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedInnerItemRow1Icon,{aspectRatio:aspImg(require('./assets/img/MusicIconNew.png')),}]} source={require('./assets/img/MusicIconNew.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow1Text}>Rock n Roll Italy</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedInnerItemRow1Icon,{aspectRatio:aspImg(require('./assets/img/CalendarIconNew.png')),}]} source={require('./assets/img/CalendarIconNew.png')} />
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow2Coulmn}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow2CoulmnText}>12/08/2023   20:00</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow2CoulmnText}>12/09/2023   13:30</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow2BorderView}></View>

            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3Col1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedInnerItemRowColIcon,{aspectRatio:aspImg(require('./assets/img/LocationA.png')),}]} source={require('./assets/img/LocationA.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedInnerItemRowColIcon,{aspectRatio:aspImg(require('./assets/img/StopoverIcon.png')),}]} source={require('./assets/img/StopoverIcon.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedInnerItemRowColIcon,{aspectRatio:aspImg(require('./assets/img/LocationB.png')),}]} source={require('./assets/img/LocationB.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3Col2}></View>
            <View style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3Col3}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3Col3TextDark}>Saint Christophe 11020, Aosta Valley, Italy</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3Col3TextLight}>AdS Villarboit Nord, A4 Torino - Trieste, 13030...</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedInnerItemRow3Col3TextDark}>Parco di Monza, Viale Brianza, snc, 20900 Monza, MB, Italy</Text>
            </View>
            </View>


            </View>

            <View style={[StyleComponent.AgendaScreenRidesOfferedInnerItemView,{alignItems:'center',}]}>
            <Text style={[StyleComponent.VehicleDetailsSelectSeatHeaderText,{textDecorationLine:'none',}]}>Number of Booked Seats</Text>
            <Text style={[StyleComponent.VehicleDetailsSelectSeatCounterDisplayText,{marginBottom:dpx(15), marginTop:dpx(11),}]}>3</Text>
            <Image style={[StyleComponent.VehicleDetailsSelectSeatImage,{aspectRatio:Image.resolveAssetSource(require('./assets/img/VehicleDesign/Occupied2.png')).width / Image.resolveAssetSource(require('./assets/img/VehicleDesign/Occupied2.png')).height,}]} source={require('./assets/img/VehicleDesign/Occupied2.png')} />
            </View>

            <View style={[StyleComponent.AgendaScreenRidesOfferedInnerItemView,{alignSelf:'center',}]}>
            <Text style={[StyleComponent.VehicleDetailsHeaderText, {textDecorationLine:'underline', marginBottom:dpx(16),}]}>Booked Passenger Details</Text>

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
            
            </View>
            
            </View>
            :
            <View style={{width:windowWidth, alignSelf:'center', paddingHorizontal:dpx(7),}}>

            <View style={StyleComponent.AgendaScreenRidesOfferedXtraTabsView}>
            <TouchableOpacity style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsTouch,{borderBottomColor:RidesOfferedXtraTabActive==='upcoming'?'#EC5D41':'transparent'}]} onPress={()=>setRidesOfferedXtraTabActive('upcoming')}>
            <Text style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsText,{color:RidesOfferedXtraTabActive==='upcoming'?'#FF6107':'#607388'}]}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsTouch,{borderBottomColor:RidesOfferedXtraTabActive==='cancelled'?'#EC5D41':'transparent'}]} onPress={()=>setRidesOfferedXtraTabActive('cancelled')}>
            <Text style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsText,{color:RidesOfferedXtraTabActive==='cancelled'?'#FF6107':'#607388'}]}>Cancelled</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsTouch,{borderBottomColor:RidesOfferedXtraTabActive==='completed'?'#EC5D41':'transparent'}]} onPress={()=>setRidesOfferedXtraTabActive('completed')}>
            <Text style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsText,{color:RidesOfferedXtraTabActive==='completed'?'#FF6107':'#607388'}]}>Completed</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>setRidesOfferedItemOpen(true)}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1ImageView}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/Person.png')).height,}]} source={require('./assets/img/RideScreenIcons/Person.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).width /Image.resolveAssetSource(require('./assets/img/RideScreenIcons/PersonFillGray.png')).height,}]} source={require('./assets/img/RideScreenIcons/PersonFillGray.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum1Text}>1 Seats Available</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2Image,{aspectRatio:Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).width / Image.resolveAssetSource(require('./assets/img/RidersDetails.png')).height,}]} source={require('./assets/img/RidersDetails.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2RightArrowIcon,{aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).width/Image.resolveAssetSource(require('./assets/img/ArrowIconColored.png')).height,}]} source={require('./assets/img/ArrowIconColored.png')} />
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Price / Seat</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 9.15 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>X 4</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Fair Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 36.60 <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2Calc}>- 20%</Text></Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3Colum}>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText1}>Total Earning</Text>
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow3ColumText2}>€ 29.28</Text>
            </View>
            </View>
            </TouchableOpacity>
            </View>
            : RidesTakenItemOpen==='upcoming' ? 
            <View style={{width:windowWidth, alignSelf:'center', paddingHorizontal:dpx(7),}}>
            
            <View style={StyleComponent.AgendaScreenRidesDetailsItemView}>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemHeaderView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemHeaderText}>Share this OTP with the driver to verify your ride.</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemHeaderOtpText}>2214</Text>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Vehicle Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Driver Name</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Alice Johnson</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Manufacturer</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Mitsubishi</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Model</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Xpander</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Color</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>White</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Reg. No</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>AD 1234B</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Ride Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Point</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Saint Christophe, 11020, Aosta Valley...</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Drop-off Point</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Parco di Monza, Viale Brianzza, Italy...</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Date</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>12/12/2023</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Time</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>10:00 AM</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Payment Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Booking Id</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>#AA1263749</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Booking Date</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>10/12/2023</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Subtotal Amount</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>€ 10.05</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Payment Method</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>PayPal</Text>
            </View>
            </View>

            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:dpx(15),}}>
            <TouchableOpacity style={{backgroundColor:'#EC5D41', shadowColor:'#000', shadowRadius:6, elevation:6, paddingHorizontal:dpx(14), paddingVertical:dpx(4), borderRadius:dpx(50),}}><Text style={{color:'#fff', fontSize:dpx(24), fontFamily:'Commissioner-Bold',}}>SHARE RIDE</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#EC5D41', shadowColor:'#000', shadowRadius:6, elevation:6, paddingHorizontal:dpx(14), paddingVertical:dpx(4), borderRadius:dpx(50),}}><Text style={{color:'#fff', fontSize:dpx(24), fontFamily:'Commissioner-Bold',}}>CANCEL RIDE</Text></TouchableOpacity>
            </View>

            </View>
            :
             RidesTakenItemOpen==='cancelled' ? 
             
            <View style={{width:windowWidth, alignSelf:'center', paddingHorizontal:dpx(7),}}>
            
            <View style={StyleComponent.AgendaScreenRidesDetailsItemView}>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemHeaderTypeView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemHeaderTypeText}>Oops..!</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemHeaderType2Text}>You have canceled your ride</Text>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Vehicle Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Driver Name</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Alice Johnson</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Manufacturer</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Mitsubishi</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Model</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Xpander</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Color</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>White</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Reg. No</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>AD 1234B</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Ride Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Point</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Saint Christophe, 11020, Aosta Valley...</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Drop-off Point</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Parco di Monza, Viale Brianzza, Italy...</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Date</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>12/12/2023</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Time</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>10:00 AM</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Payment Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Booking Id</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>#AA1263749</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Booking Date</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>10/12/2023</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Subtotal Amount</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>€ 10.05</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Payment Method</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>PayPal</Text>
            </View>
            </View>

            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:dpx(15),}}>
            <TouchableOpacity style={{backgroundColor:'#EC5D41', shadowColor:'#000', shadowRadius:6, elevation:6, paddingHorizontal:dpx(14), paddingVertical:dpx(4), borderRadius:dpx(50),}}><Text style={{color:'#fff', fontSize:dpx(24), fontFamily:'Commissioner-Bold',}}>SHARE RIDE</Text></TouchableOpacity>
            </View>

            </View>
             :
             RidesTakenItemOpen==='completed' ? 
            
             <View style={{width:windowWidth, alignSelf:'center', paddingHorizontal:dpx(7),}}>
            
            <View style={StyleComponent.AgendaScreenRidesDetailsItemView}>
            <View style={[StyleComponent.AgendaScreenRidesDetailsItemHeaderTypeView,{backgroundColor:'#D1FFEF',}]}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemHeaderTypeText}>Hurray..!</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemHeaderType2Text}>You have successfully completed your ride</Text>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Vehicle Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Driver Name</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Alice Johnson</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Manufacturer</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Mitsubishi</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Model</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Xpander</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Color</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>White</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Vehicle Reg. No</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>AD 1234B</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Ride Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Point</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Saint Christophe, 11020, Aosta Valley...</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Drop-off Point</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>Parco di Monza, Viale Brianzza, Italy...</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Date</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>12/12/2023</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Pickup Time</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>10:00 AM</Text>
            </View>
            </View>

            <View style={StyleComponent.AgendaScreenRidesDetailsItemInnerView}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowHeadingText}>Payment Summary</Text>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Booking Id</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>#AA1263749</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Booking Date</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>10/12/2023</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Subtotal Amount</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>€ 10.05</Text>
            </View>
            <View style={StyleComponent.AgendaScreenRidesDetailsItemRow}>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowLeftText}>Payment Method</Text>
            <Text style={StyleComponent.AgendaScreenRidesDetailsItemRowRightText}>PayPal</Text>
            </View>
            </View>

            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:dpx(15),}}>
            <TouchableOpacity style={{backgroundColor:'#EC5D41', shadowColor:'#000', shadowRadius:6, elevation:6, paddingHorizontal:dpx(14), paddingVertical:dpx(4), borderRadius:dpx(50),}}><Text style={{color:'#fff', fontSize:dpx(24), fontFamily:'Commissioner-Bold',}}>SHARE RIDE</Text></TouchableOpacity>
            </View>

            </View>

             :
            <View style={{width:windowWidth, alignSelf:'center', paddingHorizontal:dpx(7),}}>

            <View style={StyleComponent.AgendaScreenRidesOfferedXtraTabsView}>
            <TouchableOpacity style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsTouch,{borderBottomColor:RidesTakenXtraTabActive==='upcoming'?'#EC5D41':'transparent'}]} onPress={()=>setRidesTakenXtraTabActive('upcoming')}>
            <Text style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsText,{color:RidesTakenXtraTabActive==='upcoming'?'#FF6107':'#607388'}]}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsTouch,{borderBottomColor:RidesTakenXtraTabActive==='cancelled'?'#EC5D41':'transparent'}]} onPress={()=>setRidesTakenXtraTabActive('cancelled')}>
            <Text style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsText,{color:RidesTakenXtraTabActive==='cancelled'?'#FF6107':'#607388'}]}>Cancelled</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsTouch,{borderBottomColor:RidesTakenXtraTabActive==='completed'?'#EC5D41':'transparent'}]} onPress={()=>setRidesTakenXtraTabActive('completed')}>
            <Text style={[StyleComponent.AgendaScreenRidesOfferedXtraTabsText,{color:RidesTakenXtraTabActive==='completed'?'#FF6107':'#607388'}]}>Completed</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleComponent.AgendaScreenRidesOfferedItemTouch} onPress={()=>{
              RidesTakenXtraTabActive === 'upcoming' ? setRidesTakenItemOpen('upcoming') :
              RidesTakenXtraTabActive === 'cancelled' ? setRidesTakenItemOpen('cancelled') :
              setRidesTakenItemOpen('completed');
            }}>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow1}>
            <Image style={[StyleComponent.AgendaScreenRidesOfferedItemRow1Icon, {aspectRatio:Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).width/Image.resolveAssetSource(require('./assets/img/ArrivalDestinationLocation.png')).height,}]} source={require('./assets/img/ArrivalDestinationLocation.png')} />
            <Text style={StyleComponent.AgendaScreenRidesOfferedItemRow1Text}>Italy Music Concert</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenItemRow1TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1Text}>Total Price</Text>
            <Text style={StyleComponent.AgendaScreenRidesTakenItemRow1BoldText}>€ 9.15</Text>
            </View>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2}>
            <View style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1}>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/callIcon.png')} /> 
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1Touch}>
            <Image style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchIcon} source={require('./assets/img/ChatIcon.png')} />
            <Text style={StyleComponent.AgendaScreenRidesTakenItemTouchRow2Colum1TouchText}>Chat</Text>
            </TouchableOpacity>
            </View>
            <View style={StyleComponent.AgendaScreenRidesOfferedItemTouchRow2Colum2}>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2ImageView}>
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2Image} source={require('./assets/img/profilePicture.png')} />
            <Image style={StyleComponent.AgendaScreenRidesTakenRow2Colum2GenderIcon} source={require('./assets/img/FemaleIcon.png')} />
            </View>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextView}>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewNameText}>Alice Johnson</Text>
            <View style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarView}>
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/FullStar.png')),}]} source={require('./assets/img/StarsIcon/FullStar.png')} />
            <Image style={[StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarIcon,{aspectRatio:aspImg(require('./assets/img/StarsIcon/HalfStar.png')),}]} source={require('./assets/img/StarsIcon/HalfStar.png')} />
            </View>
            <Text style={StyleComponent.AgendaScreenRidesTakenRow2Colum2TextViewStarRatingText}>23 ratings</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>

            </View>
        }

        </View>

      }

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Agenda'} />
    </View>
  );
}

export default AgendaScreen;