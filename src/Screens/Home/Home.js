import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import R from '../../assets/R';
import HomeView from './HomeView';
import {showAlert, TYPE} from '../../components/DropdownAlert/index';
import {confirmAlert} from '../../components/Aleart';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {toDoServey} from '../../actions/users';

import {
  TIMETABLE,
  RESULTGRADE,
  EXAMCALENDAR,
  FINACE,
  REGISTERSUBJECT,
  SERVEY,
  EVALUATE,
  CURRICULUM,
  GRADUATION,
} from '../../routers/ScreenNames';

const listItem = [
  {
    id: '1',
    title: 'Thời khoá biểu',
    screen: TIMETABLE,
    icon: R.images.schedule,
  },
  {
    id: '2',
    title: 'Kết quả học tập',
    screen: RESULTGRADE,
    icon: R.images.grade,
  },
  {
    id: '5',
    title: 'Đăng ký tín chỉ',
    screen: REGISTERSUBJECT,
    icon: R.images.addEvent,
  },
  {
    id: '3',
    title: 'Lịch thi',
    screen: EXAMCALENDAR,
    icon: R.images.exam,
  },
  {
    id: '4',
    title: 'Tài chính',
    screen: FINACE,
    icon: R.images.receipt,
  },

  {
    id: '6',
    title: 'Đánh giá',
    screen: EVALUATE,
    icon: R.images.notes,
  },
  {
    id: '8',
    title: 'Khảo sát',
    screen: SERVEY,
    icon: R.images.satisfaction,
  },
  {
    id: '7',
    title: 'Chương trình đào tạo',
    screen: CURRICULUM,
    icon: R.images.company,
  },

  {
    id: '9',
    title: 'Tốt nghiệp',
    screen: GRADUATION,
    icon: R.images.mortarboard,
  },
];

const Home = (props) => {
  const navigate = useNavigation();

  useEffect(() => {
    if (!props.user.servey)
      confirmAlert(
        'Có một cuộc khảo sát cần lấy ý kiến từ bạn.Tiền hành khảo sát!',
        () => {
          navigate.navigate(SERVEY);
          toDoServey();
        },
      );
  });

  return <HomeView listItem={listItem} />;
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {toDoServey})(Home);
