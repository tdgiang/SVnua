import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {QUESTIONSERVEY} from '../../../routers/ScreenNames';

const DetailServey = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Khảo sát'} />
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={styles.wrapBody}>
              <Text style={styles.txtLink}>
                Phiếu khảo sát thông tin phục vụ công tác phòng trống dịch bệnh
                COVID 19
              </Text>
              <View style={{marginTop: 30}}>
                <Text style={styles.txt}>
                  Hiện nay dịch bênh Covid 19 đang có diễn biến mới,nhằm thực
                  hiện công tác phòng trống dịch bệnh.Học viện nông nghiệp Việt
                  Nam yêu cầu viên chức,người lao động học viên,sinh viên khai
                  báo trung thực chính xác các thông tin.
                </Text>
                <View style={{marginTop: 20}} />
                <Text style={styles.txt}>
                  Để chủ động phòng, chống dịch COVID-19 trong trạng thái “bình
                  thường mới”, Bộ Y tế mong muốn và kêu gọi mỗi người dân Việt
                  Nam cùng nhau thực hiện Chung sống an toàn với đại dịch
                  COVID-19. Bộ Y tế gửi đến Bạn “Thông điệp 5K: Khẩu trang – Khử
                  khuẩn – Khoảng cách – Không tụ tập – Khai báo y tế” với các
                  nội dung chính sau đây: KHẨU TRANG: Đeo khẩu trang vải thường
                  xuyên tại nơi công cộng, nơi tập trung đông người; đeo khẩu
                  trang y tế tại các cơ sở y tế, khu cách ly. KHỬ KHUẨN: Rửa tay
                  thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn tay. Vệ
                  sinh các bề mặt/ vật dụng thường xuyên tiếp xúc (tay nắm cửa,
                  điện thoại, máy tính bảng, mặt bàn, ghế…). Giữ vệ sinh, lau
                  rửa và để nhà cửa thông thoáng. KHOẢNG CÁCH: Giữ khoảng cách
                  khi tiếp xúc với người khác. KHÔNG TỤ TẬP đông người. KHAI BÁO
                  Y TẾ: thực hiện khai báo y tế trên App NCOVI; cài đặt ứng dụng
                  BlueZone tại địa chỉ https://www.bluezone.gov.vnđể được cảnh
                  báo nguy cơ lây nhiễm COVID-19.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Button
            onClick={() => navigation.navigate(QUESTIONSERVEY)}
            containerStyle={styles.btn}
            title={'Bắt đầu khảo sát'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: R.colors.borderGray,
    paddingVertical: 10,
    borderRadius: 5,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    fontWeight: '600',
  },
  wrapTop: {
    paddingHorizontal: 10,
  },
  wrapBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtLink: {
    fontSize: getFontXD(46),
    color: R.colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  txt: {
    fontSize: getFontXD(42),
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default DetailServey;
