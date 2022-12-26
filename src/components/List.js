import React from 'react';

const List = ({ todos, setTodos, setEdit}) => {
  
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => (todo.id = id));
    setEdit(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
        <button className="btn btn-complete" onClick={() => handleComplete(todo)}>
          Done
        </button>
            <button className="btn btn-edit" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;

