import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 8,
        columnGap: 8,
      }}
    >
      <CategoryCard
        url='https://links.papareact.com/gn7'
        title='first-one'
      />
      <CategoryCard
        url='https://links.papareact.com/gn7'
        title='second-one'
      />
      <CategoryCard
        url='https://links.papareact.com/gn7'
        title='third-one'
      />
      <CategoryCard
        url='https://links.papareact.com/gn7'
        title='Four-one'
      />
      <CategoryCard
        url='https://links.papareact.com/gn7'
        title='Fifth-one'
      />
      <CategoryCard
        url='https://links.papareact.com/gn7'
        title='Sicth-one'
      />
    </ScrollView>
  );
};

export default Categories;
