import React from "react";

interface FormProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ inputValue, setInputValue, handleSubmit }: FormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
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
  );
}

export default Form;
