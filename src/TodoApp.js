import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(newItem) {
    const allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  render() {
    return (
      <div>
        <TodoBanner />
        <TodoList items={this.state.items} />
        <TodoForm onFormSubmit={this.updateItems} />
      </div>
    );
  }
}

export default TodoApp;
