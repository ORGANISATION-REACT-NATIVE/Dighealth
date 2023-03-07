import React from 'react'
import { Button, Image, StyleSheet, View, Text } from 'react-native'

export default function FistScreen({ navigation }) {
  return (
    <View style={styles.containerParent}>
        <Text style={styles.title}>DigHealth</Text>
        <Image source={require('../assets/doctor.jpg')} style={{width: '100%', height: '70%', margin: 0}} />
        <View style={styles.container}>
            <Button title='Login' color={'skyblue'} onPress={() => navigation.navigate('Login')} />
        </View>
        <View style={styles.container}>
            <Button title='Register' color={'skyblue'} onPress={() => navigation.navigate('Register')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerParent:{
        flex:1,
        marginTop: '20%',
        margin: 20
    },
    container:{
        width: '100%', 
        paddingVertical: 10,
    },
    title:{
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 20,
    },
})
