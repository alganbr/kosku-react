/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

export const makeSelectError = () =>
  createSelector(
    selectGlobal,
    substate => substate.error,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    substate => substate.loading,
  );

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );