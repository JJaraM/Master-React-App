import {
  SAVE_CODE_SNIPPET,
  SAVE_TYPE,
  SAVE_TITLE,
  SAVE,
  SAVE_SUCCESS,
} from './constants';

export function saveCodeSnippet(codeSnippet) {
  return {
    type: SAVE_CODE_SNIPPET,
    codeSnippet,
  };
}

export function saveType(language) {
  return {
    type: SAVE_TYPE,
    language,
  };
}

export function saveTitle(title) {
  return {
    type: SAVE_TITLE,
    title,
  };
}

export function saveForm() {
  return {
    type: SAVE,
  };
}

export function saveSuccess(save) {
  return {
    type: SAVE_SUCCESS,
    save,
  };
}
