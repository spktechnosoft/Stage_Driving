import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {React} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;

const TermsAndConditionScreen = ({navigation}) => {
  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Text style={StyleComponent.HeaderEventTitle}>Rock n Roll Italy</Text>
      </View>
      <View style={StyleComponent.mainBody}>
      
      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingBottom:30, paddingHorizontal:15, backgroundColor:'#fff', marginTop:10, }}>
      
      <Text style={StyleComponent.EventDetailAboutOrganiserNameText}>More info about the event</Text>
      <View style={{width:windowWidth, height:2, backgroundColor:'#FF8616', marginTop:8, alignSelf:'center',}}></View>

      <View style={{shadowColor:'#000', shadowRadius:8, elevation:8, backgroundColor:'#fff', width:windowWidth, alignSelf:'center', paddingHorizontal:15, marginBottom:15, paddingBottom:8,}}>
      <Text style={StyleComponent.EventScreenMoreInfoItemColumnHeader}>Event Facilities</Text>
      </View>
      <View style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/ParkingIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>Vehicle Parking</Text>
     </View>
     <View style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/RestroomIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>Restroom Facility</Text>
     </View>
     <View style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/CouplesIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>Couples Entry</Text>
     </View>
     <View style={[StyleComponent.EventScreenMoreInfoItemRow,{marginBottom:0,}]}>
     <Image source={require('./assets/img/DineIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>Dinning Facility</Text>
     </View>

     <View style={{shadowColor:'#000', shadowRadius:8, elevation:8, backgroundColor:'#fff', width:windowWidth, alignSelf:'center', paddingHorizontal:15, marginBottom:15, paddingBottom:8,}}>
      <Text style={StyleComponent.EventScreenMoreInfoItemColumnHeader}>Event Restrictions</Text>
      </View>
      <View style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/noDogsIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>No Pets Allowed</Text>
     </View>
     <View style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/NoSmokingIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>No Smoking Allowed</Text>
     </View>
     <View style={StyleComponent.EventScreenMoreInfoItemRow}>
     <Image source={require('./assets/img/NoDrinkingIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>No Drinking Allowed</Text>
     </View>
     <View style={[StyleComponent.EventScreenMoreInfoItemRow,{marginBottom:0,}]}>
     <Image source={require('./assets/img/NoFoodIcon.png')} style={StyleComponent.EventScreenMoreInfoItemRowIcon} />
     <Text style={StyleComponent.EventScreenMoreInfoItemRowText}>No Outside Food Allowed</Text>
     </View>

     <View style={{shadowColor:'#000', shadowRadius:8, elevation:8, backgroundColor:'#fff', width:windowWidth, alignSelf:'center', paddingHorizontal:15, marginBottom:15, paddingVertical:8,}}>
      <Text style={StyleComponent.EventScreenMoreInfoItemColumnHeader}>Terms & Conditions</Text>
      </View>
      <Text style={StyleComponent.EventDetailAboutThisEventBodyText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare enim. Etiam vestibulum, lacus id imperdiet accumsan, mauris nunc accumsan ante, vel bibendum lectus nibh eget elit. Suspendisse ultricies efficitur enim sit amet condimentum. Nullam dapibus elementum est eu dignissim. Pellentesque finibus sapien hendrerit est pellentesque lacinia. Donec aliquam quam sit amet tempor sodales. Morbi sit amet quam tincidunt, egestas libero in, varius mi. Curabitur rhoncus tincidunt lacus a malesuada. Mauris tempor metus eget sapien elementum rutrum. Etiam pharetra, mi eu euismod placerat, erat massa congue eros, eu blandit quam tortor sed quam. Ut placerat mauris sed est imperdiet mattis.
Nulla consequat ac ex sed pharetra. Praesent libero nulla, feugiat sed dignissim ut, laoreet in ipsum. Curabitur feugiat pulvinar metus, vitae lacinia lacus semper eget. Integer a pretium nisl. Sed sed tristique libero. Curabitur sodales posuere neque in fringilla. Nam blandit bibendum condimentum. Vivamus eu molestie mi. Vivamus consequat arcu a ex tempus efficitur. Nullam condimentum fermentum nunc rhoncus vestibulum. Maecenas porttitor, ante a dapibus lobortis, nibh tellus venenatis elit, pulvinar sollicitudin neque nisl pulvinar lacus. Duis risus est, fermentum at tristique ac, mattis at risus. Ut est felis, ornare ac efficitur in, auctor maximus arcu. Curabitur bibendum at arcu et posuere. Donec placerat magna id dapibus tincidunt.
Suspendisse vel pulvinar purus, eget laoreet metus. Suspendisse auctor tortor eget mi laoreet dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend tortor nec augue tristique condimentum. Vestibulum varius sagittis lectus vel placerat. Curabitur ornare at ipsum ac suscipit. Etiam id pulvinar sapien. Nulla commodo augue a massa laoreet gravida. Curabitur sit amet risus consequat, tempor lorem sed, consequat eros. Nullam eu odio arcu. Vivamus a nibh posuere, tempus felis nec, tincidunt leo.
Donec sed lectus eros. Maecenas id maximus ipsum, at accumsan metus. Nulla eget magna fermentum, cursus velit ut, placerat lacus. Praesent fringilla non odio et luctus. Integer et mi orci. Etiam ac nunc tellus. Sed venenatis sagittis mi vel vulputate. Sed molestie nulla lorem, et aliquam mi facilisis sed. Phasellus consectetur euismod neque in fermentum. Vestibulum vel faucibus ante. Cras ac felis at metus porta gravida in at nunc. Sed pulvinar condimentum justo, eu volutpat lacus interdum ut. Cras iaculis neque in nisl mollis, sed euismod tellus fermentum. Aliquam erat volutpat. Nunc in nulla pellentesque, varius mauris eu, consequat ipsum. Vivamus blandit, orci porttitor volutpat aliquam, urna magna vehicula tellus, eget faucibus ante sem in enim.
Donec sed lectus eros. Maecenas id maximus ipsum, at accumsan metus. Nulla eget magna fermentum, cursus velit ut, placerat lacus. Praesent fringilla non odio et luctus. Integer et mi orci. Etiam ac nunc tellus. Sed venenatis sagittis mi vel vulputate. Sed molestie nulla lorem, et aliquam mi facilisis sed. Phasellus consectetur euismod neque in fermentum. Vestibulum vel faucibus ante. Cras ac felis at metus porta gravida in at nunc. Sed pulvinar condimentum justo, eu volutpat lacus interdum ut. Cras iaculis neque in nisl mollis, sed euismod tellus fermentum. Aliquam erat volutpat. Nunc in nulla pellentesque, varius mauris eu, consequat ipsum. Vivamus blandit, orci porttitor volutpat aliquam, urna magna vehicula tellus, eget faucibus ante sem in enim.
Donec sed lectus eros. Maecenas id maximus ipsum, at accumsan metus. Nulla eget magna fermentum, cursus velit ut, placerat lacus. Praesent fringilla non odio et luctus. Integer et mi orci. Etiam ac nunc tellus. Sed venenatis sagittis mi vel vulputate. Sed molestie nulla lorem, et aliquam mi facilisis sed. Phasellus consectetur euismod neque in fermentum. Vestibulum vel faucibus ante. Cras ac felis at metus porta gravida in at nunc. Sed pulvinar condimentum justo, eu volutpat lacus interdum ut. Cras iaculis neque in nisl mollis, sed euismod tellus fermentum. Aliquam erat volutpat. Nunc in nulla pellentesque, varius mauris eu, consequat ipsum. Vivamus blandit, orci porttitor volutpat aliquam, urna magna vehicula tellus, eget faucibus ante sem in enim.
      </Text>

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Stage'} />
    </View>
  );
}

export default TermsAndConditionScreen;