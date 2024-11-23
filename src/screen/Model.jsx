import { TextInput, View, StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import instance from '../services/AxiosOrder';

export default function Model() {
    const [students, setStudents] = useState([]);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [newStudent, setNewStudent] = useState({
        name: '',
        age: '',
        address: '',
        contact: ''
        //   student_name: '',
        //   student_age: '',
        //   student_address:'',
        //   student_contact: ''
    });

    
    const saveStudent=()=>{
        instance.post('/student/save',{
            student_name: newStudent.name,
            student_age: newStudent.age,
            student_address: newStudent.address,
            student_contact: newStudent.contact
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(error=>{
          console.log(Error);
        })
    }
    
    
    const containerStyle = { backgroundColor: 'white', padding: 10 };
    return (
        <View style={styles.container}>
            <PaperProvider>
                <Portal>
                    <Modal  visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <View style={styles.innerContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Name"
                                value={newStudent.name}
                                onChangeText={(text) => setNewStudent({ ...newStudent, name: text })}
                                placeholderTextColor={'gray'}

                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Age"
                                value={newStudent.age}
                                placeholderTextColor={'gray'}
                                onChangeText={(text) => setNewStudent({ ...newStudent, age: text })}
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Address"
                                value={newStudent.address}
                                placeholderTextColor={'gray'}
                                onChangeText={(text) => setNewStudent({ ...newStudent, address: text })}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Contact"
                                placeholderTextColor={'gray'}
                                value={newStudent.contact}
                                onChangeText={(text) => setNewStudent({ ...newStudent, contact: text })}
                            />
                            <View style={styles.btnSubmitContainer}>
                                <Button style={styles.btnSubmit} mode="contained" onPress={saveStudent}>
                                    Submit
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </Portal>
                <Button style={styles.btnAddStudent} labelStyle={{color:'white'}} onPress={showModal}>
                    Add Student
                </Button>
            </PaperProvider>
        </View>
    )
}


const styles = StyleSheet.create({
    btnAddStudent:{
        marginTop: 30,
        backgroundColor:'blue',
        marginHorizontal: 20,

    },
    container: {
        backgroundColor: 'white',
        flex: 1,        
        
    },
    innerContainer: {
        borderWidth: 1,
        marginHorizontal: 10,
        paddingTop: 15,
        

    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        marginHorizontal: 15,
        marginVertical: 8,
    },
    btnSubmitContainer: {
        marginTop: 15,
        marginHorizontal: 110,
        marginBottom: 20

    },
    btnSubmit: {
        borderRadius: 20,
    }

})
