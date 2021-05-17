import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';

const Assignment = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={R.images.assignment}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text
        style={{
          fontSize: getFontXD(52),
          color: R.colors.black,
          fontWeight: '600',
          marginTop: 20,
        }}>
        Bạn không có bài tập nào!
      </Text>
    </View>
  );
};

export default Assignment;
