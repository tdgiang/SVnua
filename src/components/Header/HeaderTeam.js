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
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';

const Header = (props) => {
  const {title, isBack} = props;
  const navigate = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

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
        <TouchableOpacity
          style={{width: 35, height: 30, alignItems: 'flex-end'}}
          onPress={() => setIsVisible(true)}>
          <Entypo color={'white'} name={'dots-three-vertical'} size={22} />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isVisible} style={{margin: 0}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
              <View style={{flex: 1}} />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.containerModal}>
            <TouchableOpacity>
              <View style={styles.itemRow}>
                <Icon name={'pluscircleo'} color={R.colors.main} size={22} />
                <Text style={styles.txtFooter}>Tạo nhóm</Text>
              </View>
            </TouchableOpacity>

            <View style={{height: 1, backgroundColor: R.colors.borderGray}} />
            <TouchableOpacity>
              <View style={styles.itemRow}>
                <Icon name={'search1'} color={R.colors.main} size={22} />
                <Text style={styles.txtFooter}>Tìm duyệt nhóm</Text>
              </View>
            </TouchableOpacity>
            <View style={{height: 1, backgroundColor: R.colors.borderGray}} />
            <TouchableOpacity>
              <View style={styles.itemRow}>
                <Icon name={'setting'} color={R.colors.main} size={22} />
                <Text style={styles.txtFooter}>Quản lý nhóm</Text>
              </View>
            </TouchableOpacity>
            <View style={{height: 1, backgroundColor: R.colors.borderGray}} />
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <View style={styles.itemRow}>
                <Icon name={'closecircleo'} color={R.colors.main} size={22} />
                <Text style={styles.txtFooter}>Đóng</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  containerModal: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  txtFooter: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    marginLeft: 10,
    fontWeight: '600',
  },
});
