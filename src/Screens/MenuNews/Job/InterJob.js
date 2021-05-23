import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import R from '../../../assets/R';
import { getFontXD } from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get } from 'lodash';
import Header from '../../../components/Header/Header';
import InformationJob from './InformationJob';
import Company from './Company';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const InterJob = (props) => {
  const [isDetalDescribe, setIsDetalDescribe] = useState(false);
  const [isDetalRequire, setIsDetalRequire] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Header isBack={true} title={'Chi tiết tuyển dụng'} />
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: 'white' },
          activeTintColor: R.colors.main,
          inactiveTintColor: R.colors.color777,
          indicatorStyle: { backgroundColor: R.colors.main },
        }}>
        <Tab.Screen name="Thông tin" component={InformationJob} />
        <Tab.Screen name="Công ty" component={Company} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: R.colors.black,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: R.colors.borderGray
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10

  },
  title: {
    fontSize: getFontXD(52),
    padding: 10
  },
  subtitle: {
    fontSize: getFontXD(42),
    color: R.colors.label,
    marginVertical: 5
  },
  detail: {
    fontSize: getFontXD(36),

  },
  contentext: {
    marginHorizontal: 10
  }

});
export default InterJob;
