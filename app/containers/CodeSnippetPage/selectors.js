import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCodeSnippetPageDomain = state =>
  state.codeSnippetPage || initialState;

const makeSelectCodeSnippetPage = () =>
  createSelector(
    selectCodeSnippetPageDomain,
    substate => substate,
  );

const makeAllItems = () =>
  createSelector(
    selectCodeSnippetPageDomain,
    substate => substate.items,
  );

const makeSelectionId = () =>
  createSelector(
    selectCodeSnippetPageDomain,
    substate => substate.id,
  );

const makeSelectionItem = () =>
  createSelector(
    selectCodeSnippetPageDomain,
    substate => substate.item,
  );

const makeLoading = () =>
  createSelector(
    selectCodeSnippetPageDomain,
    substate => substate.loading,
  );

const makeRenderAddView = () =>
  createSelector(
    selectCodeSnippetPageDomain,
    substate => substate.renderAddView,
  );

export {
  selectCodeSnippetPageDomain,
  makeSelectCodeSnippetPage,
  makeAllItems,
  makeSelectionId,
  makeSelectionItem,
  makeLoading,
  makeRenderAddView,
};
