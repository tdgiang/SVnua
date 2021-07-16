import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {getFontXD, HEIGHT, toPriceVnd, WIDTHXD} from '../../Config/Functions';
import Header from '../../components/Header/HeaderPayIn';
import R from '../../assets/R';
import {useNavigation} from '@react-navigation/native';
const PayIn2 = ({params}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header step={1} />
      <View style={styles.detail}>
        <View style={styles.containTitle}>
          <Text style={styles.txtTitle}>Chi tiết giao dịch</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Họ Tên</Text>
            <Text style={styles.txtInfor}>Trần Đức Giang</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>SSCID</Text>
            <Text style={styles.txtInfor}>0123456789</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Mã hóa đơn</Text>
            <Text style={styles.txtInfor}>SSHD01</Text>
          </View>

          <View style={styles.containTitle2}>
            <Text style={styles.txtTitle}>Thông tin phí</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.txtLable}>Kỳ 1</Text>
            <View style={styles.stroke} />
            <Text style={styles.txtInfor}>600,000 đ</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.txtLable}>Kỳ 2</Text>
            <View style={styles.stroke} />
            <Text style={styles.txtInfor}>600,000 đ</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.txtLable}>Kỳ 3</Text>
            <View style={styles.stroke} />
            <Text style={styles.txtInfor}>miễn phí</Text>
          </View>

          <View style={styles.row3}>
            <Text style={{color: '#015198', fontSize: getFontXD(42)}}>
              Số tiền thanh toán
            </Text>
            <Text
              style={{
                color: '#015198',
                fontSize: getFontXD(42),
                fontWeight: 'bold',
              }}>
              1,200,000 đ
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Thanh toán qua</Text>
            <Text style={styles.txtLable}>Ví Momo</Text>
          </View>
        </View>
      </View>
      <View style={styles.containBtn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PAYIN3')}
          style={styles.btnNext}>
          <Text style={styles.txtBtn}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnNext: {
    height: '100%',
    width: 132,
    borderRadius: 20,
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containBtn: {
    height: 40,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtBtn: {
    fontSize: getFontXD(42),
    color: R.colors.white,
    fontWeight: '700',
  },
  detail: {
    borderRadius: 5,
    backgroundColor: R.colors.white,
    paddingBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  containTitle: {
    backgroundColor: R.colors.orange,
    paddingVertical: 5,
    paddingLeft: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  containTitle2: {
    backgroundColor: R.colors.white,
    paddingVertical: 5,
    marginTop: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  txtBig: {
    fontSize: getFontXD(52),
    fontWeight: 'bold',
  },
  txtLable: {
    fontSize: getFontXD(42),
    color: 'black',
  },
  txtInfor: {
    fontSize: getFontXD(42),
    color: 'black',
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: getFontXD(42),
    fontWeight: 'bold',
    color: '#FFF',
  },
  txtContent: {
    fontSize: getFontXD(42),
  },
  content: {
    paddingHorizontal: 10,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row3: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stroke: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
});
export default PayIn2;
