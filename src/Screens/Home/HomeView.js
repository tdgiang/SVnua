import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import HeaderHome from '../../components/Header/HeaderHome';
import {getFontXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
import {TypingAnimation} from 'react-native-typing-animation';
const HomeView = (props) => {
  const navigation = useNavigation();

  const {listItem} = props;
  return (
    <View style={{flex: 1}}>
      <HeaderHome />
      <View
        style={{
          marginTop: 30,
          flex: 1,
        }}>
        <FlatList
          data={listItem}
          horizontal={false}
          style={{marginHorizontal: 10}}
          numColumns={3}
          columnWrapperStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={styles.containerItem}>
              <Image source={item.icon} style={styles.imgIcon} />
              <Text style={styles.txtTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: 60,
    height: 60,
  },
  containerItem: {
    width: 120,
    height: 120,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeView;
