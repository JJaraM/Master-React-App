import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCodeSnippetHeaderDomain = state =>
  state.codeSnippetHeader || initialState;

const makeShow = () =>
  createSelector(
    selectCodeSnippetHeaderDomain,
    substate => substate.show,
  );

const makeTitle = () =>
  createSelector(
    selectCodeSnippetHeaderDomain,
    substate => substate.title,
  );

export { 
  selectCodeSnippetHeaderDomain, 
  makeShow,
  makeTitle
};
