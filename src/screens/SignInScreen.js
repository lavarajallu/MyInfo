import React, {useState} from 'react'
import { View,Alert, TouchableOpacity, Text, StyleSheet, Dimensions, Image, Platform, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';



const SignInScreen = ({navigation}) => {
    const [data, setData] = useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true
    })

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) =>{
        if(val.length > 6){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else{
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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const loginHandle = (username, password) => {
        if(username === ''){
            Alert.alert('MyInfo', 'Please enter your email')
        }else if(password === ''){
            Alert.alert('MyInfo', 'Please enter your password')
        }else{
            signIn(username, password);
        }
    }

    return (
        <View style={styles.container}>
             <StatusBar backgroundColor="#009387" barStyle= "light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    Welcome!
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
                    onChangeText={(val)=>{textInputChange(val)}}
                    />
                    <Animatable.View animation="bounceIn">
                        <Feather
                            name="check-circle"
                            color="#05375a"
                            size={data.check_textInputChange ? 20 : 0}
                        />
                    </Animatable.View>  
                </View>

                <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
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
                            name={data.secureTextEntry ? "eye-off":"eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.SignIn}
                        onPress={() => { loginHandle(data.email, data.password) }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.SignIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                

                <TouchableOpacity style={[styles.SignIn,{
                    borderColor:'#009387',
                    borderWidth:1,
                    marginTop:15
                }]} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={[styles.textSign,{
                        color:'#009387'
                    }]}>Sign Up</Text>

                </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>

    )

}

export default SignInScreen;

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
        paddingHorizontal:20,
        paddingVertical:50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    text_footer:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        marginTop:Platform.OS === 'ios' ?0:-12,
        paddingLeft:10,
        color:'#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    SignIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    }
})