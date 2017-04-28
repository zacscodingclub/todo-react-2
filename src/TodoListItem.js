import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}

export default TodoListItem;
