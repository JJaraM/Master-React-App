import { changeTheme } from '../actions';
import { LOAD_CHANGE_THEME } from '../constants';

describe('ThemePage actions', () => {
  describe('Default Action', () => {
    it('has a type of LOAD_CHANGE_THEME', () => {
      const expected = {
        type: LOAD_CHANGE_THEME,
      };
      expect(changeTheme()).toEqual(expected);
    });
  });
});
