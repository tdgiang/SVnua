import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  EVALUATEUSER,
  EVALUATETEACHER,
  EVALUATERESULT,
} from '../../../routers/ScreenNames';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD} from '../../../Config/Functions';
import {useNavigation} from '@react-navigation/native';

const EvaluteView = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Đánh giá'} />
      <View
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(EVALUATEUSER)}
          style={styles.containerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 25, height: 25}}
              source={R.images.userCheck}
            />
            <Text style={styles.txtTitle}>Tự đánh giá điểm rèn luyện </Text>
          </View>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(EVALUATETEACHER)}
          style={styles.containerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 30, height: 30}} source={R.images.teacher} />
            <Text style={styles.txtTitle}>Đánh giá giảng dạy</Text>
          </View>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(EVALUATERESULT)}
          style={styles.containerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 30, height: 30}} source={R.images.barchart} />
            <Text style={styles.txtTitle}>Kết quả đánh giá</Text>
          </View>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: getFontXD(42),
    marginLeft: 10,
  },
  containerItem: {
    marginHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EvaluteView;
