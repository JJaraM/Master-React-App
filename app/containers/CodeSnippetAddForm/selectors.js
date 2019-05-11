import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCodeSnippetAddFormDomain = state =>
  state.codeSnippetAddForm || initialState;

const makeSelectCodeSnippet = () =>
  createSelector(
    selectCodeSnippetAddFormDomain,
    substate => substate.codeSnippet,
  );

const makeSelectType = () =>
  createSelector(
    selectCodeSnippetAddFormDomain,
    substate => substate.language,
  );

const makeSelectTitle = () =>
  createSelector(
    selectCodeSnippetAddFormDomain,
    substate => substate.title,
  );

export {
  selectCodeSnippetAddFormDomain,
  makeSelectCodeSnippet,
  makeSelectType,
  makeSelectTitle,
};
