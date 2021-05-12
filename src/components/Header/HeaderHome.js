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
import Icon from 'react-native-vector-icons/Ionicons';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';
import {NOTIFICATION, PROFILE} from '../../routers/ScreenNames';

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
        <View style={{width: 35, height: 30}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>Xin chào,</Text>
          <Text style={styles.txtBig}>Trần Đức Giang</Text>
        </View>
        <TouchableOpacity
          style={{width: 35, height: 30}}
          onPress={() => navigate.navigate(NOTIFICATION)}>
          <Icon color={'white'} name={'notifications-outline'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20, marginTop: 5}}>
        <View style={styles.wrapContent}>
          <View style={styles.container}>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => navigate.navigate(PROFILE)}>
                <Image
                  rounded
                  style={styles.imgAvatar}
                  source={R.images.avatar}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.wrapRight}>
              <View style={{flex: 2}}>
                <Text style={styles.txtTile}>Mã SV:</Text>
                <Text style={styles.txtTile}>Lớp:</Text>
                <Text style={styles.txtTile}>Khoa:</Text>
                <Text style={styles.txtTile}>Số dư TK:</Text>
              </View>
              <View style={{flex: 4}}>
                <Text style={styles.txtContent}>621070</Text>
                <Text style={styles.txtContent}>K62CNPM</Text>
                <Text style={styles.txtContent}>Công nghệ thông tin</Text>
                <Text style={styles.txtContent}>{toPriceVnd(10000)}</Text>
              </View>
            </View>
          </View>
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
  img: {
    height: 180,
    width: '100%',
    paddingTop: 30,
  },
  wrapContent: {
    width: '100%',
    marginTop: 0,
    height: 120,
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
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  wrapRight: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 10,
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
  imgAvatar: {
    width: WIDTHXD(200),
    height: WIDTHXD(200),
    borderRadius: WIDTHXD(190),
    borderColor: R.colors.main,
    borderWidth: 1,
  },
});
