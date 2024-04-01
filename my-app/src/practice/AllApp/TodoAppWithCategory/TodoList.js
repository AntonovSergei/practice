import { useState } from "react";
import Button from "../../../Component/Button/Button";
import Input from "../../../Component/Input/Input";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobbie: [],
  });
  const [category, setCategory] = useState(Object.keys(todos)[0]);
  const [text, setText] = useState("");

  const changeInputValue = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  
  const addNewTodo = () => {
    
  }

  return (
    <div className="todo-list">
      <div className="todo-list__category">
        {Object.keys(todos).map((todo) => (
          <Button
            key={todo}
            className={`todo-list__button_category_${todo} ${
              category === todo ? "active" : ""
            }`}
            onClick={() => setCategory(todo)}
            text={todo}
          />
        ))}
      </div>
      <div className="todo-list__input">
        <Input
          type="text"
          className="todo-list__input_field"
          onChange={(e) => changeInputValue(e)}
        />
        <Button className="todo-list__button_todo_add" onClick={addNewTodo} text="add" />
      </div>
    </div>
  );
}

export default TodoList;
