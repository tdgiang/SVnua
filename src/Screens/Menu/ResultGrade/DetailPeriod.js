import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import R from '../../../assets/R';
import HeaderDetail from '../../../components/Header/HeadeDetail';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import Item from './Item';

const data = [
  {
    name: 'Phân tích & thiết kế hệ thống',
    id: 'TH02037',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'Cấu trúc dữ liệu và giải thuật',
    id: 'TH02016',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'Những NLCB của CN Mác-Lênin 2',
    id: 'ML01002',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'TH cấu trúc DL&giải thuật',
    id: 'TH02035',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'Phát triển ứng dụng Web',
    id: 'TH03012',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'Kỹ năng làm việc nhóm',
    id: 'KN01005',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'Giáo dục quốc phòng 3',
    id: 'QS01003',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
  },
  {
    name: 'Tư tưởng Hồ Chí Minh',
    id: 'CML01005	',
    count: 3,
    gradeCC: 9,
    gradeGK: 8,
    gradeCK: 7.5,
    grade10: 7.5,
    grade4: 3,
    gradeString: 'B',
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
          <Text style={styles.txtTitle}>18</Text>
        </View>
        <View style={styles.wrapGrade}>
          <View style={styles.wrap}>
            <Text style={styles.txtTitle}>Điểm 10</Text>
            <Text style={styles.txtGrade}>10</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.txtTitle}>Điểm 4</Text>
            <Text style={styles.txtGrade}>4</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.txtTitle}>Xếp loại</Text>
            <Text style={styles.txtGrade}>Khá</Text>
          </View>
        </View>
      </HeaderDetail>

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <Item item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtGrade: {
    fontSize: getFontXD(42),
    color: R.colors.red,
    fontWeight: '600',
  },
  wrapGrade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
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
