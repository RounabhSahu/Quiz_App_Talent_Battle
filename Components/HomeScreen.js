import React from 'react';
import { View,Text } from "react-native";

const HomeScreen = ({route}) => {
  // let {number}=route.params;
  return (
    <View className='flex-col items-center justify-center bg-blue-400 h-full'>
      <Text className='text-6xl text-center'>Home Screen hello</Text>
    </View>
  );
};

export default HomeScreen;
