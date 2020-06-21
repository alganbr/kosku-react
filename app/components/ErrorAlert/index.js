/**
 *
 * ErrorAlert
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ErrorAlert({error}) {
  if (error !== false) {
    return (
      <Alert color="danger">
        {error.message}
      </Alert>
    );
  }
  
  return null;
}

ErrorAlert.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default memo(ErrorAlert);
