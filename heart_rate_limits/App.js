import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[age,setAge] = useState(0)
  let[lowerHR,setLowerHR] = useState(0)
  let[upperHR,setUpperHR] = useState(0)

  const calcLimits = (newAge) => {
    setAge(newAge)
    setLowerHR((220 - newAge) * 0.65)
    setUpperHR((220 - newAge) * 0.85)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
      placeholder='Enter your age here'
      keyboardType='decimal-pad'
      value = {age}
      onChangeText={calcLimits}
      />
      <Text>HR limits</Text>
      <Text>{lowerHR.toFixed(0)}-{upperHR.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
