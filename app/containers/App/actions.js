/*
 *
 * App actions
 *
 */

import {
  DISPLAY_ERROR,
  DISPLAY_LOADING,
} from './constants';

export function displayError(error) {
  return {
    type: DISPLAY_ERROR,
    error,
  };
}

export function displayLoading(loading) {
  return {
    type: DISPLAY_LOADING,
    loading,
  };
}