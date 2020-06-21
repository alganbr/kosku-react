/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SUBMIT_FORM,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

export const initialState = {
  email: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state,  draft => {
    switch (action.type) {
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;

      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;

      case SUBMIT_FORM:
        break;

      case LOGIN_SUCCESS:
        draft.email = action.email;
        break;
        
      case LOGIN_FAILURE:
        draft.password = '';
        break;
    }
  });

export default loginPageReducer;
