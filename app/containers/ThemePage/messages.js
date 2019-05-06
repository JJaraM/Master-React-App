/*
 * ThemePage Messages
 *
 * This contains all the text for the ThemePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ThemePage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Themes',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'View to change the look and feel of the website',
  },
  instruction: {
    id: `${scope}.instruction`,
    defaultMessage: 'Press the change button to select another theme',
  },
});
