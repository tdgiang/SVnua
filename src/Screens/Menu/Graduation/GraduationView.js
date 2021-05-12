import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const GraduationView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Tốt nghiệp'} />
      <Text>GraduationView khoa bieu</Text>
    </View>
  );
};

export default GraduationView;
