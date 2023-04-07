import React from "react";

interface ListProps {
  todoData: TodoData[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoData[]>>;
}

function List({ todoData, setTodoData }: ListProps) {
  const getLineThrough = (completed: boolean) => {
    return {
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id: ID) => {
    let newTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id: ID) => {
    let newTodoData = todoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.length ? (
        <ul className="todo-list">
          {todoData.map((item) => (
            <li key={item.id} className="todo-item">
              <div style={getLineThrough(item.completed)}>
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={() => handleCompleteChange(item.id)}
                  name=""
                  id=""
                />
                {item.title}
              </div>
              <button
                className="todo-x-btn"
                onClick={() => handleClick(item.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>할 일 목록이 없습니다</p>
      )}
    </div>
  );
}

export default List;
