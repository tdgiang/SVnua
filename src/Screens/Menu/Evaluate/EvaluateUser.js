import React, {useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD, WIDTHXD} from '../../../Config/Functions';
import {Slider, Divider} from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
import DATA from './DATA';
import Button from '../../../components/Button';

const RowItem = (props) => {
  const {item} = props;
  return (
    <View style={styles.wrapContent}>
      <Text style={styles.txtTitle}>{item.title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <RadioForm
          style={{justifyContent: 'space-between', flex: 1}}
          radio_props={item.list}
          buttonColor={R.colors.main}
          buttonInnerColor={R.colors.main}
          buttonSize={12}
          onPress={(value) => console.log(value)}
        />
      </View>
    </View>
  );
};

const Item = (props) => {
  const {title, data} = props.item;
  const [isDetal, setIsDetal] = useState(true);

  return (
    <View style={styles.containerItem}>
      <View style={styles.rowHeader}>
        <Text style={styles.txtHeader}>{title}</Text>
        <TouchableOpacity onPress={() => setIsDetal(!isDetal)}>
          <Icon
            name={isDetal ? 'up' : 'down'}
            size={18}
            color={R.colors.color777}
          />
        </TouchableOpacity>
      </View>
      {isDetal ? (
        <View style={{marginTop: 10}}>
          <Divider />
          {data.map((item) => (
            <RowItem item={item} />
          ))}
        </View>
      ) : null}
    </View>
  );
};

const EvaluteUser = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Tự đánh giá'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item) => (
          <Item item={item} />
        ))}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Button
            containerStyle={{
              width: 200,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            title={'Gửi đánh giá'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: R.colors.main,
    fontSize: getFontXD(52),
    padding: 5,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  score: {
    padding: 5,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: getFontXD(52),
    borderWidth: 2,
    borderColor: 'gray',
  },
  slide: {
    marginHorizontal: 10,
    flex: 1,
  },
  containerItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: R.colors.borderGray,
    borderRadius: 5,
    padding: 10,
    backgroundColor: R.colors.white,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtHeader: {
    fontSize: getFontXD(42),
    color: R.colors.main,
    fontWeight: '600',
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
  },
  wrapContent: {
    marginVertical: 10,
  },
});

export default EvaluteUser;
