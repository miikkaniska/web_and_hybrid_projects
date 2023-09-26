import React from 'react'
import {Text, StyleSheet, Pressable} from 'react-native'

export default function Row ({person, selectedID, select}){
    
    const backgroundColor = person.id === selectedID ? '#c0c0c0' : '#f5f5f5'

    return (
        <Pressable onPress={() => select(person.id)}>
        <Text style={[styles.row, {backgroundColor}]}>{person.lastname}, {person.firstname}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    row: {
        marginTop: 10,
        marginBottom: 10,
        fontSize:20,
        height:40
    },
})