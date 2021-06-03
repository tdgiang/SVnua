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
  TextInput,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT, WIDTHXD} from '../../Config/Functions';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';

const HeaderSearch = (props) => {
  const {title, isBack, onChangeText} = props;
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

        <View style={styles.wrap}>
          <TextInput
            onChangeText={(val) => onChangeText(val)}
            autoFocus={true}
            style={styles.wrapInput}
          />
          <Icon size={20} color={'white'} name={'search1'} />
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

export default connect(mapStateToProps, {})(HeaderSearch);

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: '100%',
    paddingTop: 30,
  },
  headerContainer: {
    height: 40,
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
  wrap: {
    flex: 1,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: R.colors.white,
    marginBottom: 10,
  },
  wrapInput: {
    flex: 1,
    height: 25,
    color: R.colors.white,
    fontSize: getFontXD(42),
  },
});
