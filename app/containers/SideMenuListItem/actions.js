import {
  EXPAND,
  EXPAND_SUCCESS,
} from './constants';

export function collapse(identifier) {
  return {
    type: EXPAND,
    identifier,
  };
}

export function collapseSuccess(collapse, identifiers) {
  return {
    type: EXPAND_SUCCESS,
    collapse,
    identifiers,
  };
}
