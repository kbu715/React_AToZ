import React, { useState } from "react";

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
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

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

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditedTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <li key={id} className="todo-item">
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              onChange={handleEditChange}
              autoFocus
              className="todo-item-edit-input"
            />
            <button type="submit" className="todo-item-save-btn">
              save
            </button>
          </form>
          <button className="todo-x-btn" onClick={() => setIsEditing(false)}>
            x
          </button>
        </li>
      );
    } else {
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
          <div className="todo-item-btn-group">
            <button
              className="todo-edit-btn"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              edit
            </button>
            <button className="todo-x-btn" onClick={() => handleClick(id)}>
              x
            </button>
          </div>
        </li>
      );
    }
  }
);

export default Item;
