import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import instance from '../services/AxiosOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login({navigation,setIsLoggedIn}) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const signIn = async () => {
        try {
            const response = await instance.post('/login', {
                email: userEmail,
                password: userPassword,
            });
            console.log(response.data);
    
            // Store the token in AsyncStorage
            await AsyncStorage.setItem('login', response.data.token); 
            
            // Navigate to another screen after successful login (e.g., Home screen)
            setIsLoggedIn(true); // Update state to log in
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.topImage} source={require("../assets/vectorTop.png")} />
            <View style={styles.helloContainer}>
                <Text style={styles.helloText}>Hello</Text>
            </View>
            <View style={styles.SignInContainer}>
                <Text style={styles.signInText}>Sign in to your account</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={'user'} size={24} color={'#9A9A9A'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Email' 
                    value={userEmail}
                    onChangeText={setUserEmail}
                    placeholderTextColor={'gray'} />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={'locked'} size={20} color={'#9A9A9A'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput} 
                    value={userPassword}
                    onChangeText={setUserPassword}
                    placeholder='Password' 
                    placeholderTextColor={'gray'} />
            </View>
            <LinearGradient
                colors={['#F97794', '#623AA2']}
                style={styles.linearGradient}
            >
                <Button 
                    labelStyle={styles.buttonLabel}
                    onPress={signIn}
                >Sign In  
                <AntDesign name={'arrowright'} size={20} color={'white'} style={styles.inputIcon} />
                </Button>
            </LinearGradient>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>New to the app? 
                    <Text 
                        onPress={()=>navigation.navigate('Register')}
                        style={styles.registerText}
                        >Sign Up
                        </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    registerText:{
        color:'purple',
        fontWeight:700,
    },
    bottomText:{
        textAlign:'center',
        fontWeight:500
    },
    buttonLabel: {
        color: 'white', 
        fontSize: 16,
        fontWeight:'500'
    },
    container: {
        backgroundColor: 'f5f5f5',
        flex: 1,
    },
    topImage: {
        width: '100%',
        height: 130, //This is fixed size..SO this should ask tommorow
        marginBottom:70
    },

    helloText: {
        textAlign: 'center',
        fontSize: 70,
        fontWeight: '500',
        color: '#262626'
    },
    signInText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#262626',
        marginBottom: 40
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        elevation: 10,
        alignItems: 'center',
        gap: 10
    },
    inputIcon: {
        marginLeft: 15
    },
    textInput: {
        flex: 1,
        color: 'black',
        height: 50
    },
    linearGradient:{
        marginVertical: 20,
        marginHorizontal: 120,
        borderRadius: 20,

    }
});
