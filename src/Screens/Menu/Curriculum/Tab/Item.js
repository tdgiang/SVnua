import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFontXD} from '../../../../Config/Functions';
import R from '../../../../assets/R';
import Icon from 'react-native-vector-icons/AntDesign';

const Item = (props) => {
  const {date, subject, semester, idSubject, count, active} = props.item;
  return (
    <TouchableOpacity style={styles.containerItem}>
      {active ? (
        <View style={{position: 'absolute', right: 0}}>
          <View style={styles.containerActive}></View>
        </View>
      ) : null}
      {active ? (
        <View style={{position: 'absolute', right: 2, top: 5}}>
          <Icon name={'check'} size={16} color={'white'} />
        </View>
      ) : null}

      <Text style={styles.title}>{subject}</Text>
      <View style={styles.subdetail}>
        <Text style={styles.detail}>Mã học phần:</Text>
        <Text style={styles.txt}>{idSubject}</Text>
      </View>
      <View style={styles.subdetail}>
        <Text style={styles.detail}>Số tín chỉ:</Text>
        <Text style={styles.txt}>{count}</Text>
      </View>
      <View style={styles.subdetail}>
        <Text style={styles.detail}>Học kỳ:</Text>
        <Text style={styles.txt}>{semester}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  title: {
    color: R.colors.black,
    fontSize: getFontXD(42),
    fontWeight: '600',
  },
  detail: {
    color: R.colors.color777,
    fontSize: getFontXD(36),
  },
  image: {
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  subdetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
  },
  containAll: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
  },
  containTime: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  strike: {
    width: 1,
    backgroundColor: R.colors.borderGray,
  },
  containerActive: {
    borderTopWidth: 0,
    borderRightWidth: 35,
    borderBottomWidth: 35,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: R.colors.main,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopRightRadius: 5,
  },
});
export default Item;
