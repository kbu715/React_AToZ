import { useState, useCallback } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  console.log("App Component");
  const initialData = [
    {
      id: "1",
      title: "vite 공부",
      completed: false,
    },
    {
      id: "2",
      title: "TS 공부",
      completed: true,
    },
  ];
  const [todoData, setTodoData] = useState<TodoData[]>(initialData);
  const [inputValue, setInputValue] = useState("");

  const handleClick = useCallback(
    (id: ID) => {
      let newTodoData = todoData.filter((item) => item.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
  };

  const handleRemoveAll = useCallback(() => {
    setTodoData([]);
  }, []);

  return (
    <div className="container">
      <section className="todo-box">
        <header className="todo-header">
          <h2>할 일 목록</h2>
          {todoData.length > 0 && (
            <button onClick={handleRemoveAll}>Delete All</button>
          )}
        </header>
        <List
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
      </section>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
