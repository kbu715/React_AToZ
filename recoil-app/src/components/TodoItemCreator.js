import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../states";

export default function TodoItemCreator() {
  const inputRef = useRef(undefined);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    // 불변성을 지켜줌
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
    inputRef.current.focus();
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          ref={inputRef}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

// 고유한 Id 생성을 위한 유틸리티
function getId() {
  return new Date().getTime();
}
