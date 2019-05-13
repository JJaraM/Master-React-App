/*
 * CodeSnippetAddForm Messages
 *
 * This contains all the text for the CodeSnippetAddForm container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CodeSnippetAddForm';

export default defineMessages({
  code: {
    id: `${scope}.code`,
    defaultMessage: 'Code',
  },
  required_code: {
    id: `${scope}.required_code`,
    defaultMessage: 'Code required',
  },
  language: {
    id: `${scope}.language`,
    defaultMessage: 'Language',
  },
  required_language: {
    id: `${scope}.required_language`,
    defaultMessage: 'Language required',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Title',
  },
  update_title: {
    id: `${scope}.update_title`,
    defaultMessage: 'Update a Code Snippet',
  },
  required_title: {
    id: `${scope}.title_required`,
    defaultMessage: 'Title required',
  },
  result: {
    id: `${scope}.result`,
    defaultMessage: 'Result',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
  update: {
    id: `${scope}.update`,
    defaultMessage: 'Update',
  },
  close: {
    id: `${scope}.close`,
    defaultMessage: 'Close',
  },
});
