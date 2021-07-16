import React, {useState} from 'react';
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
import R from '../../assets/R';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {wrap} from 'lodash';

const InternationalCard = [
  {
    id: '1',
    name: 'VISA',
    image: images.icon_visa,
  },
  {
    id: '2',
    name: 'MasterCard',
    image: images.icon_mastercard,
  },
];
const InteriorCard = [
  {
    id: '1',
    name: 'Dong A Bank',
    image: images.icon_DongA_Bank,
  },
  {
    id: '2',
    name: 'BIDV',
    image: images.icon_BIDV,
  },
  {
    id: '3',
    name: 'Sai Gon Bank',
    image: images.icon_SaiGon_Bank,
  },
  {
    id: '4',
    name: 'SaCom Bank',
    image: images.icon_SaComBank,
  },
  {
    id: '5',
    name: 'MB Bank',
    image: images.icon_MB_Bank,
  },
  {
    id: '6',
    name: 'VIB Bank',
    image: images.icon_VIB_Bank,
  },
  {
    id: '7',
    name: 'VietTin Bank',
    image: images.icon_VietTin_Bank,
  },
  {
    id: '8',
    name: 'TechCom Bank',
    image: images.icon_TechCom_Bank,
  },
  {
    id: '9',
    name: 'TP Bank',
    image: images.icon_TP_Bank,
  },
];

const RenderBank = (props) => {
  const {image} = props.item;
  const {onSelect, itemChose} = props;

  return (
    <TouchableOpacity
      onPress={() => onSelect(props.index)}
      style={
        itemChose != props.index ? styles.itemBank : styles.itemBankSelect
      }>
      <Image source={image} style={{}} />
    </TouchableOpacity>
  );
};
const PayIn = ({params}) => {
  const navigation = useNavigation();
  const [payMethod, setPayMethod] = useState(true);
  const [itemChose, setItem] = useState(null);
  const [itemChose2, setItem2] = useState(null);
  const onSelect = (value) => {
    setItem(value);
  };
  return (
    <View style={styles.container}>
      <Header step={0} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <View style={{height: 165, borderRadius: 5, marginTop: 10}}>
          <View style={styles.bill}>
            <Text style={{colors: R.colors.white}}>Thông tin phí</Text>
          </View>
          <View style={styles.contentBill}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.txt}>Kỳ 1</Text>
              <View style={styles.row} />
              <Text style={styles.txt}>600,000 đ</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.txt}>Kỳ 2</Text>
              <View style={styles.row} />
              <Text style={styles.txt}>600,000 đ</Text>
            </View>
          </View>
          <View style={styles.payment}>
            <Text style={{fontSize: getFontXD(42), color: R.colors.lightBlue1}}>
              Số tiền thanh toán
            </Text>
            <Text
              style={{
                fontSize: getFontXD(42),
                color: R.colors.lightBlue,
                fontWeight: '700',
              }}>
              1,200,000
            </Text>
          </View>
        </View>
        <Text style={styles.txtLable}>Phương thức thanh toán</Text>
        <View
          style={{
            height: 40,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => setPayMethod(true)}
            style={payMethod ? styles.payMethod1 : styles.payMethod2}>
            <Text
              style={payMethod ? styles.txtPayMethod1 : styles.txtPayMethod2}>
              Thẻ
            </Text>
            <Icon
              name="creditcard"
              size={30}
              color={payMethod ? 'white' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPayMethod(false)}
            style={payMethod ? styles.payMethod2 : styles.payMethod1}>
            <Text
              style={payMethod ? styles.txtPayMethod2 : styles.txtPayMethod1}>
              Ví điện tử
            </Text>
            <Icon
              name="wallet"
              size={30}
              color={payMethod ? 'gray' : 'white'}
            />
          </TouchableOpacity>
        </View>
        {payMethod ? (
          <View>
            <View style={{marginTop: 10}}>
              <Text style={{}}>Thẻ quốc tế</Text>
              <View
                style={{
                  flexDirection: 'row',
                  height: 40,
                  marginTop: 5,
                  alignContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => setItem2(1)}
                  style={itemChose2 == 1 ? styles.cardSelect : styles.card}>
                  <Image source={InternationalCard[0].image} />
                </TouchableOpacity>
                <View style={{width: 10}} />
                <TouchableOpacity
                  onPress={() => setItem2(2)}
                  style={itemChose2 == 2 ? styles.cardSelect : styles.card}>
                  <Image source={InternationalCard[1].image} />
                </TouchableOpacity>
                <View style={{width: 10}} />
                <View
                  style={{
                    flex: 1,
                  }}></View>
              </View>
            </View>

            <View style={{marginTop: 16}}>
              <Text style={{}}>Thẻ nội địa</Text>
              <View>
                <FlatList
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  numColumns={3}
                  data={InteriorCard}
                  keyExtractor={(item) => item.id}
                  renderItem={({item, index}) => (
                    <RenderBank
                      item={item}
                      onSelect={onSelect}
                      index={index}
                      itemChose={itemChose}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={{flexDirection: 'row', height: 40, marginTop: 20}}>
              <TouchableOpacity onPress={() => {}} style={styles.card}>
                <Image source={images.icon_MoMo} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.card}>
                <Image source={images.icon_ViettelPay} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.card}>
                <Image source={images.icon_PayYoo} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={styles.containBtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PAYIN2')}
            style={styles.btnNext}>
            <Text
              style={{
                fontSize: getFontXD(42),
                color: R.colors.white,
                fontWeight: '700',
              }}>
              Tiếp theo
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBank: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: R.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBankSelect: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bill: {
    height: 30,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: 'center',
    paddingLeft: 14,
    backgroundColor: R.colors.main,
  },
  contentBill: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: R.colors.white,
    padding: 10,
  },
  card: {
    flex: 1,
    borderRadius: 5,
    // marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.white,
  },
  cardSelect: {
    flex: 1,
    borderRadius: 5,
    // marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.main,
  },
  payMethod1: {
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: R.colors.main,
    marginRight: 5,
  },
  payMethod2: {
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: R.colors.white,
    marginLeft: 5,
  },
  txtPayMethod2: {
    color: R.colors.colorNhap,
    fontSize: getFontXD(42),
  },
  txtPayMethod1: {
    color: R.colors.white,
    fontSize: getFontXD(42),
  },
  payment: {
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: R.colors.white,
  },
  row: {
    marginHorizontal: 10,
    flex: 1,
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: R.colors.colorNhap,
  },
  txtBig: {
    fontSize: getFontXD(52),
    fontWeight: 'bold',
  },
  txt: {
    fontSize: getFontXD(42),
    color: 'black',
  },
  txtTile: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  txtLable: {
    marginTop: 32,
    fontSize: getFontXD(42),
    fontWeight: '700',
  },
  txtContent: {
    fontSize: getFontXD(42),
  },
  containBtn: {
    height: 40,
    marginTop: 10,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnNext: {
    height: '100%',
    width: 132,
    borderRadius: 20,
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PayIn;
