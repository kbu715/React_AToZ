import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
export default function App() {
  console.log("App is Rendering");
  const initialData = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [];
  const [todoData, setTodoData] = useState(initialData);
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((todo) => todo.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (value === "") {
        alert("내용을 입력해주세요.");
        return;
      }

      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      };

      setTodoData((prev) => [...prev, newTodo]);
      localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
      setValue("");

      inputRef.current.focus();
    },
    [value]
  );

  const handleRemoveAllClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-5 m-4 bg-white rounded shadow lg:w-3/4 max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveAllClick}>Delete All</button>
        </div>

        <List
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
