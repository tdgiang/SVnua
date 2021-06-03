import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import HeaderDrawer from '../../components/Header/HeaderDrawer';
import {getFontXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {DETAILMESS} from '../../routers/ScreenNames';

const data = [
  {
    id: '1',
    name: 'Lisa Price',
    mess: "I'm looking forward to it",
    time: '9:27 AM',
    active: true,
  },
  {
    id: '2',
    name: 'Lisa Price',
    mess: "I'm looking forward to it,I'm looking forward to it,I'm looking forward to it",
    time: '9:27 AM',
    active: true,
  },
  {
    id: '3',
    name: 'Lisa Price',
    mess: "I'm looking forward to it",
    time: '9:27 AM',
    active: false,
  },
  {
    id: '4',
    name: 'Lisa Price',
    mess: "I'm looking forward to it",
    time: '9:27 AM',
    active: false,
  },
  {
    id: '5',
    name: 'Lisa Price',
    mess: "I'm looking forward to it",
    time: '9:27 AM',
    active: false,
  },
];

const Item = (props) => {
  const navigation = useNavigation();
  const {name, mess, time, active} = props.item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(DETAILMESS)}
      style={styles.container}>
      <Image style={styles.img} source={R.images.avatar1} />
      <View style={styles.containerContent}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={[styles.txtTitle, active ? {fontWeight: 'bold'} : null]}>
            {name}
          </Text>
          <Text style={styles.txt}>{time}</Text>
        </View>
        <Text
          numberOfLines={1}
          style={[styles.txt, active ? {color: R.colors.black} : null]}>
          {mess}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MessView = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <HeaderDrawer title={'Tin nhắn'} />
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
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerContent: {
    paddingLeft: 10,
    flex: 1,
  },
  txtTitle: {
    fontSize: getFontXD(42),
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
  },
});
export default MessView;
