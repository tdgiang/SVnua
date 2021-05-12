import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import R from '../../../assets/R';

const Tab = createMaterialTopTabNavigator();
const GraduationView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Tốt nghiệp'} />
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'white'},
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: {backgroundColor: R.colors.main},
        }}>
        <Tab.Screen name="Học tập" component={Tab1} />
        <Tab.Screen name="Giấy tờ" component={Tab2} />
      </Tab.Navigator>
    </View>
  );
};

export default GraduationView;
