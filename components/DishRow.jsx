import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { MinusCircle, PlusCircle } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSigleItem,
  addToBasket,
  removeFromBasket,
} from '../slices/basketSlice';

const DishRow = ({ id, name, description, price, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => selectSigleItem(state, id));
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const handleRemove = () => {
    if (items.length > 0) dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={
          'bg-white  w-full flex flex-row items-center px-4 py-2 space-x-3' +
          (isOpen ? null : ' border-b border-gray-400')
        }
        onPress={() => setIsOpen(!isOpen)}
      >
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
      {isOpen ? (
        <Quantity
          handleAdd={handleAdd}
          items={items}
          id={id}
          handleRemove={handleRemove}
        />
      ) : null}
    </>
  );
};

const Quantity = ({ items, handleAdd, handleRemove, id }) => {
  return (
    <View className='bg-white p-4 border-b border-gray-400'>
      <View className='flex flex-row space-x-3 items-center'>
        <TouchableOpacity
          onPress={() => handleRemove()}
          disabled={items.length <= 0}
        >
          <MinusCircle
            className={items.length <= 0 ? 'text-gray-300' : 'text-orange-600'}
          />
        </TouchableOpacity>
        <Text className='text-black'>{items.length}</Text>
        <TouchableOpacity onPress={() => handleAdd()}>
          <PlusCircle className='text-orange-600' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishRow;
