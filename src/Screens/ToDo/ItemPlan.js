import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemPlan = (props) => {
  console.log('Props', props);
  const {id, time, title, done, important} = props.item;
  const {onDoneTask, onImportantTask} = props;

  return (
    <View>
      <View
        key={id}
        style={[
          styles.container,
          done
            ? {backgroundColor: R.colors.main}
            : {backgroundColor: R.colors.white},
          props.isEnd
            ? {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }
            : {},
        ]}>
        <TouchableOpacity onPress={() => onDoneTask(id)}>
          <Feather
            name={done ? 'check-circle' : 'circle'}
            color={done ? R.colors.white : R.colors.black}
            size={30}
          />
        </TouchableOpacity>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text
            style={[
              styles.txtTitle,
              done
                ? {textDecorationLine: 'line-through', color: R.colors.white}
                : {},
            ]}>
            {title}
          </Text>
          {time ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[styles.txtTime, done ? {color: R.colors.white} : {}]}>
                {time}
              </Text>
              <Ionicons
                name={'notifications'}
                size={getFontXD(42)}
                color={done ? R.colors.white : R.colors.color777}
              />
            </View>
          ) : null}
        </View>
        <TouchableOpacity onPress={() => onImportantTask(id)}>
          <FontAwesome
            name={important ? 'star' : 'star-o'}
            color={important ? R.colors.orange : R.colors.black}
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
