import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function SecondScreen({route,navigation}) {
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor: '#00ffff'
            }})
        },[])

    useEffect(() => {
        if (route.params?.message){
            alert(route.params.message)
        }
        BackHandler.addEventListener('hardwareBackPress',close)
        return() => {
            BackHandler.removeEventListener('hardwareBackPress',close)
        }
    }, [] )

    function close() {
        navigation.goBack(null)
        return true
    }

    return (
        <View style={styles.container}>
            <Text>2nd screen</Text>
            <StatusBar style="auto" />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding:10,
    }
});