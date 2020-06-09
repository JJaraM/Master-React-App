import { 
  FETCH, 
  FETCH_DONE,
  FILTER,
  COLLAPSE
} from './constants';

export function fetch() {
  return {
    type: FETCH
  };
}

export function filter(text) {
  return {
    type: FILTER,
    text
  };
}

export function fetchDone(items) {
  return {
    type: FETCH_DONE,
    items
  };
}

export function collapse() {
  return {
    type: COLLAPSE,
  };
}
