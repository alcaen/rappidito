import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import {
  ChevronDownIcon,
  SearchIcon,
  Settings,
  UserIcon,
} from 'lucide-react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  // navigation
  const navigation = useNavigation();
  // Like use effect
  useLayoutEffect(() => {
    navigation.setOptions({
      // Options to change
      headerTitle: 'Custom Title',
      headerShown: false,
    });
  }, []);

  // use State for sanity
  const [featuredCategories, setFeaturedCategories] = useState();

  // fetch the data from sanity
  useEffect(() => {
    const query = `*[_type=='featured']{
        ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
      }`;
    const fetchData = async () => {
      const data = await sanityClient.fetch(query);
      setFeaturedCategories(data);
    };
    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView
      className={`bg-gray-100 w-full`}
      style={{ marginTop: StatusBar.currentHeight }}
    >
      {/* Header */}
      <View className='flex flex-row py-2 items-center mx-4 space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-8 w-8 rounded-full bg-gray-300 p-4'
        />
        <View className='flex-1'>
          <Text className='font-bold text-xs text-slate-400'>Order now !</Text>
          <View className='flex items-center flex-row'>
            <Text className='font-bold text-xl'>Current location </Text>
            <ChevronDownIcon className='text-orange-600 self-end' />
          </View>
        </View>
        <View className='rounded-full border-2 border-orange-600'>
          <UserIcon className='text-orange-600' />
        </View>
      </View>

      {/* Search bar */}
      <View className='mx-4 flex flex-row space-x-4 items-center'>
        <View className='flex-1 bg-gray-200 py-2 rounded-md flex flex-row pl-2 items-center'>
          <SearchIcon
            className='text-slate-400'
            size={20}
          />
          <TextInput
            className='flex-1 pl-2'
            placeholder='Search for food.'
            keyboardType='default'
          />
        </View>
        <Settings className='text-orange-600' />
      </View>

      {/* Scroll container */}

      <ScrollView
        className='mt-2 rounded-md bg-gray-200/80 px-2 mx-2'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Feature Rows */}
        {featuredCategories?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              title={category.name}
              description={category.description}
              id={category._id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
