import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import R from '../../../../assets/R';
import {getFontXD, HEIGHTXD, WIDTHXD} from '../../../../Config/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const listDescription = [
  'Phụ trách ngành hàng dịch vụ viễn thông (bao gồm: di động trả trước, Sim số đẹp, di động trả sau, sau bán, chuyển mạng giữ số, Hóa đơn điện tử-CA)',
  'Đảm bảo doanh thu ngành hàng dịch vụ viễn thông theo chỉ tiêu được giao',
  'Tìm kiếm, triển khai các sản phẩm mới (theo định hướng trung tâm)',
  'Hoàn thành các công việc do Trưởng phòng, trung tâm giao',
  'Lên ý tưởng các chương trình, chính sách phục vụ kinh doanh thúc đẩy doanh số sản phẩm dịch vụ viễn thông (các chương trình ngắn hạn và dài hạn)',
  'Trình ký tờ trình xin ý kiến BGĐ và các phòng ban liên quan cho triển khai chương trình, chính sách.',
  'Đảm bảo kho số trên ERP đủ các phân khúc giá, đặc biệt các phân khúc bán chạy (80.000đ, 120.000đ, 180.000đ) phải có KPI tồn tối thiểu 5 ngày bán hàng. Ký PYC VTT cấp số hàng tháng theo KPI đã đề xuất đầu năm',
];
const listRequireJob = [
  'Ưu tiên Tốt nghiệp đại học các trường đại học Kinh tế quốc dân, Ngoại Thương chính quy trở lên các chuyên ngành kinh tế, quản trị kinh doanh',
  'Có ít nhất 2 năm ở vị trí tương đương',
  'Sử dụng thành thạo: Word, Exel, Powerpoint, ...',
  'Có khả năng lập kế hoạch, báo cáo tổng hợp, soạn thảo văn bản',
  'Nam/Nữ, tuổi từ 22 - 28 tuổi.',
];

const listBenifit = [
  'Thu nhập từ 15-20 triệu',
  'Làm việc trong môi trường năng động, chuyên nghiệp có nhiều cơ hội thăng tiến.',
  'Cung cấp trang thiết bị đầy đủ để phục vụ công việc.',
  'Được đóng BHXH, BHYT, BHTN.',
  'Được hưởng các chính sách phúc lợi theo quy định của công ty.',
  'Được đào tạo, nâng cao nghiệp vụ thường xuyên.',
];

const InformationJob = (props) => {
  const [isDetalDescription, setDetailDesciption] = useState(true);
  const [isDetalBenifit, setDetailBenifit] = useState(false);
  const [isDetalRequire, setIsDetalRequire] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View style={styles.containerItem}>
            <View style={styles.row}>
              <Icon name="calendar" color={R.colors.main} size={20} />

              <Text style={styles.detail}>17/15/2021</Text>
            </View>
            <View style={styles.row}>
              <Icon name="money" color={R.colors.main} size={20} />
              <Text style={styles.detail}>8-12 triệu</Text>
            </View>

            <View style={styles.row}>
              <Ionicons
                name="location-outline"
                size={20}
                color={R.colors.main}
              />
              <Text style={styles.detail}>
                Tòa nhà Hương Giang, số 1, ngõ 11 Duy Tân, Cầu Giấy, Hà Nội
              </Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="timer-outline" size={20} color={R.colors.main} />
              <View style={styles.contentext}>
                <Text style={styles.detail}>Toàn thời gian</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Icon name="group" size={20} color={R.colors.main} />
              <Text style={styles.detail}>5 người</Text>
            </View>
            <View style={styles.row}>
              <AntDesign name="idcard" size={20} color={R.colors.main} />
              <Text style={styles.detail}>Nhân viên</Text>
            </View>
          </View>
          <View style={styles.containerItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>Mô tả công việc</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(isDetalRequire);
                  setDetailDesciption(!isDetalDescription);
                }}>
                <Icon
                  name={isDetalDescription ? 'angle-up' : 'angle-down'}
                  size={20}
                  color={R.colors.color777}
                />
              </TouchableOpacity>
            </View>
            {isDetalDescription ? (
              <View style={styles.contentext}>
                {listDescription.map((e) => (
                  <View style={styles.rowLi}>
                    <Entypo name={'dot-single'} size={16} />
                    <Text>{e}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>

          <View style={styles.containerItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>YÊU CẦU CÔNG VIỆC</Text>
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
                {listRequireJob.map((e) => (
                  <View style={styles.rowLi}>
                    <Entypo name={'dot-single'} size={16} />
                    <Text>{e}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>

          <View style={styles.containerItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>Quyền lợi được hưởng</Text>
              <TouchableOpacity
                onPress={() => {
                  setDetailBenifit(!isDetalBenifit);
                }}>
                <Icon
                  name={isDetalBenifit ? 'angle-up' : 'angle-down'}
                  size={20}
                  color={R.colors.color777}
                />
              </TouchableOpacity>
            </View>

            {isDetalBenifit ? (
              <View style={styles.contentext}>
                {listBenifit.map((e) => (
                  <View style={styles.rowLi}>
                    <Entypo name={'dot-single'} size={16} />
                    <Text>{e}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnLeft}>
          <Icon name={'phone'} color={R.colors.main} size={22} />
          <Text style={styles.txtBtn}>Gọi điện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRight}>
          <Text style={styles.txtRight}>Ứng tuyển ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
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
    paddingVertical: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: getFontXD(42),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: getFontXD(42),
    color: R.colors.label,
  },
  detail: {
    fontSize: getFontXD(42),
    marginLeft: 10,
  },
  contentext: {
    marginLeft: 10,
    marginTop: 10,
  },
  rowLi: {
    flexDirection: 'row',
  },
  footer: {
    height: 50,
    borderTopColor: R.colors.borderGray,
    borderTopWidth: 0.7,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: R.colors.white,
  },
  btnLeft: {
    width: WIDTHXD(460),
    height: HEIGHTXD(100),
    borderRadius: 10,
    borderColor: R.colors.main,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtBtn: {
    marginLeft: 5,
    fontSize: getFontXD(42),
    fontWeight: '600',
    color: R.colors.main,
  },
  btnRight: {
    width: WIDTHXD(460),
    height: HEIGHTXD(100),
    borderRadius: 10,
    backgroundColor: R.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  txtRight: {
    fontSize: getFontXD(42),
    fontWeight: '600',
    color: R.colors.white,
  },
});
export default InformationJob;
