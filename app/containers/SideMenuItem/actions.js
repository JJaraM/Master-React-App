import { EXPAND, EXPAND_SUCCESS } from './constants';

export function collapse(identifier) {
  return {
    type: EXPAND,
    identifier,
  };
}

export function collapseSuccess(identifiers) {
  return {
    type: EXPAND_SUCCESS,
    identifiers,
  };
}
