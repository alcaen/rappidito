import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className='bg-white border-b border-gray-400 w-full flex flex-row items-center px-4 py-2 space-x-3'>
      <View className='flex-1 flex flex-col space-y-1'>
        <Text className='text-lg font-medium'>{name}</Text>
        <Text className='text-gray-500 text-sm'>{description}</Text>
        <Text className='text-gray-500 text-sm'>${price}</Text>
      </View>
      <Image
        source={{ uri: urlFor(image).url() }}
        className='h-full w-20 rounded-md'
      />
    </TouchableOpacity>
  );
};

export default DishRow;
