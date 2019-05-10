import produce from 'immer';
import { LOAD_CHANGE_THEME } from 'containers/ThemePage/constants';
import themesData from 'containers/DashboardPage/themes';

export const initialState = {
  items: renderThemes(),
};

function renderThemes() {
  const array = [];
  const properties = themesData.themes;

  Object.keys(properties).forEach(function loop(property) {
    if (property) {
      array.push(themesData.themes[property]);
    }
  });
  return array;
}

/* eslint-disable default-case, no-param-reassign */
const themePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_CHANGE_THEME:
        break;
    }
  });

export default themePageReducer;
