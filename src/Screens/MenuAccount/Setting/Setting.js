import React, {useEffect, useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import Header from '../../../components/Header/Header';
import {getFontXD} from '../../../Config/Functions';
import PickerItem from '../../../components/Picker/PickerItem';
import R from '../../../assets/R';
import Icon from 'react-native-vector-icons/MaterialIcons';
const dataLanguage = [
  {
    value: 'vi',
    name: 'Vietnamese',
  },
  {
    value: 'en',
    name: 'English',
  },
];

const SettingView = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [language, setLanguage] = useState();

  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Cài đặt'} />
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'notifications-on'} size={20} />
            <View style={{width: 10}} />
            <Text style={styles.txtTitle}>Bật thông báo:</Text>
          </View>

          <Switch
            trackColor={{false: '#DBDBDB', true: R.colors.main}}
            ios_backgroundColor="#767577"
            thumbColor={'#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.txtTitle}>Cài đặt ngôn ngữ:</Text>
          <PickerItem
            width={200}
            defaultValue={language}
            value={language}
            data={dataLanguage}
            onValueChange={(value, items) => {
              setLanguage(items.name);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: getFontXD(46),
    color: R.colors.black,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default SettingView;
