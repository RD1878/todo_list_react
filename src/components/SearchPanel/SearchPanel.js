import React from 'react';
import './SearchPanel.css';

export default () => {
    return (
        <input 
            type='text'
            placeholder='поиск дела'
            className='form-control search-field' />
    )
}