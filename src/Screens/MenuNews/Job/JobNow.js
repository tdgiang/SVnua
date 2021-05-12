import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';

const Jobnow = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Việc làm trong ngày'} />
    </View>
  );
};

export default Jobnow;
