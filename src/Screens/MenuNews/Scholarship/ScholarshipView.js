import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFontXD, convertDate, toPriceVnd} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';

const Item = (props) => {
  const {title, image, time, type, money} = props.item;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containImage}>
        <Image style={styles.image} source={R.images.education} />
      </View>
      <View style={styles.containContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.detail, {marginVertical: 5}]}>
          Học bổng doanh nghiệp
        </Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{convertDate(time)}</Text>
          <Text style={styles.detail}>{toPriceVnd(money)}/suất</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ScholarshipView = (props) => {
  const {isRefresh, onRefresh, data} = props;

  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Hoạt động'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        refreshing={isRefresh}
        onRefresh={onRefresh}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: getFontXD(42),
  },
  detail: {
    color: 'gray',
    fontSize: 15,
  },
  image: {
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  containImage: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  subdetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containAll: {
    flex: 1,
  },
  containContent: {
    flex: 1,
    borderBottomWidth: 0.7,
    borderBottomColor: R.colors.borderGray,
    paddingVertical: 10,
    paddingRight: 10,
  },
});
export default ScholarshipView;
