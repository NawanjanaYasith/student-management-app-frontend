import React from 'react';
import {StyleSheet,useColorScheme,View,Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Dashboard from './src/screen/Dashboard';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // Check if token is stored in AsyncStorage
    AsyncStorage.getItem('login')
      .then(token => {
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(error => console.error(error));
  }, []);

  // Render the navigation once the state is determined
  if (isLoggedIn === null) {
    return null; // You can return a loading spinner while the state is being checked
  }

  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          // <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Dashboard">
            {props => <Dashboard {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <>
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Login">
              {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
