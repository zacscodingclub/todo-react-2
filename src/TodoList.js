import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const buildItem = (itemText) => {
      return (
        <TodoListItem text={itemText} />
      );
    };

    const buildList = this.props.items.map(buildItem);

    return (
      <ul>
        {buildList}
      </ul>
    );
  }
}

export default TodoList;
