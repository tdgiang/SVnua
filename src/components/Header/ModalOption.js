import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  getFontXD,
  HEIGHTXD,
  WIDTH,
  HEIGHT,
  WIDTHXD,
} from '../../Config/Functions';
import R from '../../assets/R';
import Block from '../Block';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../../helper/i18/i18n';
import AppText from '../AppText';
import Modal from 'react-native-modal';
import PickerItem from '../../components/Picker/PickerItem';
import RadioForm from 'react-native-simple-radio-button';

const radio_props = [
  {label: 'Bắt buộc', value: 0},
  {label: 'Tự chọn', value: 1},
];

const dataLanguage = [
  {
    value: 'K62CNPM',
    name: 'K62CNPM',
  },
  {
    value: 'K62CNTT',
    name: 'K62CNTT',
  },
  {
    value: 'K62CNPMP',
    name: 'K62CNPMP',
  },
  {
    value: 'K62HTTT',
    name: 'K62HTTT',
  },
  {
    value: 'K63TH',
    name: 'K63TH',
  },
  {
    value: 'K63CNPM',
    name: 'K63CNPM',
  },
  {
    value: 'K63ATTT',
    name: 'K63ATTT',
  },
  {
    value: 'K62CNTT',
    name: 'K62CNTT',
  },
];

const ModalOption = (props) => {
  const {isOpen, closeModal, onChangePicker, onClick} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: 0,
        }}
        animationType="slide"
        transparent={true}
        visible={isOpen}>
        <View style={styles.centeredView}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: 30}} />
              <AppText style={styles.modalText} i18nKey={'RequestFilter'} />
              <TouchableOpacity onPress={closeModal}>
                <Icon name={'close-outline'} size={22} />
              </TouchableOpacity>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.wrapItem}>
                <Text style={styles.txt}>Môn học:</Text>
                <View style={styles.wrapInput}>
                  <TextInput
                    placeholder={'Nhập môn học'}
                    style={styles.txtInput}
                  />
                  <Icon size={18} name={'search'} />
                </View>
              </View>
              <View style={styles.wrapItem}>
                <Text style={styles.txt}>Lớp:</Text>
                <PickerItem
                  width={WIDTHXD(840)}
                  data={dataLanguage}
                  onValueChange={(value, items) => {
                    console.log(items);
                  }}
                />
              </View>
              <View style={[styles.wrapItem, {marginTop: 10}]}>
                <RadioForm
                  style={{width: WIDTHXD(650), justifyContent: 'space-between'}}
                  formHorizontal={true}
                  radio_props={radio_props}
                  buttonInnerColor={R.colors.red1}
                  buttonOuterColor={R.colors.orange}
                  buttonSize={16}
                  initial={0}
                  onPress={(value) => console.log(value)}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={onClick}>
                <Text style={styles.txtBtn}>{I18n.t('Ok')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTHXD(900),
    paddingVertical: 20,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: getFontXD(52),
    color: R.colors.txtMain,
    fontWeight: 'bold',
  },
  txtBtn: {
    fontSize: getFontXD(52),
    color: R.colors.main,
    fontWeight: 'bold',
  },

  datePicker: {
    marginTop: 5,
    width: WIDTH(100),
    borderWidth: 0.8,
    borderColor: R.colors.borderGray,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 30,
  },
  wrapContent: {
    paddingVertical: 10,
  },

  wrapInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: R.colors.borderGray,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
    backgroundColor: R.colors.white,
  },
  txtInput: {
    flex: 1,
    height: HEIGHTXD(109),
    paddingVertical: 3,
  },
  txt: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  wrapItem: {
    marginVertical: 5,
  },
});

export default ModalOption;
