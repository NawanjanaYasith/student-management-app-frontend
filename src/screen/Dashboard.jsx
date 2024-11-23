import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentManage from './StudentManage';
import StudentView from './StudentView';
import Model from './Model';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

export default function Dashboard({setIsLoggedIn}) {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarLabelStyle: { fontSize: 14 }, // Increase font size
                tabBarStyle: { height: 60}, // Adjust tab bar height if needed

            }}>
            <Tab.Screen  name="StudentView" component={StudentView} />
            <Tab.Screen  name="StudentManage" component={StudentManage} />
            <Tab.Screen  
                name="Profile" 
                component={Profile} 
                initialParams={{ setIsLoggedIn }} // Pass setIsLoggedIn as a param
                />

        </Tab.Navigator>
    )
}