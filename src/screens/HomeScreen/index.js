import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.staffContainer}
                onPress={() =>
                    navigation.navigate('Staff')
                }>
                <Text style={styles.staffText}>Staff</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.courseContainer}
                onPress={() => {
                    navigation.navigate('Course')
                }}>
                <Text style={styles.courseText}>Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.studentContainer}
                onPress={() => {
                    navigation.navigate('Student')
                }}>
                <Text style={styles.studentText}>Student</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    staffContainer: {
        backgroundColor: '#52768C',
        width: '45%',
        height: "8%",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,

    },
    staffText: {
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    courseContainer: {
        backgroundColor: '#52768C',
        width: '45%',
        height: "8%",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,

    },
    courseText: {
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    studentContainer: {
        backgroundColor: '#52768C',
        width: '45%',
        height: "8%",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,

    },
    studentText: {
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: '700',
        color: '#FFFFFF',
    },

})