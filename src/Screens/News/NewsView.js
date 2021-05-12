import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import Item from './Item';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';
import {TABLENEWS, BUSTLE, JOB, SCHOLARSHIP} from '../../routers/ScreenNames';

const listItem = [
  {
    id: '1',
    title: 'Bảng tin',
    description: 'Danh sách tin tức',
    screen: TABLENEWS,
    icon: R.images.newspaper,
  },
  {
    id: '2',
    title: 'Hoạt động',
    description: 'Danh sách các hoạt động',
    screen: BUSTLE,
    icon: R.images.active,
  },
  {
    id: '3',
    title: 'Việc làm',
    description: 'Danh sách việc làm,tin tuyển dụng',
    screen: JOB,
    icon: R.images.job,
  },
  {
    id: '4',
    title: 'Học bổng',
    description: 'Thông tin học bổng',
    screen: SCHOLARSHIP,
    icon: R.images.education,
  },
];

const NewsView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Tin tức'} />
      <View style={styles.container}>
        <FlatList
          data={listItem}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default NewsView;
