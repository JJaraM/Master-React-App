import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the examPage state domain
 */

const selectExamPageDomain = state => state.examPage || initialState;

const makeAllItems = () =>
   createSelector(
     selectExamPageDomain,
     substate => substate.items,
);

const makeSelectExamPage = () =>
  createSelector(
    selectExamPageDomain,
    substate => substate,
  );

const makeSelectedOption = () =>
  createSelector(
      selectExamPageDomain,
      substate => substate.selectedOption,
  );

const makeSelectedOptions = () =>
  createSelector(
      selectExamPageDomain,
      substate => substate.options,
  );

const makeQuestionNumber = () =>
  createSelector(
      selectExamPageDomain,
      substate => substate.questionNumber,
  );

const makeSelectResults = () =>
  createSelector(
      selectExamPageDomain,
      substate => substate.results,
  );

export {
  selectExamPageDomain,
  makeSelectExamPage,
  makeAllItems,
  makeSelectedOption,
  makeSelectedOptions,
  makeSelectResults,
  makeQuestionNumber
};
