import fetch from 'isomorphic-fetch';
import actionTypes from '../contants/actionTypes';
import visibilityFilters  from '../contants/visibilityFilters';

/*
 * action创建函数, 用于定义创建一个新的todo的action
 * @param {string} text to do项的描述
 */
export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    text
  };
}

/**
 * action创建函数, 用于定义完成一个todo的action
 * @param {int} index 待完成的todo的索引.
 */
export function completeTodo(index) {
  return {
    type: actionTypes.COMPLETE_TODO,
    index
  };
}

/**
 * action创建函数, 用于定义过滤todo列表的action
 * @param filter 过滤条件.
 */
export function setVisibilityFilter(filter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
}

/**
 * action创建函数, 用于定义在发出一个ajax请求之前的action
 * @param {string} url 请求的url
 */
export function fetchRequest(url) {
  return {
    type: actionTypes.FETCH_REQUEST,
    url
  };
}

/**
 * action创建函数, 用于定义一个ajax请求完成时的action
 * @param {object} json ajax完成时的response.
 */
export function fetchResponse(json) {
  return {
    type: actionTypes.FETCH_RESPONSE,
    data: json,
    receivedAt: Date.now()
  };
}

/**
 * action创建函数, 用于定义ajax请求出错时的action
 * @param {object} err 请求出错时的错误对象
 */
export function fetchError(err) {
  return {
    type: actionTypes.FETCH_ERROR,
    error: err
  };
}

/**
 * action创建函数, 返回一个Function而不是对象, 中间件处理.
 * @param url
 */
export function fetchPosts(url) {
  return (dispatch, getState) => {
    return dispatch(getFetch(url));
  };
}

function getFetch(url) {
  return dispatch => {
    dispatch(fetchRequest(url));

    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchResponse(json)),
        err => dispatch(fetchError(err)));
  };
}
