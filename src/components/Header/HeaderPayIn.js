import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT, toPriceVnd, WIDTHXD} from '../../Config/Functions';
import {Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';
import {NOTIFICATION} from '../../routers/ScreenNames';

import StepIndicator from 'react-native-step-indicator';
const PAGES = ['Page 1', 'Page 2', 'Page 3'];
import Swiper from 'react-native-swiper';

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 5,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: getFontXD(42),
  currentStepLabelColor: '#fe7013',
};
const renderLabel = ({position, label, currentPosition}) => {
  return (
    <Text
      style={
        position <= currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }>
      {label}
    </Text>
  );
};

const Header = (props) => {
  const {title, isBack, step} = props;
  const [currentPage, setCurrentPage] = useState(step);
  const onStepPress = (position) => {
    setCurrentPage(position);
  };
  const navigate = useNavigation();
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.headerHome}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            width: 35,
            height: 50,
          }}
          onPress={() => navigate.goBack()}>
          <Icon color={'white'} name={'arrowleft'} size={22} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>Nạp tiền vào tài khoản</Text>
        </View>
        <View style={{width: 35, height: 30}}></View>
      </View>

      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={secondIndicatorStyles}
          currentPosition={currentPage}
          labels={[
            'Chọn phương thức thanh toán',
            'Xác nhận thanh toán',
            'Thành công',
          ]}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(Header);

const styles = StyleSheet.create({
  img: {
    height: 180,
    paddingTop: 30,
    width: '100%',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    alignContent: 'center',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  txtBig: {
    fontSize: getFontXD(52),
    color: R.colors.white,
    fontWeight: 'bold',
  },
  txt: {
    fontSize: getFontXD(52),
    color: R.colors.white,
  },
  txtTile: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  txtContent: {
    fontSize: getFontXD(42),
    color: R.colors.main,
  },
  stepIndicator: {
    marginVertical: 10,
    marginTop: -10,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: getFontXD(36),
    textAlign: 'center',
    fontWeight: '500',
    color: '#FFF',
  },
  stepLabelSelected: {
    fontSize: getFontXD(42),
    textAlign: 'center',
    fontWeight: '600',
    color: '#fe7013',
  },
});
