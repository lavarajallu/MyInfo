import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SplashScreen, SignInScreen, SignUpScreen, HomeScreen, DetailsScreen } from './index'
// import SplashScreen  from './SplashScreen'
// import SignInScreen from './SignInScreen'
// import SignUpScreen from './SignUpScreen'

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
)

export default RootStackScreen;