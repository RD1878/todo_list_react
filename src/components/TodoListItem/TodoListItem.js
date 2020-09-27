import React from 'react';
import cn from 'classnames';
import './TodoListItem.css'

export default class TodoListItem extends React.Component { 
    render() {  
        const { 
            text,
            important,
            done, 
            onDeleted,
            onToggleImportant,
            onToggleDone
        } = this.props;
        
        const textClassnames = cn('todo-list-item', { done, important })
        
        return (
            <span className={textClassnames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {text}
                </span>
    
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>
    
                <button 
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}