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
import {getFontXD, convertDateTimeNow} from '../../../Config/Functions';
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

const Item = (props) => {
  const navigation = useNavigation();
  const {time, poster, content, feedback} = props.item;
  const [like, setLike] = useState(feedback.like);
  const [heart, setHeart] = useState(feedback.heart);
  const [sad, setSad] = useState(feedback.sad);

  const onClickLike = () => setLike(feedback.like + 1);
  const onClickHeart = () => setHeart(feedback.heart + 1);
  const onClickSad = () => setSad(feedback.sad + 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={poster.avatart} style={styles.imgAvatart} />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.txtName}>{poster.name}</Text>
          <Text style={styles.txtTime}>{time}</Text>
        </View>
      </View>
      <View style={styles.wrapContent}>
        <Text numberOfLines={5}>{content.text}</Text>
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
        <Tooltip
          // pointerColor={'red'}
          // backgroundColor={'white'}
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
      <Divider />
      <TouchableOpacity
        onPress={() => navigation.navigate(DETAILPOST, {data: props.item})}
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Icon name={'back'} size={20} color={R.colors.lightBlue1} />
        <Text style={styles.seeMore}>Reply</Text>
      </TouchableOpacity>
    </View>
  );
};

const Posts = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(DATA);

  const createPost = (text) => {
    const newItem = {
      id: '432dhjsjad',
      poster: {
        id: '1',
        name: 'Đỗ Thị Nhâm',
        avatart: R.images.avatar1,
      },
      time: convertDateTimeNow(),
      content: {
        image: null,
        text,
        file: null,
      },
      reply: [],
      feedback: {
        like: 0,
        heart: 0,
        sad: 0,
      },
    };

    setData([newItem].concat(data));
  };

  const onClose = () => setIsOpen(false);
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => <Item item={item} />}
      />
      <View style={styles.wrapWrite}>
        <TouchableOpacity
          onPress={() => setIsOpen(true)}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'edit'} size={25} color={R.colors.white} />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isOpen}>
        <WirtePost createPost={createPost} onClose={onClose} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: R.colors.white,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Posts;
