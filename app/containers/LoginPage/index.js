/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectEmail,
  makeSelectPassword,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  changeEmail,
  changePassword,
  login,
} from './actions';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import LoginForm from './LoginForm';

export function LoginPage({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSubmitForm,
}) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div>
      <Helmet>
        <title>Kosku - Login</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <LoginForm>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter email" value={email} onChange={onChangeEmail} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={onChangePassword} />
        </FormGroup>
        <FormGroup>
          Does not have an account? <a href="/register">Register</a>
        </FormGroup>
        <Button block onClick={onSubmitForm}>Submit</Button>
      </LoginForm>
    </div>
  );
}

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: event => dispatch(changeEmail(event.target.value)),
    onChangePassword: event => dispatch(changePassword(event.target.value)),
    onSubmitForm: event => {
      if (event !== undefined && event.preventDefault) event.preventDefault();
      dispatch(login());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
