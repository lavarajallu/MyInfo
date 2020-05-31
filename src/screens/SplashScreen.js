import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                animation="bounceIn"
                source={require('../assets/images/logo.jpeg')}
                resizeMode="stretch"
                style={styles.logo}
                />
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
               <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MeterialIcons size={20} color="#fff" name="navigate-next"/>
                  </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
           
        </View>
    )

}

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingVertical:50,
        paddingHorizontal:30

    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    test:{
        color:'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'#fff',
        fontWeight:'bold'
    }


})