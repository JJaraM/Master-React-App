import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the codeSnippetHeader state domain
 */

const selectCodeSnippetHeaderDomain = state =>
  state.codeSnippetHeader || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CodeSnippetHeader
 */

const makeSelectCodeSnippetHeader = () =>
  createSelector(
    selectCodeSnippetHeaderDomain,
    substate => substate,
  );

export default makeSelectCodeSnippetHeader;
export { selectCodeSnippetHeaderDomain };
