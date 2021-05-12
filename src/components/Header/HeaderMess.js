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

const HeaderMess = (props) => {
  const {title} = props;
  const navigate = useNavigation();
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.header}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{width: 35, height: 30}}
          onPress={() => navigate.goBack()}>
          <Icon color={'white'} name={'left'} size={22} />
        </TouchableOpacity>

        <Text style={styles.txtTitle}>{title}</Text>
        <TouchableOpacity style={{height: 30}}>
          <Icon name={'phone'} size={22} color={R.colors.white} />
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

export default connect(mapStateToProps, {})(HeaderMess);

const styles = StyleSheet.create({
  img: {
    height: 95,
    width: '100%',
    paddingTop: 30,
  },
  headerContainer: {
    paddingTop: 10,
    height: 40,
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
