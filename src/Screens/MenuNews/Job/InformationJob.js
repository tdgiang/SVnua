import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import R from '../../../assets/R';
import { getFontXD } from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get } from 'lodash';

const InformationJob = (props) => {
  const [isDetalDescribe, setIsDetalDescribe] = useState(false);
  const [isDetalRequire, setIsDetalRequire] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, backgroundColor: R.colors.colorBackground }}>
        <View style={styles.containerItem}>
          <View style={styles.row}>
            <Icon name="calendar" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>NGÀY ĐĂNG TUYỂN</Text>
              <Text style={styles.detail}>17/15/2021</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Ionicons name="layers" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>CẤP BẬC</Text>
              <Text style={styles.detail}>Nhân viên</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon name="industry" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>NGÀNH NGHỀ</Text>
              <Text style={styles.detail}>Y tế/Chăm sóc sức khỏe</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon name="flag-o" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>KỸ NĂNG</Text>
              <Text style={styles.detail}>Có kỹ năng là một lợi thế</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginLeft: 5 }}><Icon name="language" size={20} color={R.colors.gray} /></View>
            <View style={styles.contentext}>
              <Text style={styles.subtitle}>NGÔN NGỮ TRÌNH BÀY HỒ SƠ</Text>
              <Text style={styles.detail}>Biết tiếng anh là một lợi thế</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.containerItem}>
            <Text style={styles.title}>CÁC PHÚC LỢI DÀNH CHO BẠN</Text>
            <View style={styles.item}>
              <Icon name="money" size={20} color={R.colors.gray} />
              <View style={styles.contentext}>
                <Text style={styles.detail}>Thưởng không giới hạn: thưởng quý, năm, doanh số</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Ionicons name="timer-outline" size={20} color={R.colors.gray} />
              <View style={styles.contentext}>
                <Text style={styles.detail}>Làm việc từ thứ 2 đến thứ 6(thứ 6 nghỉ từ 3h chiều)</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Icon name="money" size={20} color={R.colors.gray} />
              <View style={styles.contentext}>
                <Text style={styles.detail}>Bảo hiểm chăm sóc sức khỏe toàn diện,</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerItem}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.title}>MÔ TẢ CÔNG VIỆC</Text>
            <TouchableOpacity onPress={() => { console.log(isDetalDescribe); setIsDetalDescribe(!isDetalDescribe) }}>
              <Icon
                name={isDetalDescribe ? 'angle-up' : 'angle-down'}
                size={20}
                color={R.colors.color777}
              />
            </TouchableOpacity>
          </View>

          {isDetalDescribe ? <View style={styles.contentext} >
            <Text style={styles.detail}>Hiện nay Công ty chúng tôi đang cần tuyển nhân viên</Text>
          </View> : null}
        </View>

        <View style={styles.containerItem}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.title}>YÊU CẦU CÔNG VIỆC</Text>
            <TouchableOpacity onPress={() => { console.log(isDetalRequire); setIsDetalRequire(!isDetalRequire) }}>
              <Icon
                name={isDetalRequire ? 'angle-up' : 'angle-down'}
                size={20}
                color={R.colors.color777}
              />
            </TouchableOpacity>
          </View>

          {isDetalRequire ? <View style={styles.contentext} >
            <Text>Nắng mưa biết chạy vào nhà là một lợi thế!</Text>
          </View> : null}
        </View>

        <View style={styles.containerItem}>
          <View>
            <Text style={styles.title}>ĐỊA ĐIỂM LÀM VIỆC</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="location-outline" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.detail}>Tầng 3, Tòa BITEXCO Hà Nội</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Ionicons name="location-outline" size={20} color={R.colors.gray} />
            <View style={styles.contentext}>
              <Text style={styles.detail}>Tầng 81 LandMart TP.HCM</Text>
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
    marginVertical: 10,
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
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: R.colors.borderGray
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10

  },
  title: {
    fontSize: getFontXD(42),
    padding: 5
  },
  subtitle: {
    fontSize: getFontXD(42),
    color: R.colors.label,
    marginVertical: 5
  },
  detail: {
    fontSize: getFontXD(36),

  },
  contentext: {
    marginHorizontal: 10
  }

});
export default InformationJob;
