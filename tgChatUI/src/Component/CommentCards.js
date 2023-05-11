import React, {useState} from 'react';
import {Text, FlatList, View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Spacing} from '../screens';
import {Typography} from '../screens';
const CommentCards = ({detail}) => {
  const [showComment, setShowComment] = useState(false);
  const [showIcon, setShowIcon] = useState("chevron-right");
  const onClickShow = () => {
    setShowComment(!showComment);
    if(showIcon=="chevron-right"){
        setShowIcon("chevron-down")
    }
    else{
        setShowIcon("chevron-right")
    }
    
  };
  return (
    <View style={Styles.card}>
      <Pressable
        onPress={() => {
          onClickShow();
        }}  style={Styles.OuterViews}>
        <Text style={Styles.textUsername}>{detail.item.user.username}</Text>
        <Icon name={showIcon} style={Styles.icon}></Icon>
      </Pressable>
      {showComment && <Text style={Styles.text}>{detail.item.body}</Text>}
    </View>
  );
};
export default CommentCards;

const Styles = StyleSheet.create({
  OuterViews: {
    borderWidth: 1,
    margin: Spacing.SCALE_11,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    color: "aqua",
    margin: Spacing.SCALE_11,
  },
  textUsername: {
    fontSize: Typography.FONT_SIZE_18,
    color: '#13878F',
  },
  icon: {
    fontSize: 25,
    color: '#13878F',
  },
  card:{
    flexDirection:"column",
    backgroundColor:"black",
    borderWidth:1,
    borderColor:"white",
    padding:Spacing.SCALE_10,
    borderRadius:12,
  }
});
