import React, {useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD} from '../../../Config/Functions';
import {Slider, Divider} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: '1.Đánh giá về ý thức, thái độ',
    data: [
      '1.Sinh viên có ý thức và thái độ trong học tập',
      '2.Sinh viên có tinh thần vượt khó phấn đấu vươn lên trong học tập',
    ],
  },
  {
    id: '2',
    title: '2.Đánh giá về ý thức, thái độ',
    data: [
      '1.Sinh viên có ý thức và thái độ trong học tập',
      '2.Sinh viên có tinh thần vượt khó phấn đấu vươn lên trong học tập',
    ],
  },
];
const Item = (props) => {
  const {title, data} = props.item;
  const [isDetal, setIsDetal] = useState(false);
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
            <View style={styles.wrapContent}>
              <Text style={styles.txtTitle}>{item}</Text>
              <Slider
                style={styles.slide}
                minimumValue={0}
                maximumValue={4}
                thumbStyle={{
                  height: 20,
                  width: 20,
                  backgroundColor: R.colors.txtMain,
                }}
                step={1}
                onValueChange={(value) => {
                  console.log(value);
                }}
                minimumTrackTintColor={R.colors.main}
                maximumTrackTintColor={R.colors.borderGray}
              />
            </View>
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
      <FlatList data={DATA} renderItem={({item}) => <Item item={item} />} />
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
  },
  containerItem: {
    marginTop: 10,
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
    color: R.colors.color777,
  },
  wrapContent: {
    marginVertical: 10,
  },
});

export default EvaluteUser;
