import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../../Config/Functions';
import R from '../../../assets/R';

const InputComponent = (props) => {
  const {title, onChangeText, maxLength} = props;

  return (
    <View style={{marginVertical: 5}}>
      <Text
        style={{
          fontSize: getFontXD(42),
          color: R.colors.color777,
          marginBottom: 5,
        }}>
        {title ? title : ''}
      </Text>
      <TextInput
        placeholderTextColor={R.colors.placeHolder}
        maxLength={maxLength}
        autoCapitalize="none"
        onChangeText={(val) => onChangeText(val)}
        style={{
          height: HEIGHTXD(89),
          borderRadius: 7,
          borderWidth: 0.7,
          borderColor: R.colors.borderGray,
          fontSize: getFontXD(42),
          padding: 5,
          color: 'black',
        }}
      />
    </View>
  );
};

export default React.memo(InputComponent);
