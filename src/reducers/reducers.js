/**
 * Created by Administrator on 2016/9/13.
 */
import {combineReducers } from 'redux';
import assign from 'object-assign';
import { ADD_TODO, COMPLETE_TODO} from '../actions/actions';
import actionTypes from '../contants/actionTypes';
import visibilityFilters  from '../contants/visibilityFilters';

const {SHOW_ALL} = visibilityFilters;

/**
 *  创建filter的reducer.
 * @param state 下一个的state
 * @param action 下一个的action
 * @returns {*}
 */
function visibilityFilter(state = SHOW_ALL, action) {
   switch (action.type){
     case actionTypes.SET_VISIBILITY_FILTER:
       return action.filter;
     default:
       return state;
   }
}

/**
 * 创建todos 列表的reducer
 * @param state
 * @param action
 */
function todos(state = [], action) {
   switch (action.type){
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
     default:
       return state;
   }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
