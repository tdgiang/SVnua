import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import HeaderFinace from '../../../components/Header/HeaderFinace';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD} from '../../../Config/Functions';
import {PAYDEBT, PAYS, HISTORYTRANSFER} from '../../../routers/ScreenNames';

const FinaceView = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <HeaderFinace />
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(PAYDEBT)}
          style={styles.containerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'creditcard'} size={getFontXD(52)} />
            <Text style={styles.txtTitle}>Thanh toán công nợ</Text>
          </View>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(PAYS)}
          style={styles.containerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'filetext1'} size={getFontXD(52)} />
            <Text style={styles.txtTitle}>Những khoản đã thanh toán</Text>
          </View>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(HISTORYTRANSFER)}
          style={styles.containerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome5 name={'history'} size={getFontXD(52)} />
            <Text style={styles.txtTitle}>Lịch sử giao dịch</Text>
          </View>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: getFontXD(42),
    marginLeft: 10,
  },
  containerItem: {
    marginHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
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
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FinaceView;
