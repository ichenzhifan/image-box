/**
 * Created by Administrator on 2016/9/14.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

// 中间件- logger
const loggerMiddleware = createLogger();

// 加入中间件, 用于创建store的方法.
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

/**
 * 用于创建一个store
 * @param {Object} initialState 初始值.
 */
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
