import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';

const data = [
  {
    id: '12',
    title: 'Giấy huỷ học phần',
    unit: 'Phòng ĐT',
  },
  {
    id: '13',
    title: 'Giấy xin mở lớp học phần',
    unit: 'Phòng ĐT',
  },
  {
    id: '11',
    title: 'Giấy chứng nhận sinh viên',
    unit: 'Phòng CTSV',
  },
  {
    id: '1',
    title: 'Giấy chứng nhận sinh viên',
    unit: 'Phòng CTSV',
  },
  {
    id: '2',
    title: 'Giấy giới thiệu sinh viên',
    unit: 'Phòng CTSV',
  },
  {
    id: '3',
    title: 'Giấy đề nghị miễn giảm/học phí',
    unit: 'Phòng CTSV',
  },
  {
    id: '4',
    title: 'Giấy đề nghị hỗ trợ học tập',
    unit: 'Phòng CTSV',
  },
  {
    id: '5',
    title: 'Giấy chứng nhận học bổng',
    unit: 'Phòng CTSV',
  },
  {
    id: '6',
    title: 'Giấy thanh toán ra trường',
    unit: 'Phòng CTSV',
  },
  {
    id: '7',
    title: 'Giấy đề nghị xét,cấp học bổng tài trợ',
    unit: 'Phòng CTSV',
  },
];

const Item = (props) => {
  const {title, unit} = props.item;
  return (
    <View style={styles.container}>
      <Image style={{width: 40, height: 40}} source={R.images.iconPage} />
      <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center'}}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtContent}>Đơn vị xử lý:{unit}</Text>
      </View>
    </View>
  );
};
const Paper = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Danh sách giấy tờ'} />

      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    borderBottomColor: R.colors.borderGray,
    borderBottomWidth: 0.7,
    paddingBottom: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
  },
  txtContent: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
    marginTop: 5,
  },
});

export default Paper;
