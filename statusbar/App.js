import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import  Constants  from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Homework for week 3: Statusbar.</Text>
      <StatusBar 
      style="auto"
      backgroundColor='#00FFFF'
      //hidden={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS ==='android' ? Constants.StatusBarHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
