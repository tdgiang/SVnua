import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import R from '../../../assets/R';
import HeaderDetail from '../../../components/Header/HeadeDetail';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import Item from './Item';

import ListData from './ListData';

const DataHeader = [
  {
    tin: 18,
    grade10: '7.45',
    grade4: '2.96',
    gardeString: 'Khá',
  },
  {
    tin: 22,
    grade10: '7.45',
    grade4: '2.96',
    gardeString: 'Khá',
  },
  {
    tin: 20,
    grade10: '7.45',
    grade4: '2.96',
    gardeString: 'Khá',
  },
  {
    tin: 18,
    grade10: '7.45',
    grade4: '2.96',
    gardeString: 'Khá',
  },
  {
    tin: 22,
    grade10: '7.45',
    grade4: '2.96',
    gardeString: 'Khá',
  },
  {
    tin: 16,
    grade10: '7.62',
    grade4: '3.21',
    gardeString: 'Giỏi',
  },
  {
    tin: 20,
    grade10: '7.25',
    grade4: '2.65',
    gardeString: 'Khá',
  },
  {
    tin: 17,
    grade10: '7.45',
    grade4: '2.96',
    gardeString: 'Khá',
  },
  {
    tin: 0,
    grade10: '',
    grade4: '',
    gardeString: '',
  },
];

const DetailPeriod = (props) => {
  const [period, setPriod] = useState(props.route.params.ky);

  return (
    <View style={{flex: 1}}>
      <HeaderDetail title={'Danh sách điểm'}>
        <View style={styles.wrapPicker}>
          <TouchableOpacity
            onPress={() => {
              if (period > 1) setPriod(period - 1);
            }}
            style={styles.containerIcon}>
            <Icon name={'left'} size={20} color={R.colors.white} />
          </TouchableOpacity>
          <View style={styles.wrapRow}>
            <Icon name={'calendar'} color={R.colors.white} size={20} />
            <Text style={styles.txtDate}>Kỳ {period} 2020-2021</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (period < 8) setPriod(period + 1);
            }}
            style={styles.containerIcon}>
            <Icon name={'right'} size={20} color={R.colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapRow1}>
          <Text style={styles.txtTitle}>Số tín chỉ:</Text>
          <Text style={[styles.txtTitle, {fontSize: getFontXD(52)}]}>
            {DataHeader[period].tin}
          </Text>
        </View>
        <View style={styles.wrapGrade}>
          <View style={styles.wrap}>
            <Text style={styles.txtTitle}>Điểm 10</Text>
            <Text style={styles.txtGrade}> {DataHeader[period].grade10}</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.txtTitle}>Điểm 4</Text>
            <Text style={styles.txtGrade}> {DataHeader[period].grade4}</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.txtTitle}>Xếp loại</Text>
            <Text style={styles.txtGrade}>
              {' '}
              {DataHeader[period].gardeString}
            </Text>
          </View>
        </View>
      </HeaderDetail>
      <View style={{flex: 1}}>
        {ListData[period].length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ListData[period]}
            renderItem={({item}) => <Item item={item} />}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              resizeMode={'contain'}
              source={R.images.iconEmpty}
              style={{
                width: 80,
                height: 80,
                marginBottom: 10,
              }}
            />
            <Text>Không có dữ liệu</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtGrade: {
    fontSize: getFontXD(52),
    color: R.colors.red1,
    fontWeight: '600',
  },
  wrapGrade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  wrap: {
    alignItems: 'center',
  },
  wrapPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  txtDate: {
    color: R.colors.white,
    fontSize: getFontXD(42),
    marginLeft: 10,
  },
  containerIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 5,
    borderRadius: 5,
  },
  wrapRow1: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.white,
    fontWeight: '600',
  },
});

export default DetailPeriod;
