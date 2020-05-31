import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SplashScreen, SignInScreen, SignUpScreen, HomeScreen, DetailsScreen } from './index'
import { Icon } from 'native-base';
// import SplashScreen  from './SplashScreen'
// import SignInScreen from './SignInScreen'
// import SignUpScreen from './SignUpScreen'

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#009387' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button name="android-menu" size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}

                    />
                )
            }}

        />
    </HomeStack.Navigator>
);


const DetailsStackScreen = ({ navigation }) => (
    <DetailStack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#009387' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailStack.Screen name="Details"
            component={DetailsScreen}
            options={{
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button name="android-menu" size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}

                    />
                )
            }}

        />
    </DetailStack.Navigator>
)

const RootStackScreen = ({navigation}) => {
    <Drawer.Navigator initialRouteName="HomeStackScreen">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
    </Drawer.Navigator>

}

export default RootStackScreen;