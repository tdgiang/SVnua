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
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';
const week = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const ListDate = [
  {
    date: '10',
    active: false,
  },
  {
    date: '11',
    active: false,
  },
  {
    date: '12',
    active: false,
  },
  {
    date: '13',
    active: true,
  },
  {
    date: '14',
    active: false,
  },
  {
    date: '15',
    active: false,
  },
  {
    date: '16',
    active: false,
  },
];

const HeaderTable = (props) => {
  const {title} = props;
  const navigate = useNavigation();
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.headerTable}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{width: 35, height: 30}}
          onPress={() => navigate.goBack()}>
          <Icon color={'white'} name={'arrowleft'} size={22} />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>{title}</Text>
        <View style={{height: 30, width: 35}} />
      </View>
      <View style={{flex: 1}}>{props.children}</View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HeaderTable);

const styles = StyleSheet.create({
  img: {
    height: 235,
    width: '100%',
    paddingTop: 30,
  },
  headerContainer: {
    height: 30,
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
  wrapPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  containerIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 5,
    borderRadius: 5,
  },
  txtDate: {
    fontSize: getFontXD(42),
    color: R.colors.white,
    marginLeft: 10,
  },

  wrapDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  txtWeek: {
    fontSize: getFontXD(42),
    color: R.colors.white,
    fontWeight: 'bold',
  },
});
