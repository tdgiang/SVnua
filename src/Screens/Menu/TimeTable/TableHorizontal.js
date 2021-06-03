import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../../../components/Header/Header';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {getFontXD, getHeight, getWidth} from '../../../Config/Functions';
import R from '../../../assets/R';

const tableHead = ['Môn học', 'Thứ', 'Tiết BĐ', 'Số tiết', 'Phòng', 'Tuần'];

const widthArr = [getHeight() - 470, 65, 65, 65, 65, 160];
const tableData = [
  ['Kỹ thuật lập trình', 'Hai', ' 1', '3', 'B102', '12345_78'],
  ['Lập trình hướng đối tượng', 'Hai', ' 9', '2', 'B102', '12345_78'],
  ['Cơ sở dữ liệu', 'Ba', ' 1 ', '3', 'B102', '12345_78'],
  ['Tiếng anh 2', 'Tư', ' 1', '3', 'E102', '12345_78'],
  ['Lập trình Java', 'Năm', ' 1', '3', 'B102', '________901234567'],
  [
    'Cấu trúc dữ liệu và giải thuật',
    'Năm',
    ' 4',
    '2',
    'ND202',
    '________901234567',
  ],
  ['Xác suất thống kê', 'năm', ' 6', '3', 'C102', '________901234567'],
  ['Lập trình web', 'sáu', ' 1', '3', 'B102', '________901234567'],
  [
    'Kiểm thử vào bảo mật ƯD web',
    'sáu',
    ' 9',
    '2',
    'B102',
    '________901234567',
  ],
];

const TableHorizoltal = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thời khoá biểu'} />
      <OrientationLocker orientation={LANDSCAPE} />
      <View style={{flex: 1, marginHorizontal: 10, marginVertical: 10}}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row
                data={tableHead}
                widthArr={widthArr}
                style={styles.header}
                textStyle={styles.textHeader}
              />
            </Table>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[styles.row]}
                    textStyle={[
                      styles.text,
                      {textAlign: 'left', marginHorizontal: 10},
                    ]}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TableHorizoltal;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: R.colors.main},
  text: {textAlign: 'center'},
  textHeader: {
    color: R.colors.white,
    fontSize: getFontXD(42),
    textAlign: 'center',
    fontWeight: '600',
  },
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: R.colors.white},
});
