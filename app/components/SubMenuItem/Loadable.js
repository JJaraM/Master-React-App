/**
 *
 * Asynchronously loads the component for SubMenuItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
