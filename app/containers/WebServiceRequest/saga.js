import { call, put, select, takeLatest } from 'redux-saga/effects';
import { EXECUTE } from './constants';
import { selectMethod, selectUrl, selectedItem } from './selectors';
import { selectedWebService } from 'containers/ItemWebService/selectors';
import { saveResponse, history } from './actions';
import { selectedWebServiceInformation } from 'containers/WebServiceEndPoint/selectors';
import request from 'utils/request';

export default function* init() {
  yield takeLatest(EXECUTE, execute);
}

export function* execute() {
    const method = yield select(selectMethod());
    const url = yield select(selectUrl());
    const selection = yield select(selectedItem());
    const webService = yield select(selectedWebService());
    const webServiceInfo = yield select(selectedWebServiceInformation());

    const item = selection.filter(x => 
        x.method === method &&
        x.url === url 
    );

    const queryValues = item.filter(x => x.parameterType === 'query')
        .map(x => x.parameterName + "=" + encodeURIComponent(x.value));
    const pathVariables = item.filter(x => x.parameterType === 'path')
    let scheme = webServiceInfo.schemes === undefined ? "http" : webServiceInfo.schemes[0];
    const basePath = webServiceInfo.basePath === '/' ? "" : webServiceInfo.basePath;

    let requestURL = scheme
    + "://" + webServiceInfo.host + basePath + url + '?' + queryValues.join('&');
 
    if (pathVariables.length > 0) {
        pathVariables.forEach(x => {
            requestURL = requestURL.replace(`{${x.parameterName}}`, encodeURIComponent(x.value));
        });
    }

    const date = new Date();
    const response = yield call(fetch, requestURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    const json = yield call([response, response.json]) ;

    yield put(history(response, json, method, url, webService.address, requestURL, date));
    yield put(saveResponse(response, json, method, url, webService.address, requestURL, date));
 

}

