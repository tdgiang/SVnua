import React, {Component, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MessView from './MessView';
import {connect} from 'react-redux';
import {getListNews} from '../../apis/Functions/users';
import {showLoading, hideLoading} from '../../actions/loadingAction';
import {useNavigation} from '@react-navigation/native';
const Mess = (props) => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    props.showLoading();
    const res = await getListNews({id: props.user.id_St});
    props.hideLoading();
    if ((res.data.code = 200 && res.data.data)) {
      setData(res.data.data);
    } else {
      showAlert(TYPE.ERROR, I18n.t('Notification'), 'Không có dữ liệu');
    }
  };

  return <MessView data={data} />;
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {showLoading, hideLoading})(Mess);
