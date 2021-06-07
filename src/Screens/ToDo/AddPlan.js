import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHTXD, convertDateTime} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';
import {showAlert, TYPE} from '../../components/DropdownAlert/index';

const list = [
  {
    id: 'once',
    title: 'Một lần',
  },
  {
    id: 'hourly',
    title: 'Mỗi giờ',
  },
  {
    id: 'daily',
    title: 'Hàng ngày',
  },
  {
    id: 'weekly',
    title: 'Hàng tuần',
  },
];

const AddPlan = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(null);
  const [selected, setSelected] = useState('once');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setTime(date);
    hideDatePicker();
  };

  const {onClose, addWork} = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <View style={{paddingVertical: 10}}>
          <TextInput
            autoFocus={true}
            placeholder={'Nhập nhiệm vụ mới tại đây'}
            style={styles.txtInput}
            onChangeText={(val) => setTitle(val)}
          />
          <View style={styles.wrapOption}>
            <TouchableOpacity onPress={showDatePicker}>
              <Image source={R.images.schedule} style={styles.img} />
            </TouchableOpacity>
            {time ? (
              <Text style={styles.txtTitle}>{convertDateTime(time)}</Text>
            ) : null}
          </View>

          <View style={styles.wrapRow}>
            {list.map((e) => (
              <TouchableOpacity
                onPress={() => setSelected(e.id)}
                style={[
                  styles.box,
                  selected == e.id ? {backgroundColor: R.colors.main} : {},
                ]}
                key={e.id}>
                <Text style={selected == e.id ? {color: R.colors.white} : {}}>
                  {e.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={onClose} style={styles.containerBtn}>
            <Icon
              name={'closecircleo'}
              size={getFontXD(42)}
              color={R.colors.red}
            />
            <Text style={[styles.txtBtn, {color: R.colors.red}]}>Đóng</Text>
          </TouchableOpacity>
          <View style={{width: 0.6, backgroundColor: R.colors.main}} />
          <TouchableOpacity
            onPress={() => {
              if (title) addWork({title, time, selected});
              else
                showAlert(
                  TYPE.WARN,
                  'Thông báo!',
                  'Bạn chưa điền nội dung nhiệu vụ',
                );
            }}
            style={styles.containerBtn}>
            <Icon
              name={'pluscircleo'}
              size={getFontXD(42)}
              color={R.colors.main}
            />

            <Text style={styles.txtBtn}>Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.white,
    width: '100%',
    borderRadius: 10,
    paddingTop: 10,
  },
  footer: {
    flexDirection: 'row',
  },
  containerBtn: {
    flex: 1,
    borderTopWidth: 0.6,
    borderTopColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  txtInput: {
    height: HEIGHTXD(150),
    marginHorizontal: 10,
    backgroundColor: R.colors.gray5,
    fontSize: getFontXD(42),
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  txtBtn: {
    fontSize: getFontXD(42),
    color: R.colors.main,
    fontWeight: '600',
    marginLeft: 10,
  },
  wrapOption: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 35,
    height: 35,
    marginRight: 20,
  },
  txtTitle: {
    fontSize: getFontXD(42),
  },
  wrapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  box: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: R.colors.gray5,
    borderRadius: 5,
  },
});

export default AddPlan;
