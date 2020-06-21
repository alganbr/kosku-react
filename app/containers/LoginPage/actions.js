/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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

export function login() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess(response, email) {
  return {
    type: LOGIN_SUCCESS,
    response,
    email
  }
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  }
}