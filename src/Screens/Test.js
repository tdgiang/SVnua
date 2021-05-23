import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io('http://192.168.137.215:8080');
    this.socket.emit('event');
  }

  sendnewMessage() {
    console.log('Send');
    this.socket.emit('event');
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => this.sendnewMessage()}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'pink',
          }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
