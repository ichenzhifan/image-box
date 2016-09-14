import assign from 'object-assign';
import {ADD_TODO, COMPLETE_TODO} from '../actions/todoActions';
import actionTypes from '../contants/actionTypes';

/**
 * 创建todos 列表的reducer
 * @param state
 * @param action
 */
export default function todos(state = [], action) {
  switch (action.type) {
    // 如果是新增的action, 那就直接添加一条新的.
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    // 如果是completed的action, 就要把制定的item的completed改成true
    case actionTypes.COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    case actionTypes.FETCH_RESPONSE:
      return [...state, ...action.data];
    default:
      return state;
  }
}
