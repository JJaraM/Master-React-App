/*
 * CodeSnippetPage Messages
 *
 * This contains all the text for the CodeSnippetPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CodeSnippetAdd';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Add Code Snippets',
  },
  update_title: {
    id: `${scope}.update_title`,
    defaultMessage: 'Update Code Snippets',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Complete the form below to create your code snippet',
  },
});
