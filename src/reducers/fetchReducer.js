import assign from 'object-assign';
import actionTypes from '../contants/actionTypes';

/**
 * 用来处理ajax请求的reducer.
 * @param state
 * @param action
 */
export default function async(state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST:
      return assign({}, state, {
        status: 'pending',
        url: action.url
      });
    case actionTypes.FETCH_ERROR:
      return assign({}, state, {
        status: 'error',
        url: action.url
      });
    case actionTypes.FETCH_RESPONSE:
      return assign({}, state, {
        status: 'completed',
        data: action.data
      });
    default:
      return state;
  }
}
