/**
 *
 * LoadingIndicator
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';

function LoadingIndicator({loading, children}) {
  return (
    <LoadingOverlay active={loading} text="Loading...">
      <Wrapper>
        {children}
      </Wrapper>
    </LoadingOverlay>
  );
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.any,
};

export default memo(LoadingIndicator);
