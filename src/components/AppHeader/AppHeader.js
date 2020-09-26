import React from 'react';
import './AppHeader.css';

export default ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Список дел</h1>
            <p>{toDo} осталось сделать, {done} сделано</p>
        </div>
    );
}