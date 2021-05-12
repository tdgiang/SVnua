import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import R from '../../../assets/R';
LocaleConfig.locales['fr'] = {
  monthNames: [
    'Tháng một',
    'Tháng hai',
    'Tháng ba',
    'Tháng bốn',
    'Tháng năm',
    'Tháng sáu',
    'Tháng bảy',
    'Tháng tám',
    'Tháng chín',
    'Tháng mười',
    'Tháng mười một',
    'Tháng mười hai',
  ],
  monthNamesShort: [
    'Một',
    'Hai',
    'Ba',
    'Tư',
    'Năm',
    'Sáu',
    'Bảy',
    'Tám',
    'Chín',
    'Mười',
    'Mười một',
    'Mười hai',
  ],
  dayNames: [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: "Aujourd'hui",
};
import {dataWeek} from './FakeData';
LocaleConfig.defaultLocale = 'fr';
const agenda = {
  CONTAINER: 'agenda',
  ITEM: 'item',
};
export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
    };
  }
  render() {
    return (
      <Agenda
        style={styles.container}
        testID={agenda.CONTAINER}
        items={dataWeek}
        selected={'2020-11-18'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        markingType={'period'}
        hideKnob={true}
        theme={{
          backgroundColor: R.colors.white,
          calendarBackground: 'rgba(256, 256, 256, 0.0)',
          textSectionTitleColor: R.colors.black,

          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: R.colors.white,
          selectedDotColor: R.colors.orange,
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    );
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        testID={agenda.ITEM}
        style={[styles.item, {height: 50}]}
        onPress={() => Alert.alert(item.name)}>
        <Text>80:00 {item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  container: {},
});
