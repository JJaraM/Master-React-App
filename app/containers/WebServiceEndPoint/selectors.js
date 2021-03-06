import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWebServiceEndPointDomain = state =>
  state.webServiceEndPoint || initialState;

const makeSelectWebServiceEndPoint = () =>
  createSelector(
    selectWebServiceEndPointDomain,
    substate => substate,
  );

const selectedWebServiceInformation = () =>
  createSelector(
    selectWebServiceEndPointDomain,
    substate => substate.items,
  );

const getFilterText = () =>
  createSelector(
    selectWebServiceEndPointDomain,
    substate => substate.text,
  );

const getCollapse = () =>
  createSelector(
    selectWebServiceEndPointDomain,
    substate => substate.collapse,
  );
  

export default makeSelectWebServiceEndPoint;
export { selectWebServiceEndPointDomain, selectedWebServiceInformation, getFilterText,getCollapse };
