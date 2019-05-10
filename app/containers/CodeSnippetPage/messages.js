/*
 * CodeSnippetPage Messages
 *
 * This contains all the text for the CodeSnippetPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CodeSnippetPage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Code Snippets',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'View to manage your Code Snippets',
  },
  table_type: {
    id: `${scope}.table_type`,
    defaultMessage: 'Type',
  },
  table_description: {
    id: `${scope}.table_description`,
    defaultMessage: 'Description',
  },
  table_view: {
    id: `${scope}.table_view`,
    defaultMessage: 'View',
  },
});
