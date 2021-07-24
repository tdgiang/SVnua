import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import StepIndicator from 'react-native-step-indicator';
const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];
import Swiper from 'react-native-swiper';

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};
const renderViewPagerPage = (data) => {
  return (
    <View key={data} style={styles.page}>
      <Text>{data}</Text>
    </View>
  );
};

const renderStepIndicator = (params) => (
  <Icon name="home" size={20} color="red" />
);

const renderLabel = ({position, label, currentPosition}) => {
  return (
    <Text
      style={
        position === currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }>
      {label}
    </Text>
  );
};
const Test = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Account', 'Profile', 'Band', 'Membership', 'Dashboard']}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>

      <Swiper
        style={{flexGrow: 1}}
        loop={false}
        index={currentPage}
        autoplay={false}
        showsButtons
        onIndexChanged={(page) => {
          setCurrentPage(page);
        }}>
        {PAGES.map((page) => renderViewPagerPage(page))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
});
export default Test;
