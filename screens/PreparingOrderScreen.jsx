import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      className={`bg-orange-600 w-full flex-col h-full flex justify-center items-center`}
      style={{
        marginTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
      }}
    >
      <Animatable.Image
        source={require('../assets/PreparingOrder.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='w-80 h-96 mb-5'
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='font-bold text-white text-lg text-center mb-14 tracking-tighter	'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color='white'
        borderWidth={3}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
