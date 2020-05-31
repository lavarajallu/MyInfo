import React, { useState } from 'react'
import { View,Button, TouchableOpacity, Text, StyleSheet, Dimensions, Image, Platform, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';



const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>

            <Button title="Go to Details Screen"
                onPress={() => navigation.push('DetailsScreen')} />
        
            <Button title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')} />

            <Button title="Go back"
                onPress={() => navigation.goBack()} />

            <Button title="Go to the First Screen"
                onPress={() => navigation.popToTop()} />
        
        
        </View>
    )

}

export default DetailsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})