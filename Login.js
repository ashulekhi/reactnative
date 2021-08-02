import React , {useState} from 'react'
import {View , TextInput , Button , StyleSheet , Alert , Text} from "react-native"
import axios from "axios"
export default function Login(props){
  console.log("props of login" , props)
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  var login =  function(){
     axios({
         method:"post",
         url:"https://apifromashu.herokuapp.com/api/login",
         data:{email:email,pasword:password}
     }).then((result)=>{
         if(result.data.token){
             Alert.alert("Login Success")
         }
         else{
            Alert.alert("Invalid credentials")
         }
     }).catch((error)=>{
         Alert.alert("Some Error Occurred")
     })
  }
    return(
        <View>
<Text>Hello {props.route.params.name}</Text>
        <TextInput value={email} style={styles.inputdesign} onChangeText={setEmail}></TextInput>
        <TextInput secureTextEntry={true} value={password} style={styles.inputdesign} onChangeText={setPassword}></TextInput>
        <Button onPress={login} title="Login"></Button>
        </View>
    )
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
      width:150,
      borderWidth:1
    },
    imagelogo:{
      height:50,
      width:50
    }
  });