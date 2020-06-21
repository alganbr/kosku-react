/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  SUBMIT_FORM,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;

      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      
      case CHANGE_CONFIRM_PASSWORD:
        draft.confirmPassword = action.confirmPassword;
        break;

      case SUBMIT_FORM:
        break;

      case REGISTER_SUCCESS:
        break;

      case REGISTER_FAILURE:
        draft.password = '';
        draft.confirmPassword = '';
        break;
    }
  });

export default registerPageReducer;
