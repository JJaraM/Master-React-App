import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the codeSnippetLanguagesDescriptionItem state domain
 */

const selectCodeSnippetLanguagesDescriptionItemDomain = state =>
  state.codeSnippetLanguagesDescriptionItem || initialState;

const makeSelectCodeSnippetLanguagesDescriptionItem = () =>
  createSelector(
    selectCodeSnippetLanguagesDescriptionItemDomain,
    substate => substate,
  );

const makeSelectedCodeSnippetContent = () =>
  createSelector(
    selectCodeSnippetLanguagesDescriptionItemDomain,
    substate => substate.codeSnippet,
  );


export {
  selectCodeSnippetLanguagesDescriptionItemDomain,
  makeSelectCodeSnippetLanguagesDescriptionItem,
  makeSelectedCodeSnippetContent,
};
