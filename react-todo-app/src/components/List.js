import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export default function List({ todoData, setTodoData }) {
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

  const handleEnd = (result) => {
    if (!result.destination) return;

    const newTodoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 지워주고
    // 2. return 값으로 지워진 아이템을 잡아준다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    // 3. 잡아준 아이템을 삽입한다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map(({ id, title, completed }, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index}>
                  {(provided, snapshot) => (
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
                        <span
                          className={completed ? "line-through" : undefined}
                        >
                          {title}
                        </span>
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
