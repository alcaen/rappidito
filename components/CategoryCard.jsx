import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ url, title }) => {
  return (
    <TouchableOpacity className='w-20 h-20 justify-center items-center relative'>
      <Image
        source={{ uri: url }}
        className='h-20 w-20 rounded-lg bg-gray-500 p-4'
      />
      <Text className='text-xl font-semibold absolute bottom-1 text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
