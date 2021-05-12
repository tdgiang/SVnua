import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import {getFontXD, toPriceVnd} from '../../Config/Functions';
import R from '../../assets/R';

const DATA = [
  {
    id: '1',
    name: 'Học phí kì 1 năm 2017-2018',
    money: 7640000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '11',
    name: 'Thẻ bảo hiểm y tế',
    money: 500000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '13',
    name: 'Tiền kỹ năng mềm KN0001',
    money: 420000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '2',
    name: 'Học phí kì 2 năm 2017-2018',
    money: 7640000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '3',
    name: 'Học phí kì 1 năm 2018-2019',
    money: 7640000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '4',
    name: 'Học phí kì 2 năm 2018-2019',
    money: 7640000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '5',
    name: 'Học phí kì 1 năm 2019-2020',
    money: 7640000,
    time: '20:30 - 03/01/2018',
  },
  {
    id: '6',
    name: 'Học phí kì 2 năm 2019-2020',
    money: 7640000,
    time: '20:30 - 03/01/2018',
  },
];

const Item = (props) => {
  const {name, money, time} = props.item;
  return (
    <View style={styles.containerItem}>
      <View style={styles.wrap}>
        <Text style={styles.txtTitle}>Tên khoản thu </Text>
        <Text numberOfLines={1} style={styles.txtName}>
          {name}
        </Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.txtTitle}>Số tiền (vnđ) </Text>
        <Text style={{color: R.colors.red, fontSize: getFontXD(42)}}>
          {toPriceVnd(money)}
        </Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.txt}>Thời gian thu </Text>
        <Text style={styles.txt}>{time}</Text>
      </View>
    </View>
  );
};

const Pays = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Những khoản thanh toán'} />
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  txtName: {
    fontSize: getFontXD(42),
    color: R.colors.black,
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
  },
});

export default Pays;

 