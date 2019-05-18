import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCodeSnippetLanguageHeaderDomain = state =>
  state.codeSnippetLanguageHeader || initialState;

const makeSelectCodeSnippetLanguageHeader = () =>
  createSelector(
    selectCodeSnippetLanguageHeaderDomain,
    substate => substate,
  );

const makeSelectShowAdd = () =>
  createSelector(
    selectCodeSnippetLanguageHeaderDomain,
    substate => substate.viewShowAdd,
  );

const makeSelectLanguage = () =>
  createSelector(
    selectCodeSnippetLanguageHeaderDomain,
    substate => substate.language,
  );

export {
  selectCodeSnippetLanguageHeaderDomain,
  makeSelectCodeSnippetLanguageHeader,
  makeSelectShowAdd,
  makeSelectLanguage,
};
