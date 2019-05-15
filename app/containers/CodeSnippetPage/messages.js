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
  table_delete: {
    id: `${scope}.table_delete`,
    defaultMessage: 'Delete',
  },
  table_edit: {
    id: `${scope}.table_edit`,
    defaultMessage: 'Edit',
  },
  popup_title_delete: {
    id: `${scope}.popup_title_delete`,
    defaultMessage: 'Delete Code Snippet',
  },
  popup_body_delete: {
    id: `${scope}.popup_body_delete`,
    defaultMessage: 'Are you sure that you want to remove the selected code snippet?',
  },
});
