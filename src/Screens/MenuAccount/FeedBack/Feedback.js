import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button';

import PickerImg from '../../../components/Picker/PickerImg';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../../Config/Functions';
import R from '../../../assets/R';
import I18n from '../../../helper/i18/i18n';
import AppText from '../../../components/AppText';
import {Rating, AirbnbRating} from 'react-native-ratings';

const FeedbackView = (props) => {
  const [isSelected, setIsSelected] = useState('');
  const [txtInput, setTxtInput] = useState('');
  const [imageAdd, setImageAdd] = useState([]);

  const onPress = (value) => {
    setIsSelected(value);
    // console.log('hellooo');
  };

  const onClickImages = (images) => {
    // const images = imageAdd.map((e) => e.path);
    setImageAdd(images);
  };

  const onClickClose = (index) => {
    console.log('index---', index);
    const temp = imageAdd.filter((e, i) => {
      if (i != index) return e;
    });
    setImageAdd(temp);
  };

  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: 'white'}}
      keyboardVerticalOffset={-50}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <Header isBack={true} title={'Gửi phản hồi'} />
          <View style={styles.container}>
            <AppText style={styles.txt} i18nKey={'Rating'} />
            <Rating
              onFinishRating={ratingCompleted}
              style={{paddingVertical: 10}}
            />
            <View style={styles.footer}>
              <TextInput
                style={styles.txtInput}
                placeholderTextColor={R.colors.placeHolder}
                multiline={true}
                onChangeText={(val) => setTxtInput(val)}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#CBCBCB',
                }}
              />
              <View style={styles.picker}>
                {imageAdd.length > 0 ? (
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {imageAdd.map((e, index) => (
                      <View key={index} style={styles.imageButton}>
                        <ImageBackground
                          imageStyle={{
                            width: WIDTHXD(330),
                            height: HEIGHTXD(250),
                            borderRadius: 5,
                          }}
                          style={{
                            width: WIDTHXD(330),
                            height: HEIGHTXD(250),
                          }}
                          source={{uri: e}}>
                          <TouchableOpacity
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              marginTop: -10,
                              marginRight: -10,
                            }}
                            onPress={() => onClickClose(index)}>
                            <Image
                              style={{height: 20, width: 20}}
                              source={R.images.iconClose}
                            />
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    ))}
                  </ScrollView>
                ) : (
                  <PickerImg title={''} onClickImage={onClickImages} />
                )}
              </View>
            </View>
          </View>

          <View style={styles.containerBtn}>
            <Button
              containerStyle={{
                width: 150,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
              onClick={() => console.log('hello')}
              title={'Gửi'}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  txt: {
    color: '#929292',
    paddingVertical: 16,
    fontSize: 18,
  },
  footer: {
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#CBCBCB',
    // height: 200,
    marginHorizontal: 5,
  },
  txtInput: {
    height: 110,
    margin: 10,
  },
  picker: {
    marginLeft: 10,
    marginBottom: 10,
  },
  imageButton: {
    marginTop: 10,
    marginRight: 20,
  },
  containerBtn: {
    marginBottom: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default FeedbackView;
