import {
  DEFAULT_ACTION,
  SHOW_ADD,
  ON_CHANGE_LANGUAGE,
  ON_SAVE,
  ON_SAVE_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function showAdd(viewShowAdd) {
  return {
    type: SHOW_ADD,
    viewShowAdd,
  };
}

export function changeLanguage(language) {
  return {
    type: ON_CHANGE_LANGUAGE,
    language,
  };
}

export function saveForm() {
  return {
    type: ON_SAVE,
  };
}

export function saveLanguageSuccess() {
  return {
    type: ON_SAVE_SUCCESS,
    language: '',
    viewShowAdd: false,
  };
}
