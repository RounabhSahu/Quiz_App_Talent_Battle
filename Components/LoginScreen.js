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
    const [email, setEmail] = useState('');
    const [pass,setPass]=useState('');
    const [show,setShow]=useState(false);
    const onChangeEmail = (newText) => {
        setEmail(newText);
    }
    const onChangePass = (newText) => {
        setPass(newText);
    }
    const handleBack=()=>{
        navigation.navigate('Splash');
    }
    const handleShow=()=>{
        setShow(!show)
    }
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
                    <Text className='text-2xl ml-4 text-slate-800'>Log In</Text>
                </View>
                <View className='w-full flex-col justify-center items-center h-[80%]'>

                    <Text className='text-lg text-slate-600 my-2 w-[325] text-left' >Username / Email</Text>
                    <TextInput 
                        className='bg-white/80 w-[325] h-[40] rounded-lg z-10 pl-4 my-2 '
                        value={email}
                        onChangeText={onChangeEmail}
                        />
                    <Text className='text-lg text-slate-600 my-2 w-[325] text-left' >Password</Text>
                    <View className='w-[325] h-[40] relative my-2'>
                        <TextInput 
                            className='bg-white/80 w-full  rounded-lg  pl-4'
                            value={pass}
                            onChangeText={onChangePass}
                            secureTextEntry={!show}
                            />
                        <View className='absolute top-0 right-0   h-full rounded-r-lg overflow-hidden w-[60] '>
                            <TouchableHighlight onPress={handleShow} underlayColor="lightblue" className='w-full'>
                                <View className='w-full flex justify-center items-center h-full border border-transparent border-l-slate-600/50'>
                                    <Text className=' w-full ml-3  font-semibold text-slate-800/50'>{show?'Hide':'Unhide'}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                    
                    </View>
                    <View className='rounded-md overflow-hidden  ml-48'>
                            <TouchableHighlight onPress={handleShow} underlayColor="lightblue" className='w-full'>
                                <View className='w-full flex justify-center items-center '>
                                    <Text className=' w-full mx-3 my-1  font-semibold text-slate-800/80'>Forgot Password ?</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    <TouchableOpacity 
                        className='h-[40] px-20 mt-8 bg-dblue/90 rounded-lg active:border border-black flex justify-center items-center w-[325]' 
                        onPress={handleShow}>
                        <Text className='text-lg text-white/80 '>Sign In</Text>
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
