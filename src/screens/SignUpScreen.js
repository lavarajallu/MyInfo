import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, Platform, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';



const SignUpScreen = ({navigation}) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry:true
    })

    const textInputChange = (val) => {
        if (val.length > 6) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }

    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry,
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    Register Now!
                </Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        color="#05375a"
                        name="user-o"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => { textInputChange(val) }}
                    />
                    <Animatable.View animation="bounceIn">
                        <Feather
                            name="check-circle"
                            color="#05375a"
                            size={data.check_textInputChange ? 20 : 0}
                        />
                    </Animatable.View>

                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        color="#05375a"
                        name="lock"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => { handlePasswordChange(val) }}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        <Feather
                            name={data.secureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                        color="#05375a"
                        name="lock"
                        size={20}
                    />
                    <TextInput
                        placeholder="Confirm Your Password"
                        secureTextEntry={data.confirmSecureTextEntry}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => { handleConfirmPasswordChange(val) }}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        <Feather
                            name={data.confirmSecureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By signing up you agree to our
                </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                    <Text style={styles.color_textPrivate}>{" "}and</Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                    
                </View>
            </Animatable.View>

        </View>

    )

}

export default SignUpScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 35
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});