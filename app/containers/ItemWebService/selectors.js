import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectItemWebServiceDomain = state =>
  state.itemWebService || initialState;

const selectedWebService = () =>
  createSelector(
    selectItemWebServiceDomain,
    substate => substate.item,
  );

export default selectItemWebServiceDomain;
export { selectItemWebServiceDomain, selectedWebService };
