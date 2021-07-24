import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from '../../assets/R';
import Header from '../../components/Header/Header';
import Note from '../../components/Note';
import {getFontXD, toPriceVnd} from '../../Config/Functions';
import {Divider} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const PayDebt = (props) => {
  const [money, setMoney] = useState(69000);
  const [fee, setFee] = useState(7269000);
  const [service, setService] = useState(10000);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thanh toán công nợ'} />
      <View style={{flex: 1, paddingTop: 20}}>
        <Note
          style={{marginHorizontal: 10}}
          content={
            '-Nếu chưa thanh toán các tài khoản phí dưới đây,tài khoản sẽ bị khoá một số chức năng.\n-Nếu số tiền chưa thThanh toán lơn hơn số tài khảon dư tài khoản bạn phải bổ sung tiền vào tài khoản'
          }
        />
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.txtMoney}>Số tiền trong tài khoản</Text>
            <Text style={styles.txtMoney}>{toPriceVnd(money)}</Text>
          </View>
          <Divider />
          <View style={{marginVertical: 10}}>
            <Text style={styles.txtRed}>Các khoản nợ</Text>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
              <View style={styles.row}>
                <Text style={{fontSize: getFontXD(42)}}>Học phí</Text>
                <Text style={styles.txtRed}>{toPriceVnd(fee)}(vnđ)</Text>
              </View>
              <View style={styles.row}>
                <Text style={{fontSize: getFontXD(42)}}>Dịch vụ</Text>
                <Text style={styles.txtRed}>{toPriceVnd(service)}(vnđ)</Text>
              </View>
            </View>
          </View>
          <Divider />
          <View style={styles.row}>
            <Text style={{fontSize: getFontXD(42), fontWeight: '600'}}>
              Tổng nợ
            </Text>
            <Text style={styles.txtRed}>{toPriceVnd(fee + service)}(vnđ)</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PAYIN')}
              style={styles.btn}>
              <Text style={styles.txtBtn}>Nạp tiền vào tài khoản</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button containerStyle={styles.btnPay} title={'Thanh toán'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: R.colors.white,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },

  txtMoney: {
    fontSize: getFontXD(42),
    color: R.colors.main,
    fontWeight: '600',
  },
  txtRed: {
    fontSize: getFontXD(42),
    color: R.colors.red1,
    fontWeight: '600',
  },
  txtBtn: {
    fontSize: getFontXD(46),
    fontWeight: '600',
    color: R.colors.main,
  },
  btn: {
    borderWidth: 1,
    borderColor: R.colors.main,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  btnPay: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PayDebt;
