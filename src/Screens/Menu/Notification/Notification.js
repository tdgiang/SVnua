import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import image from '../../../assets/images';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../../../assets/R';
const DATA = [
  {
    id: '1',
    image: image.notice,
    time: 'khoảng 1 giờ trước',
    title: 'Thông báo thay đổi hình thức dạy học từ trực tiếp sang online.',
    viewcount: '36',
  },
  {
    id: '2',
    image: image.notice,
    time: '2 giờ trước',
    title: 'Thông báo thay đổi hình thức dạy học từ trực tiếp sang online.',
    viewcount: '2 giờ trước',
  },
  {
    id: '3',
    image: image.notice,
    time: '02:12 - 23/05/2021',
    title: 'Thông báo thay đổi hình thức dạy học từ trực tiếp sang online.',
    viewcount: '36',
  },
  {
    id: '4',
    image: image.notice,
    time: '22:30-22/05/2021',
    title: 'Thông báo thay đổi hình thức dạy học từ trực tiếp sang online.',
    viewcount: '36',
  },
];
const Item = (props) => {
  const {title, image, time, viewcount} = props.item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View style={styles.containContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{time}</Text>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              style={{marginRight: 10}}
              name={'eye'}
              size={18}
              color={R.colors.color777}
            />
            <Text style={styles.detail}>{viewcount}</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};
const Notification = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thông báo'} />
      <FlatList
        style={{marginTop: 5}}
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
    flexDirection: 'row',
    backgroundColor: R.colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  detail: {
    color: 'gray',
    fontSize: getFontXD(36),
  },
  image: {
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  subdetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  containAll: {
    flex: 1,
    margin: 10,

    borderRadius: 5,
  },
  containContent: {
    flex: 1,
    paddingLeft: 10,
  },
});
export default Notification;
