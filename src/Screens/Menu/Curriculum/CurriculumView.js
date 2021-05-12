import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderFillter from '../../../components/Header/HeaderFillter';

import Tab1 from './Tab/Tab1';
import Tab2 from './Tab/Tab2';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import R from '../../../assets/R';

const Tab = createMaterialTopTabNavigator();
const CurriculumView = (props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderFillter title={'Chương trình đào tạo'} />
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'white'},
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: {backgroundColor: R.colors.main},
        }}>
        <Tab.Screen name="Đại cương" component={Tab1} />
        <Tab.Screen name="Chuyên ngành" component={Tab2} />
      </Tab.Navigator>
    </View>
  );
};

export default CurriculumView;
