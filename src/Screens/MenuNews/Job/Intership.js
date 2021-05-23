
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
import { getFontXD } from '../../../Config/Functions';
import image from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { INTERJOB } from '../../../routers/ScreenNames';
import Icon from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    id: '1',
    image: image.notice,
    company: 'Công ty CP Coffe Trung Nguyên',
    title: 'Nhân viên pha chế.',
    address: 'Hà nội',
    salary: '20k-25k',
  },
  {
    id: '2',
    image: image.notice,
    company: 'Công ty TNHH GAME',
    title: 'Trông quán net.',
    address: 'Hà nội',
    salary: '20k-25k',
  },
  {
    id: '3',
    image: image.notice,
    company: 'Tập đoàn bán hàng đa quốc gia Shoppe',
    title: 'Livetream bán hàng',
    address: 'Hà nội',
    salary: '20k-25k',
  },
];
const Item = (props) => {
  const { title, image, company, address, salary } = props.item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(INTERJOB)}>
      <Image style={styles.image} source={image} />

      <View style={styles.containContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{company}</Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{salary}</Text>
          <Text style={styles.detail}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Intership = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header isBack={true} title={'Thực tập'} />
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
export default Intership;
