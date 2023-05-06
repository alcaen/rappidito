import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  MapPin,
  Star,
} from 'lucide-react-native';
import DishRow from '../components/DishRow';
import Basket from '../components/Basket';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketTotal } from '../slices/basketSlice';
import { useEffect } from 'react';
import { setRestaurant } from '../slices/restaurantSlice';

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectBasketTotal);
  const {
    params: {
      url,
      name,
      score,
      category,
      location,
      id,
      description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        url,
        name,
        score,
        category,
        location,
        id,
        description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <>
      <ScrollView>
        <View className='relative'>
          <Image
            source={{ uri: urlFor(url).url() }}
            className='w-full h-56'
          />
          <TouchableOpacity
            className='bg-gray-100 rounded-full w-9 flex items-center justify-center h-9 top-10 left-5 absolute pr-1'
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ChevronLeft
              className='text-orange-600'
              size={28}
            />
          </TouchableOpacity>
        </View>
        <View className='p-4 flex flex-col space-y-2 bg-white shadow-md shadow-black'>
          <Text className='text-3xl font-semibold subpixel-antialiased'>
            {name}
          </Text>
          <View className='flex flex-row space-x-5 items-center'>
            <View className='flex flex-row items-center space-x-1'>
              <View className='flex flex-row items-center space-x-1'>
                <Star
                  className='text-yellow-400 fill-yellow-400'
                  size={20}
                  fill={'#facc15'}
                />
                <Text className='text-yellow-600 text-xs'>{score}</Text>
              </View>
              <Text className='text-xs'>•</Text>
              <Text className='text-xs'>{category}</Text>
            </View>
            <View className='flex flex-row space-x-1 items-center'>
              <MapPin
                className='text-slate-400'
                size={20}
              />
              <Text className='text-xs overflow-x-hidden'>{location}</Text>
            </View>
          </View>
          <Text className='text-gray-600 border-b border-gray-500 pb-3'>
            {description}
          </Text>
          <View className='flex justify-between items-center flex-row'>
            <View className='flex-1 flex flex-row items-center space-x-3 py-1'>
              <HelpCircle className='text-gray-500' />
              <Text className='font-semibold'>Have a food allergy?</Text>
            </View>
            <View className='flex items-center justify-center'>
              <ChevronRight className='text-orange-600' />
            </View>
          </View>
        </View>
        <View>
          <Text className='text-xl font-semibold py-3 px-4'>Menu</Text>
        </View>
        <View className={totalPrice ? 'pb-32' : null}>
          {dishes.map((dish) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
      <Basket />
    </>
  );
};

export default RestaurantScreen;
