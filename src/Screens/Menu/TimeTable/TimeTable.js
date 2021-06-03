import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TimeTableView from './TimeTableView';

import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

const TimeTable = (props) => {
  return (
    <View style={{flex: 1}}>
      <OrientationLocker orientation={PORTRAIT} />
      <TimeTableView />
    </View>
  );
};

export default TimeTable;
