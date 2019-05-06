import { put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CHANGE_THEME } from 'containers/ThemePage/constants';
import { LOAD_ITEMS, LOAD_COLLAPSE } from './constants';
import { menuOptionsLoaded, collapseLoaded } from './actions';
import { makeSelectionSideBarBig } from './selectors';
import themesData from './themes';
import menu from './menu';

export default function* init() {
  yield takeLatest(LOAD_ITEMS, getMenuItems);
  yield takeLatest(LOAD_COLLAPSE, collapse);
  yield takeLatest(LOAD_CHANGE_THEME, changeTheme);
}

export function* collapse() {
  const sidebarBig = yield select(makeSelectionSideBarBig());
  yield put(collapseLoaded(!sidebarBig));
}

export function* getMenuItems() {
  yield put(menuOptionsLoaded(menu));
}

export function* changeTheme() {
  let userConfigurationTheme = localStorage.getItem('theme');
  const defaultTheme = 'mnyama';
  if (
    userConfigurationTheme === null ||
    userConfigurationTheme === undefined ||
    userConfigurationTheme === ''
  ) {
    userConfigurationTheme = defaultTheme;
  }
  let theme = themesData.themes[userConfigurationTheme];
  if (theme === undefined) {
    theme = themesData.themes[defaultTheme];
  }
  Object.keys(theme).forEach(key => {
    const cssKey = `--${key}`;
    const cssValue = theme[key];
    document.body.style.setProperty(cssKey, cssValue);
  });
}
