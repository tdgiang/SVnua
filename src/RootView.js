import React, {useEffect} from 'react';

import StackNavigation from './routers/StackNavigation';
import {connect} from 'react-redux';

const RootView = (props) => {
  return <StackNavigation />;
};

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {})(RootView);
