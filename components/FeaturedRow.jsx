import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react-native';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    const query = `*[_type=='featured' && _id==$id]{
      ...,
  restaurants[]->{
    ...,
    dishes[]->,
    type-> {
      name
    }
  }
    }[0]`;
    const fetchData = async () => {
      const data = await sanityClient.fetch(query, { id });
      setRestaurants(data?.restaurants);
    };
    fetchData().catch((error) => console.log(error));
  }, []);

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
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              url={restaurant.image}
              name={restaurant.name}
              category={restaurant.type.name}
              location={restaurant.address}
              score={restaurant.rating}
              description={restaurant.description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
