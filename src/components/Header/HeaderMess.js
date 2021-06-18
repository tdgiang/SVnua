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
  TouchableWithoutFeedback,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT, WIDTHXD} from '../../Config/Functions';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Drawer from './Drawer';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';
import {NOTIFICATION, PROFILE, SEARCHPEOPLE} from '../../routers/ScreenNames';

const Header = (props) => {
  const {title} = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigation();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.header}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{width: 35, height: 30}} onPress={toggleModal}>
          <Icon color={'white'} name={'menu-fold'} size={22} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.txtTitle}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={() => navigate.navigate(SEARCHPEOPLE)}
          style={{height: 30}}>
          <Icon name={'search1'} size={22} color={R.colors.white} />
        </TouchableOpacity>
      </View>
      <Modal
        animationIn={'fadeInLeft'}
        animationOut={'fadeOutLeft'}
        style={{marginLeft: 20}}
        isVisible={isModalVisible}
        backdropOpacity={0.5}>
        <View
          style={[
            {flex: 1, flexDirection: 'row'},
            Platform.OS == 'ios' ? {paddingVertical: 15} : {},
          ]}>
          <View style={styles.container}>
            <Drawer toggleModal={toggleModal} />
          </View>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View
              style={{
                flex: 1,
              }}></View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
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
    height: 35,
    paddingTop: 10,
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
    height: '100%',
    width: 280,
    borderRadius: 20,
  },
});
