import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {REPLY} from '../../../routers/ScreenNames';

const Question = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Câu hỏi thường gặp'} />
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(REPLY)}
          style={styles.container}>
          <Text style={styles.txtTitle}>Hướng dẫn xem thời khoá biểu?</Text>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(REPLY)}
          style={styles.container}>
          <Text style={styles.txtTitle}>Cách xem điểm học tập?</Text>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(REPLY)}
          style={styles.container}>
          <Text style={styles.txtTitle}>Cách đăng ký tín chỉ?</Text>
          <Icon name={'right'} size={getFontXD(42)} color={R.colors.color777} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  container: {
    borderWidth: 0.7,
    borderColor: R.colors.borderGray,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Question;
