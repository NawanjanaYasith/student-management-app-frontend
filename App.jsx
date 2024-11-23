import React from 'react';
import {SafeAreaView,StyleSheet,useColorScheme,View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
