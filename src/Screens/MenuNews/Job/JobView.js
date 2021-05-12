import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
import Item from './Item';
import R from '../../../assets/R';
import {
  RECRUIT,
  INTERSHIP,
  JOBNOW,
  OVERTIME,
} from '../../../routers/ScreenNames';




const listItem = [
  {
    id: '1',
    title: 'Tuyển dụng',
    screen: RECRUIT,
    icon: R.images.user,
  },
  {
    id: '2',
    title: 'Thực tập sinh',
    screen: INTERSHIP,
    icon: R.images.page,
  },
  {
    id: '3',
    title: 'Việc làm thêm',
    screen: OVERTIME,
    icon: R.images.changePass,
  },
  {
    id: '4',
    title: 'Việc làm trong ngày',
    screen: JOBNOW,
    icon: R.images.changePass,
  },
];

const JobView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Việc làm'} />
      {listItem.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </View>
  );
};

export default JobView;
