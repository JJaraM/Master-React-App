import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSideMenuListItem = state => state.sideMenuListItem || initialState;

const makeSelectSideMenuListItem = () =>
  createSelector(
    selectSideMenuListItem,
    sideMenuListItemState => sideMenuListItemState,
  );

const makeSelectCollapse = () =>
  createSelector(
    selectSideMenuListItem,
    sideMenuListItemState => sideMenuListItemState.collapse,
  );

const makeSelectIdToRender = () =>
  createSelector(
    selectSideMenuListItem,
    sideMenuListItemState => sideMenuListItemState.identifiers,
  );

export {
  selectSideMenuListItem,
  makeSelectSideMenuListItem,
  makeSelectCollapse,
  makeSelectIdToRender,
};
