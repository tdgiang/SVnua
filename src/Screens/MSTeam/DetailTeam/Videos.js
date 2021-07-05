import React, {Component, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import YouTube from 'react-native-youtube';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';

const Lessons = [
  {
    title: 'Bài 01 Hướng dẫn cài đặt môi trường lập trình Java',
    time: '2:54',
    id: 's9opAyGdGsk',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },

  {
    title: 'Bài 02 Hướng dẫn tạo dự án Java đầu tiên',
    time: '3:56',
    id: '8-_mCO2QzEw',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
  {
    title: 'Bài 03 Khai báo biến & toán tử trong Java',
    time: '8:17',
    id: 'E0h_KVFyWHs',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
  {
    title: 'Bài 04 Tìm hiểu về if, else, switch trong lập trình Java',
    time: '16:00',
    id: 'O7ucPUO79jE',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
  {
    title: 'Bài 05 Tìm hiểu Loop (for, while, do while)',
    time: '2:54',
    id: 'cdEsc9dalvw',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
  {
    title: 'Bài 06 Tìm hiểu về Class và Object trong lập trình Java',
    time: '6:54',
    id: 'FtDpfEqD66s',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
  {
    title: 'Bài 07 Tìm hiểu về mảng (array) và List, ArrayList trong Java',
    time: '13:02',
    id: 'WBHY74s6rnI',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
  {
    title: 'Bài 08 Hướng dẫn phát hành dự án java - gokisoft.com',
    time: '6:01',
    id: 'dLZtWbGQaPQ',
    linkImg:
      'https://i.ytimg.com/vi/E0h_KVFyWHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjN8fh4iC_8Z1763cxlgH6ky9bqQ',
  },
];

const Item = (props) => {
  const {title, linkImg} = props.item;
  return (
    <TouchableOpacity
      onPress={() => props.onClickItem(props.index)}
      style={[
        styles.containerItem,
        props.isActive ? {backgroundColor: R.colors.colorBg} : {},
      ]}>
      <Image source={{uri: linkImg}} style={styles.img} />
      <View style={styles.wrapRight}>
        <Text style={styles.txtTitle}>
          {title}
          {props.index}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Videos = (props) => {
  const [isErr, setIsErr] = useState(false);
  const [active, setActive] = useState(0);

  const onClickItem = (index) => {
    console.log(index);
    setActive(index);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {isErr ? (
        <View>
          <Text>Gặp sự cố khi phát video</Text>
        </View>
      ) : (
        <YouTube
          apiKey={'AIzaSyAMj3UyhieazgdBFGeZ33V6C3zweAYpvP8'}
          videoId={Lessons[active].id}
          play={false}
          onError={(e) => {
            setIsErr(true);
            console.log({error: e.error});
          }}
          style={{alignSelf: 'stretch', height: 250}}
        />
      )}
      <FlatList
        data={Lessons}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Item
            onClickItem={onClickItem}
            index={index}
            isActive={active == index ? true : false}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  containerItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
    width: '100%',
    paddingVertical: 10,
  },
  wrapRight: {
    flex: 1,
    paddingLeft: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
  },
});

export default Videos;
