/*
 * ErrorAlert Messages
 *
 * This contains all the text for the ErrorAlert component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ErrorAlert';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ErrorAlert component!',
  },
});
