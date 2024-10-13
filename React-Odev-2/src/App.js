import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

const filterTypes = ["All", "Active", "Completed"];

function App() {
  const [filter, setFilter] = useState("All");

  const [todoList, setTodoList] = useState([
    { id: 1, isCompleted: true, label: "Learn JavaScript" },
    { id: 2, isCompleted: false, label: "Learn React" },
    { id: 3, isCompleted: false, label: "Have a life!" },
  ]);

  const filteredTodos = todoList.filter((item) => {
    if (filter === "All") {
      return item;
    } else if (filter === "Completed") {
      return item.isCompleted;
    } else {
      return !item.isCompleted;
    }
  });

  const onChangeFilter = (e) => setFilter(e.target.innerText);

  const onClickClearCompleted = () => {
    setTodoList(todoList.filter((item) => !item.isCompleted));
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Input addFunc={setTodoList} />
      </header>

      <TodoList todoList={filteredTodos} setTodoList={setTodoList}/>

      <footer className="footer">
        <span className="todo-count">
          <strong>{todoList.filter(item => !item.isCompleted).length}</strong>
          items left
        </span>

        <ul className="filters">
          {filterTypes.map((item, i) => (
            <li key={i}>
              <a
                href="#/"
                className={filter === item ? "selected" : ""}
                onClick={onChangeFilter}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {todoList.some((item) => item.isCompleted) ? (
          <button className="clear-completed" onClick={onClickClearCompleted}>
            Clear completed
          </button>
        ) : (
          ""
        )}
      </footer>
    </div>
  );
}

export default App;
