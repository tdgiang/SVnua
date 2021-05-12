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
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
const DATA = [
  {
    id: '1',
    image: R.images.education,
    time: '22/05/2021',
    title: 'Chương trình học bổng- 2021',
    type: 'Học bổng doanh nghiệp',
    price: '600 USD/suất',
  },
  {
    id: '2',
    image: R.images.education,
    time: '22/05/2021',
    title: 'Chương trình học bổng- 2021',
    type: 'Học bổng doanh nghiệp',
    price: '600 USD/suất',
  },
];

const Item = (props) => {
  const {title, image, time, type, price} = props.item;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containImage}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.containContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.detail, {marginVertical: 5}]}>{type}</Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>{time}</Text>
          <Text style={styles.detail}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ScholarshipView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Hoạt động'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
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
