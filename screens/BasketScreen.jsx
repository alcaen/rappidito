import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { useMemo } from 'react';
import { useState } from 'react';
import { X } from 'lucide-react-native';
import { USDollar } from '../lib';
import { urlFor } from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const group = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(group);
  }, [items]);

  return (
    <SafeAreaView
      className={`bg-gray-100 w-full flex flex-col h-full`}
      style={{
        marginTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
      }}
    >
      <View className='bg-white h-16 flex flex-col justify-center items-center relative'>
        <Text className='font-extrabold text-lg'>Basket</Text>
        <Text className='text-gray-400 tracking-tighter'>
          {restaurant.name}
        </Text>
        <TouchableOpacity
          className='absolute top-4 right-4 bg-orange-600 rounded-full p-1 flex justify-center items-center shadow-md shadow-black'
          onPress={() => navigation.goBack()}
        >
          <X
            className='text-white'
            strokeWidth={3}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View className='bg-white w-full mt-6 h-12 flex justify-between flex-row items-center px-4'>
        <View className='flex flex-row items-center space-x-3 '>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-8 w-8 rounded-full bg-gray-300 p-4'
          />
          <Text>Deliver in 50-75 min</Text>
        </View>

        <Text className='text-orange-600'>Change</Text>
      </View>
      <ScrollView className='flex flex-col mt-6 divide-y-[0.7px] divide-gray-300 flex-1'>
        {Object.keys(groupedItems).map((key, i) => {
          const item = groupedItems[key];
          return (
            <View className='w-full bg-white h-14 flex flex-row justify-between items-center px-4'>
              <View className='flex flex-row items-center space-x-2'>
                <Text className='text-orange-600 text-xs font-bold'>
                  {item.length} x
                </Text>
                <Image
                  source={{ uri: urlFor(item[0].image).url() }}
                  className='h-10 w-10 rounded-full'
                />
                <Text className=''>{item[0].name}</Text>
              </View>
              <View className='flex-row flex space-x-3 items-center'>
                <Text>{USDollar.format(item[0].price * item.length)}</Text>
                <Text className='text-orange-600 text-xs font-bold'>
                  Remove
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View className='bg-white w-full flex flex-col px-4 pt-4 pb-8 space-y-3'>
        <View className='justify-between flex flex-row items-center'>
          <Text className='text-gray-400 font-semibold'>Subtotal</Text>
          <Text className='text-gray-400 font-semibold'>
            {USDollar.format(total)}
          </Text>
        </View>
        <View className='justify-between flex flex-row items-center'>
          <Text className='text-gray-400 font-semibold'>Delivery Fee</Text>
          <Text className='text-gray-400 font-semibold'>
            {USDollar.format(5.99)}
          </Text>
        </View>
        <View className='justify-between flex flex-row items-center mb-2'>
          <Text className='text-black font-semibold'>Order Total</Text>
          <Text className='text-black font-semibold'>
            {USDollar.format(total + 5.99)}
          </Text>
        </View>
        <TouchableOpacity className='self-center py-3 bg-orange-600 w-full rounded-lg flex justify-center items-center shadow-md shadow-black'>
          <Text className='text-white font-bold text-base'>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
