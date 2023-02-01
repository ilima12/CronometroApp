import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style = {styles.container}>

      <Image
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />

      <Text style={styles.timer}>0.0</Text>

      <View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTexto}>VAI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTexto}>LIMPAR</Text>
      </TouchableOpacity>


      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
});

export default App;