import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

export default ({ todos }) => {
    const items = todos.map((item) => {
        const { id, ...otherItemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...otherItemProps}
                />
            </li>
        );
    })
    
    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    )
};