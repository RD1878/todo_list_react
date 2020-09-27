import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import FilterButtons from '../FilterButtons';
import AddItemForm from '../AddItemForm';
import _ from 'lodash';
import './App.css';

export default class App extends React.Component {
  state = {
    todos: [
      {id: _.uniqueId(), text: 'Выпить кофе 1', important: false, done: false},
      {id: _.uniqueId(), text: 'Выпить кофе 2', important: true, done: false},
      {id: _.uniqueId(), text: 'Выпить кофе 3', important: false, done: false},
    ],
  }
  
  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const deletedIndex = todos.findIndex((item) => id === item.id);
      const newTodos = [
        ...todos.slice(0, deletedIndex),
        ...todos.slice(deletedIndex + 1)
      ];
      return {
        todos: newTodos,
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      id: _.uniqueId(),
      text,
      important: false
    };
    this.setState(({ todos }) => {
      const newTodos = [...todos, newItem];
      return {
        todos: newTodos,
      }
    })
  }

  toggleProperty = (id, arr, property) => {
    const toggledIndex = arr.findIndex((element) => element.id === id);
      const toggledItem = arr[toggledIndex];
      const toggleProperty = toggledItem[property];
      const newItem = {...toggledItem, [property]: !toggleProperty}
      return [
        ...arr.slice(0, toggledIndex),
        newItem,
        ...arr.slice(toggledIndex + 1)  
      ];
  }

  toggleImportant = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(id, todos, 'important')
      }
    })
  }

  toggleDone = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(id, todos, 'done')
      }
    })
  }
  
  render() {
    const { todos } = this.state;
    const countDoneItems = todos
      .filter((element) => element.done)
      .length;
    const countTodoItems = todos.length - countDoneItems;
    return (
      <div className="app">
        <AppHeader toDo={countTodoItems} done={countDoneItems} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <FilterButtons />
        </div>
        <TodoList
          todos={todos}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone} />
        <AddItemForm 
          onAdded={this.addItem}/>
      </div>
    );
  }
}