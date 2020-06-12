import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectorWebServiceRequest = state => 
  state.webServiceRequest || initialState;

const selectedItem = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.item,
  );

const selectMethod = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.method,
  );


const selectUrl = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.url,
  );

const selectedResponse = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.response,
  );

const selectedResult = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.result,
  );

const selectedResponses = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.responses,
  );

const selectedHistory = () =>
  createSelector(
    selectorWebServiceRequest,
    substate => substate.history,
  );

export { 
  selectorWebServiceRequest, 
  selectedItem,
  selectMethod,
  selectUrl,
  selectedResponse,
  selectedResult,
  selectedResponses,
  selectedHistory
};
