import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
import Icon from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: '1',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng.',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'E207',
    over: '1',
  },
  {
    id: '2',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'B106',
    over: '0',
  },
  {
    id: '3',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'ND002',
    over: '1',
  },
  {
    id: '4',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'ND001',
    over: '0',
  },
];
const Item = (props) => {
  const {date, subject, timebegin, timefinish, sbd} = props.item;
  return (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.containTime}>
        <Text style={{fontSize: getFontXD(52), marginBottom: 10}}>
          {date.slice(0, 2)}
        </Text>
        <Text style={{fontSize: getFontXD(36)}}>{date.slice(3, 12)}</Text>
      </View>
      <View style={styles.strike}></View>
      <View style={styles.containContent}>
        <Text style={styles.title}>{subject}</Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>
            {timebegin}-{timefinish}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.detail}>{sbd}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ExamCalendarView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Lịch thi'} />
      <View style={{flex: 1}}>
        <View style={styles.wrapPicker}>
          <TouchableOpacity style={styles.containerIcon}>
            <Icon name={'left'} size={20} color={R.colors.white} />
          </TouchableOpacity>

          <View style={styles.wrapRow}>
            <Icon name={'calendar'} color={R.colors.white} size={20} />
            <Text style={styles.txtDate}>Kỳ 1 2020-2021</Text>
          </View>
          <TouchableOpacity style={styles.containerIcon}>
            <Icon name={'right'} size={20} color={R.colors.white} />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: R.colors.main,
    paddingVertical: 5,
    borderRadius: 5,
  },
  containerItem: {
    marginHorizontal: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    borderRadius: 5,
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
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
  },
  title: {
    color: R.colors.black,
    fontSize: getFontXD(42),
    marginBottom: 5,
  },
  detail: {
    color: R.colors.main,
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
    padding: 10,
    padding: 10,
    marginVertical: 5,
  },
  containTime: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  strike: {
    width: 1,
    backgroundColor: R.colors.borderGray,
  },
});
export default ExamCalendarView;
