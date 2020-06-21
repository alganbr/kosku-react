/*
 *
 * RegisterPage actions
 *
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function changeConfirmPassword(confirmPassword) {
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    confirmPassword,
  };
}

export function register() {
  return {
    type: REGISTER,
  };
}

export function registerSuccess(response, email) {
  return {
    type: REGISTER_SUCCESS,
    response,
    email
  }
}

export function registerFailure() {
  return {
    type: REGISTER_FAILURE,
  }
}
