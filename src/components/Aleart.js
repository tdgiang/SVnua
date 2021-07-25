import {Alert} from 'react-native';
import I18n from '../helper/i18/i18n';

export const NotificationAlert = (string) => {
  Alert.alert(I18n.t('Notification'), string);
};

export const confirmAlert = (content, callback) => {
  Alert.alert(
    'Thông báo',
    content,
    [
      {
        text: 'Từ chối',
        style: 'cancel',
      },
      {
        text: 'Đồng ý',
        onPress: () => {
          callback();
        },
      },
    ],
    {cancelable: false},
  );
};
