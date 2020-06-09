import { CHANGE, EXECUTE, RESPONSE } from './constants';

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

