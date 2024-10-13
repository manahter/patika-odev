import React from "react";
import Item from "./Item";

function TodoList({ todoList, setTodoList }) {
  const updateTodoList = () => {
    setTodoList([...todoList]);
  };

  const onClickToggleAll = () => {
    todoList.map((item) => {
      item.isCompleted = true;
      return item
    });
    updateTodoList();
  };

  const deleteItem = (item) => {
    setTodoList(todoList.filter(todo => todo.id !== item.id))
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={onClickToggleAll}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {todoList.map((item) => (
          <Item key={item.id} item={item} update={updateTodoList} destroy={() => deleteItem(item)}/>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
