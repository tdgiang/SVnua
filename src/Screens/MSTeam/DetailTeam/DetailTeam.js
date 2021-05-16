import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

import Posts from './Posts';
import Files from './Files';
import Assignment from './Assignment';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import R from '../../../assets/R';

const Tab = createMaterialTopTabNavigator();
const GraduationView = (props) => {
  const {name} = props.route.params.data;
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={name} />
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'white'},
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: {backgroundColor: R.colors.main},
        }}>
        <Tab.Screen name="Bảng tin" component={Posts} />

        <Tab.Screen name="Bài tập" component={Assignment} />
        <Tab.Screen name="Files" component={Files} />
      </Tab.Navigator>
    </View>
  );
};

export default GraduationView;
