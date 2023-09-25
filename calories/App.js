import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';//https://github.com/react-native-picker/picker
import RadioForm from 'react-native-simple-radio-button'

export default function App() {
  const [weight,setWeight] = useState(0)
  const [intensity,setIntensity] = useState(1.3)
  const [gender, setGender] = useState('male')
  const [calories, setCalories] = useState(0)

  const intenArray = Array()
  intenArray.push({label: 'light', value: 1.3})
  intenArray.push({label: 'usual', value: 1.5})
  intenArray.push({label: 'moderate', value: 1.7})
  intenArray.push({label: 'hard', value: 2})
  intenArray.push({label: 'very hard', value: 2.2})

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}]
  
  const calculate = () => {
    let result = 0
    if (gender === 'male'){
      result = (879 + 10.2 * weight) * intensity
    }
    else{
      result = (795 + 7.18 * weight) * intensity
    }
    setCalories(result)
  }

  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <View style={styles.field}>
        <TextInput 
          placeholder='kg'
          keyboardType='number-pad'
          onChangeText={text => setWeight(text)}
          style={styles.field}
        />
      </View>
      <View style={styles.field}>
        <Text>Intensity</Text>
        <Picker
          style={styles.intensity}
          onValueChange={(itemValue) => setIntensity(itemValue)}
          selectedValue={intensity}
          >
          {
          intenArray.map((intensity,index) => (
            <Picker.Item key ={index} label={intensity.label} value={intensity.value}/>
            ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
        style={styles.radio}
        buttonSize ={15}
        radio_props={genders}
        initial={0}
        onPress={value => setGender(value)}
      />
      </View>
      <View style={styles.field}>
        <Text>{calories.toFixed(0)}
        
        </Text>
      </View>
      <Button
      title='Calculate'
      onPress={calculate}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    margin:12
  },
  field:{
    marginBottom: 12,
    marginTop: 12
    
  },
  radio:{
    marginTop: 12 
  },
  intensity:{
    alignSelf: 'stretch'
  }
});