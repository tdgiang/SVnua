import React, {Component, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../../../assets/R';
import HeaderTable from '../../../components/Header/HeaderTable';
import {getFontXD} from '../../../Config/Functions';
import CalendarWeek from './CalendarWeek';
import {ListData, DATA, DATAWEEK} from './FakeData';

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
  const [index, setIndex] = useState(4);
  const [indexWeek, setIndexWeek] = useState(1);

  const onClickLeft = () => {
    if (index > 0) setIndex(index - 1);
    else {
      if (indexWeek > 0) setIndexWeek(indexWeek - 1);
      setIndex(6);
    }
  };

  const onClickRight = () => {
    if (index < 6) setIndex(index + 1);
    else {
      if (indexWeek < 2) setIndexWeek(indexWeek + 1);
      setIndex(0);
    }
  };

  const decreaseWeek = () => {
    if (indexWeek > 0) setIndexWeek(indexWeek - 1);
    setIndex(6);
  };
  const increaseWeek = () => {
    if (indexWeek < 2) setIndexWeek(indexWeek + 1);
    setIndex(0);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderTable
        decreaseWeek={decreaseWeek}
        increaseWeek={increaseWeek}
        DATA={DATAWEEK[indexWeek].DATA}
        activeIndex={index}
        isBack={true}
        title={'Thời khoá biểu'}
      />
      <View style={{flex: 1}}>
        {DATAWEEK[indexWeek].DATA[index].list.length > 0 ? (
          <FlatList
            data={DATAWEEK[indexWeek].DATA[index].list}
            renderItem={({item}) => <Item item={item} />}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.txtBig}>Không có môn học nào</Text>
          </View>
        )}

        <View style={styles.footer}>
          <TouchableOpacity onPress={onClickLeft} style={styles.btn}>
            <Icon name={'left'} size={25} color={R.colors.white} />
          </TouchableOpacity>
          <View style={{width: 2, backgroundColor: 'white'}} />
          <TouchableOpacity onPress={onClickRight} style={styles.btn}>
            <Icon name={'right'} size={25} color={R.colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 10,
    marginVertical: 5,
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
  txtBig: {
    fontSize: getFontXD(62),
    color: R.colors.main,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    height: 45,
  },
  btn: {
    flex: 1,
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimeTableView;
