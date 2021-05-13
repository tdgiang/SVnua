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
import ModalOption from './ModalOption';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';

const HeaderFillter = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    console.log('Click ok');
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <Icon color={'white'} name={'arrowleft'} size={22} />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(isOpen);
            setIsOpen(true);
          }}
          style={{width: 35, height: 30, alignItems: 'flex-end'}}>
          <Icon color={'white'} name={'filter'} size={22} />
        </TouchableOpacity>
      </View>
      <ModalOption onClick={onClick} isOpen={isOpen} closeModal={closeModal} />
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HeaderFillter);

const styles = StyleSheet.create({
  img: {
    height: 95,
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
});
