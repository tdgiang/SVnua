import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemPlan = (props) => {
  const {id, time, title, done, important} = props.item;

  const [isDone, setDone] = useState(done);
  const [isImportant, setImportant] = useState(important);
  return (
    <View>
      <View
        key={id}
        style={[
          styles.container,
          isDone
            ? {backgroundColor: 'rgba(256,256,256,0.1)'}
            : {backgroundColor: R.colors.white},
          props.isEnd
            ? {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }
            : {},
        ]}>
        <TouchableOpacity onPress={() => setDone(!isDone)}>
          <Feather
            name={isDone ? 'check-circle' : 'circle'}
            color={isDone ? R.colors.main : R.colors.black}
            size={30}
          />
        </TouchableOpacity>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text
            style={[
              styles.txtTitle,
              isDone ? {textDecorationLine: 'line-through'} : {},
            ]}>
            {title}
          </Text>
          {time ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.txtTime}>{time}</Text>
              <Ionicons
                name={'notifications'}
                size={getFontXD(42)}
                color={R.colors.color777}
              />
            </View>
          ) : null}
        </View>
        <TouchableOpacity onPress={() => setImportant(!isImportant)}>
          <FontAwesome
            name={isImportant ? 'star' : 'star-o'}
            color={isImportant ? R.colors.orange : R.colors.black}
            size={30}
          />
        </TouchableOpacity>
      </View>
      {!props.isEnd ? (
        <View
          style={{
            height: 0.6,
            width: '100%',
            backgroundColor: R.colors.borderGray,
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: R.colors.borderGray,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
  },
  txtTime: {
    color: R.colors.color777,
    fontSize: getFontXD(37),
    marginRight: 10,
  },
});

export default ItemPlan;
