import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import R from '../assets/R';
import {colors, sizes} from '../assets/theme';
import {getFontXD, HEIGHTXD, WIDTHXD} from '../Config/Functions';
import LinearGradient from 'react-native-linear-gradient';

const Button = (props) => {
  const {title, onClick, containerStyle, txtStyle} = props;
  return (
    <TouchableOpacity onPress={onClick}>
      <LinearGradient
        style={containerStyle}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#44B56B', '#16B0A4']}>
        <Text
          style={{
            fontSize: getFontXD(46),
            color: R.colors.white,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default Button;
