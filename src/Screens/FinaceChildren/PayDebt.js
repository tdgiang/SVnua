import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';





const PayDebt = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thanh toán công nợ'} />
      <View></View>
    </View>
  );
};

export default PayDebt;
