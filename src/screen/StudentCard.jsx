import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Card, Button } from 'react-native-paper';
import instance from '../services/AxiosOrder';


export default function StudentCard({student,onDelete}) {

    const deleteStudent=()=>{
        instance.delete(`/student/delete/${student.id}`)
            .then(function (response) {
                onDelete(student.id);
                console.log('Student deleted successfully');
            })
            .catch(error => {
                console.log(Error);
            })
    }
    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <View style={styles.innerContainer}>
                        <View style={styles.innerContainerText}>
                            <Text style={styles.label}>Name</Text>
                            <Text style={styles.colan}>:</Text>
                            <Text style={styles.value}>{student.student_name}</Text>
                        </View>
                        <View style={styles.innerContainerText}>
                            <Text style={styles.label}>Age</Text>
                            <Text style={styles.colan}>:</Text>
                            <Text style={styles.value}>{student.student_age}</Text>
                        </View>
                        <View style={styles.innerContainerText}>
                            <Text style={styles.label}>Address</Text>
                            <Text style={styles.colan}>:</Text>
                            <Text style={styles.value}>{student.student_address}</Text>

                        </View>
                        <View style={styles.innerContainerText}>
                            <Text style={styles.label}>Contact</Text>
                            <Text style={styles.colan}>:</Text>
                            <Text style={styles.value}>{student.student_contact}</Text>

                        </View>
                        <View style={styles.btnContainer}>
                            <Button                              
                                labelStyle={{color:'white'}}
                                mode="contained"   
                                style={{backgroundColor: 'blue'}}
                                onPress={() => console.log('Pressed')}>
                                Update
                            </Button>
                            <Button  
                                labelStyle={{color:'white'}}
                                mode="contained" 
                                style={{backgroundColor: 'red'}}
                                onPress={deleteStudent}>
                                Delete
                            </Button>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'column',
    },
    innerContainerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        margin: 8,
        gap: 30
    },
    colan: {
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        fontWeight: 'bold',
    },


    container: {
        backgroundColor: 'f5f5f5',
        flex: 1,
        paddingHorizontal: 16,
    },
    btnContainer: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap:20
    }

})