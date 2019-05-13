/*
 *
 * CodeSnippetPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOAD_ALL_ITEMS,
  LOAD_ALL_ITEMS_SUCCESS,
  SELECTION,
  SELECTION_SUCCESS,
  RENDER_ADD_VIEW,
  RENDER_ADD_VIEW_SUCCESS,
  RENDER_ADD_VIEW_CLOSE,
  REMOVE_CODE_SNIPPET,
  RENDER_EDIT_CODE_SNIPPET,
  EDIT_SELECTION,
} from './constants';

/*
 * Possible values for loading:
 * 0 = Not Loading
 * 1 = Loading
 * 3 = Error
 */
export const initialState = {
  items: [],
  id: 0,
  item: null,
  loading: 0,
  renderAddView: false,
  idToRemove: 0,
  action: '',
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case LOAD_ALL_ITEMS:
        draft.items = [];
        break;

      case LOAD_ALL_ITEMS_SUCCESS:
        draft.items = action.items;
        draft.loading = action.loading;
        break;

      case SELECTION:
        draft.id = action.id;
        break;

      case SELECTION_SUCCESS:
        draft.item = action.item;
        break;

      case RENDER_ADD_VIEW:
        draft.renderAddView = true;
        draft.id = action.id;
        break;

      case RENDER_ADD_VIEW_SUCCESS:
        draft.renderAddView = true;
        break;

      case RENDER_ADD_VIEW_CLOSE:
        draft.renderAddView = false;
        break;

      case REMOVE_CODE_SNIPPET:
        draft.idToRemove = action.idToRemove;
        break;

      case EDIT_SELECTION:
        draft.id = action.id;
        break;
    }
  });

export default codeSnippetPageReducer;
