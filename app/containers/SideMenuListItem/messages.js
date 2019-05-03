/*
 * SideMenuListItem Messages
 *
 * This contains all the text for the SideMenuListItem container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SideMenuListItem';

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
});
