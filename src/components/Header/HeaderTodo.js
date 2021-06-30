import React, {useEffect, useState} from 'react';
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
import {getFontXD, HEIGHT, toPriceVnd, WIDTHXD} from '../../Config/Functions';
import {Avatar, getIconType} from 'react-native-elements';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const APIweather =
  'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&fbclid=IwAR3PKoKgJSOZYFU-khGQGcbZU2XfGp3yVHE47UDe9pOAmprM8R7p0nXgTss';
// import SnackBar from '../SnackBar';
// import AppText from '../AppText';
import {NOTIFICATION, PROFILE} from '../../routers/ScreenNames';
import Modal from 'react-native-modal';
import Drawer from './Drawer';
import {localeData} from 'moment';
import {get} from 'lodash';

const Header = (props) => {
  const {title, isBack} = props;
  const {name, id_St, department} = props.user;
  const navigate = useNavigation();
  //const [city, setCity] = useState('');
  //const [icon, setIcon] = useState();
  const [icon, setIcon] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getIconWeather = (type) => {
    switch (type) {
      case '01d':
        setIcon(R.images.day), setWeather('Trời nắng');
        break;
      case '01n':
        setIcon(R.images.night), setWeather('Buổi tối');
        break;

      case '03d':
        setIcon(R.images.cloud), setWeather('Nhiều mây');
        break;
      case '03n':
        setIcon(R.images.cloud), setWeather('Nhiều mây');
        break;

      case '09d':
        setIcon(R.images.rain), setWeather('Trời mưa');
        break;
      case '09n':
        setIcon(R.images.rain), setWeather('Trời mưa');
        break;
      case '10d':
        setIcon(R.images.rain), setWeather('Trời mưa');
        break;
      case '10n':
        setIcon(R.images.rain), setWeather('Trời mưa');
        break;
      case '11d':
        setIcon(R.images.thunderstorm), setWeather('Sấm chớp');
        break;
      case '11n':
        setIcon(R.images.thunderstorm), setWeather('Sấm chớp');
        break;
      default:
        setIcon(R.images.cool), setWeather('Trời mát');
    }
  };

  const getWeek = () => {
    let d = new Date();
    let start = new Date(2021, 2, 15);
    let numberOfDays = Math.floor((d - start) / (24 * 60 * 60 * 1000));
    return Math.round((d.getDay() + 1 + numberOfDays) / 7);
  };

  const getTime = () => {
    let week = getWeek();
    let d = new Date();
    let stringday = d + '';
    let month = d.getUTCMonth() + 1;
    let days = [
      'Chủ Nhật',
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',
    ];
    let time = [month, days[d.getDay()], stringday.slice(8, 10), week];
    return time;
  };
  useEffect(() => {
    async function callAPIWeather() {
      let result = await fetch(APIweather);
      let resultJSON = await result.json();
      getIconWeather(resultJSON.weather[0].icon);
      console.log(resultJSON.weather[0].icon);
      setTemp(resultJSON.main.temp);
    }
    callAPIWeather();
  }, []);
  return (
    <View>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.img}
        source={R.images.headerHome}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{width: 35, height: 30}}
            onPress={toggleModal}>
            <Icon color={'white'} name={'menu-fold'} size={22} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt}>Xin chào, </Text>
            <Text style={styles.txtBig}>{name}</Text>
          </View>
          <TouchableOpacity
            style={{width: 35, height: 30}}
            onPress={() => navigate.navigate(NOTIFICATION)}>
            <Ionicons
              color={'white'}
              name={'notifications-outline'}
              size={22}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={styles.row}>
            <Text style={styles.txtDate}>
              {getTime()[2]} tháng {getTime()[0]}
            </Text>
            <Image style={styles.icon} source={icon} />
          </View>
          <View style={styles.row}>
            <Text style={styles.txtWeek}>
              {getTime()[1]} tuần {getTime()[3]}
            </Text>
            <Text style={styles.txtWeek}>
              {weather} {temp}°C
            </Text>
          </View>
        </View>
      </ImageBackground>

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
          <View style={styles.containerModal}>
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
    </View>
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
    paddingTop: 10,
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
  containerModal: {
    backgroundColor: 'white',
    height: '100%',
    width: 280,
    borderRadius: 20,
  },
  txtDate: {
    fontSize: getFontXD(72),
    color: R.colors.white,
    fontWeight: '600',
  },
  txtWeek: {
    fontSize: getFontXD(46),
    color: R.colors.white,
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
