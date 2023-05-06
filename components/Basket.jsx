import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { USDollar } from '../lib';

const Basket = () => {
  const items = useSelector(selectBasketItems);
  const totalPrice = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  if (items.length <= 0) return;
  return (
    <View
      className={
        'absolute bottom-10 w-full justify-center flex flex-row items-center z-10'
      }
    >
      <TouchableOpacity
        className='bg-orange-600 flex flex-row justify-between items-center w-80 rounded-full px-6 h-14'
        onPress={() => navigation.navigate('Basket')}
      >
        <Text className='bg-orange-700 py-2 px-3 rounded-full text-white font-bold'>
          {items.length}
        </Text>
        <Text className='text-white font-semibold uppercase'>View Basket</Text>
        <Text className='text-white font-semibold'>
          {USDollar.format(totalPrice)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
