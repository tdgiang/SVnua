import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';
import {DATA} from './DataFake';
import {Tooltip, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import WirtePost from './WritePost';
import {DETAILPOST} from '../../../routers/ScreenNames';
const FeedBack = (props) => {
  return (
    <View style={styles.feedback}>
      <TouchableOpacity onPress={() => props.onClickLike()}>
        <Image source={R.images.iconLike} style={styles.imgIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onClickHeart()}>
        <Image source={R.images.iconHeart} style={styles.imgIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onClickSad()}>
        <Image source={R.images.iconSad} style={styles.imgIcon} />
      </TouchableOpacity>
    </View>
  );
};

const ItemComment = (props) => {
  const {user, time, content, feedback} = props.item;
  const [like, setLike] = useState(feedback.like);
  const [heart, setHeart] = useState(feedback.heart);
  const [sad, setSad] = useState(feedback.sad);
  const onClickLike = () => setLike(feedback.like + 1);
  const onClickHeart = () => setHeart(feedback.heart + 1);
  const onClickSad = () => setSad(feedback.sad + 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={R.images.avatar} style={styles.imgAvatart} />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.txtName}>{user.name}</Text>
          <Text style={styles.txtTime}>{time}</Text>
        </View>
      </View>
      <View>
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
              dasdas
            </Text>
          </View>
        </View>
      ) : null}
      <View style={styles.wrapFeedback}>
        <Tooltip
          pointerColor={'red'}
          backgroundColor={'white'}
          popover={
            <FeedBack
              onClickSad={onClickSad}
              onClickLike={onClickLike}
              onClickHeart={onClickHeart}
            />
          }>
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
                <Text style={{alignItems: 'center', marginTop: 5}}>
                  {heart}
                </Text>
              </View>
            ) : null}
            {sad > 0 ? (
              <View style={styles.feedback}>
                <Image source={R.images.iconSad} style={styles.imgIcon} />
                <Text style={{alignItems: 'center', marginTop: 5}}>{sad}</Text>
              </View>
            ) : null}
          </View>
        </Tooltip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
});

export default ItemComment;
