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

const HeaderTable = (props) => {
  const {title, DATA, activeIndex, decreaseWeek, increaseWeek} = props;
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
      <View style={{flex: 1, paddingVertical: 10}}>
        <View style={styles.wrapPicker}>
          <TouchableOpacity onPress={decreaseWeek} style={styles.containerIcon}>
            <Icon name={'left'} size={20} color={R.colors.white} />
          </TouchableOpacity>

          <View style={styles.wrapRow}>
            <Icon name={'calendar'} color={R.colors.white} size={20} />
            <Text style={styles.txtDate}>08/2021</Text>
          </View>
          <TouchableOpacity onPress={increaseWeek} style={styles.containerIcon}>
            <Icon name={'right'} size={20} color={R.colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapDate}>
          {week.map((e) => (
            <View
              style={{
                borderRadius: 20,
                padding: 5,
              }}>
              <Text key={e} style={styles.txtWeek}>
                {e}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.wrapDate}>
          {DATA.map((e, index) => (
            <View
              style={[
                {
                  borderRadius: 20,
                  padding: 5,
                },
                index == activeIndex ? {backgroundColor: R.colors.orange} : {},
              ]}>
              <Text key={e.date} style={styles.txtWeek}>
                {e.date.slice(0, 2)}
              </Text>
            </View>
          ))}
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

export default connect(mapStateToProps, {})(HeaderTable);

const styles = StyleSheet.create({
  img: {
    height: 235,
    width: '100%',
    paddingTop: 30,
  },
  headerContainer: {
    paddingTop: 10,
    height: 50,
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
