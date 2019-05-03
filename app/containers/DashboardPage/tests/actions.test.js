import { loadMenuOptions } from '../actions';
import { LOAD_ITEMS } from '../constants';

describe('DashboardPage actions', () => {
  describe('Load Action', () => {
    it('has a type of LOAD_ITEMS', () => {
      const expected = {
        type: LOAD_ITEMS,
      };
      expect(loadMenuOptions()).toEqual(expected);
    });
  });
});
