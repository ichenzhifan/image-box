/**
 * Created by Administrator on 2016/9/13.
 */
import React, { Component, PropTypes } from 'react';
import {shouldComponentUpdate} from 'react-immutable-render-mixin';
import './index.scss';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
