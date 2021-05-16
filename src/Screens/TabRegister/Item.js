import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';

const renderColor = (status) => {
  if (status == 0) return R.colors.gray2;
  if (status == 1) return R.colors.main;
  if (status == 2) return R.colors.orange;
};

const Item = (props) => {
  const [isSelect, setIsSelect] = useState(false);

  const {
    id,
    name,
    time,
    address,
    count,
    weeks,
    status,
    stc,
    IDClass,
    day,
  } = props.item;
  return (
    <TouchableOpacity
      onPress={() => setIsSelect(!isSelect)}
      style={[
        styles.container,
        isSelect ? {backgroundColor: R.colors.rgbaBtn} : null,
      ]}>
      <View
        style={[styles.viewStatus, {backgroundColor: renderColor(status)}]}
      />
      <View style={styles.wrap}>
        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Text style={styles.txtHead}>
              [{id}]{name}
            </Text>
          </View>
          <Text style={styles.txt}>TC:{stc}</Text>
        </View>

        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Text style={styles.txt}>
              Thứ {day} tiết ({time}) [{weeks}]
            </Text>
          </View>
          <Text style={styles.txt}>{address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>Lớp:{IDClass}</Text>
          <Text style={styles.txt}>{count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  viewStatus: {
    backgroundColor: R.colors.red,
    width: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  wrap: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  txtHead: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
  },
  txt: {
    fontSize: getFontXD(42),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
  },
});

export default Item;
