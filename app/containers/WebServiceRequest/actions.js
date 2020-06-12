import { CHANGE, EXECUTE, RESPONSE, PAGE_LOAD, HISTORY } from './constants';

export function change(value, method, url, parameterName, parameterType) {
  return {
    type: CHANGE,
    value, method, url, parameterName, parameterType
  };
}

export function execute(method, url) {
  return {
    type: EXECUTE,
    method, url
  };
}

export function saveResponse(response, result, method, url, address, requestURL, date) {
  return {
    type: RESPONSE,
    response,
    result,
    method, 
    url,
    address,
    requestURL,
    date
  };
}

export function history(response, result, method, url, address, requestURL, date) {
  return {
    type: HISTORY,
    response,
    result,
    method, 
    url,
    address,
    requestURL,
    date
  };
}

export function pageLoad() {
  return {
    type: PAGE_LOAD,
  }
}

