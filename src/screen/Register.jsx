import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import instance from '../services/AxiosOrder';



export default function Register({navigation}) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const signUp=()=>{
        instance.post('/register',{
            name:userName,
            email:userEmail,
            password:userPassword
        })
        .then(function (response) {
            console.log(response.data);
            console.log(response);
            navigation.navigate('Login')

        })
        .catch(error=>{
            alert('SignUp error')
        })
    }

    return (
    
        <View style={styles.container}>
            <Image style={styles.topImage} source={require("../assets/vectorTop.png")} />
            <View style={styles.helloContainer}>
                <Text style={styles.createAccountText}>Create Account</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={'user'} size={24} color={'#9A9A9A'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Name' 
                    placeholderTextColor={'gray'} 
                    value={userName}
                    onChangeText={setUserName}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={'user'} size={24} color={'#9A9A9A'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Email' 
                    placeholderTextColor={'gray'} 
                    value={userEmail}
                    onChangeText={setUserEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={'locked'} size={20} color={'#9A9A9A'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Password' 
                    placeholderTextColor={'gray'} 
                    value={userPassword}
                    onChangeText={setUserPassword}
                />
            </View>
            <LinearGradient
                colors={['#F97794', '#623AA2']}
                style={styles.linearGradient}
            >
                <Button 
                    labelStyle={styles.buttonLabel}
                    onPress={signUp}
                >Sign Up  
                <AntDesign name={'arrowright'} size={20} color={'white'} style={styles.inputIcon} />
                </Button>
            </LinearGradient>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Already have an account? 
                    <Text 
                        onPress={()=>navigation.navigate('Login')}
                        style={styles.registerText}
                        >Sign In
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

    createAccountText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '500',
        color: '#262626',
        marginBottom:30
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
