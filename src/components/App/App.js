import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import FilterButtons from '../FilterButtons';
import _ from 'lodash';
import './App.css';

const App = () => {
  const todos = [
    {id: _.uniqueId(), text: 'Выпить кофе 1', important: false},
    {id: _.uniqueId(), text: 'Выпить кофе 2', important: true},
    {id: _.uniqueId(), text: 'Выпить кофе 3', important: false},
  ];
  
  return (
    <div className="app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <FilterButtons />
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;