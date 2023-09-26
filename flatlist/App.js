import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import {DATA} from './Data.js'
import Row from './components/Row.js'
import Search from './components/Search.js'
import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] =useState([])
  const [selectedID, setSelectedID] = useState(null)

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) =>{
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
    setItems(searchArray)
  }

  const select = (ID) => {
    setSelectedID(ID)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList 
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedID}
        renderItem={({item}) => (<Row person={item} selectedID={selectedID} select={select}/>
        )}
      />
    </SafeAreaView>
  );

  //other ways to do same as above
/*   function renderItem({item}){
    return(<Text>{item.lastname}</Text>)
  } */

  //const renderItem = ({item}) => (<Text>{item.lastname}</Text>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
