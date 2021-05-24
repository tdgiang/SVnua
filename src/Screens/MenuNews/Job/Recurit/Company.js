import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import R from '../../../../assets/R';
import {getFontXD} from '../../../../Config/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const listDescription = [
  'Công ty TNHH ô tô và thiết bị chuyên dùng Sao Bắc (SABACO), tiền thân là Công ty TNHH ô tô Sao Bắc đuợc thành lập ngày 26 tháng 11 năm 2003.',
  'Hiện nay, Công ty TNHH ô tô và thiết bị chuyên dùng Sao Bắc là nhà phân phối chính thức sản phẩm ô tô tải HINO (Nhật bản). Đồng thời, Công ty còn là nhà phân phối các loại xe khách Samco, xe khách Huynhđai, Xe khách Hino, các loại xe chuyên dùng (Xe tải gắn cẩu, xe ben, xe bồn trộn, xe xì téc, xe ép rác, xe rữa đường, xe hút chất thải thông cống…), thùng lạnh Lamberet (Pháp), Máy lạnh Thermoking (Mỹ), Cần cẩu UNIC (Nhật Bản), Cần cẩu Palfinger (CH Áo)....',
  'Với nhiều năm kinh nghiệm trong lĩnh vực phân phối ô tô và thiết bị chuyên dùng cùng vối phương châm: Sản phẩm chính hãng giá cả cạnh tranh, dịch vụ bán hàng và sau bán hàng hoàn hảo nhất, đã mang lại sự tin cậy và hài long cho khách hàng.',
];

const Company = (props) => {
  const [isDetalDescribe, setIsDetalDescribe] = useState(false);
  const [isDetalRequire, setIsDetalRequire] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: R.colors.colorBackground}}>
        <View style={styles.containerItem}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>THÔNG TIN VỀ CÔNG TY CHÚNG TÔI</Text>
            <TouchableOpacity
              onPress={() => {
                console.log(isDetalRequire);
                setIsDetalRequire(!isDetalRequire);
              }}>
              <Icon
                name={isDetalRequire ? 'angle-up' : 'angle-down'}
                size={20}
                color={R.colors.color777}
              />
            </TouchableOpacity>
          </View>

          {isDetalRequire ? (
            <View style={styles.contentext}>
              {listDescription.map((e) => (
                <View key={e} style={{flexDirection: 'row'}}>
                  <Entypo name={'dot-single'} size={16} />
                  <Text>{e}</Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
        <View style={styles.containerItem}>
          <View style={styles.row}>
            <Ionicons name="location-outline" size={20} color={R.colors.main} />
            <View style={styles.contentext}>
              <Text style={styles.detail}>
                Tại Hà Nội: Lô CN2 tòa nhà Thạch Kim KĐT Định Công, Hoàng Mai.
                Tại Đà Nẵng: 385 Trần Cao Vân , P Xuân Hà, Q.Thanh Khê
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon name="group" size={20} color={R.colors.main} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>QUY MÔ CÔNG TY</Text>
              <Text style={styles.detail}>100-500 nhân viên</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'stretch',
              flexDirection: 'row',
            }}>
            <View style={{marginRight: 6, justifyContent: 'center'}}>
              <Icon name="phone" size={20} color={R.colors.main} />
            </View>
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>LIÊN HỆ</Text>
              <Text style={styles.detail}>HR: Mrs Hang (099887766)</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: R.colors.black,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: R.colors.borderGray,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: getFontXD(42),
    fontWeight: '600',
  },
  subtitle: {
    fontSize: getFontXD(42),
    color: R.colors.label,
    marginVertical: 5,
  },
  detail: {
    fontSize: getFontXD(36),
    marginVertical: 5,
  },
  contentext: {
    marginHorizontal: 10,
  },
  rowLi: {
    flexDirection: 'row',
  },
});
export default Company;
