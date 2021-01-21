import React, { useState } from 'react';
 import { StyleSheet, View, TextInput, Text, Button } from 'react-native';

  

export default function App() {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [message, setMessage] = useState('Result: ');


  const Sum = () => {
    var N1 = parseInt(firstNumber);
    var N2 = parseInt(secondNumber);

    var result = N1 + N2;
    setMessage(`Result: ${result}`);
    
  }

  const Subtraction = () => {
    var N1 = firstNumber;
    var N2 = secondNumber;

    var result = N1 - N2;
    setMessage(`Result: ${result}`);
  }

    return (

 
 <View style={styles.container}>
 
         <Text>{message}</Text> 

        <TextInput
 
          placeholder="Number 1"
 
          style={styles.TextInputStyle}
 
          keyboardType={'numeric'}

          onChangeText={(firstNumber) => setFirstNumber(firstNumber)}
          value={firstNumber}
 
        />

<TextInput
 
 placeholder="Number 2"

 style={styles.TextInputStyle}

 keyboardType={'numeric'}

          onChangeText={(secondNumber) => setSecondNumber(secondNumber)}
          value={secondNumber}

/>



<View style={styles.buttonContainer}>
<View style={styles.button}>
<Button title="+" onPress={Sum}/>
</View>
<View style={styles.button}>
<Button title="-" onPress={Subtraction}/>
</View>
</View>
</View>



 
 
 
            
    );
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

