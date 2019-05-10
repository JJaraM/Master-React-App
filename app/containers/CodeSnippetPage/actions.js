import {
  DEFAULT_ACTION,
  LOAD_ALL_ITEMS,
  LOAD_ALL_ITEMS_SUCCESS,
  SELECTION,
  SELECTION_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadAllItems() {
  return {
    type: LOAD_ALL_ITEMS,
    loading: true,
  };
}

export function loadAllItemsSuccess(items, loading) {
  return {
    type: LOAD_ALL_ITEMS_SUCCESS,
    items,
    loading,
  };
}

export function selection(id) {
  return {
    type: SELECTION,
    id,
  };
}

export function selectionItem(item) {
  return {
    type: SELECTION_SUCCESS,
    item,
  };
}
