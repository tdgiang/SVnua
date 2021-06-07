import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import R from '../../assets/R';
import {HEIGHTXD, getFontXD, WIDTHXD, logout} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  PROFILE,
  PAPER,
  CHANGEPASSWORD,
  QUESTION,
  FEEDBACK,
  SETTING,
  LOGINSCREEN,
} from '../../routers/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AppText from '../AppText';
import I18n from '../../helper/i18/i18n';

const listItem = [
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

const Item = (props) => {
  const navigation = useNavigation();
  const {title, icon, id, screen} = props.item;
  return (
    <TouchableOpacity
      onPress={() => {
        props.toggleModal();
        navigation.navigate(screen);
      }}
      style={styles.containerItem}>
      <Image style={styles.imgIcon} source={icon} resizeMode={'cover'} />
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Drawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={R.images.avatar} style={styles.imgAvatar} />
        <TouchableOpacity
          style={{flex: 1, marginLeft: 10}}
          onPress={() => {
            props.toggleModal();
            navigation.navigate(PROFILE);
          }}>
          <Text style={styles.txtTop}>{props.user.name}</Text>
          <Text style={{marginTop: 5, color: R.colors.color777}}>
            {props.user.id_St}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{flex: 1, marginTop: 30}}
        data={listItem}
        renderItem={({item}) => (
          <Item toggleModal={props.toggleModal} item={item} />
        )}
      />

      <TouchableOpacity
        onPress={() => {
          logout(navigation);
          props.toggleModal();
        }}
        style={styles.footer}>
        <Icon name={'logout'} size={25} color={'#F81515'} />
        <AppText i18nKey={'Logout'} Logout style={styles.txtTitle}></AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: R.colors.white,
    borderRadius: 20,
  },
  header: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: WIDTHXD(64),
    borderColor: R.colors.main,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  body: {
    flex: 1,

    marginVertical: 30,
  },
  imgAvatar: {
    width: WIDTHXD(140),
    height: WIDTHXD(140),
    borderRadius: WIDTHXD(100),
    borderWidth: 0.6,
    borderColor: R.colors.main,
  },
  imgIcon: {
    width: WIDTHXD(62),
    height: HEIGHTXD(62),
    resizeMode: 'contain',
  },
  txtTitle: {
    fontSize: getFontXD(36),
    marginLeft: 10,
    color: '#0C0D2C',
  },
  txtTop: {
    fontSize: getFontXD(42),
    color: R.colors.txtMain,
  },
  txtLink: {
    fontSize: getFontXD(36),
    color: '#929292',
  },

  footer: {
    paddingVertical: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: WIDTHXD(75),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: WIDTHXD(75),
    paddingVertical: 10,
  },
  row: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(Drawer);
