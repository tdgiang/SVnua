import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import R from '../../../assets/R';
import {HEIGHTXD} from '../../../Config/Functions';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {DATAFILE} from './DataFake';

const Item = (props) => {
  const {icon, poster, name, time} = props.item;
  return (
    <View style={styles.containerItem}>
      <Image style={styles.imgIcon} source={icon} />
      <View style={styles.wrapRight}>
        <Text style={styles.txtTitle}>{name}</Text>
        <Text style={styles.txt}>
          Người sửa đổi:{poster} trên {time}
        </Text>
      </View>
    </View>
  );
};
const Files = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <FlatList data={DATAFILE} renderItem={({item}) => <Item item={item} />} />

      <View style={styles.wrapWrite}>
        <TouchableOpacity
          onPress={() => console.log('hello')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'plus'} size={25} color={R.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',
  },
  wrapRight: {
    marginLeft: 20,
    flex: 1,
    borderBottomWidth: 0.6,
    borderBottomColor: R.colors.borderGray,
    paddingVertical: 15,
  },
  imgIcon: {
    width: 35,
    height: 35,
    marginLeft: 20,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
    marginTop: 5,
  },
  wrapWrite: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: R.colors.main,
    position: 'absolute',
    bottom: 40,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Files;
