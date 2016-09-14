/**
 * Created by Administrator on 2016/9/13.
 */

import actionTypes from '../contants/actionTypes';
import visibilityFilters  from '../contants/visibilityFilters';

/*
 * action创建函数
 * */
export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    text
  };
}

export function completeTodo(index) {
  return {
    type: actionTypes.COMPLETE_TODO,
    index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
}
