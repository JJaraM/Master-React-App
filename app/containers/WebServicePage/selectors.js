import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectorWebServicePage = state => 
  state.webService || initialState;

const getItems = () =>
  createSelector(
    selectorWebServicePage,
    substate => substate.items,
  );

const getText = () =>
  createSelector(
    selectorWebServicePage,
    substate => substate.text,
  );

const getCollapse = () =>
  createSelector(
    selectorWebServicePage,
    substate => substate.collapse,
  );

export { 
    selectorWebServicePage, 
    getItems,
    getText,
    getCollapse
};
