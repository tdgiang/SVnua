/* eslint-disable no-console */
import React, {useEffect} from 'react';
import {Platform, View, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import KEY from '../assets/AsynStorage';
import {showNotificaton, updateNotification} from '../actions/SnackBarAction';
import {connect} from 'react-redux';
import {newScreenInit} from '../actions/ScreenInitAction';

import {convertScreen} from '../Config/Functions';

const FirebaseNotification = (props) => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
  });
  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log('On notifi open app-----', remoteMessage);
  });
  useEffect(() => {
    getFcmToken();
  }, []);

  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', remoteMessage.data);
      const {action_type, body, title, record_id} = remoteMessage.data;
      props.showNotificaton({
        title,
        content: body,
        screen: convertScreen(action_type),
        id_record: record_id,
      });
    });

    // (async () => await messaging().registerDeviceForRemoteMessages())();
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
      const {action_type, body, title, record_id} = remoteMessage.data;
      props.newScreenInit({
        screen: convertScreen(action_type),
        id_record: record_id,
      });
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        console.log(remoteMessage);
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.data,
          );
          const {action_type, body, title, record_id} = remoteMessage.data;
          props.newScreenInit({
            screen: convertScreen(action_type),
            id_record: record_id,
          });
        }
      });

    return unsubscribe;
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
    }
  };
  const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem(KEY.FIREBASE);
    console.log('fcmToken save', fcmToken);
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        AsyncStorage.setItem(KEY.FIREBASE, fcmToken);
      }
    }
  };
  return <View />;
};

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {
  showNotificaton,
  newScreenInit,
  updateNotification,
})(FirebaseNotification);
