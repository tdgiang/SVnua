import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
const Item = (props) => {
  const [detail, setDetal] = useState(true);

  const {
    name,
    id,
    count,
    gradeCC,
    gradeGK,
    gradeCK,
    grade10,
    grade4,
    gradeString,
  } = props.item;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.txtName}>{name}</Text>
        {detail ? (
          <TouchableOpacity
            onPress={() => setDetal(false)}
            style={{padding: 5}}>
            <Icon name={'up'} size={18} color={R.colors.color777} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setDetal(true)} style={{padding: 5}}>
            <Icon name={'down'} size={18} color={R.colors.color777} />
          </TouchableOpacity>
        )}
      </View>
      {detail ? (
        <View>
          <View style={styles.row}>
            <Text style={styles.txtTitle}>Mã học phần</Text>
            <Text style={{fontSize: getFontXD(42)}}>{id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtTitle}>Số tín chỉ</Text>
            <Text style={{fontSize: getFontXD(42)}}>{count}</Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: R.colors.borderGray,
              marginVertical: 5,
            }}
          />
          <View style={styles.row}>
            <Text style={styles.txtTitle}>Điểm CC</Text>
            <Text style={{fontSize: getFontXD(42)}}>{gradeCC}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtTitle}>Điểm GK</Text>
            <Text style={{fontSize: getFontXD(42)}}>{gradeGK}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtTitle}>Điểm Thi</Text>
            <Text style={{fontSize: getFontXD(42)}}>{gradeCK}</Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: R.colors.borderGray,
              marginVertical: 5,
            }}
          />
          <Text style={styles.txtTitle}>Điểm tổng kết</Text>

          <View style={styles.wrapGrade}>
            <View style={styles.wrap}>
              <Text style={styles.txtTitle}>Điểm 10</Text>
              <Text style={styles.txtGrade}>{grade10}</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.txtTitle}>Điểm 4</Text>
              <Text style={styles.txtGrade}>{grade4}</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.txtTitle}>Điểm chữ</Text>
              <Text style={styles.txtGrade}>{gradeString}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapGrade: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  wrap: {
    alignItems: 'center',
  },
  txtGrade: {
    fontSize: getFontXD(42),
    color: R.colors.red,
    fontWeight: '600',
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtName: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
  },
});

export default Item;
