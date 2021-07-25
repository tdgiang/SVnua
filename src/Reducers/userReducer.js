import {LOGIN, UPDATE_SERVEY} from '../actions/actionTypes';

const initialState = {
  user: {name: 'Tdgiang', pass: 'abc'},
  isSignedIn: false,
  expiredTime: new Date(),
  userInfo: {},
  servey: false,
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {...action.data, isSignedIn: true};
    }

    case UPDATE_SERVEY: {
      return {...state, servey: true};
    }

    default:
      return state;
  }
}
