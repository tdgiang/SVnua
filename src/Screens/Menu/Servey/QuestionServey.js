import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {DETAILSERVEY} from '../../../routers/ScreenNames';
import Button from '../../../components/Button';
import {CheckBox} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {ListData} from '../TimeTable/FakeData';
import {TABBAR} from '../../../routers/ScreenNames';
import {ScrollView} from 'react-native';

const ListQuestion = [
  {
    id: '1',
    question: 'Bạn có thấy xuất hiện dấu hiệu sau đây không?',
    listSelect: [
      {id: '1', content: 'Sốt', selected: false},
      {id: '2', content: 'Ho', selected: false},
      {id: '3', content: 'Nôn,buồn nôn', selected: false},
      {id: '4', content: 'Khó thở', selected: false},
      {id: '5', content: 'Đau họng', selected: false},
      {id: '6', content: 'Tiêu chảy', selected: false},
      {id: '7', content: 'Xuất huyết ngoài da', selected: false},
      {id: '8', content: 'Nổi bạn ngoài da', selected: false},
      {id: '9', content: 'Không', selected: false},
    ],
  },
  {
    id: '1',
    question:
      'Trong 14 ngày qua bạn có tiếp xúc với người bị nhiễm hoặc nghi ngờ nhiễm COVID-19 không?',
    listSelect: [
      {
        id: '1',
        content: 'Người bệnh hoặc nghi ngờ mắc bệnh Covid 19',
        selected: false,
      },
      {
        id: '2',
        content: 'Người có biểu hiện(sốt,ho,khó thở,viêm phổi)',
        selected: false,
      },
      {id: '3', content: 'Không', selected: false},
    ],
  },
  {
    id: '3',
    question:
      'Brong 14 ngày qua bạn có di chuyển sang tỉnh,thành phố nào(Có thể di chuyển qua nhiều nơi) khác nơi ở  hiện tại?',
    listSelect: [
      {id: '1', content: 'Có', selected: false},
      {id: '2', content: 'Không', selected: false},
    ],
  },
  {
    id: '1',
    question: 'Bạn và người thân có tiếp xúc với ?',
    listSelect: [
      {
        id: '1',
        content: 'Người bệnh hoặc nghi ngờ mắc bệnh Covid 19',
        selected: false,
      },
      {
        id: '2',
        content: 'Người có biểu hiện(sốt,ho,khó thở,viêm phổi)',
        selected: false,
      },
      {id: '3', content: 'Không', selected: false},
    ],
  },
  {
    id: '1',
    question: 'Bạn có thấy xuất hiện dấu hiệu sau đây không?',
    listSelect: [
      {id: '1', content: 'Sốt', selected: false},
      {id: '2', content: 'Ho', selected: false},
      {id: '3', content: 'Nôn,buồn nôn', selected: false},

      {id: '9', content: 'Không', selected: false},
    ],
  },
];

const QuestionServey = (props) => {
  const [index, setIndex] = useState(0);

  const [listSelected, setListSelected] = useState([]);

  const [process, setProcess] = useState(0);

  useEffect(() => {
    setProcess(index / (ListData.length - 1));
  }, [index]);

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Phiếu khảo sát'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{flex: 1}}>
            <View style={styles.container}>
              <View style={styles.wrapTop}>
                <Text style={styles.txtTitle}>Danh sách câu hỏi</Text>
              </View>

              <View
                style={{
                  height: 1,
                  backgroundColor: R.colors.borderGray,
                  marginTop: 10,
                }}
              />
              <View style={styles.wrapProcess}>
                <Progress.Bar
                  progress={process}
                  color={R.colors.main}
                  width={300}
                  height={10}
                />
              </View>
              <View>
                {index + 1 < ListData.length ? (
                  <View>
                    <View style={styles.wrapBody}>
                      <Text style={styles.txtLink}>
                        {ListQuestion[index].question}
                      </Text>
                    </View>

                    <View style={styles.wrapSelected}>
                      {ListQuestion[index].listSelect.map((e, index) => (
                        <CheckBox
                          key={e.id}
                          title={e.content}
                          onPress={() =>
                            setListSelected(listSelected.concat(index))
                          }
                          checked={listSelected.includes(index)}
                        />
                      ))}
                    </View>
                  </View>
                ) : (
                  <View
                    style={{
                      paddingVertical: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.txtLink}>
                      Cảm ơn bạn đã tham gia cuộc khảo sát!
                    </Text>
                    <Text
                      style={{
                        fontSize: getFontXD(42),
                        marginTop: 20,
                        textAlign: 'center',
                      }}>
                      Khi có dấu hiệu sốt, ho, khó thở hãy gọi điện cho đường
                      dây nóng của Bộ Y tế 19009095 hoặc đường dây nóng của y tế
                      địa phương để được tư vấn, hỗ trợ, hướng dẫn đi khám bệnh
                      đảm bảo an toàn.
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              {index + 1 < ListData.length ? (
                <Button
                  onClick={() => {
                    setListSelected([]);
                    setIndex(index + 1);
                  }}
                  containerStyle={styles.btn}
                  title={'Tiếp theo'}
                />
              ) : (
                <Button
                  onClick={() =>
                    navigation.reset({
                      index: 1,
                      routes: [{name: TABBAR}],
                    })
                  }
                  containerStyle={styles.btn}
                  title={'Quay lại'}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: R.colors.borderGray,
    paddingVertical: 10,
    borderRadius: 5,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    fontWeight: '600',
  },
  wrapTop: {
    paddingHorizontal: 10,
  },
  wrapBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtLink: {
    fontSize: getFontXD(46),
    color: R.colors.black,
    fontWeight: '600',
  },
  wrapSelected: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  wrapProcess: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuestionServey;
