import {LOGIN, UPDATE_SERVEY} from './actionTypes';

export function saveUserToRedux(data) {
  return {
    type: LOGIN,
    data,
  };
}

export function toDoServey() {
  return {
    type: UPDATE_SERVEY,
  };
}
