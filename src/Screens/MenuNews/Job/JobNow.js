import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
import { getFontXD } from '../../../Config/Functions';
import image from '../../../assets/images';
import Icon from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    id: '1',
    image: image.notice,
    time: 'Thời gian:8h-12h',
    title: 'Nhân viên pha chế.',
    address: 'Tocotoco Gia lâm',
    salary: '20k-25k',
  },
  {
    id: '2',
    image: image.notice,
    time: 'Thời gian:18h-23h',
    title: 'Trông quán net.',
    address: 'Quán Game Nghiện là dở rồi',
    salary: '20k-25k',
  },
  {
    id: '3',
    image: image.notice,
    time: 'Thời gian:13h-18h',
    title: 'Livetream bán hàng',
    address: 'Shop quần áo pha ke',
    salary: '20k-25k',
  },
];
const Item = (props) => {
  const { title, image, time, address, salary } = props.item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View style={styles.containContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{address}</Text>
          <Text style={styles.detail}>{time}</Text>
        </View>
        <Text style={styles.detail}>{salary}</Text>
      </View>
    </View>
  );
};
const Jobnow = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header isBack={true} title={'Việc làm trong ngày'} />
      <FlatList
        style={{ marginTop: 5 }}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
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
    marginVertical: 5,
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
export default Jobnow;
