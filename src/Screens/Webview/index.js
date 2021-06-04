import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';
import {WebView} from 'react-native-webview';
import {showLoading, hideLoading} from '../../actions/loadingAction';

const Webview = (props) => {
  useEffect(() => {
    props.showLoading();
    setTimeout(() => {
      props.hideLoading();
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Chi tiết'} />
      <WebView
        cacheEnabled={true}
        androidHardwareAccelerationDisabled={true}
        source={{
          uri: props.route.params.link,
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {showLoading, hideLoading})(Webview);
