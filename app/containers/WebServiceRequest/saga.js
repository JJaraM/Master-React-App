import { call, put, select, takeLatest } from 'redux-saga/effects';
import { EXECUTE } from './constants';
import { selectMethod, selectUrl, selectedItem } from './selectors';
import { selectedWebService } from 'containers/ItemWebService/selectors';
import { saveResponse } from './actions';

export default function* init() {
  yield takeLatest(EXECUTE, execute);
}

export function* execute() {
    const method = yield select(selectMethod());
    const url = yield select(selectUrl());
    const selection = yield select(selectedItem());
    const webService = yield select(selectedWebService());

    const item = selection.filter(x => 
        x.method === method &&
        x.url === url 
    );

    const queryValues = item.filter(x => x.parameterType === 'query')
        .map(x => x.parameterName + "=" + encodeURIComponent(x.value));
    const pathVariables = item.filter(x => x.parameterType === 'path')
    let requestURL = webService.address + url + '?' + queryValues.join('&');

    if (pathVariables.length > 0) {
        pathVariables.forEach(x => {
            requestURL = requestURL.replace(`{${x.parameterName}}`, encodeURIComponent(x.value));
        });
    }

    const response = yield call(fetch, requestURL);
    const json = yield call([response, response.json]) ;
    yield put(saveResponse(response, json, method, url, webService.address, requestURL));

}

