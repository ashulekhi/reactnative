import React from "react"
import {View , Text , Image , StyleSheet , Button} from "react-native"

export default function Cake(props){
    return(
        <View style={styles.container1}>
            <Image source={{uri:props.data.image}} style={styles.cakeimage}></Image>
            <Text>{props.data.name}</Text>
            <Text>{props.data.price}</Text>
            <Button onPress={()=>{props.fun(props.data.cakeid)}} title="Details"></Button>
        </View>
    )
}

var styles = StyleSheet.create({
    container1: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
      },
    cakeimage:{
        height:100,
        width:100
    }
})

