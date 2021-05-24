import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../../components/Header/Header';
import InformationJob from './InformationJob';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import R from '../../../../assets/R';
import Company from './Company';

const Tab = createMaterialTopTabNavigator();

const RecruitDetail = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Chi tiết tuyển dụng'} />
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'white'},
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: {backgroundColor: R.colors.main},
        }}>
        <Tab.Screen name="Thông tin" component={InformationJob} />
        <Tab.Screen name="Công ty" component={Company} />
      </Tab.Navigator>
    </View>
  );
};

export default RecruitDetail;
