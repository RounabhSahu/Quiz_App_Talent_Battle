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
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
const DetailsScreen =({route,navigation})=>{
  const [name, setName] = useState('');

  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  function handleNext() {

  }
  const titleStyle='text-slate-800 text-lg w-full text-left font-bold mt-2 -mb-2'
  const inputStyle='text-md text-cyan-900 border-slate-700 border-b-2 w-full ml-2'

  // useEffect(()=>{
  //   navigation.addListener('beforeRemove', (e) => {
  //     e.preventDefault();
  //   })
  // },[])
  return(
    <View className='flex-col justify-start items-center'>
      <View className='flex-col justify-start items-start my-4 w-full'>
        <Text className={titleStyle}>Father's Name</Text>
        <TextInput
          placeholder="Your Father's full name "
          className={inputStyle}
          value={fatherName}
          onChangeText={setFatherName}
        />

        <Text className={titleStyle}>Mother's Name</Text>
        <TextInput
          placeholder="Your Mother's full name "
          className={inputStyle}
          value={motherName}
          onChangeText={setMotherName}
        />

      </View>
    </View>
  )
}
export default DetailsScreen;
