/**
 *
 * RegisterPage
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
  makeSelectConfirmPassword,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  changeEmail,
  changePassword,
  changeConfirmPassword,
  register,
} from './actions';

import {
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import RegisterForm from './RegisterForm';

export function RegisterPage({
  email,
  password,
  confirmPassword,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onSubmitForm,
}) {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  return (
    <div>
      <Helmet>
        <title>Kosku - Register</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <RegisterForm>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter email" value={email} onChange={onChangeEmail} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={onChangePassword} />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={onChangeConfirmPassword} />
        </FormGroup>
        <FormGroup>
          Already have an account? <a href="/login">Login</a>
        </FormGroup>
        <Button block onClick={onSubmitForm}>Submit</Button>
      </RegisterForm>
    </div>
  );
}

RegisterPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeConfirmPassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  confirmPassword: makeSelectConfirmPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: event => dispatch(changeEmail(event.target.value)),
    onChangePassword: event => dispatch(changePassword(event.target.value)),
    onChangeConfirmPassword: event => dispatch(changeConfirmPassword(event.target.value)),
    onSubmitForm: event => {
      if (event !== undefined && event.preventDefault) event.preventDefault();
      dispatch(register());
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
)(RegisterPage);
