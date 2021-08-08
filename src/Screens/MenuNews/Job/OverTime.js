import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';
import image from '../../../assets/images';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import WirtePost from './WirtePost';

const DATA = [
  {
    id: '1',
    name: 'Trần Thị Thu Phương',
    image: image.avatar6,
    time: '2 giờ',
    title: 'TUYỂN 10 NV TRẢ LỜI TIN NHẮN KHÁCH HÀNG THEO FORM MẪU ',
    content:
      'Có thể làm tại nhà. Không yêu cầu kinh nghiệm.  (Phỏng Vấn xong được làm tại nhà) \n- Chọn Ca làm việc\n+ sáng: 8h00 đến 12h\n+ chiều: 13h30 đến 17h00\n+ tối : 18h00 đến 21h30\nThu nhập: 3tr - 7tr/tháng Quan tâm inbox\nLiên hệ: 0974231977 (anh Chung)',
  },
  {
    id: '2',
    name: 'Trần Đăng Hải',
    image: image.avatar5,
    time: '4 giờ',
    title: 'Tuyển nhân viên lắp đặt thiết bị ',
    content:
      '- Công việc lắp đặt thiết bị dưới tầng hầm (G giảm tốc, gương cầu lồi, ....), làm lâu dài hoặc thời vụ đều được, có việc đều.\n- Thời gian: làm giờ hành chính, được nghỉ ăn trưa 30p\n- Lương: 250k/8h, được nuôi ăn bữa trưa, làm thêm giờ sẽ đc trả thêm tiền\n - Yêu cầu: chỉ cần có phương tiện đi lại, công việc đơn giản nên không yêu cầu kinh nghiệm.\nLiên hệ: 0866912436 (anh Hải)',
  },
  {
    id: '3',
    name: 'Tuyết Minh',
    image: image.avatar3,
    time: '6 giờ trước',
    title: 'Cần gấp 5 bạn telesales làm việc tại Vinhomes Ocean Park',
    content:
      '- Thời gian linh hoạt\n- K áp doanh số, k chốt đơn\n- Lương 23-28k/h0\n- Được cung cấp data, điện thoại.\nLiên hệ: 0942996989',
  },
  {
    id: '4',
    name: 'Hoàng Xuân',
    image: image.avatar4,
    time: '4 giờ',
    title: 'Tuyển nhân viên bán hàng',
    content:
      'Shop Hoàng Xuân tuyển nhân viên bán hàng quần áo nữ tại 91 đường Trâu quỳ\n-Công việc : tư vấn bán hàng tại shop, quét dọn , sắp xếp quần áo gọn gàng\n-Yêu cầu : ngoan ,nhanh nhẹn , gọn gàng, có Trách Nhiệm với công việc, làm việc lâu dài\n-Ca Sáng : 8h đến 12h30\n-Ca chiều : 12h30 đến 17h30\n-Lương : 12k/h\n-Liên hệ:  039.486.6667',
  },
  {
    id: '5',
    name: 'Trần Thị Thu Phương',
    image: image.avatar5,
    time: '4 giờ',
    title: 'TUYỂN 10 NV TRẢ LỜI TIN NHẮN KHÁCH HÀNG THEO FORM MẪU ',
    content:
      'Có thể làm tại nhà. Không yêu cầu kinh nghiệm.  (Phỏng Vấn xong được làm tại nhà) \n- Chọn Ca làm việc\n+ sáng: 8h00 đến 12h\n+ chiều: 13h30 đến 17h00\n+ tối : 18h00 đến 21h30\nThu nhập: 3tr - 7tr/tháng Quan tâm inbox\nLiên hệ: 0974231977 (anh Chung)',
  },
  {
    id: '6',
    name: 'Trần Thị Thu Phương',
    image: image.avatar,
    time: '4 giờ',
    title: 'TUYỂN 10 NV TRẢ LỜI TIN NHẮN KHÁCH HÀNG THEO FORM MẪU ',
    content:
      'Có thể làm tại nhà. Không yêu cầu kinh nghiệm.  (Phỏng Vấn xong được làm tại nhà) \n- Chọn Ca làm việc\n+ sáng: 8h00 đến 12h\n+ chiều: 13h30 đến 17h00\n+ tối : 18h00 đến 21h30\nThu nhập: 3tr - 7tr/tháng Quan tâm inbox\nLiên hệ: 0974231977 (anh Chung)',
  },
];
const Item = (props) => {
  const {title, image, content, name, time} = props.item;
  return (
    <View style={styles.container}>
      <View style={styles.wrapTop}>
        <Image style={styles.image} source={image} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtTime}>{time}</Text>
        </View>
      </View>
      <View style={styles.containContent}>
        <Text style={styles.txtName}>{title}</Text>
        <Text style={{fontSize: getFontXD(36), marginTop: 5}}>{content}</Text>
      </View>
    </View>
  );
};
const OverTime = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Việc làm thêm'} />
      <FlatList
        style={{marginTop: 5}}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.wrapWrite}>
        <TouchableOpacity
          onPress={() => setIsOpen(true)}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'edit'} size={25} color={R.colors.white} />
        </TouchableOpacity>
      </View>

      <Modal isVisible={isOpen}>
        <WirtePost onClose={onClose} />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 10,
    marginVertical: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  detail: {
    color: 'gray',
    fontSize: getFontXD(36),
  },
  image: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  subdetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },

  containContent: {
    flex: 1,
    marginTop: 10,
  },
  wrapTop: {
    flexDirection: 'row',
  },
  txtTime: {
    color: R.colors.color777,
    fontSize: getFontXD(36),
    marginTop: 5,
  },
  txtName: {
    color: R.colors.black,
    fontWeight: '600',
    fontSize: getFontXD(42),
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
export default OverTime;
