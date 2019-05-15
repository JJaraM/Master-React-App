/**
 *
 * Asynchronously loads the component for CodeSnippetApp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
