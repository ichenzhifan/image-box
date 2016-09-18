/**
 * Created by Administrator on 2016/9/13.
 */
import React, {Component, PropTypes} from 'react';
import {shouldComponentUpdate} from 'react-immutable-render-mixin';

import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter} from '../../actions/todoActions';
import actionTypes from '../../contants/actionTypes';
import visibilityFilters  from '../../contants/visibilityFilters';
import 'normalize.css';

import AddTodo from '../../components/AddTodo/index';
import TodoList from '../../components/TodoList/index';
import Footer from '../../components/Footer/index';
import {fetchPosts} from '../../actions/todoActions';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
  }

  componentWillMount() {
    const {dispatch} = this.props;

    // 测试数据.
    dispatch(fetchPosts('../../src/sources/data.json'));
  }

  render() {
    // Injected by connect() call:
    const {dispatch, visibleTodos, visibilityFilter} = this.props;

    return (
      <div className="app">
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          }/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          }/>
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }/>
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  console.log(state);
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)


