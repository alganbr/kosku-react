/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectError, makeSelectLoading,
} from './selectors';

import Header from 'components/Header/Loadable';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import ErrorAlert from 'components/ErrorAlert';
import LoadingIndicator from '../../components/LoadingIndicator';

export function App({error, loading}) {
  return (
    <div>
      <Header />
      <ErrorAlert error={error} />
      <LoadingIndicator loading={loading}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </LoadingIndicator>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
)(App);