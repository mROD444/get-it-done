import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([]);
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="main">
        <h1>Get It Done!</h1>
        <p className='quick'>Remember, every small step counts. You got this!</p>
        <p className='cat'> ✩≽^•⩊•^≼☆</p>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{textDecoration: todo.completed ? "line-through" : "none",
            }}
            >
                {todo.text}
              <button
                className="delete"
                onClick={() => handleDelete(todo.id)}
                style={{ marginLeft: "30px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="What should we get done today?"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
      <footer>&copy; Maria Rodriguez</footer>
    </>
  );
};
export default ToDoList;
