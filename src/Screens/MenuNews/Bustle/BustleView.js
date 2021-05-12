import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
import All from './All';
import Join from './Join';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import R from '../../../assets/R';

const Tab = createMaterialTopTabNavigator();

const BustleView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Hoạt động'} />
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'white'},
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: {backgroundColor: R.colors.main},
        }}>
        <Tab.Screen name="Tất cả" component={All} />
        <Tab.Screen name="Tham gia" component={Join} />
      </Tab.Navigator>
    </View>
  );
};

export default BustleView;
