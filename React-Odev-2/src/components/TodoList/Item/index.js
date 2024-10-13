import { useState, useRef, useEffect } from "react";

function Item({ item, update, destroy }) {
  const [editing, setEditing] = useState(false);

  const onChecked = () => {
    item.isCompleted = !item.isCompleted;
    update();
  };

  const onEditing = (e) => {
    item.label = e.target.value;
    update();
  };

  const ref = useRef(null); // Component'in referansı

  const handleClickOutside = (e) => {
    // Eğer tıklanan element component'in dışındaysa
    if (ref.current && ref.current !== e.target) {
      setEditing(false); // Component'i kapat
    }
  };

  useEffect(() => {
    // Document üzerinde click event dinleyici ekle
    document.addEventListener("mousedown", handleClickOutside);

    // Component unmount olduğunda dinleyiciyi temizle
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <li className={editing ? "editing" : item.isCompleted ? "completed" : ""}>
      {editing ? (
        <input
          ref={ref}
          className="edit"
          value={item.label}
          onChange={onEditing}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.isCompleted}
            onChange={onChecked}
          />
          <label onClick={() => setEditing(true)}>{item.label}</label>
          <button className="destroy" onClick={destroy}></button>
        </div>
      )}
    </li>
  );
}

export default Item;
