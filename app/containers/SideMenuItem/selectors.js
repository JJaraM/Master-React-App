import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSideMenuItem = state => state.SideMenuItem || initialState;

const makeSelectSideMenuItem = () =>
  createSelector(
    selectSideMenuItem,
    SideMenuItemState => SideMenuItemState,
  );

const makeSelectCollapse = () =>
  createSelector(
    selectSideMenuItem,
    SideMenuItemState => SideMenuItemState.collapse,
  );

const makeSelectIdToRender = () =>
  createSelector(
    selectSideMenuItem,
    SideMenuItemState => SideMenuItemState.identifiers,
  );

export {
  selectSideMenuItem,
  makeSelectSideMenuItem,
  makeSelectCollapse,
  makeSelectIdToRender,
};
