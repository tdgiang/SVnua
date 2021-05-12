import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import R from '../../assets/R';
import {WIDTHXD, HEIGHTXD, getFontXD} from '../../Config/Functions';
import AppText from '../AppText';

const InputIcon = (props) => {
  const {
    title,
    placeholder,
    icon,
    onChangeText,
    maxLength,
    isPassWord,
    value,
  } = props;
  const {wrapLeft, wrapRight, container, iconImg, txtInput} = styles;
  return (
    <View style={container}>
      <Image source={icon} style={iconImg} />
      <View style={wrapRight}>
        <AppText i18nKey={title} />
        <TextInput
          maxLength={maxLength}
          autoCapitalize="none"
          onChangeText={(val) => onChangeText(val)}
          style={txtInput}
          placeholderTextColor={R.colors.placeHolder}
          placeholder={placeholder}
          secureTextEntry={isPassWord}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height: HEIGHTXD(149),
  },

  wrapRight: {
    flex: 1,
  },
  iconImg: {
    width: WIDTHXD(140),
    height: HEIGHTXD(140),
    resizeMode: 'contain',
    marginRight: 15,
  },
  txtInput: {
    height: HEIGHTXD(159),
    flex: 1,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#DBEBFF',
    fontSize: getFontXD(42),
    marginTop: 5,
    paddingHorizontal: 0,
    color: 'black',
  },
});

export default React.memo(InputIcon);
