import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the themePage state domain
 */

const selectThemePageDomain = state => state.theme || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ThemePage
 */

const makeSelectThemePage = () =>
  createSelector(
    selectThemePageDomain,
    substate => substate,
  );

const makeSelectItems = () =>
  createSelector(
    selectThemePageDomain,
    substate => substate.items,
  );

export { makeSelectThemePage, selectThemePageDomain, makeSelectItems };
