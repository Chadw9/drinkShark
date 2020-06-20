import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


class App extends Component{
  render(){
    return(
      <View style={styles.header}>
              <Text>Drink Shark</Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});

export default App;
