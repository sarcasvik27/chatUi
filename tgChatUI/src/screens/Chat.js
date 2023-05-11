import React from 'react';
import {StyleSheet, Text, View,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import ChatPerson from '../Component/ChatPerson';
import TgTextInput from '../Component/TgTextInput';
const Chat = ({navigation}) => {
  return (
    <View style={Styles.fullView}>
      <View style={Styles.headerView}>
        <View style={Styles.headerTitle}>
          <View style={Styles.RightIcons}>
            <Pressable onPress={()=>{
              navigation.dispatch(DrawerActions.openDrawer());
           }}><Icon name="bars" style={Styles.icon}></Icon></Pressable> 
          </View>
          <Text style={Styles.text}>Chat</Text>
          <View style={Styles.LeftIcons}>
            <Icon name="edit" style={Styles.iconsBlue}></Icon>
            <Icon name="ellipsis-v" style={Styles.icons}></Icon>
          </View>
        </View>
      </View>
      <View style={Styles.cardView}>
        <View style={Styles.SearchView}>
          <Icon name="search" style={Styles.searchIcon}></Icon>
          <TgTextInput />
        </View>

        <View style={Styles.archivedView}>
          <Icon name="folder-open-o" style={Styles.iconsBlue}></Icon>
          <Text
            style={Styles.ArchivedText}>
            Archived{' '}
          </Text>
        </View>
        <ChatPerson />
      </View>
    </View>
  );
};
export default Chat;

const Styles = StyleSheet.create({
  fullView: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  headerView: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  cardView: {
    flex: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#EFEFEF',
  },
  icons: {
    fontSize: 25,
  },
  icon: {
    fontSize: 25,
    flex: 1,
    paddingLeft: 10,
  },
  headerTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  LeftIcons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  RightIcons: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  iconsBlue: {
    fontSize: 25,
    color: '#13878F',
  },
  text: {
    fontWeight: '600x',
    color: 'black',
    fontSize: 20,
    flex: 2,
    textAlign: 'center',
  },
  searchIcon: {fontSize: 20, paddingHorizontal: 15},
  SearchView: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  archivedView: {flexDirection: 'row',
   marginHorizontal: 20},
   ArchivedText:{
      paddingHorizontal: 40,
      fontWeight: '600',
      color: '#070808',
   }
});
