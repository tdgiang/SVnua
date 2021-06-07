import React, {useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import R from '../../assets/R';
import Icon from 'react-native-vector-icons/AntDesign';

const renderHiddenItem = (props) => {
  const {data, rowMap, deleteRow, isEnd} = props;
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[
          styles.backRightBtn,
          styles.backRightBtnRight,
          isEnd ? {borderBottomRightRadius: 10} : null,
        ]}
        onPress={() => deleteRow(data.item.id, data.item.alarm)}>
        <Animated.View style={[styles.trash]}>
          <Icon size={20} color={R.colors.white} name={'delete'} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  trash: {
    height: 25,
    width: 25,
  },
});

export default renderHiddenItem;
