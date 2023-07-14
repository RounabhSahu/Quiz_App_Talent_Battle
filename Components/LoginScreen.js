import React, { useState, useRef, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    Touchable,
    Text,
    Image,
    TextInput,
    ImageBackground,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../FirebaseConfig';
import { StateContext } from '../Context/GlobalState';

const LoginScreen = ({ navigation }) => {
    const handleBack=()=>{

    }
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content'/>
            <View style={styles.overlay}>
                <View style={styles.overlayContainer}  className='flex justify-start items-center relative w-full h-5/6 rounded-b-3xl'>
                <TouchableHighlight onPress={handleBack} underlayColor="white">
                    <View className='w-full bg-black top-0'>
                        <Text >TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <Image
                    source={require('../assets/Logo.jpeg')}
                    className="scale-150 opacity-10 absolute top-1/4"></Image>
                
                </View>
            </View>
            
        </>
    );
};


const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#006994',
  },
  overlayContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop:StatusBar.currentHeight || 0,
    backgroundColor: '#ffffffa4',
  },

});

export default LoginScreen;
