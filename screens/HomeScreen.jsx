import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View className='flex justify-center items-center bg-cyan-600 w-full h-full'>
      <Text className='text-3xl font-semibold text-center'>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default HomeScreen;
