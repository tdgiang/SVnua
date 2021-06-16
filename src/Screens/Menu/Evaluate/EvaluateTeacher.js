import React, {useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {getFontXD} from '../../../Config/Functions';
import {Slider, Divider} from 'react-native-elements';
import Button from '../../../components/Button';
const DATA = [
  {
    id: '1',
    title: '1. Hoạt động giảng dạy',
    data: [
      '1. Nội dung môn học thiết thực, hữu ích',
      '2. Nội dung giảng dạy vừa sức đối với tôi',
      '3. GV đã thiết kế, tổ chức HP và sử dụng thời gian một cách khoa học, hợp lí',

      '4. GV đến lớp khi đã chuẩn bị tốt bài giảng',

      '5. Tôi cảm thấy hứng thú trong giờ học',

      '6. GV đề cập và nhấn mạnh những thông tin quan trọng một cách rõ ràng, dễ hiểu',

      '7. GV đã tạo cơ hội cho sinh viên ứng dụng kiến thức lĩnh hội được',

      '8. GV tỏ ra luôn sẵn sàng tư vấn, giúp đỡ SV học tập',

      '9. GV đã hướng dẫn hiệu quả và thúc đẩy việc tự học của SV',

      '10. GV khuyến khích SV nêu câu hỏi và bày tỏ quan điểm riêng về các vấn đề của HP',

      '11. GV thường nêu vấn đề để SV suy nghĩ, tranh luận',

      '12. GV quan tâm tổ chức cho SV tham gia hoạt động nhóm, thảo luận để giải quyết các nhiệm vụ học tập',

      '13. GV quan tâm đến giáo dục đạo đức, ý thức tổ chức kỉ luật cho người học',
    ],
  },
  {
    id: '2',
    title: '2. Cở sở vật chất',
    data: ['1.Phòng học', '2.Các thiết bị phụ trợ'],
  },
  {
    id: '2',
    title: '3. Chương trình giảng dạy',
    data: [
      '1. Nội dung bài giảng',
      '2 Nội dung hội thảo/thực hành',
      '3. Phong cách giảng viên',
      '4. Ví dụ cá nhân của giảng viên',
      '5. Ví dụ thực tiễn',
      '6. Chất lượng tài liệu',
      '7. Thời gian đào tạo',
      '8. Mức độ tiếp thu của học viên',
      '9. Môi trường học viên của khóa học (trình độ, mức độ tham gia…)',
      '10. Khung cảnh giảng dạy (phòng ốc, trang thiết bị, ăn uống…)',
    ],
  },
];
const Item = (props) => {
  const {title, data} = props.item;
  const [isDetal, setIsDetal] = useState(true);
  return (
    <View style={styles.containerItem}>
      <View style={styles.rowHeader}>
        <Text style={styles.txtHeader}>{title}</Text>
        <TouchableOpacity onPress={() => setIsDetal(!isDetal)}>
          <Icon
            name={isDetal ? 'up' : 'down'}
            size={18}
            color={R.colors.color777}
          />
        </TouchableOpacity>
      </View>
      {isDetal ? (
        <View style={{marginTop: 10}}>
          <Divider />
          {data.map((item) => (
            <View style={styles.wrapContent}>
              <Text style={styles.txtTitle}>{item}</Text>
              <Slider
                style={styles.slide}
                minimumValue={0}
                maximumValue={4}
                thumbStyle={{
                  height: 20,
                  width: 20,
                  backgroundColor: R.colors.txtMain,
                }}
                step={1}
                onValueChange={(value) => {
                  console.log(value);
                }}
                minimumTrackTintColor={R.colors.main}
                maximumTrackTintColor={R.colors.borderGray}
              />
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const EvaluteTeacher = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Đánh giá giảng dạy'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item) => (
          <Item item={item} />
        ))}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Button
            containerStyle={{
              width: 200,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            title={'Gửi đánh giá'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: R.colors.main,
    fontSize: getFontXD(52),
    padding: 5,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  score: {
    padding: 5,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: getFontXD(52),
    borderWidth: 2,
    borderColor: 'gray',
  },
  slide: {
    marginHorizontal: 10,
  },
  containerItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: R.colors.borderGray,
    borderRadius: 5,
    padding: 10,
    backgroundColor: R.colors.white,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtHeader: {
    fontSize: getFontXD(42),
    color: R.colors.main,
    fontWeight: '600',
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
  wrapContent: {
    marginVertical: 10,
  },
});

export default EvaluteTeacher;
