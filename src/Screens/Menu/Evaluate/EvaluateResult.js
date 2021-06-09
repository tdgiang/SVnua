import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD} from '../../../Config/Functions';
import {FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    term: 'Học kỳ 1',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
  {
    id: '2',
    term: 'Học kỳ 2',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
  {
    id: '3',
    term: 'Học kỳ 3',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
  {
    id: '4',
    term: 'Học kỳ 4',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
  {
    id: '5',
    term: 'Học kỳ 5',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
  {
    id: '6',
    term: 'Học kỳ 6',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
  {
    id: '7',
    term: 'Học kỳ 7',
    selfRate: '70',
    teachRate: '68',
    studyBonus: '75',
    total: '80',
    rank: 'Khá',
    status: 'Hoàn thành',
  },
];
const Item = (props) => {
  const {term, selfRate, teachRate, studyBonus, total, rank, status} =
    props.item;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize: getFontXD(52)}}>{term}</Text>
      </View>
      <View style={{margin: 10}}>
        <View style={styles.item}>
          <Text style={styles.list}>Điểm tự đánh giá</Text>
          <Text style={styles.score}>{selfRate}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.list}>Điểm chủ nhiệm lớp đánh giá</Text>
          <Text style={styles.score}>{teachRate}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.list}>Tổng diểm</Text>
          <Text style={styles.score}>{total}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.list}>Xếp loại</Text>
          <Text style={styles.list}>{rank}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.list}>Trạng thái</Text>
          <Text style={[styles.list, {color: R.colors.main}]}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const EvaluteResult = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.colorBackground}}>
      <Header isBack={true} title={'Kết quả đánh giá'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  title: {
    alignItems: 'center',
    borderColor: R.colors.borderGray,
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  score: {
    color: 'red',
    fontSize: getFontXD(42),
  },
  list: {
    fontSize: getFontXD(40),
    opacity: 0.8,
  },
});
export default EvaluteResult;
