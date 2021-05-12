import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {DETAILSERVEY} from '../../../routers/ScreenNames';

const ServeyView = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Khảo sát'} />
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.wrapTop}>
              <Text style={styles.txtTitle}>Danh sách khảo sát</Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: R.colors.borderGray,
                marginTop: 10,
              }}
            />
            <View style={styles.wrapBody}>
              <TouchableOpacity
                onPress={() => navigation.navigate(DETAILSERVEY)}>
                <Text style={styles.txtLink}>
                  Phiếu khảo sát thông tin phục vụ công tác phòng trống dịch
                  bệnh COVID 19
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    fontSize: getFontXD(52),
    color: R.colors.lightBlue1,
    textDecorationLine: 'underline',
  },
});

export default ServeyView;
