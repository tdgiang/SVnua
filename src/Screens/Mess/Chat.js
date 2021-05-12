import React, {useState, useCallback, useEffect} from 'react';
import {View, Image} from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import R from '../../assets/R';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderSend={(props) => (
        <Send {...props}>
          <View style={{marginRight: 10, marginBottom: 5}}>
            <Image style={{width: 30, height: 30}} source={R.images.iconSend} />
          </View>
        </Send>
      )}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;
