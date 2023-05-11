import React from "react";
import { StyleSheet, TextInput } from "react-native";
const TgTextInput=()=>{
    return(
      <TextInput style={Styles.testInput} placeholder="Search..."></TextInput>
    )

}
export default TgTextInput

const Styles=StyleSheet.create({
   testInput:{
        backgroundColor:"#FFFFFF",
        borderRadius:2,

     
    },
})