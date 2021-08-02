import React, { useEffect , useState } from 'react';
import { StyleSheet,ScrollView ,Button , Text, View , Image, TextInput } from 'react-native';
import axios from 'axios';
import MyVideo from './MyVideo';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home from './Home';
import Login from "./Login"
import CakeDetails from './Cakedetails';

export default function App() {
  const Stack =  createStackNavigator()
  let [videos,setVideos] = useState([])
  useEffect(()=>{
    axios({
      method:"get",
      url:"https://videouploadbyashu.herokuapp.com/allvideos"
    }).then((response)=>{
      setVideos(response.data.data)
    })
  },[])
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="cakedetails" component={CakeDetails} />
          {/* <Stack.Screen name="book" component={Book} /> */}
        </Stack.Navigator>
         {/* <View style={styles.container}>
      <ScrollView>
       {videos.map((each,index)=>{
        return <MyVideo data={each} key={index} />
      })}
      </ScrollView>
     </View> */}
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputdesign :{
    height:50,
    width:"80%",
    borderWidth:1
  },
  imagelogo:{
    height:50,
    width:50
  }
});
