import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, PixelRatio } from 'react-native';
import {React, useState, useEffect} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;
const dpx = (px) => {
    const screenWidthDp = windowWidth / 430;
    const designPx = PixelRatio.roundToNearestPixel(px);
    return designPx * screenWidthDp;
  };

const PopularCitiesListDummy =[
  {
    id:1,
    city:'Rome',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity1.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity1White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity1.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity1.png')).height,
    activeStatus: false,
  },
  {
    id:2,
    city:'Vatican',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity2.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity2White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity2.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity2.png')).height,
    activeStatus: false,
  },
  {
    id:3,
    city:'Pisa',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity3.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity3White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity3.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity3.png')).height,
    activeStatus: false,
  },
  {
    id:4,
    city:'Verona',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity4.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity4White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity4.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity4.png')).height,
    activeStatus: false,
  },
  {
    id:5,
    city:'Venice',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity5.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity5White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity5.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity5.png')).height,
    activeStatus: false,
  },
  {
    id:6,
    city:'Milan',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity6.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity6White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity6.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity6.png')).height,
    activeStatus: true,
  },
  {
    id:7,
    city:'Naples',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity3.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity3White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity3.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity3.png')).height,
    activeStatus: false,
  },
  {
    id:8,
    city:'Pompeii',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity5.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity5White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity5.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity5.png')).height,
    activeStatus: false,
  },
  {
    id:9,
    city:'Florence',
    cityIcon:require('./assets/img/PopularCitiesIcons/PopularCity1.png'),
    cityIconActive:require('./assets/img/PopularCitiesIcons/PopularCity1White.png'),
    cityIconAsp:Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity1.png')).width / Image.resolveAssetSource(require('./assets/img/PopularCitiesIcons/PopularCity1.png')).height,
    activeStatus: false,
  },
];

const OtherCitiesListDummy =[
    {
      id:1,
      city:'Atri',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:2,
      city:'Avenzzano',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:3,
      city:'Cheiti',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:4,
      city:'Lanciano',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:5,
      city:"L' Aquilla",
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:6,
      city:'Oranto',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:7,
      city:'Pescara',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:8,
      city:'Sulmona',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
      id:9,
      city:'Teramo',
      state:'Abruzzi',
      activeStatus: false,
    },
    {
        id:10,
        city:'Vasto',
        state:'Abruzzi',
        activeStatus: false,
      },
      {
        id:11,
        city:'Matera',
        state:'Basilicata',
        activeStatus: false,
      },
      {
        id:12,
        city:'Melfi',
        state:'Basilicata',
        activeStatus: false,
      },
      {
        id:13,
        city:'Potenza',
        state:'Basilicata',
        activeStatus: false,
      },
      {
        id:14,
        city:'Venosa',
        state:'Basilicata',
        activeStatus: false,
      },
      {
          id:15,
          city:'Catanzaro',
          state:'Calabria',
          activeStatus: false,
        },
        {
            id:16,
            city:'Cosenza',
            state:'Calabria',
            activeStatus: false,
          },
          {
            id:17,
            city:'Crotone',
            state:'Calabria',
            activeStatus: false,
          },
          {
            id:18,
            city:'Reggio di Calabria',
            state:'Calabria',
            activeStatus: false,
          },
          {
              id:19,
              city:'Vibo Valentia',
              state:'Calabria',
              activeStatus: false,
            },
            {
                id:20,
                city:'Amalfi',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:21,
                city:'Ariano Irpino',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:22,
                city:'Avellino',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:23,
                city:'Aversa',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:24,
                city:'Benevento',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:25,
                city:'Capua',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:26,
                city:'Caserta',
                state:'Campania',
                activeStatus: false,
              },
              {
                id:27,
                city:'Castellammare di Stabia',
                state:'Campania',
                activeStatus: false,
              },
  ];

  const stateList = [
    {
        id:1,
        state:'Abruzzi',
    },
    {
        id:2,
        state:'Basilicata',
    },
    {
        id:3,
        state:'Calabria',
    },
    {
        id:4,
        state:'Campania',
    }
  ];

