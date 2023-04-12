import React from "react";
import Item from "./Item";

interface ListProps {
  todoData: TodoData[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoData[]>>;
}

const List = React.memo(({ todoData, setTodoData }: ListProps) => {
  console.log("List Component");
  return (
    <div>
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
