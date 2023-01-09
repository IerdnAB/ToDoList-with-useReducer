import React from 'react'
import './Todo.css';
import { ACTIONS } from './App.js';

export default function Todo({ todo, dispatch }) {
    return (
        <div className="container">
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
            <div className="text-box" style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.item}
            </div>

            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div >
    )
}
