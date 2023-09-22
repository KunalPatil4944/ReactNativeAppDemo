import React, { useState } from "react";

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

 

 

const Registration = ({ navigation, setRegisteredUsers }) => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

 

 

  const handleRegister = () => {

    // Save user data to state or a database

    const newUser = { username, password };

    setRegisteredUsers(prevUsers => [...prevUsers, newUser]);

    navigation.navigate('Login');

  };

  return (

    <View style={styles.container}>

     

       <Text style={{fontSize: 30,fontWeight: 'bold', marginBottom: 20, justifyContent: 'center', alignItems: 'center', position: "absolute", top: 15, padding: 25}}>Signup</Text>

     

     

     <View style={{marginBottom: 15, }}>

      <TextInput placeholder='UserName' style={styles.blank} onChangeText={(text) => setUsername(text)} />

      <TextInput placeholder='Password' style={styles.blank} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />

      <TextInput placeholder='Email' style={styles.blank}/>

      <TextInput placeholder='FirstName' style={styles.blank}/>

      <TextInput placeholder='LastName' style={styles.blank}/>

     

     </View>

     <View style={{marginBottom: 15, }}>

      <Button title='Upload Profile Picture' color='blue' />

     </View>

     <View>

      <Button title="Signup" color='blue' onPress={handleRegister} />

     </View>

     

     

    </View>

  );

}

 

const styles = StyleSheet.create({

  container: {

    padding: 20,

    flexDirection: 'column',

    flex:  1,

    backgroundColor: '#1e90ff',

    borderWidth: 1.5,

    borderColor: 'black',

    alignItems: 'center',

    justifyContent: 'center',

    margin: 20,

    paddingBottom: 5,

    borderRadius: 15

  },

  blank: {

    padding: 15,

    backgroundColor: '#fffafa',

    borderColor: 'black',

    borderWidth: 2,

    borderRadius: 10,

    position: 'relative',

    width: 200,

    height: 50,

    margin: 5,

    justifyContent: 'space-between'

 

  }

 

});

export default Registration;