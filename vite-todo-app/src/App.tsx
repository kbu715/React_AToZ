import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

function App() {
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
  const getLineThrough = (completed: boolean) => {
    return {
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id: ID) => {
    let newTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(newTodoData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCompleteChange = (id: ID) => {
    let newTodoData = todoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <section className="todo-box">
        <header>
          <h2>할 일 목록</h2>
        </header>
        {todoData.length ? (
          <ul className="todo-list">
            {todoData.map((item) => (
              <li key={item.id} className="todo-item">
                <div style={getLineThrough(item.completed)}>
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={() => handleCompleteChange(item.id)}
                    name=""
                    id=""
                  />
                  {item.title}
                </div>
                <button
                  className="todo-x-btn"
                  onClick={() => handleClick(item.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>할 일 목록이 없습니다</p>
        )}
      </section>
      <form className="form-box" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="value"
          value={inputValue}
          onChange={handleChange}
          placeholder="해야 할 일을 입력하세요"
        />
        <input type="submit" className="btn" value="입력" />
      </form>
    </div>
  );
}

export default App;
