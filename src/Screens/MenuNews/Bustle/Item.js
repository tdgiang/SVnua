import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from '../../../assets/R';
import {getFontXD, convertDate} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
const Item = (props) => {
  const {title, timestart, isJoin} = props.item;
  const d = new Date();
  return (
    <View
      style={[
        styles.container,
        d.getDate() == timestart.slice(6, 8)
          ? {backgroundColor: R.colors.bgMain}
          : {},
      ]}>
      <View style={styles.left}>
        <View
          style={[
            styles.dot,
            d.getDate() == timestart.slice(6, 8)
              ? {backgroundColor: 'red'}
              : {},
          ]}
        />
      </View>
      <View style={[styles.right, props.isEnd ? {borderBottomWidth: 0} : {}]}>
        <View style={styles.row}>
          <Text
            style={[
              styles.txtTime,
              d.getDate() == timestart.slice(6, 8)
                ? {color: 'red', fontWeight: '500'}
                : {},
            ]}>
            {' '}
            {timestart.slice(5, 11)}
          </Text>
          <Text
            style={[
              styles.txtDate,
              d.getDate() == timestart.slice(6, 8)
                ? {color: 'red', fontWeight: '500'}
                : {},
            ]}>
            {timestart.substring(0, 5)}
          </Text>
        </View>
        <Text style={styles.txtTitle}>{title}</Text>
        {isJoin ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'checkcircleo'} color={R.colors.main} />
            <Text style={{color: R.colors.main, marginLeft: 5}}>Tham gia</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: R.colors.white,
  },
  left: {
    width: 1,
    backgroundColor: '#A7A7A7',
  },
  right: {
    marginLeft: 20,
    paddingVertical: 10,
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: '#CECECE',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: R.colors.main,
    borderRadius: 5,
    marginLeft: -5,
    marginTop: 15,
  },
  txtTitle: {
    fontSize: getFontXD(42),
  },
  txtTime: {
    fontSize: getFontXD(42),
    color: R.colors.main,
  },
  txtDate: {
    color: '#A7A7A7',
  },
});
