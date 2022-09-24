import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => ({
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none",
  });

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodoData);
  };
  return (
    <div>
      {todoData.map(({ id, title, completed }) => (
        <div style={getStyle(completed)} key={id}>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
            style={{
              cursor: "pointer",
            }}
          />
          {title}
          <button style={btnStyle} onClick={() => handleClick(id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
