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
import InfoDetailsScreen from "./InfoDetailsScreen";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdressDetailsScreen from "./AdressDetailsScreen";

const DetailsScreen =({route,navigation})=>{
    // const Stack = createNativeStackNavigator();
    const SubStack = createNativeStackNavigator();
    function handleNext(){

    }
    const titleStyle='text-slate-800 text-lg w-full text-left font-bold mt-2 -mb-2'
    const inputStyle='text-md text-cyan-900 border-slate-700 border-b-2 w-full ml-2'
    useEffect(()=>{
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            })
    },[])
    // return(
    //              <SubStack.Navigator>
    //              <SubStack.Screen name="InfoDetails" component={InfoDetailsScreen} />
    //              <SubStack.Screen name="AdressDetails" component={AdressDetailsScreen} />
    //          </SubStack.Navigator>
    // )
    return(

        <View className='h-full'>
            <View className='flex-col justify-center items-center my-4 w-full'>
                <Text className='text-black text-2xl font-bold  text-center my-1'>Profile</Text>
                <Text className='text-black text-lg font-normal text-justify '>Kindly Fill your details carefully, as they will be cross verified as per your identification document</Text>
            </View>
            {/* <InfoDetailsScreen/> */}
            <View className='flex-1 bg-red-400 border-4 border-red-500 rounded-t-3xl overflow-hidden'>
            <SubStack.Navigator>
                <SubStack.Screen name="InfoDetails" component={InfoDetailsScreen} />
                <SubStack.Screen name="AdressDetails" component={AdressDetailsScreen} />
            </SubStack.Navigator>
            </View>
            <TouchableHighlight
            style={{
                fontSize: 24,
                padding: 10,
                color: '#000',
                textAlign: 'center',
                borderBottomWidth: 5,
                borderBottomColor: '#009316',
                borderStyle: 'solid',
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
            }}
            className='bg-lime-400/50 px-12 py-2 rounded mt-8' underlayColor='#4a93f3'  onPress={handleNext} >
            <Text className='text-xl text-black'>Next</Text>
        </TouchableHighlight>
        </View>

    )
}
export default DetailsScreen;
