import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {Divider} from 'react-native-elements';
import {getFontXD, toPriceVnd, convertDate} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import PickerAvatart from '../../../components/Picker/PickerAvatart';
import {connect} from 'react-redux';

const Profile = (props) => {
  const [general, setGeneral] = useState(true);
  const [bank, setBank] = useState(false);
  const [insurrance, setInsurrance] = useState(false);

  const {
    id_St,
    name,
    department,
    cmnd,
    placeCmnd,
    placeOfBirth,
    email,
    address,
    phone,
    dateOfBirth,
    sex,
    dateCmnd,
  } = props.user;

  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thông tin cá nhân'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containter}>
        <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PickerAvatart />
          <Text style={styles.txtBig}>{name}</Text>
        </View>
        <View style={styles.wrapTop}>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={styles.txtTitle}>Mã sinh viên:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtBold}>{id_St}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={styles.txtTitle}>Lớp:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtBold}>{props.user.class.acronym}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={styles.txtTitle}>Khoa:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtBold}>{department.name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={styles.txtTitle}>Số dự tài khoản</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtBold}>{toPriceVnd(10000)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.wrapBody}>
          <View style={styles.contaierItem}>
            <TouchableOpacity onPress={() => setGeneral(!general)}>
              <View style={styles.rowPadding}>
                <Text style={styles.txtBtn}>Thông tin chung</Text>

                <Icon
                  name={general ? 'angle-up' : 'angle-down'}
                  size={18}
                  color={R.colors.color777}
                />
              </View>
            </TouchableOpacity>
            <Divider />
            {general ? (
              <View>
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Ngày sinh</Text>
                  <Text style={styles.txtTitle}>
                    {convertDate(dateOfBirth)}
                  </Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Giới tính</Text>
                  <Text style={styles.txtTitle}>{sex == 1 ? 'Nam' : 'Nữ'}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Nơi sinh</Text>
                  <Text style={styles.txtTitle}>{placeOfBirth}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Số CMND/CCCD</Text>
                  <Text style={styles.txtTitle}>{cmnd}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Ngày cấp</Text>
                  <Text style={styles.txtTitle}>{convertDate(dateCmnd)}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Nơi cấp</Text>
                  <Text style={styles.txtTitle}>{placeCmnd}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Số điện thoại</Text>
                  <Text style={styles.txtTitle}>{phone}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Email</Text>
                  <Text style={styles.txtTitle}>{email}</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={[styles.txtTitle, {marginRight: 10}]}>
                    Địa chỉ
                  </Text>
                  <Text numberOfLines={1} style={styles.txtTitle}>
                    {address}
                  </Text>
                </View>
                <Divider />
              </View>
            ) : null}
          </View>

          <View style={styles.contaierItem}>
            <TouchableOpacity onPress={() => setBank(!bank)}>
              <View style={styles.rowPadding}>
                <Text style={styles.txtBtn}>Ngân hàng</Text>

                <Icon
                  name={bank ? 'angle-up' : 'angle-down'}
                  size={18}
                  color={R.colors.color777}
                />
              </View>
            </TouchableOpacity>
            <Divider />
            {bank ? (
              <View>
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Tên ngân hàng</Text>
                  <Text style={styles.txtTitle}>Viettinbank</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Chủ ngân hàng</Text>
                  <Text style={styles.txtTitle}>TRAN DUC GIANG</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Số tài khoản ngân hàng</Text>
                  <Text style={styles.txtTitle}>0987654321</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Chi nhánh ngân hàng</Text>
                  <Text style={styles.txtTitle}>Hà Nội</Text>
                </View>
              </View>
            ) : null}
          </View>

          <View style={styles.contaierItem}>
            <TouchableOpacity onPress={() => setInsurrance(!insurrance)}>
              <View style={styles.rowPadding}>
                <Text style={styles.txtBtn}>Bảo hiểm</Text>

                <Icon
                  name={insurrance ? 'angle-up' : 'angle-down'}
                  size={18}
                  color={R.colors.color777}
                />
              </View>
            </TouchableOpacity>
            <Divider />
            {insurrance ? (
              <View>
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Số bảo hiểm ý tế</Text>
                  <Text style={styles.txtTitle}>123456</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>Hiệu lực bảo hiểm y tế</Text>
                  <Text style={styles.txtTitle}>2017-2022</Text>
                </View>
                <Divider />
                <View style={styles.rowPadding}>
                  <Text style={styles.txtTitle}>
                    Nơi khám chữa bênh ban đầu
                  </Text>
                  <Text style={styles.txtTitle}>Bệnh viên đa khoa Gia Lâm</Text>
                </View>
                <Divider />
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  wrapTop: {
    paddingHorizontal: 10,
  },
  imgAvatart: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: R.colors.main,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowPadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  txtBig: {
    fontSize: getFontXD(52),
    fontWeight: '600',
    marginTop: 5,
    color: R.colors.main,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  txtBold: {
    fontSize: getFontXD(42),
    fontWeight: '500',
  },
  wrapBody: {
    flex: 1,
    marginTop: 10,
  },
  contaierItem: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: R.colors.white,
    marginBottom: 10,
  },
  txtBtn: {
    fontSize: getFontXD(46),
    color: R.colors.main,
  },
  containerBtn: {
    width: 40,
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(Profile);
