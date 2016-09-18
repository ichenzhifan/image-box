/**
 * Created by Administrator on 2016/9/13.
 */
import {combineReducers} from 'redux';
import visibilityFilter from './filterReducer';
import  todos from './todoReducer';
import async from  './fetchReducer';

// reducer合成器, 用于分别处理不同的reducer.
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  async
});

export default todoApp;
