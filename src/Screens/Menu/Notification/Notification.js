import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import image from '../../../assets/images';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../../../assets/R';
const DATA = [
  {
    id: '1',
    image: image.notice,
    time: 'khoảng 1 giờ trước',
    title: 'Thông báo đăng ký học phần học kỳ 1 năm học 2021 - 2022',
    viewcount: '36',
    isRead: false,
  },
  {
    id: '2',
    image: image.notice,
    time: '2 giờ trước',
    title:
      'Thông báo về việc xét và công nhận tốt nghiệp Đại học, Cao đẳng hệ chính quy đợt  25/07/2021',
    viewcount: '2 giờ trước',
    isRead: false,
  },
  {
    id: '3',
    image: image.notice,
    time: '02:12 - 23/05/2021',
    title:
      'Thông báo kết quả thi thử chứng chỉ tiếng Anh quốc tế mô phỏng PET, FCE Cambridge đợt thi tháng 4 năm 2021',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '4',
    image: image.notice,
    time: '22:30-22/05/2021',
    title:
      'Thông báo gia hạn lịch thu tiền học phí sinh viên Học kỳ II năm học 2020 - 2021 cho sinh viên chưa hoàn thành học phí',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '5',
    image: image.notice,
    time: '22:30-22/05/2021',
    title: 'Thông báo tham gia bảo hiểm y tế sinh viên đợt tháng 6 năm 2021',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '6',
    image: image.notice,
    time: '22:30-22/05/2021',
    title:
      'Thông báo trả bằng cho sinh viên/học viên tốt nghiệp Đại học, Cao đẳng và thạc sĩ',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '7',
    image: image.notice,
    time: '22:30-22/05/2021',
    title:
      'Thông báo về việc mở lớp đặc biệt online học kỳ 2 năm học 2020 - 2021',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '9',
    image: image.notice,
    time: '22:30-22/05/2021',
    title:
      'Thông báo danh sách dự thi và kế hoạch thi tiếng Anh đầu ra đại học và cao học đợt thi tháng 4 năm 2021',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '17',
    image: image.notice,
    time: '22:30-22/05/2021',
    title:
      'Thông báo về việc mở lớp đặc biệt online học kỳ 2 năm học 2020 - 2021',
    viewcount: '36',
    isRead: true,
  },
  {
    id: '19',
    image: image.notice,
    time: '22:30-22/05/2021',
    title:
      'Thông báo danh sách dự thi và kế hoạch thi tiếng Anh đầu ra đại học và cao học đợt thi tháng 4 năm 2021',
    viewcount: '36',
    isRead: true,
  },
];
const Item = (props) => {
  const {title, image, time, viewcount, isRead} = props.item;
  const [read, setRead] = useState(isRead);
  return (
    <TouchableOpacity
      onPress={() => setRead(true)}
      style={[styles.container, read ? {} : {backgroundColor: '#DDDDDD'}]}>
      <Image style={styles.image} source={image} />

      <View style={styles.containContent}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{time}</Text>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              style={{marginRight: 10}}
              name={'eye'}
              size={18}
              color={R.colors.color777}
            />
            <Text style={styles.detail}>{viewcount}</Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Notification = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thông báo'} />
      <FlatList
        style={{marginTop: 5}}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: R.colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  detail: {
    color: 'gray',
    fontSize: getFontXD(36),
  },
  image: {
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  subdetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  containAll: {
    flex: 1,
    margin: 10,

    borderRadius: 5,
  },
  containContent: {
    flex: 1,
    paddingLeft: 10,
  },
});
export default Notification;
