import React ,{useEffect , useState} from "react"
import {View , Text , Button , ScrollView} from "react-native"
import axios from "axios"


import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value

export default function CakeDetails(props){
    var [cakedetails,setCakedetails] = useState({})
    useEffect(()=>{
        axios({
          method:"get",
          url:"https://apifromashu.herokuapp.com/api/cake/"+props.route.params.cakeid
        }).then((response)=>{
            console.log(":::::::::::" , typeof  (response.data.data.cakeid).toString())
            
            setCakedetails({
                ...response.data.data,
                cakeid: (response.data.data.cakeid).toString()
            })


            
        })
      },[])
    return(
       <View>
           <Text>Cake Details Page</Text>
       <ScrollView>
    <Text>{cakedetails.name}</Text>
    <Text>{cakedetails.price}</Text>
    <Text>{cakedetails.flavour}</Text>
   {cakedetails.cakeid && <QRCode
      value={cakedetails.cakeid}

   /> }
      </ScrollView>  
       </View>
    )
}