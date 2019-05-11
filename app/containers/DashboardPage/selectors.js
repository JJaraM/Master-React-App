import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.dashboard || initialState;

const makeSelectDashboardPage = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState,
  );

const makeItems = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState.items,
  );

const makeSelectionSideBarBig = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState.sidebarBig,
  );

const makeSelectAlertMessages = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState.alertMessages,
  );

export {
  selectDashboard,
  makeItems,
  makeSelectDashboardPage,
  makeSelectionSideBarBig,
  makeSelectAlertMessages,
};
