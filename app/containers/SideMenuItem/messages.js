/*
 * SideMenuItem Messages
 *
 * This contains all the text for the SideMenuItem container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SideMenuItem';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  ui: {
    id: `${scope}.ui`,
    defaultMessage: 'UI Elements',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
  themes: {
    id: `${scope}.themes`,
    defaultMessage: 'Themes',
  },
  users: {
    id: `${scope}.users`,
    defaultMessage: 'Users',
  },
  codeSnippet: {
    id: `${scope}.codeSnippet`,
    defaultMessage: 'Code Snippets',
  },
  exam: {
    id: `${scope}.exam`,
    defaultMessage: 'Exams',
  },
});
