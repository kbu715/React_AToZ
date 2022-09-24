import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Item from "./Item";
export default function List({ todoData, setTodoData }) {
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
                    <Item
                      id={id}
                      title={title}
                      completed={completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
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
