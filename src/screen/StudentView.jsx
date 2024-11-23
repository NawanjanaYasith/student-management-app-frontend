import { View, Text, StyleSheet, TextInput, Image , ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import StudentCard from './StudentCard';
import { useEffect, useState } from 'react';
import instance from '../services/AxiosOrder';

export default function StudentView() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        getAllStudents();
    }, []);


    const getAllStudents = () => {
        instance.get('/student/getAll')
            .then(function (response) {
                setStudent(response.data);
            })
            .catch(error => {
                console.log(error)
                alert('error')
            })
    }
    const handleDelete = (id) => {
        setStudent(prevStudents => prevStudents.filter(student => student.id !== id));
    };

    return (
        <ScrollView >
            <Text style={styles.headText}>Students</Text>
            <View style={styles.container}>
            {student.map((student, index) => (
                <StudentCard key={index} student={student} onDelete={handleDelete} />
            ))}
            </View> 
         </ScrollView>
    )
}



const styles = StyleSheet.create({
    headText:{
        fontSize:30,
        color:'red',
        fontWeight:'600',
        marginTop:30,
        textAlign:'center'
    },
    container: {
        backgroundColor: 'f5f5f5',
        flex: 1,
        justifyContent: 'center',
        gap:20,
        marginTop:20
    },
    btnContainer: {
        marginTop: 18,
        marginHorizontal: 90,
        marginBottom: -10,
    }

})