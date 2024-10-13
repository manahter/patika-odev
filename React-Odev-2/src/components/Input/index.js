import { useState } from "react";

function Input({ addFunc }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    addFunc((preVal) => [
      ...preVal,
      {
        id: Math.max(...preVal.map((item) => item.id)) + 1,
        isCompleted: false,
        label: inputValue,
      },
    ]);

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default Input;
