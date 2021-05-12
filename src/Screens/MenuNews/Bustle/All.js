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
    id: '1',
    timestart: '00:00 28/04/21',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning',
  },
  {
    id: '2',
    timestart: '00:00 28/04/21',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning',
  },
  {
    id: '3',
    timestart: '00:00 28/04/21',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning',
  },
  {
    id: '4',
    timestart: '00:00 28/04/21',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning',
  },
  {
    id: '5',
    timestart: '00:00 28/04/21',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông',
  },
  {
    id: '6',
    timestart: '00:00 28/04/21',
    timefinish: '00:00 22/05/21',
    title: 'Giải chạy Sinh Viên Học Viện Nông  ',
  },
];

const Item = (props) => {
  const {title, timestart, timefinish} = props.item;

  const {index, length} = props;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containTime}>
        <Text style={styles.title}>TH{timestart.slice(9, 11)}</Text>
        <Text style={styles.date}>{timestart.slice(5, 8)}</Text>
      </View>
      <View
        style={[
          styles.containContent,
          index == props.length - 1 ? {borderBottomWidth: 0} : null,
        ]}>
        <Text numberOfLines={1} style={[styles.title, {fontWeight: 'bold'}]}>
          {title}
        </Text>
        <Text style={styles.time}>
          {timestart}- {timefinish}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const All = (props) => {
  const length = DATA.length;
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item, index}) => (
          <Item item={item} index={index} length={length} />
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
    paddingHorizontal: 5,
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
