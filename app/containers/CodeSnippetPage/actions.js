import {
  LOAD_ALL_ITEMS,
  LOAD_ALL_ITEMS_SUCCESS,
  SELECTION_ID,
  SELECTION_SUCCESS,
  RENDER_ADD_VIEW,
  RENDER_ADD_VIEW_SUCCESS,
  RENDER_ADD_VIEW_CLOSE,
  REMOVE_CODE_SNIPPET,
  EDIT_SELECTION,
  RENDER_DELETE,
} from './constants';

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
    type: SELECTION_ID,
    id,
  };
}

export function selectionItem(item) {
  return {
    type: SELECTION_SUCCESS,
    item,
  };
}

export function loadAddView() {
  return {
    type: RENDER_ADD_VIEW,
    id: 0,
  };
}

export function selectRenderViewSuccess(renderAddView) {
  return {
    type: RENDER_ADD_VIEW_SUCCESS,
    renderAddView,
  };
}

export function closeAddView() {
  return {
    type: RENDER_ADD_VIEW_CLOSE,
  };
}

export function remove(idToRemove) {
  return {
    type: REMOVE_CODE_SNIPPET,
    idToRemove,
  };
}

export function edit(id) {
  return {
    type: RENDER_ADD_VIEW,
    id,
  };
}

export function renderDeletePopup(renderDelete) {
  return {
    type: RENDER_DELETE,
    renderDelete,
  };
}
