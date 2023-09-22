import { StyleSheet, Text, View, Button, TextInput, Alert, Image } from 'react-native';
import React, { useState } from "react";

 

const Login = ({ navigation, registeredUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

 

  const handleLogin = () => {
    const user = registeredUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      setLoggedIn(true);
      navigation.navigate('UsersList');
    } else {
      Alert.alert(
        "Password",
        "Wrong Password",
        [
          { text: "Cancel" },
          { text: "OK" }
        ]
      );
    }
  };

 

  return (
<View style={styles.container}>
<Image
        source={{uri: 'https://th.bing.com/th/id/R.8f14ea96e8c3f1bd62847f891dd1e43e?rik=7ifcIC27Q2UPVw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Y5vwJhw484s%2fU80vVr-l7pI%2fAAAAAAAABTs%2f-K60LXDVrHk%2fs1600%2fHcl-Logo.png&ehk=pyUe9X%2bsCnMmvoDJnBkC%2bU0n9GaKpT94ayngG2thMsg%3d&risl=&pid=ImgRaw&r=0',}}
        style={{
          position: 'absolute',
          top: -15,
          right: 5,
          bottom:0,
          width: 100, // Adjust the width and height as needed
          height: 100,
        
        }}
      />
<Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, justifyContent: 'center', alignItems: 'center', position: "absolute", top: 15, padding: 25 }}>Login</Text>
<View style={{ marginBottom: 15 }}>
<TextInput placeholder='UserName' onChangeText={(text) => setUsername(text)} style={styles.second} />
<TextInput placeholder='Password' onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.second} />
</View>
<View style={{ marginBottom: 15 }}>
<Button title='Login NOW' color='#3D3C3A' onPress={handleLogin} />
</View>
<View>
<Button title="Don't Have Account - Signup" color='#3D3C3A' onPress={() => navigation.navigate("Registration")} />
</View>
</View>
  );
}

 

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#00ffff',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingBottom: 5,
    borderRadius: 15,
  },
  second: {
    padding: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    position: 'relative',
    top: 15,
    width: 200,
    height: 50,
    margin: 15,
    justifyContent: 'space-between',
    borderRadius: 10,
  }
});

 

export default Login;