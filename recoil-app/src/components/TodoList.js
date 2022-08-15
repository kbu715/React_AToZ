import { useRecoilValue } from "recoil";
import { todoListState } from "../states";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="container">
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
