import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import HeaderMess from '../../components/Header/HeaderMess';
import {getFontXD} from '../../Config/Functions';
import Chat from './Chat';

const DetailMess = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <HeaderMess title={'Lisa Price'} />
      <View style={{flex: 1}}>
        <Chat />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerContent: {
    paddingLeft: 10,
    flex: 1,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    fontWeight: 'bold',
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
  },
});
export default DetailMess;
