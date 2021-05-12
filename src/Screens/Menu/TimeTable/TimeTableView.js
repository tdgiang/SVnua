import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import R from '../../../assets/R';
import HeaderTable from '../../../components/Header/HeaderTable';
import {getFontXD} from '../../../Config/Functions';
import CalendarWeek from './CalendarWeek';
import {ListData} from './FakeData';

const Item = (props) => {
  const {name, time, address, weeks, teacher} = props.item;
  return (
    <View style={styles.containerItem}>
      <View style={styles.wrap}>
        <View style={{flex: 1}}>
          <Text
            style={{fontSize: getFontXD(42), fontWeight: '500'}}
            numberOfLines={1}>
            {name}
          </Text>
        </View>

        <Text style={styles.txtTitle}>{address}</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Text>Giảng viên:{teacher}</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={{color: R.colors.color777}}>Tuần {weeks}</Text>
        <Text style={{color: R.colors.main}}>{time}</Text>
      </View>
    </View>
  );
};

const TimeTableView = (props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderTable isBack={true} title={'Thời khoá biểu'} />
      <View style={{flex: 1}}>
        <FlatList
          data={ListData}
          renderItem={({item}) => <Item item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.main,
  },
});

export default TimeTableView;
