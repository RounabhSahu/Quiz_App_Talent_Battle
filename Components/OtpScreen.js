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
    Alert,
    ImageBackground,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../FirebaseConfig';
import { StateContext } from '../Context/GlobalState';

const LoginScreen = ({ navigation }) => {


    const [otp, setOtp] = useState('');
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(59);


    const handleBack=()=>{
        navigation.navigate('Splash');
    }


    const expectedOtp = '123456';

    const handleOtpChange = (text, index) => {
        setOtp(prevOtp => {
        const newOtp = prevOtp.split('');
        newOtp[index] = text;
        return newOtp.join('');
        });
        if (text.length === 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
        }
    };
    const handleValidateOtp = () => {
        if (otp === expectedOtp) {
            Alert.alert('Success', 'OTP is valid');
            setTimeout(() => {
                // Navigate to the home screen after 1 second
                // console.log(cc.replace(cc.slice(-10), ''), number);
                // navigation.navigate('Details');
                
            }, 1000);
        } else {
            Alert.alert('Error', 'Invalid OTP');
            setOtp('');
            inputRefs.current[0].focus();
        }
    };
    
    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            e.preventDefault();
        });
        }, []);
        useEffect(() => {
            if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000);
            }
        }, [timer]);

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content'/>
            <View style={styles.overlay}>
                <View style={styles.overlayContainer}  className='flex justify-start items-center relative w-full h-5/6 rounded-b-3xl'>
                <Image
                    source={require('../assets/Logo.jpeg')}
                    className="scale-150 opacity-10 absolute top-1/4">
                    
                </Image>


                <View className='w-full flex-row justify-start items-center'>
                    <TouchableHighlight onPress={handleBack} underlayColor="transparent" >
                        <View className='w-full'>
                            <Text className='text-4xl w-full pb-1 ml-2 font-semibold text-slate-800'>←</Text>
                        </View>
                    </TouchableHighlight>
                    <Text className='text-2xl ml-4 text-slate-800'>You're almost done !</Text>
                </View>
                {/* <Text className='text-2xl ml-4 text-slate-800 self-start pl-8'>You're almost done !</Text> */}
                <View className='w-full flex-col justify-center items-center h-[80%] '>
                    
                    <Image
                        source={require('../assets/msgIcon.png')}
                        className="aspect-square h-32"/>
                    
                    <Text className='text-2xl text-slate-800 '>Enter Verification Code</Text>
                    <Text className='text-md text-slate-600 mt-2 w-[325] text-center' >We have sent you a 6 digit verfication code on</Text>
                    <Text className='text-lg text-slate-600 my-2 w-[325] text-center' >talentbattle@talentbattle.in</Text>
                    <View className="flex-row justify-around  items-center mt-4 space-x-2 self-center">
                        {[0, 1, 2, 3, 4, 5].map(index => (
                            <TextInput
                                key={index}
                                style={{
                                fontSize: 24,
                                backgroundColor: '#ffffffb2',
                                padding: 10,
                                color: '#000', // equivalent to text-black
                                textAlign: 'center', // equivalent to text-center
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8, // equivalent to rounded-t-md
                                borderBottomWidth: 5, // equivalent to border-b-black
                                borderBottomColor: '#006994', // equivalent to border-b-black
                                borderStyle: 'solid', // equivalent to border-4
                                borderLeftWidth: 0, // equivalent to border-x-transparent
                                borderRightWidth: 0, // equivalent to border-x-transparent
                                borderTopWidth: 0, // equivalent to border-t-transparent
                                }}
                                // className='text-2xl bg-slate-400 p-2 text-black text-center rounded-t-md border-4 border-x-transparent border-t-transparent border-b-black'
                                maxLength={1}
                                keyboardType="numeric"
                                onChangeText={text => handleOtpChange(text, index)}
                                value={otp.charAt(index)}
                                ref={ref => (inputRefs.current[index] = ref)}
                            />
                        ))}
                    </View>
                    {timer !== 0 && (
                        <Text className="text-lg my-2">You will recieve OTP in {timer}s</Text>
                    )}
                    
                    <TouchableOpacity 
                        className='h-[40] px-20 mt-8 bg-dblue/90 rounded-lg active:border border-black flex justify-center items-center w-[325]' 
                        onPress={handleValidateOtp}>
                        <Text className='text-lg text-white/80 '>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                
                
                </View>
                <Image
                    source={require('../assets/Buildings.png')}
                    className="bottom-0 absolute mix-blend-hard-light"
                    style={{width: '100%',tintColor: 'black', overlayColor: 'rgba(255, 255, 255, 0.2)' }}>
                    
                </Image>
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
