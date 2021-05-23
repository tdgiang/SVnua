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

const Header = (props) => {
  const {title, isBack} = props;
  const navigate = useNavigation();
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.headerHome}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{width: 35, height: 30}}
          onPress={() => navigate.goBack()}>
          <Icon color={'white'} name={'arrowleft'} size={22} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>Tài chính</Text>
        </View>
        <View style={{width: 35, height: 30}}></View>
      </View>
      <View style={styles.wrapContent}>
        <View style={styles.wrapRight}>
          <Text style={{fontSize: getFontXD(46), color: R.colors.color777}}>
            Số tiền trong tài khoản:
          </Text>
          <Text style={{fontSize: getFontXD(46), color: R.colors.main}}>
            {toPriceVnd(69000)} vnđ
          </Text>
        </View>
        <View style={styles.wrapRight}>
          <Text style={{fontSize: getFontXD(46), color: R.colors.color777}}>
            Số tiền còn nợ:
          </Text>
          <Text style={{fontSize: getFontXD(46), color: R.colors.red}}>
            {toPriceVnd(7969000)} vnđ
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.wrapBtn}>
            <Text style={styles.txtBtn}>Nạp tiền vào tài khoản</Text>
          </TouchableOpacity>
        </View>
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
  wrapBtn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: R.colors.main,
    borderRadius: 5,
    marginTop: 5,
  },
  txtBtn: {
    fontSize: getFontXD(46),
    color: R.colors.main,
  },
  img: {
    height: 180,
    width: '100%',
    paddingTop: 30,
  },
  wrapContent: {
    backgroundColor: R.colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  wrapRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerContainer: {
    alignContent: 'center',
    height: 30,
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
});
