import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';

const CategoryCard = ({ url, title }) => {
  return (
    <TouchableOpacity className='w-20 h-20 justify-center items-center relative'>
      <Image
        source={{ uri: urlFor(url).url() }}
        className='h-20 w-20 rounded-lg bg-gray-500 p-4'
      />
      <Text className='text-lg font-semibold absolute bottom-1 text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
