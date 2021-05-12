import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import HeaderGrade from '../../../components/Header/HeaderGrade';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import BarChart from './BarChart';
import {useNavigation} from '@react-navigation/native';
import {DETAILPRIOD} from '../../../routers/ScreenNames';

const DATA = [
  {
    ky: 1,
    tbtl: 7.45,
    tl4: 2.94,
    tinchi: 16,
    pl: 'Khá',
  },
  {
    ky: 2,
    tbtl: 7.54,
    tl4: 3.09,
    tinchi: 21,
    pl: 'Khá',
  },
  {
    ky: 3,
    tbtl: 7.81,
    tl4: 3.19,
    tinchi: 13,
    pl: 'Khá',
  },
  {
    ky: 4,
    tbtl: 7.01,
    tl4: 2.65,
    tinchi: 16,
    pl: 'Khá',
  },
  {
    ky: 5,
    tbtl: 7.37,
    tl4: 2.92,
    tinchi: 16,
    pl: 'Khá',
  },
  {
    ky: 6,
    tbtl: 8.5,
    tl4: 3.65,
    tinchi: 17,
    pl: 'Khá',
  },
  {
    ky: 7,
    tbtl: 9.07,
    tl4: 3.79,
    tinchi: 17,
    pl: 'Khá',
  },
];

const ResultGradeView = (props) => {
  const [data, setData] = useState(DATA[6]);

  const onSelected = (val) => {
    setData(DATA[val]);
  };

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <HeaderGrade />
      <View style={{flex: 1}}>
        <View style={styles.wrapContent}>
          <View style={styles.wrapHeader}>
            <View style={{width: 35}} />
            <Text
              style={{
                fontSize: getFontXD(52),
                color: R.colors.main,
                fontWeight: '600',
              }}>
              Kỳ {data ? data.ky : ''}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(DETAILPRIOD, {ky: data.ky})}>
              <Icon name={'arrowright'} size={25} color={R.colors.main} />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.txtLeft}>Điểm trung bình tích luỹ:</Text>
            <Text style={styles.txtRight}>{data ? data.tbtl : ''}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLeft}>Điểm trung bình tích luỹ (hệ 4):</Text>
            <Text style={styles.txtRight}>{data ? data.tl4 : ''}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLeft}>Số tín chỉ đạt:</Text>
            <Text style={styles.txtRight}>{data ? data.tinchi : ''}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLeft}>Phân loại điểm trung bình:</Text>
            <Text style={styles.txtRight}>{data ? data.pl : ''}</Text>
          </View>
        </View>

        <BarChart onSelected={onSelected} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtLeft: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  txtRight: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapContent: {
    marginTop: 20,
    shadowColor: R.colors.main,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 5,
    padding: 10,
    backgroundColor: R.colors.white,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: R.colors.main,
    borderStyle: 'dashed',
  },
});

export default ResultGradeView;
