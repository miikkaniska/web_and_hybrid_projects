import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons'


export default function HomeScreen({navigation}) {

    const [message, setMessage] = useState('')

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor: '#00ffff'
            },
            headerRight: () => (
                <AntDesign
                style={styles.navButton}
                name='arrowright'
                size={20}
                onPress={() => navigation.navigate('Second', {message: message})}                
                />
            )
        })
    }, [message]
    )
    return (
        <View style={styles.container}>
            <Text>1st screen</Text>
            <TextInput onChangeText={text => setMessage(text)} value={message} placeholder='Type message here. It will be displayed on second page.'/>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },
    navButton: {
        marginRight: 8,
        padding: 5
    }
});