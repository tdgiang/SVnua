import React, { useState } from 'react';
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
import R from '../../../assets/R';
import { getFontXD } from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Company = (props) => {
  const [isDetalDescribe, setIsDetalDescribe] = useState(false);
  const [isDetalRequire, setIsDetalRequire] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, backgroundColor: R.colors.colorBackground }}>
        <View style={styles.containerItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>THÔNG TIN VỀ CÔNG TY CHÚNG TÔI</Text>
            <TouchableOpacity onPress={() => { console.log(isDetalRequire); setIsDetalRequire(!isDetalRequire) }}>
              <Icon
                name={isDetalRequire ? 'angle-up' : 'angle-down'}
                size={20}
                color={R.colors.color777}
              />
            </TouchableOpacity>
          </View>


          {isDetalRequire ? <View style={styles.contentext}>
            <Text style={styles.detail}>Thành lập năm 2000, Công Ty chúng tôi tiên phong trong lĩnh vực mà chúng tôi phát triển</Text>
          </View> : null}
        </View>
        <View style={styles.containerItem}>
          <View>
            <Text style={styles.title}>ĐỊA ĐIỂM LÀM VIỆC</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="location-outline" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>ĐỊA  ĐIỂM</Text>
              <Text style={styles.detail}>Tại Hà Nội: Lô CN2 tòa nhà Thạch Kim KĐT Định Công, Hoàng Mai. Tại Đà Nẵng: 385 Trần Cao Vân , P Xuân Hà, Q.Thanh Khê</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon name="group" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>QUY MÔ CÔNG TY</Text>
              <Text style={styles.detail}>100-500 nhân viên</Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'white', alignItems: 'stretch', flexDirection: 'row' }}>
            <View style={{ marginRight: 6, justifyContent: 'center' }}>
              <Icon name="phone" size={20} color={R.colors.gray} />
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
    borderBottomColor: R.colors.borderGray
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10

  },
  title: {
    fontSize: getFontXD(52),
    padding: 10
  },
  subtitle: {
    fontSize: getFontXD(42),
    color: R.colors.label,
    marginVertical: 5
  },
  detail: {
    fontSize: getFontXD(36),
    marginVertical: 5
  },
  contentext: {
    marginHorizontal: 10,
  }
});
export default Company;
