import React, {useEffect, useState} from 'react';
import CommentCards from '../Component/CommentCards';
import {Text, FlatList, View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Spacing} from '.';
import {Typography} from '.';


const Home = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then(res => {
        setDetails(res.comments);
      });
  }, []);

  console.log('data is ', details);
  return (
     <FlatList
      data={details}
      renderItem={element => {
        return (
          <CommentCards detail={element}/>
        );
      }}
      keyExtractor={element=>element.id}
      >

      </FlatList>
  );
};
const Styles = StyleSheet.create({
  OuterViews: {
    borderWidth: 1,
    margin: Spacing.SCALE_11,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    color: '#13878F',
  },
  icon: {
    fontSize: 25,
    color: '#13878F',
  },
});
export default Home;
