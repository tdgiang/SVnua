import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import R from '../../../assets/R';
import {getFontXD, HEIGHTXD} from '../../../Config/Functions';
import {DATA} from './DataFake';
import {Tooltip, Divider} from 'react-native-elements';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';

const WritePost = (props) => {
  const {onClose} = props;
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{width: 30, height: 30}} />
        <Text style={styles.txtHead}>Tạo bài viết</Text>
        <TouchableOpacity onPress={onClose}>
          <Icon size={20} name={'close'} color={R.colors.color777} />
        </TouchableOpacity>
      </View>

      <Divider />
      <View style={styles.body}>
        <TextInput
          onChangeText={(val) => setText(val)}
          placeholder={'Nhập nội dung của bài viết'}
          multiline={true}
          value={text}
          textAlignVertical={'top'}
          style={styles.txtInput}
        />

        <View style={styles.wrapPlus}>
          <Text style={styles.txtTitle}>Thêm vào bài viết</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={R.images.gallery} style={styles.imgIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={R.images.folder} style={styles.imgIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button onClick={onClose} containerStyle={styles.btn} title={'Đăng'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: R.colors.white,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  seeMore: {
    marginTop: 5,
    fontSize: getFontXD(42),
    color: R.colors.lightBlue1,
    marginLeft: 10,
  },
  txtHead: {
    fontSize: getFontXD(52),
    color: R.colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  btn: {
    marginHorizontal: 10,
    height: HEIGHTXD(109),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  txtInput: {
    height: HEIGHTXD(300),
    paddingHorizontal: 10,
    fontSize: getFontXD(42),
    color: R.colors.black,
    marginBottom: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  wrapPlus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: HEIGHTXD(109),
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.6,
    borderColor: R.colors.color777,
    alignItems: 'center',
    marginVertical: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
  },
  imgIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
});

export default WritePost;
