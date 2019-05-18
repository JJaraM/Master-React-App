import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the examPage state domain
 */

const selectExamPageDomain = state => state.examPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExamPage
 */

const makeSelectExamPage = () =>
  createSelector(
    selectExamPageDomain,
    substate => substate,
  );

export default makeSelectExamPage;
export { selectExamPageDomain };
