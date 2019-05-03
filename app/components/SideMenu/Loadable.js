/**
 *
 * Asynchronously loads the component for SideMenu
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
