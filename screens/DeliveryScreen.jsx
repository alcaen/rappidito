import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { X } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import * as Progress from 'react-native-progress';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <SafeAreaView
      className={`bg-orange-600 w-full flex-col min-h-screen flex items-center`}
      style={{
        marginTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
      }}
    >
      <View className='flex flex-row justify-between px-4 items-center w-full mt-5 '>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <X
            className='text-white'
            size={32}
          />
        </TouchableOpacity>

        <Text className='text-white font-light'>Order Help</Text>
      </View>
      <View className='px-4 w-full mt-5 z-10'>
        <View className='flex-row flex items-center bg-white p-4 rounded-md w-full '>
          <View className=' flex flex-col space-y-2'>
            <Text className='text-gray-400'>Estimated Arrival</Text>
            <View className='flex flex-row justify-between items-center'>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>

            <Progress.Bar
              size={30}
              color='rgb(234 88 12)'
              indeterminate={true}
            />
            <Text className='text-gray-400 text-sm'>
              Your order at {restaurant.name} is being prepared
            </Text>
          </View>
          <Image
            source={{ uri: 'https://links.papareact.com/fls' }}
            className='h-20 w-20'
          />
        </View>
      </View>
      <MapView
        className='flex-1 w-full -mt-10 z-0'
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType='mutedStandard'
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.name}
          description={restaurant.description}
          identifier='origin'
          pinColor='rgb(234 88 12)'
        />
      </MapView>
      <View className='bg-white w-full p-4 flex flex-row justify-between items-center'>
        <View className='flex flex-row space-x-3 items-center justify-start'>
          <Image
            source={{
              uri: 'https://github.com/alcaen.png',
            }}
            className='w-10 h-10 rounded-full'
          />
          <View className='flex flex-col justify-center items-start'>
            <Text className='font-semibold'>Sebastian Caicedo</Text>
            <Text className='text-xs text-gray-400'>Your Rider</Text>
          </View>
        </View>

        <Text className='font-semibold text-orange-600 text-lg uppercase'>
          Call
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
