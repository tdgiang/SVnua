import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import R from '../../assets/R';
import Icon from 'react-native-vector-icons/AntDesign';

import HeaderTodo from '../../components/Header/HeaderTodo';
import {getFontXD, convertDateTime} from '../../Config/Functions';
import ItemPlan from './ItemPlan';
import Modal from 'react-native-modal';
import AddPlan from './AddPlan';

const dataCalendar = [
  {
    id: '1',
    title: 'Tiếng anh chuyên ngành',
    time: 'Tiết 1,2,3',
    address: 'ND102',
  },
  {
    id: '2',
    title: 'Lập trình hướng đối tượng',
    time: 'Tiết 9,10',
    address: 'B102',
  },
];

const dataTodo = [
  {
    id: '1',
    title: 'Thức dậy',
    time: '5:20',
    done: true,
    important: false,
  },
  {
    id: '2',
    title: 'Chạy bộ',
    time: null,
    done: true,
    important: false,
  },
  {
    id: '3',
    title: 'Uống thuốc',
    time: '07:00',
    done: true,
    important: true,
  },
  {
    id: '4',
    title: 'Học tiếng anh',
    time: '20:00',
    done: false,
    important: true,
  },
];

const ItemCalendar = (props) => {
  const {title, id, time, address} = props.item;
  return (
    <View style={styles.containerItem} key={id}>
      <View style={styles.dot} />
      <View style={{flex: 1}}>
        <Text style={styles.txtTitle}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.txtContent}>{time}</Text>
          <Text style={styles.txtContent}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

const Todo = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [listToDo, setListToDo] = useState(dataTodo);

  const onClose = () => setOpen(false);

  const addWork = (work) => {
    onClose();
    if (work.time) {
      setListToDo(
        listToDo.concat({
          ...work,
          time: convertDateTime(work.time).substring(0, 5),
          important: false,
          done: false,
        }),
      );
    } else {
      setListToDo(listToDo.concat({...work, important: false, done: false}));
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <HeaderTodo />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtHeader}>Thời khoá biểu</Text>
          </View>
          <View style={styles.wrapContent}>
            {dataCalendar.map((item) => (
              <ItemCalendar item={item} />
            ))}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtHeader}>Kế hoạch</Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Icon
                name={'pluscircleo'}
                size={getFontXD(62)}
                color={R.colors.main}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapContent}>
            {listToDo.map((item, index) => (
              <ItemPlan item={item} isEnd={index == listToDo.length - 1} />
            ))}
          </View>
        </View>
        <View style={{marginBottom: 10}} />
      </ScrollView>

      <Modal isVisible={isOpen}>
        <AddPlan addWork={addWork} onClose={onClose} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  txtHeader: {
    fontSize: getFontXD(52),
    fontWeight: '600',
    color: R.colors.color777,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    fontWeight: '600',
    color: R.colors.black,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  header: {
    backgroundColor: R.colors.white,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomWidth: 0.6,
    paddingHorizontal: 10,
    borderBottomColor: R.colors.borderGray,
  },
  wrapContent: {
    backgroundColor: 'rgba(256,256,256,0.8)',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  containerItem: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: R.colors.borderGray,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: R.colors.main,
    borderRadius: 10,
    marginRight: 10,
  },
  txtContent: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
  },
});

export default Todo;
