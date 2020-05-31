import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, SignInScreen, SignUpScreen, HomeScreen, DetailsScreen} from './index'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
)

export default RootStackScreen;