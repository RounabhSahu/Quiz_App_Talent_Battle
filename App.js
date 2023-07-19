import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScreenOrientation,
} from 'react-native';

import HomeScreen from './Components/HomeScreen';
import SplashScreen from './Components/SplashScreen';
import PhoneScreen from './Components/PhoneScreen';
import OtpScreen from './Components/OtpScreen';
import DetailsScreen from './Components/DetailsScreen';
import Sample from './Components/Sample';
import LoginScreen from './Components/LoginScreen';
import ProfileScreen from './Components/ProfileScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OrientationLock, orientation} from 'react-native-orientation-locker';
import {useEffect} from 'react';
import {GlobalState} from './Context/GlobalState';

export default function App() {
  const Stack = createNativeStackNavigator();
  // async function lockOrientation() {
  //   // Lock the orientation to portrait mode
  //   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  // }
  // lockOrientation();
  // useEffect(() => {
  //   orientation.lockToPortrait();
  //   return () => {
  //     orientation.unlockAllOrientations();
  //   };
  // }, []);

  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator>

           {/* <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false, headerLeft: null,}}
          />  */}
          
          {/* <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              headerLeft: null,
            }}
          /> */}

          {/* <Stack.Screen name="Phone" component={PhoneScreen} options={{ headerShown: false, headerLeft: null }}/> */}
          {/* <Stack.Screen name='Otp' component={OtpScreen} options={{ headerShown: false, headerLeft: null }}/> */}
          {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false, headerLeft: null }}/>
          {/* <Stack.Screen name='Sample' component={Sample} options={{ headerShown: false, headerLeft: null }}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>

    // <View className='flex items-center justify-center bg-amber-400 h-full'>
    //   <Text>Hello there why</Text>
    // </View>
  );
}
