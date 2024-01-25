import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, Switch, PixelRatio } from 'react-native';
import {React, useState} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';
import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

const dpx = (px) => {
  const screenWidthDp = windowWidth / 530;
  const designPx = PixelRatio.roundToNearestPixel(px);
  return designPx * screenWidthDp;
};

const eventImageAspR =Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).width / Image.resolveAssetSource(require('./assets/img/EventImageGallery/SlideEvent2.png')).height;

const EventDetails = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Text style={StyleComponent.HeaderEventTitle}>Rock n Roll Italy</Text>
      </View>
      <View style={StyleComponent.mainBody}>
      
      <View style={{position:'relative', marginBottom:40,}}>
      <Image source={require('./assets/img/EventImageGallery/SlideEvent2.png')} style={{width:windowWidth, height:'auto', aspectRatio:eventImageAspR,}} />
      <View style={StyleComponent.EventScreenTagsView}>
      <Text style={StyleComponent.EventScreenTagsViewText}>Music</Text>
      <Text style={StyleComponent.EventScreenTagsViewText}>Rock</Text>
      </View>
      </View>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingBottom:0, paddingHorizontal:15, backgroundColor:'#fff', marginTop:10, }}>
      
      <View style={StyleComponent.EventDetailsHeadlineSection}>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemRow}>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemImageView}>
      <Image style={StyleComponent.EventDetailsHeadlineSectionItemImage} source={require('./assets/img/MusicIcon.png')} />
      </View>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemTextView}>
      <Text style={StyleComponent.EventDetailsHeadlineSectionItemTextMain}>Rock n Roll Italy</Text>
      </View>
      </View>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemRow}>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemImageView}>
      <Image style={StyleComponent.EventDetailsHeadlineSectionItemImage} source={require('./assets/img/CalendarIconFilled.png')} />
      </View>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemTextView}>
      <Text style={StyleComponent.EventDetailsHeadlineSectionItemTextOne}>October 08, 2023</Text>
      <Text style={StyleComponent.EventDetailsHeadlineSectionItemTextTwo}>Saturday, 4:00PM - 10:00PM</Text>
      </View>
      </View>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemRow}>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemImageView}>
      <Image style={StyleComponent.EventDetailsHeadlineSectionItemImage} source={require('./assets/img/LocationIcon.png')} />
      </View>
      <View style={StyleComponent.EventDetailsHeadlineSectionItemTextView}>
      <Text style={StyleComponent.EventDetailsHeadlineSectionItemTextOne}>Mediolanum Forum</Text>
      <Text style={StyleComponent.EventDetailsHeadlineSectionItemTextTwo}>Via Giuseppe di Vittorio, 6, 20090 Assago, MI, Italy</Text>
      </View>
      </View>
      </View>

      <View style={StyleComponent.EventDetailsMapFrameMainView}>
      <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ width: windowWidth-44,}}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head>
                    </head>
                    <body>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.6662690766275!2d77.33858755842842!3d28.589799181980062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5074693e1f5%3A0x8624a95b5f585506!2sNoida%20Stadium!5e0!3m2!1sen!2sin!4v1703355040148!5m2!1sen!2sin" width="100%" height="600" style="border:0; border-radius: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />

        <View style={StyleComponent.EventDetailsMapFrameContentMainView}>
        <View style={StyleComponent.EventDetailsMapFrameContentTextView}>
        <Text style={StyleComponent.EventDetailsMapFrameContentTextOne}>Mediolanum Forum</Text>
        <Text style={StyleComponent.EventDetailsMapFrameContentTextTwo}>Via Guiseppe di Vittorio,
        6, 20090 Assago, MI, Italy.</Text>
        </View>
        <TouchableOpacity style={StyleComponent.EventDetailsMapFrameContentButtonTouch}>
        <Image style={StyleComponent.EventDetailsMapFrameContentButtonTouchIcon} source={require('./assets/img/DirectionIcon.png')} />
        </TouchableOpacity>
        </View>

      </View>

     <View style={StyleComponent.EventDetailAboutView}>

     <View style={StyleComponent.EventDetailAboutOrganiserView}>
     <View style={StyleComponent.EventDetailAboutOrganiserImageView}>
     <Image source={require('./assets/img/profilePicture.png')} style={StyleComponent.EventDetailAboutOrganiserImage} />
     </View>
     <View>
     <Text style={StyleComponent.EventDetailAboutOrganiserNameText}>Marcello Di Lucia</Text>
     <Text style={StyleComponent.EventDetailAboutOrganiserTagText}>Event Organiser</Text>
     </View>
     </View>

     <View style={StyleComponent.EventDetailAboutThisEventView}>
     <Text style={StyleComponent.EventDetailAboutThisEventHeadingText}>About this event</Text>
     <Text style={StyleComponent.EventDetailAboutThisEventBodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nunc nulla. Cras feugiat mauris a mauris sollicitudin, a molestie nunc blandit. Proin laoreet lacus non ultrices maximus. In sed sem porta, laoreet metus condimentum, laoreet velit. Nulla facilisi. In nec nibh eu neque vestibulum sagittis. Nullam eleifend nibh id nulla egestas bibendum. Praesent et porttitor lacus, nec pulvinar justo. Vivamus ullamcorper magna eget ligula ultrices, placerat ultrices urna tincidunt. Morbi consectetur iaculis magna viverra lacinia. In dictum eros sit amet elit faucibus posuere.</Text>
     </View>

     <View style={StyleComponent.EventDetailLikeShareMainView}>
     <TouchableOpacity style={StyleComponent.EventDetailLikeShareTouch}>
     <Image style={StyleComponent.EventDetailLikeShareTouchIcon} source={require('./assets/img/LikeaButtonNew.png')} />
     </TouchableOpacity>
     <TouchableOpacity style={StyleComponent.EventDetailLikeShareTouch}>
     <Image style={StyleComponent.EventDetailLikeShareTouchIcon} source={require('./assets/img/ShareButton.png')}  />
     </TouchableOpacity>
     <TouchableOpacity style={StyleComponent.EventDetailLikeShareTouch}>
     <Image style={StyleComponent.EventDetailLikeShareTouchIcon} source={require('./assets/img/SpotifyIcon.png')}  />
     </TouchableOpacity>
     <TouchableOpacity style={StyleComponent.EventDetailLikeShareTouch} onPress={()=>setModalVisible(true)}>
     <Image style={StyleComponent.EventDetailLikeShareTouchIcon} source={require('./assets/img/ParticipateButtonNew.png')}  />
     </TouchableOpacity>
     </View>

     </View>

     <View style={StyleComponent.EventScreenMoreInfoMainView}>

     <Text style={StyleComponent.EventScreenMoreInfoItemColumnHeader}>Other informations</Text>
     
     <TouchableOpacity style={StyleComponent.EventScreenMoreInfoItemRow} onPress={()=>navigation.navigate('TermsAndConditionScreen')}>
     <Image source={require('./assets/img/InfoIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>More info about the Event</Text>
     <Image source={require('./assets/img/ArrowIconColored.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     </TouchableOpacity>
     <TouchableOpacity style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/TicketIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>Ticket Registration</Text>
     <Image source={require('./assets/img/ArrowIconColored.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     </TouchableOpacity>
     <TouchableOpacity style={StyleComponent.EventScreenMoreInfoItemRow} onPress={()=>navigation.navigate('ForumScreen')}>
     <Image source={require('./assets/img/DiscussIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>Event Forum & Discussion</Text>
     <Image source={require('./assets/img/ArrowIconColored.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     </TouchableOpacity>

     </View>

     <View style={StyleComponent.EventScreenRidesInformationsMainView}>
     <View style={StyleComponent.EventScreenRidesInformationsHeaderView}>
     <Text style={StyleComponent.EventScreenRidesInformationsRidesAvailableRowHeader}>Rides Informations</Text>
     <View style={StyleComponent.EventScreenRidesInformationsRidesAvailableRow}>
     <Image source={require('./assets/img/EventImageGallery/MembersGoingColorBordered.png')} style={StyleComponent.EventScreenRidesInformationsRidesMembersIcon} />
     <Text style={StyleComponent.EventScreenRidesInformationsRidesAvailableText}>250+ Rides Avl</Text>
     </View>
     </View>
     <TouchableOpacity style={StyleComponent.EventScreenRidesInformationsTouchOne} onPress={()=>navigation.navigate('RidesFoundScreen')}>
     <Image style={StyleComponent.EventScreenRidesInformationsTouchOneIcon} source={require('./assets/img/TakingRidesIcon.png')} />
     <Text style={StyleComponent.EventScreenRidesInformationsTouchOneText}>Search for Ride</Text>
     <Image style={StyleComponent.EventScreenRidesInformationsTouchOneIcon} source={require('./assets/img/ArrowIconWhite.png')} />
     </TouchableOpacity>
     <TouchableOpacity style={StyleComponent.EventScreenRidesInformationsTouchTwo}>
     <Image style={StyleComponent.EventScreenRidesInformationsTouchTwoIcon} source={require('./assets/img/OfferRideIcon.png')} />
     <Text style={StyleComponent.EventScreenRidesInformationsTouchTwoText} >Offer a Ride</Text>
     <Image style={StyleComponent.EventScreenRidesInformationsTouchTwoIcon} source={require('./assets/img/ArrowIconColored.png')}  />
     </TouchableOpacity>
     </View>

      </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{width:windowWidth, height:'100%', backgroundColor:'rgba(47, 56, 66, 0.9);', alignItems:'center', justifyContent:'center', padding:15,}}>
          <View style={{backgroundColor:'#fff', borderColor:'#FF6107', borderWidth:2, borderRadius:25, padding:15,}}>
            <Text style={{color:'#FF6107', fontFamily:'Commissioner-Bold', fontSize:dpx(32),}}>I'll Participate</Text>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Text style={{color:'#607388', fontFamily:'Commissioner-Bold', fontSize:dpx(25), marginRight:10,}}>Do you have event tickets?</Text>
            <Switch
        trackColor={{false: '#767577', true: '#FF8616'}}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            </View>
            <TouchableOpacity style={{backgroundColor:'#EC5D41', alignSelf:'center', paddingHorizontal:30, paddingVertical:5, borderRadius:50, marginTop:30, width:'100%',}} onPress={()=>setModalVisible(false)}>
            <Text style={{color:'#fff', fontFamily:'Commissioner-Bold', fontSize:dpx(24),}}>{isEnabled?'Confirm':'BUY TICKETS'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      </View>

      <BottomTabs navigation={navigation} screen={'Stage'} />
    </View>
  )
}

export default EventDetails;