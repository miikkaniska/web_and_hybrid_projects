import Constants from 'expo-constants'
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todo'

export default function App() {

  const [todo, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    const newKey = String (todo.length)
    const object = {key: newKey, description: newTodo}
    const newTodos = [...todo,object]
    setTodo(newTodos)
    storeData(newTodos)
    setNewTodo('')
  }

  const storeData = async(value) => {
    try{
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)      
    }
    catch (e){
      console.log(e)
    }
  }

  const getData = async() => {
    try {
      return AsyncStorage.getItem(STORAGE_KEY)
      .then(req => JSON.parse(req))
      .then(json => {
        if (json === null){
          json = []
        }
        setTodo(json)
      })
    }
    catch (e){
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.heading}>Todos</Text>
      <TextInput
        style = {styles.input}
        placeholder = 'enter new todo to list'
        value = {newTodo}
        onChangeText={text => setNewTodo(text)}
        returnKeyType='done'
        onSubmitEditing={() => addTodo()}
      />
      <FlatList
        style={styles.list}
        data={todo}
        extraData={todo}
        renderItem={({item}) =>
          <Text>{item.description}</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:Constants.StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderColor: '#fafafa',
    height: 40,
    margin: 8,
  },
  list: {
    margin: 8,
  },
});
