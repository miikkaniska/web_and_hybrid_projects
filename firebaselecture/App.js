import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, SafeAreaView, TextInput, Text, ScrollView  } from 'react-native';
import { MESSAGES, addDoc, collection, firestore, serverTimestamp, query, onSnapshot, orderBy} from './firebase/config.js';
import { useEffect, useState } from 'react';
import { convertFirebaseTimeStampToJS } from './helper/Functions.js';


export default function App() {

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
 
  const save = async() => {
    const docRef = await addDoc(collection(firestore,MESSAGES), {
      text: newMessage,
      created: serverTimestamp()
    }).catch(error => console.log(error))
    setNewMessage('')
  }

  useEffect(() => {
    const q = query(collection(firestore,MESSAGES), orderBy('created','desc'))

    const unsub = onSnapshot(q,(QuerySnapshot) =>{
      const tempMessages = []
      QuerySnapshot.forEach((doc)=> {
        //tempMessages.push(doc.data())
        const messageObject = {
          id: doc.id,
          text: doc.data().text,
          created: convertFirebaseTimeStampToJS(doc.data().created)
        }
        tempMessages.push(messageObject)
      })
      setMessages(tempMessages)
    })
    return() => {
      unsub()
    }
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{
        messages.map((message) =>(
          <View style = {styles.message} key={message.id}>
            <Text style={styles.messageInfo}>{message.created}</Text>
            <Text>{message.text}</Text>
          </View>
        ))
        
        }

      </ScrollView>
      <TextInput style={styles.input} placeholder='send message...' value={newMessage} onChangeText={text => setNewMessage(text)}></TextInput>
      <Button style={styles.button} title='send' type='button' onPress={save}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'left',
    //justifyContent: 'left',
  },
  message:{
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft:5,
    marginRight:5,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth:1,
    borderRadius:5,
  },
  messageInfo:{
    fontSize: 14,    
  },
  input:{
    fontSize:18,
    margin:20
  },
  button:{
    height:40,
    width:40,
  },
});
