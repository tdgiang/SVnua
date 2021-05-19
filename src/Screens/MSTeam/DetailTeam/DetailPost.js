import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import R from '../../../assets/R';
import {getFontXD, HEIGHTXD} from '../../../Config/Functions';
import {DATA} from './DataFake';
import {Tooltip, Divider} from 'react-native-elements';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/Header/Header';
import ItemComment from './ItemComment';

const Item = (props) => {
  const {time, poster, content, feedback} = props.item;
  const [like, setLike] = useState(feedback.like);
  const [heart, setHeart] = useState(feedback.heart);
  const [sad, setSad] = useState(feedback.sad);

  const onClickLike = () => setLike(feedback.like + 1);
  const onClickHeart = () => setHeart(feedback.heart + 1);
  const onClickSad = () => setSad(feedback.sad + 1);

  return (
    <View style={styles.containerItem}>
      <View style={styles.header}>
        <Image source={poster.avatart} style={styles.imgAvatart} />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.txtName}>{poster.name}</Text>
          <Text style={styles.txtTime}>{time}</Text>
        </View>
      </View>
      <View style={styles.wrapContent}>
        <Text>{content.text}</Text>
      </View>
      {content.image ? (
        <Image source={content.image} style={styles.imgContent} />
      ) : null}

      {content.file ? (
        <View style={styles.wrapFile}>
          <Image source={content.file.icon} style={{width: 35, height: 35}} />
          <View style={{flex: 1}}>
            <Text numberOfLines={1} style={{marginLeft: 5, fontWeight: '600'}}>
              {content.file.name}
            </Text>
          </View>
        </View>
      ) : null}

      <View style={styles.wrapFeedback}>
        <View style={styles.feedback}>
          {like > 0 ? (
            <View style={styles.feedback}>
              <Image source={R.images.iconLike} style={styles.imgIcon} />
              <Text style={{alignItems: 'center', marginTop: 5}}>{like}</Text>
            </View>
          ) : null}
          {heart > 0 ? (
            <View style={styles.feedback}>
              <Image source={R.images.iconHeart} style={styles.imgIcon} />
              <Text style={{alignItems: 'center', marginTop: 5}}>{heart}</Text>
            </View>
          ) : null}
          {sad > 0 ? (
            <View style={styles.feedback}>
              <Image source={R.images.iconSad} style={styles.imgIcon} />
              <Text style={{alignItems: 'center', marginTop: 5}}>{sad}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const WritePost = (props) => {
  const {reply} = props.route.params.data;
  console.log('reply', reply);

  return (
    <View style={styles.container}>
      <Header isBack={true} title={'Chi tiết bài viết'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Item item={props.route.params.data} />
        <View style={styles.wrapComment}>
          {reply.map((e) => (
            <ItemComment key={e.id} item={e} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.wrapInput}>
        <TextInput
          placeholder={'Nhập nội dung bình luận'}
          style={styles.txtInput}
        />
        <TouchableOpacity>
          <Image source={R.images.gallery} style={styles.imgIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={R.images.folder} style={styles.imgIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  containerItem: {
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  wrapInput: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  txtInput: {
    height: HEIGHTXD(109),
    borderWidth: 1,
    borderColor: R.colors.borderGray,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  imgIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imgAvatart: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  txtTime: {
    fontSize: getFontXD(36),
    color: R.colors.color777,
  },
  txtName: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: '600',
  },
  wrapContent: {
    maxHeight: 100,
  },
  imgContent: {
    height: 100,
    width: '100%',
    borderRadius: 5,
    marginVertical: 5,
  },
  wrapFeedback: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  feedback: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  imgIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  seeMore: {
    marginTop: 5,
    fontSize: getFontXD(42),
    color: R.colors.lightBlue1,
    marginLeft: 10,
  },
  wrapFile: {
    backgroundColor: R.colors.colorBackground,
    height: 50,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  wrapWrite: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: R.colors.main,
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  wrapComment: {
    marginTop: 20,
    backgroundColor: '#ECECEC',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginTop: 2,
  },
});

export default WritePost;
