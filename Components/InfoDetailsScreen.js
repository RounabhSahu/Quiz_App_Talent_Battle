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

  const [DOB, setDOB] = useState(new Date());
  const [gender,setGender] = useState();
  const [datePicker, setDatePicker] = useState(false);


  const formattedDate = DOB.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const [aadhaar, setAadhaar] = useState([]);
  const [formattedAadhaar, setFormattedAadhaar] = useState('');

  function handleChange(text) {
    // Remove any non-digit characters from the input value
    const formattedText = text.replace(/\D/g, '');

    // Convert the formatted text to an array of integers
    const aadhaarArray = formattedText.split('').map((char) => parseInt(char));

    // Format the Aadhaar number with spaces
    let formattedAadhaar = '';
    for (let i = 0; i < aadhaarArray.length; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedAadhaar += ' ';
      }
      formattedAadhaar += aadhaarArray[i];
    }

    // Update the state with the Aadhaar array and formatted Aadhaar string
    setAadhaar(aadhaarArray);
    setFormattedAadhaar(formattedAadhaar);
  }

  function handleSubmit() {
    // Convert the Aadhaar array to a number by joining the digits

    const aadhaarNumber = parseInt(aadhaar.join(''));
    // Do something with the aadhaarNumber, such as storing it in a database
  }
  function handleNext() {

  }
  const titleStyle='text-slate-800 text-lg w-full text-left font-bold mt-2 -mb-2'
  const inputStyle='text-md text-cyan-900 border-slate-700 border-b-2 w-full ml-2'
  const handleChangeDate =({type},selectedDate)=>{
    if(type==='set'){
      setDOB(selectedDate)
      setDatePicker(!datePicker)
    }
    else{
      setDatePicker(!datePicker)
    }
  }
  // useEffect(()=>{
  //   navigation.addListener('beforeRemove', (e) => {
  //     e.preventDefault();
  //   })
  // },[])
  return(
    <View className='flex-col justify-start items-center px-8 h-full'>


        <View className='flex-col justify-start items-start my-4 w-full'>
          <Text className={titleStyle}>Name</Text>
          <TextInput
            placeholder='Enter your full name (including middle name)'
            className={inputStyle}
            value={name}
            onChangeText={setName}
          />

          <View className='-mb-3'>
            <Text className={titleStyle}>Gender</Text>
            <Picker
              // className={inputStyle}
              style={{
                height:15,
                width:200,
              }}
              className='bg-black'
              selectedValue={gender}
              onValueChange={(itemValue,itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label='Male' value='Male' />
              <Picker.Item label='Female' value='Female' />
              <Picker.Item label='Other' value='Other' />
            </Picker>
          </View>

          <Text className={titleStyle}>Date Of Birth</Text>
          {datePicker && <DateTimePicker
            mode='date'
            display='spinner'
            value={DOB}
            onChange={handleChangeDate}
          />}
          <TouchableWithoutFeedback onPress={()=>setDatePicker(!datePicker)}>
            <View className='mb-2 w-full mt-4'>
              <Text className='text-md text-cyan-900 border-slate-700 border-b-2 w-full ml-2 pb-4 w-full'>{formattedDate.toString()}</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text className={titleStyle}>Aadhar Card Number</Text>
          <TextInput
            value={formattedAadhaar}
            onChangeText={handleChange}
            onSubmitEditing={handleSubmit}
            placeholder="XXXX XXXX XXXX"
            keyboardType="numeric"
            maxLength={14}
          />
        </View>
    </View>
  )
}
export default DetailsScreen;
