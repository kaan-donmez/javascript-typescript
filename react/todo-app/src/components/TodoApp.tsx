import { useState } from "react";

function TodoApp() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo() {
    if (!item || todos.includes(item)) {
      return;
    }

    setTodos([...todos, item]);
    setItem("");
  }

  function deleteTodo(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <div className="header">Todo App</div>
      <input
        type="text"
        placeholder="add a todo"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="icon" onClick={() => deleteTodo(index)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
