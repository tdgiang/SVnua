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
import {getFontXD, convertDateTime} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {DETAILMESS} from '../../routers/ScreenNames';
import {connect} from 'react-redux';

const Item = (props) => {
  const navigation = useNavigation();
  const {name, message, time, active, id_St, avatart} = props.item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(DETAILMESS, {id_St, name, avatart})}
      style={styles.container}>
      <Image style={styles.img} source={{uri: avatart}} />
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
          <Text style={styles.txt}>{convertDateTime(message.createdAt)}</Text>
        </View>
        <Text
          numberOfLines={1}
          style={[styles.txt, active ? {color: R.colors.black} : null]}>
          {message.user._id == props.userID ? 'Bạn: ' : ''}
          {message.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MessView = (props) => {
  const {data} = props;

  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <HeaderDrawer title={'Tin nhắn'} />
      <FlatList
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <Item item={item} userID={props.user.id_St} />}
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

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(MessView);
