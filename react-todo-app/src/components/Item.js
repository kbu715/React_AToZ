import React from "react";

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
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodoData);
  };

  return (
    <div
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
      <div>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => handleCompleteChange(id)}
          style={{
            cursor: "pointer",
          }}
          className="mr-2"
        />
        <span className={completed ? "line-through" : undefined}>{title}</span>
      </div>
      <div className="flex items-center">
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
