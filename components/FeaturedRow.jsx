import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRight } from 'lucide-react-native';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className='flex flex-row'>
        <View className='flex-1'>
          <Text className='text-xl font-bold'>{title}</Text>
          <Text className='text-xs text-slate-500'>{description}</Text>
        </View>
        <View>
          <ArrowRight className='text-orange-600' />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 12,
          columnGap: 8,
        }}
        className='mt-2'
      >
        <RestaurantCard
          url='https://links.papareact.com/gn7'
          name='Sushi Time'
          category='Japanese'
          location='Nearby - 123 Main St'
          score={4.5}
        />
        <RestaurantCard
          url='https://links.papareact.com/gn7'
          name='Sushi Time'
          category='Japanese'
          location='Nearby - 123 Main St'
          score={4.5}
        />
        <RestaurantCard
          url='https://links.papareact.com/gn7'
          name='Sushi Time'
          category='Japanese'
          location='Nearby - 123 Main St'
          score={4.5}
        />
        <RestaurantCard
          url='https://links.papareact.com/gn7'
          name='Sushi Time'
          category='Japanese'
          location='Nearby - 123 Main St'
          score={4.5}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
