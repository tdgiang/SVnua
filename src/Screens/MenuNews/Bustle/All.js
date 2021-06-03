import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';
const DATA = [
  {
    id: '122',
    timestart: '07:00 01/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy online Sinh Viên SRun 2021',
    isJoin: true,
  },
  {
    id: '1',
    timestart: '13:30 02/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Tham gia cuộc thi Crossroad',
    isJoin: false,
  },
  {
    id: '2',
    timestart: '08:00 03/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Cuộc thi tìm hiểu một số kiến thức pháp luận đối với sinh viên',
    isJoin: false,
  },
  {
    id: '3',
    timestart: '13:00 04/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Cài đặt và sử dụng ứng dụng VssID-Bảo hiểm xã hội',
    isJoin: false,
  },
  {
    id: '4',
    timestart: '20:00 05/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Chào tân sinh viên K66',
    isJoin: true,
  },
  {
    id: '5',
    timestart: '07:00 05/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Ngày hội việc làm sinh viên VNUA',
    isJoin: true,
  },
  {
    id: '6',
    timestart: '07:00 06/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Hỗ trợ công tác tuyển sinh 2022',
    isJoin: false,
  },
  {
    id: '7',
    timestart: '07:00 07/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Tham gia truyền thông cho sự kiện Job Fair 2021',
    isJoin: false,
  },
  {
    id: '8',
    timestart: '07:00 08/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Cuộc thi tài năng Anh ngữ - English Talent Contest năm 2021',
    isJoin: false,
  },
  {
    id: '9',
    timestart: '07:00 10/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Cán bộ đoàn hoàn thành nhiệm vụ',
    isJoin: false,
  },
  {
    id: '10',
    timestart: '07:00 11/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Tham gia "Giải bóng đá nam sinh viên VNUA',
    isJoin: false,
  },
  {
    id: '11',
    timestart: '07:00 15/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông  ',
    isJoin: false,
  },
  {
    id: '12',
    timestart: '07:00 20/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông  ',
    isJoin: false,
  },
  {
    id: '13',
    timestart: '13:00 22/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Cuộc thi olympic tin học sinh viên',
    isJoin: true,
  },
  {
    id: '14',
    timestart: '07:00 28/08/2021',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông  ',
    isJoin: false,
  },
];

import Item from './Item';

const All = (props) => {
  const length = DATA.length;
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item, index}) => (
          <Item item={item} isEnd={index == length - 1} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: getFontXD(42),
    fontWeight: '600',
  },
  time: {
    color: R.colors.color777,
    fontSize: getFontXD(36),
    marginTop: 5,
  },
  date: {
    color: R.colors.main,
    fontSize: getFontXD(62),
    marginTop: 5,
  },
  containTime: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  containContent: {
    flex: 1,
    borderBottomWidth: 0.7,
    borderBottomColor: R.colors.color777,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default All;
