import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getFontXD, HEIGHT, toPriceVnd, WIDTHXD} from '../../Config/Functions';
import Header from '../../components/Header/HeaderPayIn';
import {useNavigation} from '@react-navigation/native';
import R from '../../assets/R';
import images from '../../assets/images';
import Icon from 'react-native-vector-icons/AntDesign';
const PayIn3 = ({params}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header step={2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.messageLogo}>
          <Icon name="check" size={50} color="#886327" />
        </View>
        <Text style={styles.messageTxt}>Giao dịch thành công!</Text>
        <View style={styles.content}>
          <Text
            style={{
              fontSize: getFontXD(42),
              textAlign: 'center',
            }}>
            Quý khách đã thanh toán thành công 1,200,000 đ {'\n'} thông tin chi
            tiết hóa đơn{' '}
          </Text>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Mã SSCID:</Text>
            <Text style={styles.txtInfor}>0123456789</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Mã hóa đơn</Text>
            <Text style={styles.txtInfor}>SSHD01</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Kỳ 1</Text>
            <Text style={styles.txtInfor}>600,000 đ</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Kỳ 2</Text>
            <Text style={styles.txtInfor}>600,000 đ</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtLable}>Phí giao dịch</Text>
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
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PAYIN')}
          style={styles.btn}>
          <Text
            style={{
              fontSize: getFontXD(42),
              color: R.colors.white,
              fontWeight: '700',
            }}>
            Tiếp tục nạp tiền
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TABBAR')}
          style={styles.btn}>
          <Text
            style={{
              fontSize: getFontXD(42),
              color: R.colors.white,
              fontWeight: '700',
            }}>
            Quay lại màn hình chính
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtBig: {
    fontSize: getFontXD(52),
    fontWeight: 'bold',
  },
  txt: {
    fontSize: getFontXD(52),
    color: R.colors.white,
  },
  txtTile: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  txtContent: {
    fontSize: getFontXD(42),
  },
  image: {
    height: 50,
    width: 50,
    transform: [{rotate: '-100deg'}],
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row3: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  btn: {
    alignSelf: 'center',
    height: 40,
    width: '100%',
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageLogo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDEB1',
  },
  messageTxt: {
    color: '#00327D',
    fontSize: getFontXD(52),
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    borderRadius: 5,
    backgroundColor: R.colors.white,
    marginVertical: 10,
    padding: 15,
    marginHorizontal: 15,
  },
});
export default PayIn3;
