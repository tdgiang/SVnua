import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {connect} from 'react-redux';
import R from '../assets/R';
import PlussModal from './PlussModal';

import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../Screens/Home/Home';
import Mess from '../Screens/Mess/Mess';
import News from '../Screens/News/News';
import Account from '../Screens/Account/Account';
import Todo from '../Screens/ToDo/Todo';

const Tab = createBottomTabNavigator();
const PayScreenComponent = () => {
  return null;
};

const TabNavigator = (props) => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{activeTintColor: R.colors.main}}>
        <Tab.Screen
          name="Screen5"
          component={Todo}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Octicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen1"
          component={Home}
          options={{
            tabBarLabel: 'Đào tạo',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="school-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Pay"
          component={PayScreenComponent}
          options={{
            tabBarButton: () => <PlussModal />,
          }}
        />

        <Tab.Screen
          name="Screen2"
          component={Mess}
          options={{
            tabBarLabel: 'Tin nhắn',
            tabBarIcon: ({color, size}) => (
              <Icon name="message1" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen3"
          component={News}
          options={{
            tabBarLabel: 'Tin tức',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
