import React, {Component, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button';
import {changePassword} from '../../../apis/Functions/users';
import {checkFormatArray} from '../../../Config/Functions';
import I18n from '../../../helper/i18/i18n';
import TextField from '../../../components/Input/TextField';
import {showAlert, TYPE} from '../../../components/DropdownAlert';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {showLoading, hideLoading} from '../../../actions/loadingAction';

const ChangePassword = (props) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [old_Password, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const onSubmit = async () => {
    const titles = [
      ' mật khẩu hiện tại',
      ' mật khẩu mới',
      ' xác nhận mật khẩu mới!',
    ];
    const index = checkFormatArray([password, newPassword, old_Password]);
    if (index === true) {
      if (newPassword == old_Password) {
        props.showLoading();
        const res = await changePassword({
          id_St: props.user.id_St,
          newPassword,
          old_Password,
        });
        props.hideLoading();
        if (res.data.code == 200 && res.data.data) {
          showAlert(TYPE.SUCCESS, I18n.t('Notification'), res.data.message);
          navigation.goBack();
        } else {
          showAlert(TYPE.ERROR, I18n.t('Notification'), res.data.message);
        }
      } else {
        showAlert(
          TYPE.WARN,
          I18n.t('Notification'),
          'Mật khẩu mới và xác nhận mật khẩu không trùng nhau!',
        );
      }
    } else {
      showAlert(
        TYPE.WARN,
        I18n.t('Notification'),
        I18n.t('Please_fill_in') + titles[index],
      );
    }
  };

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
          <TextField
            isPassword={true}
            onChangeText={(val) => setPassword(val)}
            title={'Mật khẩu hiện tại:'}
          />
          <TextField
            isPassword={true}
            onChangeText={(val) => setNewPassword(val)}
            title={'Mật khẩu mới:'}
          />
          <TextField
            isPassword={true}
            onChangeText={(val) => setConfirmPassword(val)}
            title={'Xác nhận mật khẩu mới:'}
          />
        </View>
      </View>
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <Button
          onClick={() => onSubmit()}
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

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {showLoading, hideLoading})(
  ChangePassword,
);
