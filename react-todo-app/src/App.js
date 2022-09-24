import React, { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
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
    setValue("");

    inputRef.current.focus();
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
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
