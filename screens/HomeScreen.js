import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert, FlatList, PixelRatio } from 'react-native';
import {React, useState, useEffect} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { getPreciseDistance } from 'geolib';


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

  const numColumns = 2;

const CategoriesTagsList = ['Rock', 'Pop', 'Classical', 'Jazz', 'Indie',];

const FeaturedEventList =[
  {
    Id:1,
    Date:'08 Oct',
    Title:'Italian Music Concerto',
    Category:'Rock',
    RidesAvailable:150,
    EventPlace:'Mediolanum Forum',
    EventImage:require('./assets/img/EventImageGallery/SlideEvent1.png'),
    EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent1.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent1.png')).height,
  },
  {
    Id:2,
    Date:'08 Oct',
    Title:'Rock n Roll',
    Category:'Rock',
    RidesAvailable:150,
    EventPlace:'Stadio di Domiziano',
    EventImage:require('./assets/img/EventImageGallery/SlideEvent2.png'),
    EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).height,
  },
  {
    Id:3,
    Date:'08 Oct',
    Title:'Rock n Roll',
    Category:'Rock',
    RidesAvailable:150,
    EventPlace:'Palasport di Genova',
    EventImage:require('./assets/img/EventImageGallery/SlideEvent3.png'),
    EventImageAsp:Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent3.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent3.png')).height,
  },
];

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

