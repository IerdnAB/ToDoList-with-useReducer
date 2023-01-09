
import { useReducer, useState } from 'react';
import './App.css';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'

}

function reducer(todo, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todo, newTodo(action.payload.item)]
    case ACTIONS.TOGGLE_TODO:
      return todo.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todo.filter(todo => todo.id !== action.payload.id)
    default: 
    return todo



  }
}

function newTodo(item) {
  return { id: Date.now(), item: item, complete: false }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [item, setItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { item: item } })
    setItem('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={e => setItem(e.target.value)}></input>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  );
}

export default App;
