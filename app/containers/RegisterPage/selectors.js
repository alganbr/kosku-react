import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerPage state domain
 */

const selectRegister = state => state.registerPage || initialState;

export const makeSelectEmail = () =>
  createSelector(
    selectRegister,
    registerState => registerState.email,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectRegister,
    registerState => registerState.password,
  );

export const makeSelectConfirmPassword = () =>
  createSelector(
    selectRegister,
    registerState => registerState.confirmPassword,
  );