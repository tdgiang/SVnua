import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../../../components/Header/Header';
import R from '../../../../assets/R';
import images from '../../../../assets/images';
import {FlatList} from 'react-native';
import {getFontXD} from '../../../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {RECRUITDETAIL} from '../../../../routers/ScreenNames';
import Icon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WEBVIEW} from '../../../../routers/ScreenNames';
import {getListJobs} from '../../../../apis/Functions/News';

const Item = (props) => {
  const {img, title, address, company, link} = props.item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(WEBVIEW, {link})}
      style={styles.container}>
      <Image resizeMode={'contain'} style={styles.img} source={{uri: img}} />
      <View style={{flex: 1, marginLeft: 10}}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontSize: getFontXD(42), color: R.colors.color777}}>
          {company}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name={'location'} size={getFontXD(42)} color={R.colors.main} />
          <Text numberOfLines={1} style={styles.detail}>
            {address.slice(1, 30)}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name={'money'}
              size={getFontXD(42)}
              color={R.colors.main}
            />
            <Text style={styles.detail}>10-30</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Recruit = (props) => {
  const [isRefresh, setisRefresh] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setisRefresh(true);
    const res = await getListJobs({});
    setisRefresh(false);
    if ((res.data.code = 200 && res.data.data)) {
      setData(res.data.data);
    } else {
      showAlert(TYPE.ERROR, I18n.t('Notification'), res.data.message);
    }
  };

  const onRefresh = () => {
    getData();
  };

  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Tuyển dụng'} />
      <FlatList
        refreshing={isRefresh}
        onRefresh={onRefresh}
        data={data}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {width: 60, height: 50, borderRadius: 2},
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    fontSize: getFontXD(42),
  },
  detail: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
    marginLeft: 5,
  },
});
export default Recruit;
