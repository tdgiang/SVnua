import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';
import {DATA} from './DataFake';
import {Tooltip, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/Header/Header';

const WritePost = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Đăng bài'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginTop: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  seeMore: {
    marginTop: 5,
    fontSize: getFontXD(42),
    color: R.colors.lightBlue1,
    marginLeft: 10,
  },
});

export default WritePost;
