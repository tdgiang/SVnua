import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../../../assets/R';
import Header from '../../../components/Header/HeaderTeam';
import {getFontXD} from '../../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {DETAILTEAM} from '../../../routers/ScreenNames';

const DATA = [
  {
    id: '8',
    name: 'Lập trình Java_K64ATTT',
    icon: R.images.java,
  },
  {
    id: '1',
    name: 'K62CNPM',
    icon: R.images.education,
  },
  {
    id: '2',
    name: 'TH03116',
    icon: R.images.exam,
  },
  {
    id: '3',
    name: 'MT02001-Quản lý môi trường',
    icon: R.images.logo,
  },
  {
    id: '4',
    name: 'TH03105-Kiểm thử&DBCLPM',
    icon: R.images.teacher,
  },
  {
    id: '5',
    name: '12-T2_SN03039',
    icon: R.images.receipt,
  },
  {
    id: '6',
    name: 'Tiếng anh chuyên ngành',
    icon: R.images.feedback,
  },
  {
    id: '7',
    name: 'Xây dựng và phát triển phần mềm',
    icon: R.images.company,
  },

  {
    id: '9',
    name: 'LTHDT_TH03106_02_2020',
    icon: R.images.iconVoice,
  },
  {
    id: '10',
    name: 'Lập trình .Net K62CNPM',
    icon: R.images.company,
  },
];

const Item = (props) => {
  const {name, icon} = props.item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(DETAILTEAM, {data: props.item})}
      style={styles.container}>
      <Image source={icon} resizeMode={'contain'} style={styles.imgLogo} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text numberOfLines={1} style={styles.txtTitle}>
          {name}
        </Text>
      </View>
      <Icon name={'right'} size={18} color={R.colors.color777} />
    </TouchableOpacity>
  );
};

const HomeTeam = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Teams'} />
      <FlatList data={DATA} renderItem={({item}) => <Item item={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgLogo: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
  },
});

export default HomeTeam;
