import { useRef, useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = '';
  };
  const handleItemDone = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed;
    setTodos(newtodos);
  };
  const handleDeleteItem = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setTodos(newtodos);
  };
  return (
    <>
      <div className="App">
        <h2>To Do List</h2>
        <div className="container">
          <ul>
            {todos.map(({ text, completed }, index) => {
              return (
                <div key={index} className="item">
                  <li
                    className={completed ? 'done' : ''}
                    onClick={() => handleItemDone(index)}
                  >
                    {text}
                  </li>
                  <span className="poi" onClick={() => handleDeleteItem(index)}>
                    ❌
                  </span>
                </div>
              );
            })}
          </ul>
          <input ref={inputRef} placeholder="enter item" />
          <button onClick={handleAddTodo}>ADD</button>
        </div>
      </div>
    </>
  );
}

export default App;
