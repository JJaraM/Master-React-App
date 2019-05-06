import produce from 'immer';
import { LOAD_CHANGE_THEME } from 'containers/ThemePage/constants';
import themesData from 'containers/DashboardPage/themes';

export const initialState = {
  items: renderThemes(),
};


function renderThemes() {
  let array = [];
  for(var k in themesData.themes) {
    array.push(themesData.themes[k]);
  }
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
