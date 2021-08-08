import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import R from '../../assets/R';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderTodo from '../../components/Header/HeaderTodo';
import {getFontXD, convertDateTime} from '../../Config/Functions';
import ItemPlan from './ItemPlan';
import Modal from 'react-native-modal';
import AddPlan from './AddPlan';
import KEY from '../../assets/AsynStorage';
import ReactNativeAN from 'react-native-alarm-notification';
import {showAlert, TYPE} from '../../components/DropdownAlert';

import {SwipeListView} from 'react-native-swipe-list-view';
import HideItem from './HideItem';

const {RNAlarmNotification} = NativeModules;
const RNEmitter = new NativeEventEmitter(RNAlarmNotification);

const alarmNotifData = {
  title: 'Nhắc nhở',
  message: 'Stand up',
  vibrate: true,
  play_sound: true,
  schedule_type: 'once',
  channel: 'wakeup',
  data: {content: 'Thông báo'},
  loop_sound: true,
  has_button: true,
};

const repeatAlarmNotifData = {
  title: 'Alarm',
  message: 'Stand up',
  vibrate: true,
  play_sound: true,
  channel: 'wakeup',
  data: {content: 'Thông báo'},
  loop_sound: true,
  schedule_type: 'repeat',
  repeat_interval: 'minutely',
  interval_value: 5, // repeat after 5 minutes
};

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
  const [listToDo, setListToDo] = useState([]);

  const onClose = () => setOpen(false);
  useEffect(() => {
    getListToDo();
  }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(KEY.TODOLIST, jsonValue);
    } catch (e) {
      console.log('Looi', e);
    }
  };

  const getListToDo = async () => {
    const list = await getData();
    if (list) {
      console.log(list);
      setListToDo(list);
    } else {
      showAlert(TYPE.WARN, 'Thông báo!', 'Không có nhiệu vụ nào!');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(KEY.TODOLIST);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('Looi', e);
      return null;
    }
  };

  const addWork = async (work) => {
    onClose();
    if (work.time) {
      let details;
      if (work.selected == 'once')
        details = {
          ...alarmNotifData,
          fire_date: ReactNativeAN.parseDate(work.time),
          message: work.title,
        };
      else {
        details = {
          ...alarmNotifData,
          fire_date: ReactNativeAN.parseDate(work.time),
          message: work.title,
          repeat_interval: work.selected,
        };
      }
      try {
        const alarm = await ReactNativeAN.scheduleAlarm(details);
        console.log('Hello', alarm);
        if (alarm) {
          const newList = listToDo.concat({
            ...work,
            time: convertDateTime(work.time).substring(0, 5),
            important: false,
            done: false,
            alarm,
            id: `${listToDo.length}abc`,
          });
          setListToDo(newList);
          storeData(newList);
        }
      } catch (e) {
        showAlert(TYPE.WARN, 'Thông báo!', 'Thời gian không hợp lệ!');
      }
    } else {
      const newList = listToDo.concat({
        ...work,
        important: false,
        done: false,
        alarm: null,
      });
      setListToDo(newList);
      storeData(newList);
    }
  };

  const deleteRow = (id, alarm) => {
    const newList = listToDo.filter((e) => e.id != id);
    setListToDo(newList);
    storeData(newList);
    if (alarm) {
      const id = parseInt(alarm.id, 10);
      ReactNativeAN.deleteAlarm(id);
    }
  };

  const onDoneTask = (id) => {
    const newList = listToDo.map((e) => {
      if (e.id != id) return e;
      return {...e, done: !e.done};
    });
    setListToDo(newList);
    storeData(newList);
  };

  const onImportantTask = (id) => {
    const newList = listToDo.map((e) => {
      if (e.id != id) return e;
      return {...e, important: !e.important};
    });
    setListToDo(newList);
    storeData(newList);
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
            <SwipeListView
              data={listToDo}
              renderItem={(data, rowMap) => (
                <ItemPlan
                  isEnd={data.index == listToDo.length - 1}
                  item={data.item}
                  onDoneTask={onDoneTask}
                  onImportantTask={onImportantTask}
                />
              )}
              renderHiddenItem={(data, rowMap) => (
                <HideItem
                  isEnd={data.index == listToDo.length - 1}
                  data={data}
                  deleteRow={deleteRow}
                  rowMap={rowMap}
                />
              )}
              keyExtractor={(item) => item.id}
              leftOpenValue={0}
              rightOpenValue={-75}
            />
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
  rowBack: {},
});

export default Todo;
