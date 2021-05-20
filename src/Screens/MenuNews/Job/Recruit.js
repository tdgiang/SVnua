import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
import images from '../../../assets/images'
import { FlatList } from 'react-native';
import { getFontXD } from '../../../Config/Functions';
import { useNavigation } from '@react-navigation/native';
import { RECRUITDETAIL } from '../../../routers/ScreenNames';
const DATA = [
  {
    id: '1',
    image: images.avatar,
    recruiter: 'King Of War',
    title: 'Trông quán net',
    address: 'Hà nội',
    salary: 'Up to $1k',
    expdate: '20/05/2021'
  },
  {
    id: '2',
    image: images.avatar,
    recruiter: 'King Of War',
    title: 'Trông quán net',
    address: 'Hà nội',
    salary: 'Up to $1k',
    expdate: '20/05/2021'
  },
  {
    id: '3',
    image: images.avatar,
    title: 'Trông quán net',
    recruiter: 'King Of War',
    address: 'Hà nội',
    salary: 'Up to $1k',
    expdate: '20/05/2021'
  }
]
const Item = (props) => {
  const { images, title, address, recruiter, salary, expdate } = props.item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RECRUITDETAIL)}
      style={styles.container}>
      <View>
        <Image style={{ width: 50, height: 50 }} source={require('../../../assets/images/avatar.jpg')} />
      </View>

      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ fontSize: getFontXD(42), marginBottom: 5 }}>{recruiter}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.detail}>Địa chỉ: {address}</Text>
          <Text style={styles.detail}>Thu nhập: {salary}</Text>
        </View>
        <Text style={styles.detail}>Ngày đăng: {expdate}</Text>
      </View>
    </TouchableOpacity>
  )
}
const Recruit = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header isBack={true} title={'Tuyển dụng'} />
      <FlatList
        style={{ backgroundColor: R.colors.colorBackground }}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    padding: 5,
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
    fontSize: getFontXD(52),
    marginBottom: 5
  },
  detail: {
    fontSize: getFontXD(36),
    color: R.colors.gray,
    marginBottom: 5,
    marginRight: 5
  }
})
export default Recruit;
