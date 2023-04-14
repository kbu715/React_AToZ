import React from "react";
import Item from "./Item";

interface ListProps {
  todoData: TodoData[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoData[]>>;
  handleClick: (id: ID) => void;
}

function getStyle(len: number) {
  if (len === 0) {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  } else return undefined;
}

const List = React.memo(({ todoData, setTodoData, handleClick }: ListProps) => {
  console.log("List Component");
  return (
    <div style={getStyle(todoData.length)}>
      {todoData.length ? (
        <ul className="todo-list">
          {todoData.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
              todoData={todoData}
              setTodoData={setTodoData}
              handleClick={handleClick}
            />
          ))}
        </ul>
      ) : (
        <p>할 일 목록이 없습니다</p>
      )}
    </div>
  );
});

export default List;
