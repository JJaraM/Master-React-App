import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectItemEndPointDomain = state =>
  state.itemEndPoint || initialState;

const makeSelectItemEndPointDomain = () =>
  createSelector(
    selectItemEndPointDomain,
    substate => substate,
  );

const selectedEndPoint = () =>
  createSelector(
    selectItemEndPointDomain,
    substate => substate.item,
  );

export default makeSelectItemEndPointDomain;
export { selectItemEndPointDomain, selectedEndPoint };