const HomeScreen = ({navigation}) => {
  const [activeIndexCarousel, setActiveIndexCarousel] = useState(0);
  const [MapViewActive, setMapViewActive] = useState(true);

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(()=>{
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      });
    });
  },[]);

  return (
    <View style={StyleComponent.ScreenContainer}>
      
    <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch,{left:'none', right:15, flexDirection:'row', alignItems:'center', bottom:10,}]} onPress={()=>navigation.navigate('SelectCityScreen')}>
      <Text style={StyleComponent.HeaderSelectCityText}>Milano</Text>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn,{transform:[{rotate: '180deg'}], marginTop:3,}]} />
      </TouchableOpacity>
      <Image source={require('./assets/img/LogoTextHeader.png')} style={StyleComponent.headerLogo} />
      </View>

      <View style={[StyleComponent.mainBody, {position:'relative',}]}>

      <View style={StyleComponent.SearchTopMainView}>
      <Image source={require('./assets/img/Logo.png')} style={StyleComponent.SearchTopMainViewLogo} />
      <View style={StyleComponent.SearchTopMainTextInputView}>
      <TextInput 
      style={StyleComponent.SearchTopMainTextInput}
      placeholder='Search here...'
      placeholderTextColor={'#8A9AAC'}
      />
      <TouchableOpacity style={StyleComponent.SearchTopMainSearchTouch}>
      <Image style={StyleComponent.SearchTopMainSearchTouchIcon} source={require('./assets/img/SearchIcon.png')} />
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={StyleComponent.SearchTopMainFilterTouch}>
      <View style={StyleComponent.SearchTopMainFilterTouchDividerViewOne}></View>
      <View style={StyleComponent.SearchTopMainFilterTouchDividerViewTwo}></View>
      <View style={StyleComponent.SearchTopMainFilterTouchDividerViewThree}></View>
      </TouchableOpacity>
      </View>

      <View style={StyleComponent.TopCategoriesView}>
      
      <Text style={StyleComponent.SectionHeaderText}>Categories</Text>
      
      <FlatList
        data={CategoriesTagsList}
        horizontal
        renderItem={({item}) => {
          return(
            <TouchableOpacity style={[StyleComponent.TopCategoriesViewFlatlistCategoryListTouch,{backgroundColor:item==='Rock'?'#FF6107':'transparent'}]}>
            <Text style={[StyleComponent.TopCategoriesViewFlatlistCategoryListTouchText,{color:item==='Rock'?'#fff':'#FF6107'}]}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      
      </View>

      {
        !MapViewActive ?
        <ScrollView style={{width:windowWidth,}}>
      <View style={{width:'100%', paddingBottom:30,}}>
      
      <View style={StyleComponent.SectionMainView}>

      <View style={StyleComponent.SectionHeaderView}>
      <Text style={StyleComponent.SectionHeaderText}>Featured Events</Text>
      <TouchableOpacity>
      <Text style={StyleComponent.SectionHeaderTouchText}>See all</Text>
      </TouchableOpacity>
      </View>

      <View style={StyleComponent.CarouselFlatListView}>
      <FlatList 
      data={FeaturedEventList}
      horizontal
      pagingEnabled
      renderItem={({item}) => {
        return(
          <View style={StyleComponent.sliderFlatListMainView}>
          <View style={StyleComponent.sliderTxtBtnView}>
          <Text style={StyleComponent.sliderTitle}>{item.Title}</Text>
          <TouchableOpacity style={StyleComponent.sliderTouch} onPress={()=>navigation.navigate('EventDetails')}>
          <Text style={StyleComponent.sliderTouchText}>Know More</Text>
          </TouchableOpacity>
          </View>
          <Image source={item.EventImage} style={StyleComponent.SliderImageEvent} resizeMode='cover' />
          </View>
        );
      }}
      onScroll={(event)=>{
        const offset = event.nativeEvent.contentOffset.x;
        const indexValue = offset/windowWidth;
        setActiveIndexCarousel(Math.round(indexValue));
      }}
      />
      <View style={StyleComponent.CarouselCircleRowView}>
      {FeaturedEventList.map((item,index)=>{
        return(
          <View key={item.Id} style={[StyleComponent.CarouselCircleRowItem,{width:index==activeIndexCarousel?12:8, height:index==activeIndexCarousel?12:8,}]}></View>
        );
      })}
      </View>
      </View>

      </View>

      <View style={StyleComponent.SectionMainView}>
      <View style={StyleComponent.SectionHeaderView}>
      <Text style={StyleComponent.SectionHeaderText}>Nearby Your Location</Text>
      <TouchableOpacity>
      <Text style={StyleComponent.SectionHeaderTouchText}>See all</Text>
      </TouchableOpacity>
      </View>
      <View style={StyleComponent.FlatListViewEvents}>
      <FlatList 
      data={EventList}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({item}) => {
        return(
          <View style={StyleComponent.FlatListViewEventsMainView}>
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
            <View style={StyleComponent.FlatListViewEventsItemRidesAvailableView}>
            <Image style={StyleComponent.FlatListViewEventsDummyMembersIcon} source={require('./assets/img/EventImageGallery/MembersGoing.png')} />
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableNumber}>{item.RidesAvailable}</Text>
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableText}>Rides Avl.</Text>
            </View>
          </View>
          <View style={StyleComponent.FlatListViewEventsItemPlaceIconTextView}>
          <Image source={require('./assets/img/ItemPlaceIcon.png')} style={StyleComponent.FlatListViewEventsItemPlaceIcon} />
          <Text style={StyleComponent.FlatListViewEventsItemPlaceText}>{item.EventPlace}</Text>
          </View>

          <View style={StyleComponent.FlatListViewEventsItemButtonsView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/LikeButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ParticipateButton.png')} />
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
      </View>

      <View style={StyleComponent.SectionMainView}>
      <View style={StyleComponent.SectionHeaderView}>
      <Text style={StyleComponent.SectionHeaderText}>Trending Events</Text>
      <TouchableOpacity>
      <Text style={StyleComponent.SectionHeaderTouchText}>See all</Text>
      </TouchableOpacity>
      </View>
      <View style={StyleComponent.FlatListViewEvents}>
      <FlatList 
      data={EventList}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({item}) => {
        return(
          <View style={StyleComponent.FlatListViewEventsMainView}>
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
            <View style={StyleComponent.FlatListViewEventsItemRidesAvailableView}>
            <Image style={StyleComponent.FlatListViewEventsDummyMembersIcon} source={require('./assets/img/EventImageGallery/MembersGoing.png')} />
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableNumber}>{item.RidesAvailable}</Text>
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableText}>Rides Avl.</Text>
            </View>
          </View>
          <View style={StyleComponent.FlatListViewEventsItemPlaceIconTextView}>
          <Image source={require('./assets/img/ItemPlaceIcon.png')} style={StyleComponent.FlatListViewEventsItemPlaceIcon} />
          <Text style={StyleComponent.FlatListViewEventsItemPlaceText}>{item.EventPlace}</Text>
          </View>

          <View style={StyleComponent.FlatListViewEventsItemButtonsView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/LikeButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ParticipateButton.png')} />
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
      </View>

      <View style={StyleComponent.SectionMainView}>
      <View style={StyleComponent.SectionHeaderView}>
      <Text style={StyleComponent.SectionHeaderText}>Event by Date</Text>
      <TouchableOpacity>
      <Text style={StyleComponent.SectionHeaderTouchText}>See all</Text>
      </TouchableOpacity>
      </View>
      <View style={StyleComponent.FlatListViewEvents}>
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
            <View style={StyleComponent.FlatListViewEventsItemRidesAvailableView}>
            <Image style={StyleComponent.FlatListViewEventsDummyMembersIcon} source={require('./assets/img/EventImageGallery/MembersGoing.png')} />
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableNumber}>{item.RidesAvailable}</Text>
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableText}>Rides Avl.</Text>
            </View>
          </View>
          <View style={StyleComponent.FlatListViewEventsItemPlaceIconTextView}>
          <Image source={require('./assets/img/ItemPlaceIcon.png')} style={StyleComponent.FlatListViewEventsItemPlaceIcon} />
          <Text style={StyleComponent.FlatListViewEventsItemPlaceText}>{item.EventPlace}</Text>
          </View>

          <View style={StyleComponent.FlatListViewEventsItemButtonsView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/LikeButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ParticipateButton.png')} />
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
      </View>

      <View style={StyleComponent.SectionMainView}>
      <View style={StyleComponent.ScreenBannerView}>
      <Text style={StyleComponent.ScreenBannerViewText}>Can't find what you are looking for?</Text>
      <TouchableOpacity style={StyleComponent.ScreenBannerTouch}>
      <Text style={StyleComponent.ScreenBannerTouchText}>Let us know</Text>
      </TouchableOpacity>
      </View>
      </View>

      <View style={StyleComponent.SectionMainView}>
      <View style={StyleComponent.SectionHeaderView}>
      <Text style={StyleComponent.SectionHeaderText}>Recommended for You</Text>
      <TouchableOpacity>
      <Text style={StyleComponent.SectionHeaderTouchText}>See all</Text>
      </TouchableOpacity>
      </View>
      <View style={StyleComponent.FlatListViewEvents}>
      <FlatList 
      data={EventList}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({item}) => {
        return(
          <View style={StyleComponent.FlatListViewEventsMainView}>
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
            <View style={StyleComponent.FlatListViewEventsItemRidesAvailableView}>
            <Image style={StyleComponent.FlatListViewEventsDummyMembersIcon} source={require('./assets/img/EventImageGallery/MembersGoing.png')} />
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableNumber}>{item.RidesAvailable}</Text>
            <Text style={StyleComponent.FlatListViewEventsItemRidesAvailableText}>Rides Avl.</Text>
            </View>
          </View>
          <View style={StyleComponent.FlatListViewEventsItemPlaceIconTextView}>
          <Image source={require('./assets/img/ItemPlaceIcon.png')} style={StyleComponent.FlatListViewEventsItemPlaceIcon} />
          <Text style={StyleComponent.FlatListViewEventsItemPlaceText}>{item.EventPlace}</Text>
          </View>

          <View style={StyleComponent.FlatListViewEventsItemButtonsView}>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/LikeButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleComponent.FlatListViewEventsItemButtonsTouch}>
          <Image style={StyleComponent.FlatListViewEventsItemButtonsTouchIcon} source={require('./assets/img/ParticipateButton.png')} />
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
      </View>

      </View>
      </ScrollView>
      :
      <View style={styles.container}>

      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={position} >

      <Marker
      coordinate={position}
      title={'Yor are here'}
      description={'0 miles away'}>
      <Image source={require('./assets/img/PinLocation.png')} style={{width:dpx(48), height:'auto', aspectRatio:aspImg(require('./assets/img/PinLocation.png')),}} />
      </Marker>

      <Marker coordinate={{latitude: 23.6818359, longitude: 86.9681059}} >
      
      <Image source={require('./assets/img/MapMarker.png')} style={{width:dpx(30), height:'auto', aspectRatio:aspImg(require('./assets/img/MapMarker.png')),}} />

      <Callout>
      <View style={{width:dpx(173), backgroundColor:'#FFE9D4', paddingVertical:dpx(6), paddingHorizontal:dpx(10), borderRadius:dpx(8),}}>
      <TouchableOpacity onPress={()=>Alert.alert(1)}>
      <Text style={{color:'#FF6107', fontFamily:'Commissioner-Bold', fontSize:dpx(14),}}>Rock n Roll</Text>
      </TouchableOpacity>
      <Text style={{color:'#607388', fontFamily:'Commissioner-Regular', fontSize:dpx(12),}}>{`${ Number(getPreciseDistance( { latitude: 23.6818359, longitude: 86.9681059}, { latitude: position.latitude, longitude: position.longitude},1 ) / 1609).toFixed(3)  } miles away` }</Text>
      </View>
      </Callout>

      </Marker>

    <Marker coordinate={{latitude: 23.696610, longitude: 86.970953}} >
      
      <Image source={require('./assets/img/MapMarker.png')} style={{width:dpx(30), height:'auto', aspectRatio:aspImg(require('./assets/img/MapMarker.png')),}} />
      
      <Callout>
      <View style={{width:dpx(173), backgroundColor:'#FFE9D4', paddingVertical:dpx(6), paddingHorizontal:dpx(10), borderRadius:dpx(8),}}>
      <TouchableOpacity onPress={()=>Alert.alert(1)}>
      <Text style={{color:'#FF6107', fontFamily:'Commissioner-Bold', fontSize:dpx(14),}}>Rock Festivia</Text>
      </TouchableOpacity>
      <Text style={{color:'#607388', fontFamily:'Commissioner-Regular', fontSize:dpx(12),}}>{`${ Number(getPreciseDistance( { latitude: 23.696610, longitude: 86.970953}, { latitude: position.latitude, longitude: position.longitude} ) / 1609).toFixed(3) } miles away` }</Text>
      </View>
      </Callout>
      
      </Marker>

      </MapView>
    </View>
      }

      <View style={StyleComponent.bottomMapViewChangerRow}>
      <TouchableOpacity style={[StyleComponent.bottomMapViewChangerRowTouch,{backgroundColor:!MapViewActive?'#ff8616':'transparent',}]} onPress={()=>setMapViewActive(false)}>
      <Text style={[StyleComponent.bottomMapViewChangerRowTouchText,{color:!MapViewActive?'#fff':'#FF6107',}]}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[StyleComponent.bottomMapViewChangerRowTouch,{backgroundColor:!MapViewActive?'transparent':'#ff8616',}]} onPress={()=>setMapViewActive(true)}>
      <Text style={[StyleComponent.bottomMapViewChangerRowTouchText,{color:!MapViewActive?'#FF6107':'#fff',}]}>Map</Text>
      </TouchableOpacity>
      </View>

      {
        !MapViewActive ? '': 
        <TouchableOpacity style={{position:'absolute', bottom:dpx(10), right:dpx(20),}} onPress={()=>{
          Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
              latitude: crd.latitude,
              longitude: crd.longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.05,
            });
            setTimeout(()=>{
              setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.00,
                longitudeDelta: 0.00,
              });
            },1000);
          });
        }} >
        <Image source={require('./assets/img/GpsIconMap.png')} style={{width:dpx(40), height:'auto', aspectRatio:aspImg(require('./assets/img/GpsIconMap.png')),}} />
        </TouchableOpacity>
      }
      
      </View>

        <BottomTabs navigation={navigation} screen={'Stage'} />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width:windowWidth,
    height:'100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });