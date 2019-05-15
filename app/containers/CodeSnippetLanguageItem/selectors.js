import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCodeSnippetLanguageItemDomain = state =>
  state.codeSnippetLanguageItem || initialState;

const makeSelectLanguage = () =>
  createSelector(
    selectCodeSnippetLanguageItemDomain,
    substate => substate.language,
  );

const makeSelectCodeSnippets = () =>
  createSelector(
    selectCodeSnippetLanguageItemDomain,
    substate => substate.items,
  );


export { selectCodeSnippetLanguageItemDomain, makeSelectLanguage, makeSelectCodeSnippets };
