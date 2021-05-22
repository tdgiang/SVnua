import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io('http://10.10.20.33:5000');
    this.socket.emit('Send_Message');
  }

  sendnewMessage() {
    console.log('Send');
    this.socket.emit('Send_Message');
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
