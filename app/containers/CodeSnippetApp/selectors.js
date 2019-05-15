import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectCodeSnippetAppDomain = state =>
  state.codeSnippetApp || initialState;



const makeSelectCodeSnippetApp = () =>
  createSelector(
    selectCodeSnippetAppDomain,
    substate => substate,
  );

const makeSelectLanguages = () =>
  createSelector(
    selectCodeSnippetAppDomain,
    substate => substate.languages,
  );

export {
  selectCodeSnippetAppDomain,
  makeSelectCodeSnippetApp,
  makeSelectLanguages
};
