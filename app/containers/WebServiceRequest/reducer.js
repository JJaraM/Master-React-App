import produce from 'immer';
import { CHANGE, EXECUTE, RESPONSE, HISTORY } from './constants';

export const initialState = {
  item: [],
  method: '',
  url: '',
  address: '',
  requestURL: '',
  response: false,
  result: false,
  responses: [],
  history: [],
};

/* eslint-disable default-case, no-param-reassign */
const webServiceRequestReducer = (state = initialState, action) =>
  produce(state, draft => { 
    switch (action.type) {

      case EXECUTE:
        draft.method = action.method;
        draft.url = action.url;
        break;

      case HISTORY:
        const dataHistory = {
          response: action.response,
          result: action.result,
          method: action.method,
          url: action.url,
          address: action.address,
          requestURL: action.requestURL,
          date: action.date,
        }

        let resultHistory = {
            ...state,
            history: [
                ...state.history, 
                dataHistory
            ],
        };
        return resultHistory;

      case RESPONSE:
        const dataResponse = {
          response: action.response,
          result: action.result,
          method: action.method,
          url: action.url,
          address: action.address,
          requestURL: action.requestURL,
          date: action.date,
        }

        const indexResponse = state.responses.findIndex(x => 
          x.method === dataResponse.method &&
          x.url === dataResponse.url &&
          x.address === dataResponse.address
        );

        let resultResponse = {
            ...state,
            responses: [
                ...state.responses, 
                dataResponse
            ],
        };
      
        if (indexResponse > -1) {
          resultResponse = {
                ...state,
                responses: [
                    ...state.responses.slice(0, indexResponse),
                    dataResponse,
                    ...state.responses.slice(indexResponse + 1),
                ]
            }
        } 
        return resultResponse;

      case CHANGE:

        const data = {
            value: action.value,
            method: action.method,
            url: action.url,
            parameterName: action.parameterName,
            parameterType: action.parameterType
        }

        const index = state.item.findIndex(x => 
            x.method === data.method &&
            x.url === data.url &&
            x.parameterName === data.parameterName &&
            x.parameterType == data.parameterType
        );

        let result = {
          ...state,
          item: [
              ...state.item, 
              data
          ],
      };
    
      if (index > -1) {
          result = {
              ...state,
              item: [
                  ...state.item.slice(0, index),
                  data,
                  ...state.item.slice(index + 1),
              ]
          }
      } 
      return result;
    }
  });

export default webServiceRequestReducer;
