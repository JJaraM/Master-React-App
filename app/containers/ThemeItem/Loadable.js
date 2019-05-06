/**
 *
 * Asynchronously loads the component for ThemeItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
