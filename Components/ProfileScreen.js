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


    
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const phoneInput = useRef(null);

    const onChangeName=(text)=>{
        setName(text)
    }

    const handleBack=()=>{
        navigation.navigate('Splash');
    }
    
    const handleSignUp = ()=>{
        const checkValid = phoneInput.current?.isValidNumber(value);
        setShowMessage(true);
        setValid(checkValid ? checkValid : false);
        // if(valid){
        //     setTimeout(() => navigation.navigate('Home',{number:value}), 1000);
        // }
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
                    <Text className='text-2xl ml-4 text-slate-800'>You're almost done !</Text>
                </View>
                {/* <Text className='text-2xl ml-4 text-slate-800 self-start pl-8'>You're almost done !</Text> */}
                <View className='w-full flex-col justify-center items-center h-[80%] '>
                    
                    <Text className='text-lg text-slate-600 my-2 w-[325] text-left' >Name</Text>
                    <TextInput 
                        
                        className='bg-white/80 w-[325] h-[40] rounded-lg z-10 pl-4 my-2 '
                        value={name}
                        onChangeText={onChangeName}
                        />
                    <Text className='text-lg text-slate-600 my-2 w-[325] text-left' >Phone Number</Text>
                    <PhoneInput
                        containerStyle={{
                            width:325,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            height:45,
                            borderRadius: 6, 
                            // borderWidth: 1, 
                            // borderColor: '#708090', 
                            backgroundColor: 'rgba(255 ,255 ,255 , 0.8)', 
                            overflow:'hidden',
                            padding:0,
                        }}
                        flagButtonStyle={{
                            backgroundColor: 'rgba(255 ,255 ,255 , 0.5)', 
                        }}
                        textContainerStyle={{
                            backgroundColor: 'rgba(255 ,255 ,255 , 0)', 
                            display:'flex',
                            justifyContent:'end',
                            alignItems:'center',
                            height:90,
                        }}
                        textInputProps={{maxLength:10}}
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
                        // withDarkTheme
                        withShadow
                        autoFocus
                    />
                    <Text className='text-lg text-slate-600 my-2 w-[325] text-left' >Email</Text>
                    <TextInput 
                        className='bg-white/80 w-[325] h-[40] rounded-lg z-10 pl-4 my-2 '
                        value={'talentbattle@talentbattle.in'}
                        // onChangeText={onChangeName}
                        editable={false}
                        />
                    {
                        !valid && showMessage && <Text className='text-lg text-red-400 mt-2'>Number Entered is Not Correct</Text>
                    }
                    <TouchableOpacity 
                        className='h-[40] px-20 mt-8 bg-dblue/90 rounded-lg active:border border-black flex justify-center items-center w-[325]' 
                        onPress={handleSignUp}>
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
