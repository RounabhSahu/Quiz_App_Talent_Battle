import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, Image, ActivityIndicator,TouchableOpacity,TouchableOpacityBase, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';

export default function App() {
  const navigation = useNavigation();
  const [connected, setConnected] = useState(false);
  // const switchToHome = () => {
  //   navigation.navigate('Phone', {
  //     username: 'john_doe',
  //     email: 'john.doe@example.com',
  //   });
  // };
  const netInfo = useNetInfo();

  const handleSignUp=()=>{

  }
  const handleLogin =()=>{
    navigation.navigate('Login')
  }

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      })
    if( netInfo.isConnected ){
        // console.log(netInfo.isConnected)

        setConnected(true)
      }

  }, [netInfo.isConnected]);

  return (
    <>
    <StatusBar backgroundColor="#e5e7eb9f" barStyle="dark-content" />
    <View className="flex-col items-center justify-evenly h-full w-full bg-dgray">

      <View className='w-full px-8 flex justify-center items-center'>
        <Text className='text-2xl'>One Stop for all your Preps</Text>
        <Image
          source={require('../assets/Gradientrectangle.png')}
          className="w-1/2 items-end self-end rounded-bl-full"></Image>
      </View>
      <View className="">
        <Image
          source={require('../assets/Logo.jpeg')}
          className="aspect-square h-72"></Image>
      </View>

      <View>
        <Text className="text-center text-xl mt-2 text-dblue/90 ">
          Preparation Quiz Platform
        </Text>
        <Text className="text-red text-center text-lg text-slate-600/50 mt-0 ">
          Quick · Smart · Trusted
        </Text>
        <Text className="text-red text-center text-md text-slate-600/50 ">
          Hi, Nice to meet You !
        </Text>
      </View>
      {!connected && <ActivityIndicator className='mt-4' size={50}/> }
      {!connected && <Text className='text-red text-center text-slate-600 '>Conntecting to Internet ...</Text>} 
      {connected && 
        <View className='space-y-2 h-fit'>
          <TouchableOpacity className='py-2 px-20 bg-dblue/10 rounded active:border border-black flex justify-center items-center' onPress={handleSignUp}>
            <Text className='text-lg'>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity className='py-2 px-20 bg-lime-400/10 rounded active:border border-black flex justify-center items-center' onPress={handleLogin}>
            <Text className='text-lg'>Login</Text>
          </TouchableOpacity>
        </View>
      }
      
      <View className="w-full flex justify-center items-center">
        <View className="w-[75%] overflow-hidden flex-0 justify-center items-center">
          <Image
            source={require('../assets/Buildings.png')}
            className=""
            style={{width: '100%'}}></Image>
        </View>
        <Text className="w-[80%] py-2 bg-dblue/80 text-red text-center text-lg text-white/80 rounded-xl">
          Professional Quiz Platform for All
        </Text>
      </View>
      
    </View>
    </>
  );
}
