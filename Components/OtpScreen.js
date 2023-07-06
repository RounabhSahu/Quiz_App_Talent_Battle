import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Touchable,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';
// import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';

const OtpScreen = ({route, navigation}) => {
  const {number, cc} = route.params;
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(59);
  const [user,setUser]=useState();

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
        console.log(cc.replace(cc.slice(-10), ''), number);
        navigation.navigate('Details');
      }, 1000);
    } else {
      Alert.alert('Error', 'Invalid OTP');
      setOtp('');
      inputRefs.current[0].focus();
    }
  };
  // const sendOTP=async()=>{
  //   try{
  //     let recaptcha=await new RecaptchaVerifier('recaptcha',{},auth)
  //     let confirm = await signInWithPhoneNumber(auth,parseInt(number),recaptcha)
  //     console.log('Succesful recaptcha and signin')
  //     setUser(confirm)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

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
    <View className="flex-col justify-start items-center pt-20">
      <Text className="text-3xl text-slate-600">Verify Phone Number</Text>
      <Text className="text-blue-400 text-xl">
        OTP is sent to
        <Text className="text-blue-400 italic text-xl">
          {' '}
          {cc.replace(cc.slice(-10), '')} {number}
        </Text>
      </Text>
      <View className="flex-row justify-around  items-center my-10 space-x-2">
        {[0, 1, 2, 3, 4, 5].map(index => (
          <TextInput
            key={index}
            style={{
              fontSize: 24,
              backgroundColor: '#677e802e',
              padding: 10,
              color: '#000', // equivalent to text-black
              textAlign: 'center', // equivalent to text-center
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8, // equivalent to rounded-t-md
              borderBottomWidth: 5, // equivalent to border-b-black
              borderBottomColor: '#439eff', // equivalent to border-b-black
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
      
      <TouchableHighlight
        style={{
          fontSize: 24, // equivalent to text-2xl
          // backgroundColor: '#677e802e', // equivalent to bg-slate-400
          padding: 10, // equivalent to p-2
          color: '#000', // equivalent to text-black
          textAlign: 'center', // equivalent to text-center

          borderBottomWidth: 5, // equivalent to border-b-black
          borderBottomColor: '#009316', // equivalent to border-b-black
          borderStyle: 'solid', // equivalent to border-4
          borderLeftWidth: 0, // equivalent to border-x-transparent
          borderRightWidth: 0, // equivalent to border-x-transparent
          borderTopWidth: 0, // equivalent to border-t-transparent
        }}
        className="bg-lime-400/50 px-12 py-2 rounded mt-8"
        underlayColor="#4a93f3"
        onPress={handleValidateOtp}>
        <Text className="text-xl">Next</Text>
      </TouchableHighlight>
    </View>
  );
};
export default OtpScreen;
