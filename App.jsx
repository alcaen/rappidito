import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View className='flex justify-center items-center bg-cyan-600 w-full min-h-screen'>
        <Text className='text-xl font-semibold text-center text-red-600'>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='auto' />
      </View>
    </NavigationContainer>
  );
}

import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});
