import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Item from './Item';
import Button from '../../components/Button';
const DATA = [
  {
    id: 'TH00001',
    name: 'Tin cơ sở',
    time: '9,10',
    address: 'B106',
    count: '32/45',
    weeks: '1,2,3,4,5,6',
    status: 1,
    stc: 3,
    IDClass: 'K62CNPM',
    day: '2',
  },
  {
    id: 'TH00002',
    name: 'Kỹ thuật lập trình',
    time: '9,10',
    address: 'B106',
    count: '32/45',
    weeks: '1,2,3,4,5,6',
    status: 1,
    stc: 3,
    IDClass: 'K62CNTT',
    day: '3',
  },
  {
    id: 'TH00003',
    name: 'Cơ sở dữ liệu',
    time: '9,10',
    address: 'B106',
    count: '32/45',
    weeks: '1,2,3,4,5,6',
    status: 1,
    stc: 3,
    IDClass: 'K63TH',
    day: '4',
  },
  {
    id: 'TH00004',
    name: 'Lập trình hướng đối tượng',
    time: '9,10',
    address: 'B106',
    count: '32/45',
    weeks: '1,2,3,4,5,6',
    status: 1,
    stc: 3,
    IDClass: 'K62CNPM',
    day: '4',
  },
  {
    id: 'TH00005',
    name: 'Lập trình Java',
    time: '9,10',
    address: 'B106',
    count: '32/45',
    weeks: '1,2,3,4,5,6',
    status: 1,
    stc: 3,
    IDClass: 'K64ATTT',
    day: '5',
  },
];

const Registered = (props) => {
  return (
    <View style={{flex: 1}}>
      <FlatList data={DATA} renderItem={({item}) => <Item item={item} />} />
      <Button
        containerStyle={{
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title={'Huỷ đăng ký'}
      />
    </View>
  );
};

export default Registered;
