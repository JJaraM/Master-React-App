import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the themeItem state domain
 */

const selectThemeItemDomain = state => state.themeItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ThemeItem
 */

const makeSelectThemeItem = () =>
  createSelector(
    selectThemeItemDomain,
    substate => substate,
  );

export default makeSelectThemeItem;
export { selectThemeItemDomain };
