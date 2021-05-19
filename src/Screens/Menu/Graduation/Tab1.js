import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import R from '../../../assets/R';
import Note from '../../../components/Note';
import {Divider} from 'react-native-elements';
import {getFontXD} from '../../../Config/Functions';
import Button from '../../../components/Button';
const DATA = [
  {
    id: '1',
    name: 'Chứng chỉ quốc phòng',
    counst: '1/1',
  },
  {
    id: '2',
    name: 'Chứng chỉ kỹ năng mềm',
    counst: '1/1',
  },
  {
    id: '3',
    name: 'Bằng tiếng anh B1',
    counst: '1/1',
  },
  {
    id: '4',
    name: 'Chưng chỉ tin học',
    counst: '1/1',
  },
  {
    id: '5',
    name: 'Bảng điểm',
    counst: '1/1',
  },
  {
    id: '7',
    name: 'Thể dục',
    counst: '1/1',
  },
];

const Item = (props) => {
  const {id, name, counst} = props.item;
  return (
    <View key={id} style={styles.container}>
      <View
        style={{
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: 1,
          borderRightColor: R.colors.borderGray,
        }}>
        <Text>{id}</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 5}}>
        <Text style={{fontSize: getFontXD(42), color: R.colors.color777}}>
          Tên học phần
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: getFontXD(42), color: R.colors.main}}>
            {name}
          </Text>
          <Text style={{fontSize: getFontXD(42)}}>{counst}</Text>
        </View>
      </View>
    </View>
  );
};

const Tab1 = (props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Note
            style={{marginHorizontal: 10, marginTop: 10}}
            content={
              '- Sinh viên hoàn thành đầy đủ các giấy tờ mới có thể xét tốt nghiệp.\n- Địa chỉ tiếp nhận giấy tờ phòng hành chính bản quản lý đào tạo.'
            }
          />
          {DATA.map((item) => (
            <Item item={item} />
          ))}
        </View>
      </ScrollView>
      <Button
        containerStyle={{
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title={'Xét tốt nghiệp'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: R.colors.white,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    flexDirection: 'row',
  },
});

export default Tab1;
