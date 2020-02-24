import { SELECTION, ITEMS } from './constants';

export function select(language) {
  return {
    type: SELECTION,
    language,
  };
}

export function saveItems(items) {
  return {
    type: ITEMS,
    items,
  };
}

