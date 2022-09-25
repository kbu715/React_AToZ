import React, { useState } from "react";

export default function Item({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick,
}) {
  console.log("Item is Rendering");

  const [isEditing, setIsEditing] = useState(false);
  const [editedTile, setEditedTitle] = useState(title);

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.title = editedTile;
      }
      return todo;
    });

    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded">
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center">
            <input
              value={editedTile}
              onChange={handleEditChange}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            />
          </div>
          <div className="flex items-center">
            <button className="float-right px-4 py-2" type="submit">
              Save
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              x
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className="truncate">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
            className="mr-2"
          />
          <span className={`${completed ? "line-through" : undefined}`}>
            {title}
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="float-right px-4 py-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}
