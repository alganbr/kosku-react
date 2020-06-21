import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLogin = state => state.loginPage || initialState;

export const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.email,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );