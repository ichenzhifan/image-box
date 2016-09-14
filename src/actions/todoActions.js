import fetch from 'isomorphic-fetch';
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

export function fetchRequest(url) {
  return {
    type: actionTypes.FETCH_REQUEST,
    url
  };
}

export function fetchResponse(json) {
  return {
    type: actionTypes.FETCH_RESPONSE,
    data: json,
    receivedAt: Date.now()
  };
}

export function fetchError(err) {
  return {
    type: actionTypes.FETCH_ERROR,
    error: err
  };
}

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
