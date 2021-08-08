import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import R from '../../assets/R';
import {connect} from 'react-redux';
import {getListMessages} from '../../apis/Functions/messages';
import io from 'socket.io-client';
import {showAlert, TYPE} from '../../components/DropdownAlert';
import {showLoading, hideLoading} from '../../actions/loadingAction';
import {TypingAnimation} from 'react-native-typing-animation';

class SocketIO extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://10.10.20.29:9000');
    this.state = {
      ListMessage: [],
      isTyping: false,
    };
  }

  componentWillUnmount() {
    this.socket.emit('client_send_disconect', this.props.user.id_St);
  }
  componentDidMount() {
    this.getData();
    this.socket.emit('new_user', this.props.user.id_St);
    this.socket.on('new_message', (data) => {
      this.setState({
        ListMessage: [data].concat(this.state.ListMessage),
      });
    });
    this.socket.on('response-typing-message', (data) => {
      this.setState(
        {
          isTyping: true,
        },
        () => {
          setTimeout(() => {
            this.setState({
              isTyping: false,
            });
          }, 3000);
        },
      );
    });
  }

  getData = async () => {
    this.props.showLoading();
    const res = await getListMessages({
      userID: this.props.user.id_St,
      toID: this.props.toUser.id_St,
    });
    if ((res.data.code = 200 && res.data.data)) {
      console.log(res.data.data);
      this.setState({
        ListMessage: res.data.data,
      });
    } else {
      showAlert(TYPE.ERROR, I18n.t('Notification'), res.data.message);
    }
    this.props.hideLoading();
  };

  onSend = (messages) => {
    const {_id, text} = messages[0];
    const dataSend = {
      _id,
      text: text,
      createdAt: new Date(),
      user: {
        _id: this.props.user.id_St,
        name: this.props.user.name,
        avatar: this.props.user.avatart,
      },
      to: {
        _id: this.props.toUser.id_St,
        name: this.props.toUser.name,
        avatar: this.props.toUser.avatart,
      },
    };
    this.setState({
      ListMessage: [dataSend].concat(this.state.ListMessage),
    });

    this.socket.emit('send_message', dataSend, this.props.toUser.id_St);
  };

  render() {
    const {ListMessage, isTyping} = this.state;
    return (
      <GiftedChat
        messages={ListMessage}
        onInputTextChanged={() => {
          this.socket.emit('typing-message', this.props.user.id_St);
        }}
        onSend={(messages) => this.onSend(messages)}
        renderChatFooter={() => (
          <View>
            {isTyping ? (
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: R.colors.color777, marginHorizontal: 5}}>
                  {this.props.toUser.name}
                </Text>
                <TypingAnimation
                  dotColor={R.colors.color777}
                  dotMargin={8}
                  dotAmplitude={3}
                  dotSpeed={0.15}
                  dotRadius={3.2}
                  style={{width: 30, height: 20}}
                />
              </View>
            ) : (
              <View style={{width: 30, height: 20}} />
            )}
          </View>
        )}
        renderSend={(props) => (
          <Send {...props}>
            <View style={{marginRight: 10, marginBottom: 5}}>
              <Image
                style={{width: 30, height: 30}}
                source={R.images.iconSend}
              />
            </View>
          </Send>
        )}
        user={{
          _id: this.props.user.id_St,
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {showLoading, hideLoading})(SocketIO);
