import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const query = `*[_type=='category']`;
    const fetchData = async () => {
      const data = await sanityClient.fetch(query);
      setCategories(data);
    };
    fetchData().catch((error) => console.log(error));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 8,
        columnGap: 8,
      }}
    >
      {categories?.map((category) => {
        return (
          <CategoryCard
            url={category.image}
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
