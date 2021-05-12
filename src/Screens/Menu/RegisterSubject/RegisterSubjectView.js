import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const RegisterSubject = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Đăng ký tín chỉ'} />
      <Text>RegisterSubject khoa bieu</Text>
    </View>
  );
};

export default RegisterSubject;
