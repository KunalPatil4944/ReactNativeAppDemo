import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { StatusBar } from "expo-status-bar";

 

 

import Login from "./src/Login.js";

 

import Registration from "./src/Registration.js";

 

import { NavigationContainer } from "@react-navigation/native";

 

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserLists from './src/UserLists.js';

import React, { useState } from 'react';

import UsersDetail from './src/UsersDetail.js';

 

 

 

const Stack = createNativeStackNavigator();

 

const App = () => {

//   const users = [

//     {

//         id: '1',

//         title: 'Alex Hels',

//         email: 'Alexhels@hcl.com'

//     },

//     {

//         id: '2',

//         title: 'Mohammad Aarif',

//         email: 'mohammad.aarif@hcl.com'

//     },

//     {

//         id: '3',

//         title: 'Ravish Kumar',

//         email: 'ravish.kumar@hcl.com'

//     },

//     {

//         id: '4',

//         title: 'Aman Kumar',

//         email: 'aman.kumar. singh@hcl.com'

//     },

//     {

//         id: '5',

//         title: 'Ritesh Kumar Yadav',

//         email: 'ritesh.yadav@hcl.com'

//     },

//     {

//         id: '6',

//         title: 'Sunil Kumar',

//         email: 'Sunil-k@hcl.com'

//     },

//     {

//         id: '7',

//         title: 'Kunal Patil',

//         email: 'kunal_patil@hcl.com'

//     },

//     {

//         id: '8',

//         title: 'Abhiraj Roushan',

//         email: 'Abhiraj_roushan@hcl.com'

//     },

//     {

//         id: '9',

//         title: 'Himanshu Raj',

//         email: 'Himanshu@hcl.com'

//     },

// ];

  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (

    <>

 

      <StatusBar style="auto" />

 

      <NavigationContainer>

 

        <Stack.Navigator>

 

          <Stack.Screen name="Login">{props => <Login {...props} registeredUsers={registeredUsers} />}</Stack.Screen>

 

          <Stack.Screen name="Registration">{props => <Registration {...props} setRegisteredUsers={setRegisteredUsers} />}</Stack.Screen>

 

          {/* <Stack.Screen name="UsersList">

          {(props) => <UsersList {...props} users={users} />}

          </Stack.Screen>

 

          <Stack.Screen name="UsersDetail" component={UsersDetail} /> */}

 

          <Stack.Screen name="UsersList" component={UserLists} />

          <Stack.Screen name="UsersDetail" component={UsersDetail} />

        </Stack.Navigator>

 

      </NavigationContainer>

 

    </>

  );

}

 

const styles = StyleSheet.create({

  container: {

   

  },

 

});

export default App;