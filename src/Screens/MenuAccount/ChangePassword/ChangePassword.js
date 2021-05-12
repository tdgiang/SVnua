import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button';

import TextField from '../../../components/Input/TextField';

const ChangePassword = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Đổi mật khẩu'} />
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', marginVertical: 50}}>
          <Image
            style={{width: 140, height: 140}}
            source={R.images.changPass}
          />
        </View>
        <View style={{flex: 1}}>
          <TextField title={'Mật khẩu hiện tại:'} />
          <TextField title={'Mật khẩu mới:'} />
          <TextField title={'Xác nhận mật khẩu mới:'} />
        </View>
      </View>
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <Button
          containerStyle={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 5,
          }}
          title={'Đổi mật khẩu'}
        />
      </View>
    </View>
  );
};
export default ChangePassword;
