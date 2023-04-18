import { View, Text, Image } from 'react-native';
import React from 'react';
import { MapPin, Star } from 'lucide-react-native';

const RestaurantCard = ({ url, name, score, category, location }) => {
  return (
    <View className='bg-white rounded-md shadow shadow-black'>
      <Image
        source={{ uri: url }}
        className='h-28 w-52 rounded-t-md'
      />
      <View className='p-2 space-y-1'>
        <Text className='text-base font-semibold'>{name}</Text>
        <View className='flex flex-row space-x-1 items-center'>
          <View className='flex flex-row items-center gap-x-1'>
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
        <View className='flex flex-row space-x-1'>
          <MapPin
            className='text-slate-400'
            size={20}
          />
          <Text className='text-xs overflow-x-hidden'>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;
