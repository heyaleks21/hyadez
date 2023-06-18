import { useState } from "react";
import "./todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addTodo = () => {
    if (!newItem) return;
    const item = {
      id: todos.length + 1,
      value: newItem,
    };
    console.log(item);
    setTodos((oldArr) => [...oldArr, item]);
    setNewItem("");
  };
  return (
    <>
      <div className="form">
        <div className="form-body">
          <h2 className="heading-registration">To-do List</h2>
          <div>
            <input
              className="btn"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button className="btn" onClick={() => addTodo()}>
              Add
            </button>
          </div>
          {todos.map((item) => {
            return (
              <div className="tododiv" key={item.id}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: "#1f212e" }}
                />

                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
                <FontAwesomeIcon icon={faCheck} style={{ color: "#009e03" }} />
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Todolist;
