import { DEFAULT_ACTION, LOAD_LANGUAGES, LOAD_LANGUAGES_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadLanguages() {
  return {
    type: LOAD_LANGUAGES,
  };
}

export function loadAllItemsSuccess(languages, loading) {
  return {
    type: LOAD_LANGUAGES_SUCCESS,
    languages,
    loading,
  };
}
