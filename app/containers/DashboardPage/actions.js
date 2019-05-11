import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_COLLAPSE,
  LOAD_COLLAPSE_SUCESS,
  SAVE_ALERT_MESSAGES,
} from './constants';

export function menuOptionsLoaded(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function loadMenuOptions() {
  return {
    type: LOAD_ITEMS,
  };
}

export function actionCollapse() {
  return {
    type: LOAD_COLLAPSE,
  };
}

export function collapseLoaded(sidebarBig) {
  return {
    type: LOAD_COLLAPSE_SUCESS,
    sidebarBig,
  };
}

export function saveAlertMessages(alertMessages) {
  return {
    type: SAVE_ALERT_MESSAGES,
    alertMessages,
  };
}
