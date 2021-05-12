import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD} from '../../../Config/Functions';

const EvaluteTeacher = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Đánh giá giảng dạy'} />
      <View
        style={{
          flex: 1,
        }}>
        <Text>dsad</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EvaluteTeacher;
