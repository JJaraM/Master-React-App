import { SHOW, CHANGE_TITLE, SAVE } from './constants';

export function show(show) {
  return {
    type: SHOW,
    show
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title
  };
}

export function save() {
  return {
    type: SAVE
  };
}