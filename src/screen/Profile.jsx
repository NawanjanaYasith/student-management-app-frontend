import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation, route }) {
    const { setIsLoggedIn } = route.params;

    const logout = async () => {
        try {
            // Remove the token from AsyncStorage
            await AsyncStorage.removeItem('login');
            setIsLoggedIn(false);
            // navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View>
            <View style={styles.logoutContainer}>
                <Text style={styles.profileText}>Profile</Text>
                <Card
                    style={styles.logoutInnerContainer}
                    onPress={logout}
                >
                    <Card.Content style={styles.cardContent} >
                        <Text style={styles.logoutText}>Logout</Text>
                    </Card.Content>
                </Card>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    cardContent: {
        width: '90%',
        justifyContent:'center',
        textAlign: 'center'
    },
    logoutContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    logoutInnerContainer: {
        marginTop: 30,
        
    },
    profileText: {
        fontSize: 30,
        color: 'red',
        fontWeight: '600',
        marginTop: 30,
        textAlign: 'center',
        marginTop:30
    },
    logoutText: {
        fontSize: 20,
        color: 'purple',
        fontWeight: '600',
        marginTop: 30,
        
    }
}) 