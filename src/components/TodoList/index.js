/**
 * Created by Administrator on 2016/9/13.
 */
import React, { Component, PropTypes } from 'react';
import {shouldComponentUpdate} from 'react-immutable-render-mixin';

import Todo from '../Todo/index';
import './index.scss';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo {...todo}
                  key={index}
                  onClick={() => this.props.onTodoClick(index)} />
          )}
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
