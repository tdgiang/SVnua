import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../../../components/Header/Header';
import R from '../../../../assets/R';
import images from '../../../../assets/images';
import {FlatList} from 'react-native';
import {getFontXD} from '../../../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {RECRUITDETAIL} from '../../../../routers/ScreenNames';
import Icon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    image: R.images.bkav,
    recruiter: 'Công ty cổ phần viễn thông di động',
    title: 'Kỹ thuật viên máy tính',
    address: 'Hà nội',
    salary: '8-10 triệu',
    expdate: '20/05/2021',
  },
  {
    id: '2',
    image: R.images.vsmart,
    recruiter: 'Công ty TNHH kỹ thuật cơ điện',
    title: 'Kỹ sư dự án - Điện',
    address: 'Hà nội',
    salary: '20 triệu',
    expdate: '20/05/2021',
  },
  {
    id: '3',
    image: R.images.bkav,
    title: 'Kỹ sư tự động hoá',
    recruiter: 'Công ty TNHH Logistics Infra Việt Nam',
    address: 'Hà nội',
    salary: 'Thoả thuận',
    expdate: '20/05/2021',
  },
  {
    id: '4',
    image: R.images.vsmart,
    recruiter: 'Công ty cổ phần viễn thông di động',
    title: 'Kỹ thuật viên máy tính',
    address: 'Hà nội',
    salary: '8-10 triệu',
    expdate: '20/05/2021',
  },
  {
    id: '5',
    image: R.images.bkav,
    recruiter: 'Công ty TNHH kỹ thuật cơ điện',
    title: 'Kỹ sư dự án - Điện',
    address: 'Hà nội',
    salary: '20 triệu',
    expdate: '20/05/2021',
  },
  {
    id: '6',
    image: R.images.vsmart,
    title: 'Kỹ sư tự động hoá',
    recruiter: 'Công ty TNHH Logistics Infra Việt Nam',
    address: 'Hà nội',
    salary: 'Thoả thuận',
    expdate: '20/05/2021',
  },
  {
    id: '7',
    image: R.images.bkav,
    recruiter: 'Công ty cổ phần viễn thông di động',
    title: 'Kỹ thuật viên máy tính',
    address: 'Hà nội',
    salary: '8-10 triệu',
    expdate: '20/05/2021',
  },
  {
    id: '8',
    image: R.images.vsmart,
    recruiter: 'Công ty TNHH kỹ thuật cơ điện',
    title: 'Kỹ sư dự án - Điện',
    address: 'Hà nội',
    salary: '20 triệu',
    expdate: '20/05/2021',
  },
  {
    id: '9',
    image: R.images.vsmart,
    title: 'Kỹ sư tự động hoá',
    recruiter: 'Công ty TNHH Logistics Infra Việt Nam',
    address: 'Hà nội',
    salary: 'Thoả thuận',
    expdate: '20/05/2021',
  },
];

const Item = (props) => {
  const {image, title, address, recruiter, salary, expdate} = props.item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RECRUITDETAIL)}
      style={styles.container}>
      <Image resizeMode={'contain'} style={styles.img} source={image} />

      <View style={{flex: 1, marginLeft: 10}}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontSize: getFontXD(42), color: R.colors.color777}}>
          {recruiter}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'location'} size={getFontXD(42)} color={R.colors.main} />
          <Text style={styles.detail}>{address}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name={'money'}
              size={getFontXD(42)}
              color={R.colors.main}
            />
            <Text style={styles.detail}>{salary}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name={'timer-outline'}
              size={getFontXD(42)}
              color={R.colors.main}
            />
            <Text style={styles.detail}>{expdate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Recruit = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Tuyển dụng'} />
      <FlatList
        style={{backgroundColor: R.colors.colorBackground}}
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {width: 60, height: 50, borderRadius: 2},
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  title: {
    fontSize: getFontXD(42),
  },
  detail: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
    marginLeft: 5,
  },
});
export default Recruit;
