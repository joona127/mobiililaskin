import React, { Component, useState } from 'react';
 import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';

  

export default class Laskin extends Component {

  //const [firstNumber, setFirstNumber] = useState('');
  //const [secondNumber, setSecondNumber] = useState('');

  constructor(props)
  {
    super(props)
  this.state={firstNumber:0, secondNumber:0};
  }

  Sum = () => {
    var N1 = parseInt(this.state.firstNumber);
    var N2 = parseInt(this.state.secondNumber);

    var result = N1+N2;
    Alert.alert('Result is: ' + ' ' + result);
    
  }

  Subtraction = () => {
    var N1 = parseInt(this.state.firstNumber);
    var N2 = parseInt(this.state.secondNumber);

    var result = N1-N2;
    Alert.alert('Result is: ' + ' ' + result);
  }

  render() 
  {
    return (

 
 <View style={styles.container}>
 
         <Text>Calculate: {this.Sum}</Text> 

        <TextInput
 
          placeholder="Number 1"
 
          style={styles.TextInputStyle}
 
          keyboardType={'numeric'}

          onChangeText={firstNumber=>this.setState({firstNumber})}
 
        />

<TextInput
 
 placeholder="Number 2"

 style={styles.TextInputStyle}

 keyboardType={'numeric'}

          onChangeText={secondNumber=>this.setState({secondNumber})}

/>



<View style={styles.buttonContainer}>
<View style={styles.button}>
<Button title="+" onPress={this.Sum}/>
</View>
<View style={styles.button}>
<Button title="-" onPress={this.Subtraction}/>
</View>
</View>
</View>



 
 
 
            
    );
  }

}
 const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    margin: 10,
    
  },

  TextInputStyle: {
    
    textAlign: 'center',
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between'

  },
  button: {
    width: '18%',
    height: 40,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    padding: 15
  }

  });

