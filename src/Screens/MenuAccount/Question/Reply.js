import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';

const Reply = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Câu hỏi thường gặp'} />
      <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
        <Text style={styles.txtTitle}>Hướng dẫn xem thời khoá biểu?</Text>
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
export default Reply;
