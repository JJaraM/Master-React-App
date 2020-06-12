import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectorWebServiceHistory = state => 
  state.webServiceHistory || initialState;

const selectedItem = () =>
  createSelector(
    selectorWebServiceHistory,
    substate => substate.item,
  );

export { 
  selectorWebServiceHistory, 
  selectedItem
};
