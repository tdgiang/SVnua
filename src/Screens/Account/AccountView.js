import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import Item from './Item';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';
import {
  PROFILE,
  PAPER,
  CHANGEPASSWORD,
  QUESTION,
  FEEDBACK,
  SETTING,
} from '../../routers/ScreenNames';

const listItem1 = [
  {
    id: '1',
    title: 'Thông tin cá nhân',
    description: 'Danh sách tin tức',
    screen: PROFILE,
    icon: R.images.user,
  },
  {
    id: '2',
    title: 'Giấy tờ',
    description: 'Danh sách các hoạt động',
    screen: PAPER,
    icon: R.images.page,
  },
  {
    id: '3',
    title: 'Đổi mật khẩu',
    description: 'Danh sách việc làm,tin tuyển dụng',
    screen: CHANGEPASSWORD,
    icon: R.images.changePass,
  },
];
const listItem2 = [
  {
    id: '4',
    title: 'Câu hỏi thường gặp',
    description: 'Thông tin học bổng',
    screen: QUESTION,
    icon: R.images.qa,
  },

  {
    id: '6',
    title: 'Phản hồi',
    description: 'Thông tin học bổng',
    screen: FEEDBACK,
    icon: R.images.feedback,
  },
  {
    id: '7',
    title: 'Cài đặt',
    description: 'Thông tin học bổng',
    screen: SETTING,
    icon: R.images.setting,
  },
];

const AccountView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Tài khoản'} />
      <View style={styles.container}>
        {listItem1.map((item) => (
          <Item key={item.id} item={item} />
        ))}

        <View style={{height: 10}} />

        {listItem2.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        <View style={{height: 10}} />

        <View style={styles.containerItem}>
          <Image
            style={styles.imgIcon}
            source={R.images.logout}
            resizeMode={'cover'}
          />
          <View style={styles.wrapContent}>
            <Text style={styles.title}>Đăng xuất</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  containerItem: {
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: R.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  wrapContent: {
    paddingLeft: 15,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: getFontXD(46),
  },
});

export default AccountView;
