import React, {Component, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import {checkFormatArray, getFontXD, HEIGHTXD} from '../../Config/Functions';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {TABBAR} from '../../routers/ScreenNames';
import {CONFIRMEMAIL} from '../../routers/ScreenNames';
import I18n from '../../helper/i18/i18n';
import {showAlert, TYPE} from '../../components/DropdownAlert';
import {loginApi} from '../../apis/Functions/users';
import {showLoading, hideLoading} from '../../actions/loadingAction';
import {saveUserToRedux} from '../../actions/users';
import {connect} from 'react-redux';
const Login = (props) => {
  const navigation = useNavigation();
  const [id_St, setIDSt] = useState();
  const [password, setPassword] = useState();

  const onClickLogin = async () => {
    const titles = ['mã sinh viên', 'mật khẩu'];
    const index = checkFormatArray([id_St, password]);

    if (index === true) {
      props.showLoading();
      const res = await loginApi({
        id_St,
        password,
      });
      props.hideLoading();
      console.log(res.data);
      if (res.data.code == 200 && res.data.data) {
        props.saveUserToRedux(res.data.data);
        navigation.reset({
          index: 1,
          routes: [{name: TABBAR}],
        });
      } else {
        showAlert(TYPE.ERROR, 'Thông báo!', res.data.message);
      }
    } else {
      showAlert(TYPE.WARN, 'Thông báo!', 'Vui lòng nhập ' + titles[index]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={-50}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={R.images.bgLogin}
          resizeMode={'stretch'}
          style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <View style={{flex: 1}}>
            <View
              style={{
                marginTop: 60,
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={R.images.logo} style={styles.imgLogo} />
              <View style={styles.container}>
                <View style={styles.wrapInput}>
                  <Icon name={'infocirlceo'} size={18} color={R.colors.white} />
                  <TextInput
                    onChangeText={(val) => setIDSt(val)}
                    style={styles.txtInput}
                    placeholder="Nhập mã sinh viên"
                    placeholderTextColor={R.colors.white}
                    keyboardType={'number-pad'}
                  />
                </View>

                <View style={styles.wrapInput}>
                  <Icon name={'lock1'} size={18} color={R.colors.white} />
                  <TextInput
                    onChangeText={(val) => setPassword(val)}
                    style={styles.txtInput}
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor={R.colors.white}
                    secureTextEntry={true}
                  />
                </View>

                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    width: '100%',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(CONFIRMEMAIL)}>
                    <Text
                      style={{
                        fontSize: getFontXD(42),
                        color: R.colors.txtMain,
                      }}>
                      Quên mật khẩu?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{height: 50}} />

                <Button
                  title={'Đăng nhập'}
                  onClick={onClickLogin}
                  containerStyle={{
                    borderRadius: 20,

                    height: 45,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  imgLogo: {
    width: HEIGHTXD(450),
    height: HEIGHTXD(450),
  },
  container: {
    width: '100%',
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  txtInput: {
    paddingHorizontal: 10,
    color: R.colors.white,
    flex: 1,
    height: 45,
  },
  wrapInput: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(256, 256, 256, 0.3)',
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {
  saveUserToRedux,
  showLoading,
  hideLoading,
})(Login);
