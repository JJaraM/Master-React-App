import { put, select, takeLatest } from 'redux-saga/effects';
import { FETCH } from './constants';
import { fetchDone } from './actions';

export default function* init() {
  yield takeLatest(FETCH, onFetch);
}

export function* onFetch() {
  const items = [
    {
      description: "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
      version: "1.0.5",
      title: "Tag Microservice",
      url: "http://blog-microservice-tag.herokuapp.com/v2/api-docs",
      address: "http://blog-microservice-tag.herokuapp.com"
    },
    {
      description: "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
      version: "1.0.5",
      title: "Pet Microservice",
      url: "https://petstore.swagger.io/v2/swagger.json",
      address: "https://petstore.swagger.io"
    }
  ];
  yield put(fetchDone(items));
}

