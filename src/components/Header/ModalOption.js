import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
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
} from '../../config/Functions';
import R from '../../assets/R';
import Block from '../Block';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../../helper/i18/i18n';
import AppText from '../AppText';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ModalOption = (props) => {
  const {isOpen, closeModal, onChangePicker, onClick} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dateConfirm = (props) => {};

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <View style={styles.centeredView}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View />
              <AppText style={styles.modalText} i18nKey={'RequestFilter'} />
              <TouchableOpacity onPress={closeModal}>
                <Icon name={'close-outline'} size={22} />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, paddingVertical: 10}}>
              <AppText style={styles.txtTitle} i18nKey={'Status'} />
              <DropDownPicker
                zIndex={5}
                items={[
                  {label: I18n.t('Waiting'), value: 1},
                  {label: I18n.t('Success'), value: 2},
                  {label: I18n.t('Failed'), value: 3},
                ]}
                selectedLabelStyle={{
                  color: R.colors.black,
                  fontSize: getFontXD(42),
                }}
                containerStyle={{height: HEIGHT(40)}}
                placeholder={I18n.t('SelectRequestStatus')}
                style={{backgroundColor: '#fafafa', marginTop: 4}}
                itemStyle={{
                  justifyContent: 'flex-start',
                  color: R.colors.black,
                }}
                placeholderStyle={{color: 'black'}}
                dropDownStyle={{
                  backgroundColor: '#fafafa',
                }}
                onChangeItem={(item) => onChangePicker(item.value)}
              />
              <View style={{marginTop: 10}}>
                <Block row>
                  <Block>
                    <AppText style={styles.txtTitle} i18nKey={'FromDate'} />
                    <TouchableOpacity
                      onPress={() => setDatePickerVisibility(true)}
                      style={styles.datePicker}>
                      <Text>20/01/2020</Text>
                    </TouchableOpacity>
                  </Block>
                  <Block>
                    <AppText style={styles.txtTitle} i18nKey={'ToDate'} />
                    <TouchableOpacity
                      onPress={() => setDatePickerVisibility(true)}
                      style={styles.datePicker}>
                      <Text>20/01/2020</Text>
                    </TouchableOpacity>
                  </Block>
                </Block>
              </View>
            </View>

            {/*<DateTimePickerModal*/}
            {/*  isVisible={isDatePickerVisible}*/}
            {/*  mode="date"*/}
            {/*  maximumDate={new Date()}*/}
            {/*  onConfirm={dateConfirm}*/}
            {/*  onCancel={() => setDatePickerVisibility(false)}*/}
            {/*/>*/}

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
    width: WIDTHXD(800),
    height: HEIGHTXD(800),
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
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    elevation: 2,
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
  txtTitle: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
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
});

export default ModalOption;
