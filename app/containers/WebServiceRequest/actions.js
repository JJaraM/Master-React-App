import { CHANGE, EXECUTE, RESPONSE, PAGE_LOAD } from './constants';

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

export function saveResponse(response, result, method, url, address, requestURL) {
  return {
    type: RESPONSE,
    response,
    result,
    method, 
    url,
    address,
    requestURL
  };
}

export function pageLoad() {
  return {
    type: PAGE_LOAD,
  }
}