const SelectCityScreen = ({navigation}) => {

  const [PopularCitiesList, setPopularCitiesList] = useState(PopularCitiesListDummy);
  const [OtherCitiesList, setOtherCitiesList] = useState(OtherCitiesListDummy);

  const selectedCityFetch = () => {
    const selectedCityFromPopular = PopularCitiesList.find((city) => city.activeStatus === true);
    if (selectedCityFromPopular) {
      return selectedCityFromPopular;
    }

    const selectedCityFromOther = OtherCitiesList.find((city) => city.activeStatus === true);
    if (selectedCityFromOther) {
      return selectedCityFromOther;
    }
    return null;
  };

  const [selectedCity, setSelectedCity] = useState(selectedCityFetch);

  useEffect(() => {
    const selectedCityFromPopular = PopularCitiesList.find((city) => city.activeStatus === true);
    if (selectedCityFromPopular) {
      setSelectedCity(selectedCityFromPopular);
    }

    const selectedCityFromOther = OtherCitiesList.find((city) => city.activeStatus === true);
    if (selectedCityFromOther) {
      setSelectedCity(selectedCityFromOther);
    }
  }, [OtherCitiesList, PopularCitiesList]);

  const updatePopularCitiesList = (selectedCityId) => {
    const updatedCitiesListPopular = PopularCitiesList.map((city) => ({
      ...city,
      activeStatus: selectedCityId === false ? true : false,
    }));
    setPopularCitiesList(updatedCitiesListPopular);
  };

  const updateOtherCitiesList = (selectedCityId) => {
    const updatedCitiesListOther = OtherCitiesList.map((city) => ({
      ...city,
      activeStatus: selectedCityId === false ? true : false,
    }));
    setOtherCitiesList(updatedCitiesListOther);
  };

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={[StyleComponent.headerNav,{justifyContent:'flex-start',}]}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Text style={[StyleComponent.HeaderEventTitle,{marginLeft:50,}]}>{selectedCity.city}</Text>
      <TouchableOpacity style={StyleComponent.SelectCityHeaderTouch}>
      <Image style={StyleComponent.SelectCityHeaderTouchIcon} source={require('./assets/img/GpsIcon.png')} />
      </TouchableOpacity>
      </View>
      <View style={[StyleComponent.mainBody]}>

      <View style={StyleComponent.SelectCityTopSearchBorderView}>
      <View style={StyleComponent.SelectCityTopSearchView}>
      <TextInput
      style={StyleComponent.SelectCityTopSearchViewTextInput}
      placeholder='Search for your city...'
      placeholderTextColor='#8A9AAC'
      />
      <TouchableOpacity style={StyleComponent.SelectCityTopSearchViewTouch}>
      <Image style={StyleComponent.SelectCityTopSearchViewTouchIcon} source={require('./assets/img/SearchIcon.png')} />
      </TouchableOpacity>
      </View>
      </View>

      <ScrollView style={{width:windowWidth,}}>
      <View style={{width:windowWidth, paddingHorizontal:15,}}>

      <Text style={StyleComponent.SelectCitySectionHeaderText}>POPULAR CITIES</Text>
      <View style={StyleComponent.SelectCityPopularCitiesView}>
        {PopularCitiesList.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              StyleComponent.SelectCityPopularCitiesTouch,
              { backgroundColor: item.city !== selectedCity.city ? 'transparent' : '#FF8616' },
            ]}
            onPress={() => {
              updatePopularCitiesList(item.id);
              setSelectedCity(item);
            }}>
            <Image
              source={item.city !== selectedCity.city ? item.cityIcon : item.cityIconActive}
              style={[
                StyleComponent.SelectCityPopularCitiesTouchIcon,
                { aspectRatio: item.cityIconAsp },
              ]}
            />
            <Text
              style={[
                StyleComponent.SelectCityPopularCitiesTouchText,
                { color: item.city !== selectedCity.city ? '#FF8616' : '#fff' },
              ]}>
              {item.city}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={StyleComponent.selectedCityBorderedViewTopBottom}>
      <Text style={[StyleComponent.SelectCitySectionHeaderText, {marginVertical:dpx(7),}]}>OTHER CITIES</Text>
      </View>

      {
        stateList.map((item, index) => (
                    <View key={item.id} style={StyleComponent.selectedCityOtherCityListMainView}>
                      <Text style={StyleComponent.selectedCityOtherCityStateText}>{item.state}</Text>
                      {OtherCitiesList.map((cityItem, cityIndex) => {
                        if (item.state === cityItem.state)
                          return (
                            <TouchableOpacity
                              key={cityItem.id}
                              style={[
                                StyleComponent.selectedCityOtherCityRowCity,
                                { backgroundColor: cityItem.city !== selectedCity.city ? '#fff' : '#c5c5c5' },
                              ]}
                              onPress={() => {
                                updateOtherCitiesList(cityItem.id);
                                setSelectedCity(cityItem);
                              }}>
                                <View style={StyleComponent.selectedCityOtherCityListStyle}></View>
                                <Text style={StyleComponent.selectedCityOtherCityListText}>{cityItem.city}</Text>
                            </TouchableOpacity>
                          );
                      })}
                    </View>
                  ))}

      </View>
      </ScrollView>

      </View>

      <BottomTabs navigation={navigation} screen={'Stage'} />
    </View>
  );
}

export default SelectCityScreen;