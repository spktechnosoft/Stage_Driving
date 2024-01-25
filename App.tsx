import React, {useEffect, useState} from 'react';
import {View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import IntroScreen from './screens/IntroScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordStep1Screen from './screens/ForgotPasswordStep1Screen';
import ResetPassword from './screens/ResetPassword';
import ForgotPasswordStep2Screen from './screens/ForgotPasswordStep2Screen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import EventDetails from './screens/EventDetails';
import TermsAndConditionScreen from './screens/TermsAndConditionScreen';
import ForumScreen from './screens/ForumScreen';
import SelectCityScreen from './screens/SelectCityScreen';
import NotificationScreen from './screens/NotificationScreen';
import RideScreen from './screens/RideScreen';
import FindRideScreen from './screens/FindRideScreen';
import RidesFoundScreen from './screens/RidesFoundScreen';
import RouteDetailsScreen from './screens/RouteDetailsScreen';
import BookingSummaryScreen from './screens/BookingSummaryScreen';
import CancelRideScreen from './screens/CancelRideScreen';
import SavedVehicleScreen from './screens/SavedVehicleScreen';
import OfferRideScreen from './screens/OfferRideScreen';
import AgendaScreen from './screens/AgendaScreen';
import UserProfile from './screens/UserProfile';
import WalletScreen from './screens/WalletScreen';
import AddBalanceScreen from './screens/AddBalanceScreen';
import WithdrawScreen from './screens/WithdrawScreen';
import FaqScreen from './screens/FaqScreen';
import SelectLanguageScreen from './screens/SelectLanguageScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import DeleteAccount from './screens/DeleteAccount';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsAndCondition from './screens/TermsAndCondition';
import RefundPolicy from './screens/RefundPolicy';
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [hideSplash, setHideSplash] = useState(false);
  useEffect(()=>{
  setTimeout(()=>{
    setHideSplash(true);
  },1000)
  },[]);
  if (!hideSplash){
    return(
      <View>
    <StatusBar hidden={true} />
    <SplashScreen />
  </View>
    );
  }
return(
    <NavigationContainer>
    <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName='IntroScreen' screenOptions={{headerShown: false,}}>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordStep1Screen" component={ForgotPasswordStep1Screen} />
        <Stack.Screen name="ForgotPasswordStep2Screen" component={ForgotPasswordStep2Screen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="TermsAndConditionScreen" component={TermsAndConditionScreen} />
        <Stack.Screen name="ForumScreen" component={ForumScreen} />
        <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="RideScreen" component={RideScreen} />
        <Stack.Screen name="FindRideScreen" component={FindRideScreen} />
        <Stack.Screen name="RidesFoundScreen" component={RidesFoundScreen} />
        <Stack.Screen name="RouteDetailsScreen" component={RouteDetailsScreen} />
        <Stack.Screen name="BookingSummaryScreen" component={BookingSummaryScreen} />
        <Stack.Screen name="CancelRideScreen" component={CancelRideScreen} />
        <Stack.Screen name="SavedVehicleScreen" component={SavedVehicleScreen} />
        <Stack.Screen name="OfferRideScreen" component={OfferRideScreen} />
        <Stack.Screen name="AgendaScreen" component={AgendaScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="AddBalanceScreen" component={AddBalanceScreen} />
        <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
        <Stack.Screen name="FaqScreen" component={FaqScreen} />
        <Stack.Screen name="SelectLanguageScreen" component={SelectLanguageScreen} />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
        <Stack.Screen name="RefundPolicy" component={RefundPolicy} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
);

}


export default App;
