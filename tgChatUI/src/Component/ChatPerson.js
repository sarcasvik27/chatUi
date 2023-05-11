import React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import moment from 'moment'
const ChatPerson = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(res => {
        console.log(res.users), setDetails(res.users);
      });
  }, []);
  const moment1=moment().format("MMM Do YY")

  return (
    <FlatList
      data={details}
      renderItem={element => {
        return (
          <>
            <View style={Style.outerView}>
              <Image
                source={{uri: element.item.image}}
                style={Style.image}></Image>
            <View style={Style.text}>
              <View style={Style.nameView}>
                <Text style={Style.name}>
                  {element.item.firstName} {element.item.lastName}
                </Text>
                <Text>{element.item.username}</Text>
              </View>
              <Text>{moment1}</Text>
              </View>
            </View>

            <View
              style={Style.separator}></View>
          </>
        );
      }}></FlatList>
  );
};
export default ChatPerson;


const Style=StyleSheet.create({
outerView:{flexDirection: 'row', alignItems: 'center',paddingVertical:10},
image:{height: 70, width: 70, borderRadius: 75,backgroundColor:"#FFFFFF"},
text:{flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",width:"78%"},
nameView:{paddingHorizontal:10},
name:{color: 'black', fontWeight: '600'},
separator:{  borderWidth: 0.4,
    borderColor: 'rgba(196,196,196,0.8)'}

})