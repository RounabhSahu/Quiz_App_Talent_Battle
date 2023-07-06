import React, { useState, useRef,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Touchable,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";
const AdressDetailsScreen =({route,navigation})=>{
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  function handleBack() {

  }
  function handleNext() {

  }

  const titleStyle='text-slate-800 text-lg w-full text-left font-bold mt-2 -mb-2'
  const inputStyle='text-md text-cyan-900 border-slate-700 border-b-2 w-full ml-2'
  useEffect(()=>{
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    })
  },[])
  return(
    <View className='flex-col justify-start items-center'>
      <View className='w-[80%]'>
        <View className='flex-col justify-start items-start my-4 w-full'>
          <Text className={titleStyle}>Name</Text>
          <TextInput
            placeholder='Enter your full name (including middle name)'
            className={inputStyle}
          />
        </View>
        <View className='flex-col justify-start items-start my-4 w-full'>
          <Text className={titleStyle}>Street Address</Text>
          <TextInput
            placeholder='123 Main St'
            className={inputStyle}
            value={street}
            onChangeText={setStreet}
          />

          <Text className={titleStyle}>City</Text>
          <TextInput
            placeholder='New Delhi'
            className={inputStyle}
            value={city}
            onChangeText={setCity}
          />

          <Text className={titleStyle}>State</Text>
          <TextInput
            placeholder='Delhi'
            className={inputStyle}
            value={state}
            onChangeText={setState}
          />

          <Text className={titleStyle}>Zip Code</Text>
          <TextInput
            placeholder='112233'
            className={inputStyle}
            value={zipCode}
            onChangeText={setZipCode}
          />
          <Text className={titleStyle}>Country</Text>
          <TextInput
            placeholder='India'
            className={inputStyle}
            value={country}
            onChangeText={setCountry}
          />

        </View>

      </View>
    </View>
  )
}
export default AdressDetailsScreen;
