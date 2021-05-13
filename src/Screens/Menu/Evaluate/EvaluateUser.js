import React, {useState, Component} from 'react';
import {View, Text, StyleSheet,SectionList, TouchableOpacity, Image} from 'react-native';
import R from '../../../assets/R';
import Header from '../../../components/Header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getFontXD} from '../../../Config/Functions';
import Slider from '@react-native-community/slider';

const DATA = [
  {
    id: '1',
    title:'1.Đánh giá về ý thức, thái độ',
    data: ["1.Sinh viên có ý thức và thái độ trong học tập",
     "2.Sinh viên có tinh thần vượt khó phấn đấu vươn lên trong học tập"]
  },
  {
    id: '2',
    title:'2.Đánh giá về ý thức, thái độ',
    data: ["1.Sinh viên có ý thức và thái độ trong học tập",
     "2.Sinh viên có tinh thần vượt khó phấn đấu vươn lên trong học tập"]

  },
];
const Item = (props) => {
  //console.log("Item",props)
  const[diem,setDiem]= useState(0);
  const {item} = props;
  return (
    <View style={styles.container}>
    <Text style={{fontSize:getFontXD(52),marginVertical:10}}>{item}</Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{borderColor:'gray',borderWidth:2,flex:1,borderRadius:2}}>
    <Slider
          style={styles.slide}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={0}
          color="red"
          onValueChange={(value)=>{setDiem(value)}}
          minimumTrackTintColor="green"
          maximumTrackTintColor="#000000"
        />
    </View>
        <Text style={styles.score}>{diem}</Text>
    </View>
  </View>
  );
};

const EvaluteUser = (props) => {
  
  return (
    <View style={{flex: 1, backgroundColor: R.colors.white}}>
      <Header isBack={true} title={'Tự đánh giá'} />
      {/* {DATA.map(e=><View>
      <Text>{e.title}</Text>
      {e.data.map(item=><View>
        <Text>{item}</Text>
      </View>)}
      </View>)} */}
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
header:{
  backgroundColor:R.colors.main,
  fontSize:getFontXD(52),
  padding:5
},
container:{
  paddingHorizontal:10,
  paddingVertical:10
},
score:{
  padding:5,
  borderRadius:10,
  marginLeft:10,
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  fontSize:getFontXD(52),
  borderWidth:2,
  borderColor:'gray'
},
slide:{
  flex:1,
  height: 40,
  backgroundColor:'white',
  borderWidth:2,
  borderColor:'black',
  borderWidth:2,
  borderColor:'black'  
  }

});

export default EvaluteUser;
