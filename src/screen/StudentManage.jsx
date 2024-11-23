import { View, StyleSheet, TextInput, Image,FlatList, Alert } from 'react-native';
import instance from '../services/AxiosOrder';
import { Card, Text } from 'react-native-paper';
import { Button } from 'react-native-paper'
import React, { useEffect, useState } from 'react';
import Model from './Model'
export default function StudentManage(){

    const [students, setStudents] = useState([]);
    const [modelOpen, setModelOpen] = useState(true);
    
  
    const handleSubmitClick=()=>{
        setModelOpen(true);
    }

      return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                {/* <Button  mode="contained" onPress={handleSubmitClick}>
                    Add Student
                </Button> */}
            </View>
            {modelOpen && <Model/>}
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'f5f5f5',
        flex: 1,
    },
    btnContainer:{
        marginTop:18,
        marginHorizontal:90,
        marginBottom:-10,
    }
   
})