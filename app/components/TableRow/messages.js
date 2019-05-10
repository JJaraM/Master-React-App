/*
 * CodeSnippetPage Messages
 *
 * This contains all the text for the CodeSnippetPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TableRow';

export default defineMessages({
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading',
  },
  empty: {
    id: `${scope}.empty`,
    defaultMessage: 'No data',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Error Loading the data',
  },
});
