import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'red'}
          centerComponent={{
            text: 'Pocket Dictoinary',
            style: { color: '#111111', fontWeight: 'bold', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({
              displayText: this.state.text,
            });
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        
        <Text style={styles.displayText}>
{this.state.displayText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2c1ff',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },

  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: { 
  textAlign: 'center', 
  fontSize: 30, 
  fontWeight: 'bold' 
  },

displayText: {
  textAlign: 'center',
  fontSize: 30, 
  

}

});


