import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, Image ,ActivityIndicator, _Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';


export default function App() {
  const navigation = useNavigation();
  const [connecting,setConnecting]=useState(false);
  const switchToHome = () => {
    navigation.navigate('Phone', {
      username: 'john_doe',
      email: 'john.doe@example.com',
    });
  };
    const netInfo = useNetInfo();
    
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      })
    // const netInfo = useNetInfo();
    if( netInfo.isConnected ){
        console.log(netInfo.isConnected)
        setTimeout(() => switchToHome(), 1000);
      }
      else{
        setConnecting(true)
      }
    // setTimeout(() => switchToHome(), 5000);
  }, [netInfo.isConnected]);

  return (
    <View className='flex-col items-center justify-center bg-amber-400 h-full'>
      <Image source={require('../assets/Logo.jpeg')} style={{ width: 200, height: 200 }}></Image> 
      <Text className='text-center text-2xl'>One Stop Platform for Placement Preparation</Text>
      {connecting && <Text className='text-red text-center'>Connecting to the Internet</Text>} 
      <ActivityIndicator className='mt-4' size={50}/> 
      
    </View>
  );
}
