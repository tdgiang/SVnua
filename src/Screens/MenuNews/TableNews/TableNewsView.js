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
import {getFontXD, convertDateTime} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../../../assets/R';
import {WEBVIEW} from '../../../routers/ScreenNames';
import {useNavigation} from '@react-navigation/native';

const Item = (props) => {
  const navigation = useNavigation();

  const {title, image, link, time, count} = props.item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(WEBVIEW, {link})}
      style={styles.container}>
      <Image style={styles.image} source={R.images.notice} />

      <View style={styles.containContent}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{time}</Text>
          <View
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
            <Text style={styles.detail}>{count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const TableNewsView = (props) => {
  const {isRefresh, onRefresh, data} = props;
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Bảng tin'} />
      <FlatList
        style={{marginTop: 5}}
        refreshing={isRefresh}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item._id}
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
export default TableNewsView;
