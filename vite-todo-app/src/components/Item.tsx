import React from "react";

interface ItemProps {
  id: ID;
  title: string;
  completed: boolean;
  todoData: TodoData[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoData[]>>;
  handleClick: (id: ID) => void;
}

const Item = React.memo(
  ({ id, title, completed, todoData, setTodoData, handleClick }: ItemProps) => {
    console.log("Item Component");
    const getLineThrough = (completed: boolean) => {
      return {
        textDecoration: completed ? "line-through" : "none",
      };
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
      <li key={id} className="todo-item">
        <div style={getLineThrough(completed)}>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
            name=""
            id=""
          />
          {title}
        </div>
        <button className="todo-x-btn" onClick={() => handleClick(id)}>
          x
        </button>
      </li>
    );
  }
);

export default Item;
