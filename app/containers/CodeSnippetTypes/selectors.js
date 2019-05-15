import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the codeSnippetTypes state domain
 */

const selectCodeSnippetTypesDomain = state =>
  state.codeSnippetTypes || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CodeSnippetTypes
 */

const makeSelectCodeSnippetTypes = () =>
  createSelector(
    selectCodeSnippetTypesDomain,
    substate => substate,
  );

export default makeSelectCodeSnippetTypes;
export { selectCodeSnippetTypesDomain };
