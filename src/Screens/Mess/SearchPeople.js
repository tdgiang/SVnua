import React, {Component, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import HeaderSearch from '../../components/Header/HeaderSearch';
import {getFontXD} from '../../Config/Functions';

const DATA = [
  {
    id: '621065',
    name: 'Nguyễn Thị Thuý',
    avatart: R.images.avatar,
  },
  {
    id: '621010',
    name: 'Trần Đăng Hiếu',
    avatart: R.images.avatar,
  },
  {
    id: '621064',
    name: 'Lưu Văn Hưng',
    avatart: R.images.avatar,
  },
  {
    id: '631020',
    name: 'Mẫn Tuấn Phong',
    avatart: R.images.avatar,
  },
  {
    id: '621002',
    name: 'Trần Văn Thanh',
    avatart: R.images.avatar,
  },
  {
    id: '621021',
    name: 'Phạm Thị Thảo',
    avatart: R.images.avatar,
  },
  {
    id: '641010',
    name: 'Nguyễn Thị Thuý',
    avatart: R.images.avatar,
  },
  {
    id: '621111',
    name: 'Trần Văn Toàn',
    avatart: R.images.avatar,
  },
  {
    id: '631092',
    name: 'Trương Thị Quỳnh',
    avatart: R.images.avatar,
  },
  {
    id: '651021',
    name: 'Trần Thị Thu Hương',
    avatart: R.images.avatar,
  },
  {
    id: '631016',
    name: 'Phạm Văn Đăng',
    avatart: R.images.avatar,
  },
  {
    id: '621025',
    name: 'Trần Thị Phương Anh',
    avatart: R.images.avatar,
  },
  {
    id: '631013',
    name: 'Phạm Văn Đăng',
    avatart: R.images.avatar,
  },
  {
    id: '621022',
    name: 'Trần Thị Phương Anh',
    avatart: R.images.avatar,
  },
  {
    id: '631011',
    name: 'Phạm Văn Đăng',
    avatart: R.images.avatar,
  },
];

const Item = (props) => {
  const {id, name, avatart} = props.item;
  return (
    <TouchableOpacity style={styles.containerItem}>
      <Image source={avatart} style={styles.imgAvatart} />
      <View
        style={{
          flex: 1,
          borderBottomColor: R.colors.borderGray,
          borderBottomWidth: 0.6,
          height: 60,
          marginHorizontal: 5,
          justifyContent: 'center',
        }}>
        <Text style={styles.txtTitle}>{name}</Text>
        <Text style={styles.txt}>{id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SearchPeople = (props) => {
  const [listData, setListData] = useState(DATA);

  const onChangeText = (val) => {
    if (val) {
      const newList = DATA.filter((e) => e.name.includes(val));
      setListData(newList);
    } else {
      setListData(DATA);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <HeaderSearch onChangeText={onChangeText} isBack={true} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

export default SearchPeople;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  imgAvatart: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
    marginLeft: 5,
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
    marginLeft: 5,
  },
});
