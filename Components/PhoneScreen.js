import React, { useState, useRef,useEffect, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Touchable,
  Text,
  TextInput
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {useNavigation} from '@react-navigation/native';
import {auth} from '../FirebaseConfig';
import { StateContext } from "../Context/GlobalState";

const PhoneScreen = ({navigation}) => {
  // const navigation=useNavigation();
  const {text} = useContext(StateContext);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const phoneInput = useRef(null);
  const handleSubmit = ()=>{
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
    if(valid){
      setTimeout(() => navigation.navigate('Home',{number:value}), 1000);
    }
  }
  useEffect(()=>{
    navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        })
    if(valid){
      setTimeout(() => navigation.navigate('Otp',{number:value,cc:formattedValue}), 1000);
    }
  },[valid])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View >
        
        <SafeAreaView className='h-full w-full flex-col justify-start items-center'>
          <Text className='text-2xl mt-32 mb-10'>Enter Phone Number :</Text>
          <PhoneInput
            containerStyle={{
              borderRadius: 5, 
              borderWidth: 1, 
              borderColor: '#708090', 
              backgroundColor: 'rgba(247, 255, 230, 0.851)', 
              padding:2.5,
            }}
            
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableHighlight  
            className='border border-slate-500 rounded px-8 py-3 mt-10 bg-sky-200 focus:bg-red-200'
            underlayColor={"#92ffde"}
            onPress={handleSubmit}
          >
            <Text className='text-xl'>Check</Text>
          </TouchableHighlight>
          {
            !valid && showMessage && <Text className='text-lg text-red-400 mt-2'>Number Entered is Not Correct</Text>
          }
        </SafeAreaView>
      </View>
    </>
  );
};

export default PhoneScreen;