import React ,{useEffect, useState} from "react"
import {View , Text , Button , ScrollView} from "react-native"
import Cake from "./Cake"
import axios from "axios"
export default function Home(props){
   let dataofparent =  null
    function capturefromchild(datacomingfromchild){
       dataofparent = datacomingfromchild
       alert(dataofparent)
    }
    var [cakes , setCakes] = useState([])
    useEffect(()=>{
        axios({
          method:"get",
          url:"https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response)=>{
          setCakes(response.data.data)
        })
      },[])
    return(
       <View>
       <ScrollView>
      {cakes.map((each,index)=>{
        return <Cake fun={capturefromchild} {...props} data={each} key={index} />
      })}
      </ScrollView>
           
       </View>
    )
}