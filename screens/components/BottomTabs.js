import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert, Switch } from 'react-native';
import {React, useState, useEffect} from 'react';
import StyleComponent from './StyleComponent';

const windowWidth = Dimensions.get('window').width;

const BottomTabsList = {
    StageTab:{
        Icon: require('..//assets/img/bottomTabIcons/Stage.png'),
        IconActive: require('..//assets/img/bottomTabIcons/StageActive.png'),
        IconAspect: Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Stage.png')).width / Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Stage.png')).height,
    },
    Rides:{
        Icon: require('..//assets/img/bottomTabIcons/Rides.png'),
        IconActive: require('..//assets/img/bottomTabIcons/RidesActive.png'),
        IconAspect: Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Rides.png')).width / Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Rides.png')).height,
    },
    Agenda:{
        Icon: require('..//assets/img/bottomTabIcons/Agenda.png'),
        IconActive: require('..//assets/img/bottomTabIcons/AgendaActive.png'),
        IconAspect: Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Agenda.png')).width / Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Agenda.png')).height,
    },
    Users:{
        Icon: require('..//assets/img/bottomTabIcons/Users.png'),
        IconActive: require('..//assets/img/bottomTabIcons/UsersActive.png'),
        IconAspect: Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Users.png')).width / Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Users.png')).height,
    },
    Profile:{
        Icon: require('..//assets/img/bottomTabIcons/Profile.png'),
        IconActive: require('..//assets/img/bottomTabIcons/ProfileActive.png'),
        IconAspect: Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Profile.png')).width / Image.resolveAssetSource(require('..//assets/img/bottomTabIcons/Profile.png')).height,
    },
};

const BottomTabs = ({navigation, screen}) => {
  return (
    <View style={StyleComponent.BottomTabMainView}>

    <TouchableOpacity style={StyleComponent.BottomTabTouch} onPress={()=>navigation.navigate('HomeScreen')}>
    <Image source={screen=='Stage'?BottomTabsList.StageTab.IconActive:BottomTabsList.StageTab.Icon} style={[StyleComponent.BottomTabTouchIcon,{aspectRatio:BottomTabsList.StageTab.IconAspect,}]} />
    <Text style={[StyleComponent.BottomTabTouchText,{color: screen=='Stage'?'#ff8616':'#979797'}]}>Stage</Text>
    </TouchableOpacity>

    <TouchableOpacity style={StyleComponent.BottomTabTouch} onPress={()=>navigation.navigate('RideScreen')}>
    <Image source={screen=='Rides'?BottomTabsList.Rides.IconActive:BottomTabsList.Rides.Icon} style={[StyleComponent.BottomTabTouchIcon,{aspectRatio:BottomTabsList.Rides.IconAspect,}]} />
    <Text style={[StyleComponent.BottomTabTouchText,{color: screen=='Rides'?'#ff8616':'#979797'}]}>Rides</Text>
    </TouchableOpacity>

    <TouchableOpacity style={StyleComponent.BottomTabTouch} onPress={()=>navigation.navigate('AgendaScreen')}>
    <Image source={screen=='Agenda'?BottomTabsList.Agenda.IconActive:BottomTabsList.Agenda.Icon} style={[StyleComponent.BottomTabTouchIcon,{aspectRatio:BottomTabsList.Agenda.IconAspect,}]} />
    <Text style={[StyleComponent.BottomTabTouchText,{color: screen=='Agenda'?'#ff8616':'#979797'}]}>Agenda</Text>
    </TouchableOpacity>

    <TouchableOpacity style={StyleComponent.BottomTabTouch} onPress={()=>navigation.navigate('UserScreen')}>
    <Image source={screen=='Users'?BottomTabsList.Users.IconActive:BottomTabsList.Users.Icon} style={[StyleComponent.BottomTabTouchIcon,{aspectRatio:BottomTabsList.Users.IconAspect,}]} />
    <Text style={[StyleComponent.BottomTabTouchText,{color: screen=='Users'?'#ff8616':'#979797'}]}>Users</Text>
    </TouchableOpacity>

    <TouchableOpacity style={StyleComponent.BottomTabTouch} onPress={()=>navigation.navigate('UserProfile')}>
    <Image source={screen=='Profile'?BottomTabsList.Profile.IconActive:BottomTabsList.Profile.Icon} style={[StyleComponent.BottomTabTouchIconProfile,{aspectRatio:BottomTabsList.Profile.IconAspect,}]} />
    <Text style={[StyleComponent.BottomTabTouchText,{color: screen=='Profile'?'#ff8616':'#979797'}]}>Profile</Text>
    </TouchableOpacity>

    </View>
  )
}

export default BottomTabs;