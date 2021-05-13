import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderFillter from '../../../components/Header/HeaderFillter';

import All from '../../TabRegister/All';
import Registered from '../../TabRegister/Registered';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import R from '../../../assets/R';

const Tab = createMaterialTopTabNavigator();
const RegisterSubjectView = (props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderFillter title={'Kỳ 1 năm 2020-2021'} />
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'white'},
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: {backgroundColor: R.colors.main},
        }}>
        <Tab.Screen name="Tất cả" component={All} />
        <Tab.Screen name="Đã đăng ký" component={Registered} />
      </Tab.Navigator>
    </View>
  );
};

export default RegisterSubjectView;
