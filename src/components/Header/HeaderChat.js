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
import {getFontXD, HEIGHT, WIDTHXD} from '../../Config/Functions';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';

const Header = (props) => {
  const {title, isBack} = props;
  const navigate = useNavigation();
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.header}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        {isBack ? (
          <TouchableOpacity
            style={{width: 35, height: 30}}
            onPress={() => navigate.goBack()}>
            <Icon color={'white'} name={'arrowleft'} size={22} />
          </TouchableOpacity>
        ) : (
          <View style={{width: 35, height: 30}} />
        )}

        <Text numberOfLines={1} style={styles.txtTitle}>
          {title}
        </Text>
        <TouchableOpacity style={{width: 35, height: 30, paddingTop: 5}}>
          <SimpleLineIcons color={'white'} name={'call-out'} size={22} />
        </TouchableOpacity>
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
    height: 70,
    width: '100%',
    paddingTop: 30,
  },
  headerContainer: {
    height: 30,
    paddingTop: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  txtTitle: {
    fontSize: getFontXD(52),
    color: R.colors.white,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: 300,
    borderRadius: 20,
  },
});
