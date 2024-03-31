import { useState } from "react";
import Button from "../../../Component/Button/Button";
import Input from "../../../Component/Input/Input";
import './TodoList.css'

function TodoList() {
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobbie: [],
  });
  const [category, setCategory] = useState(Object.keys(todos)[0]);

  const handleChange = (e) => {
    const newText = e.target.value;
  }

  return (
    <div className="todo-list">
      <div className="todo-list__category">
        {Object.keys(todos).map((todo) => (
          <Button
            key={todo}
            className={`todo-list__button_category_${todo}`}
            onClick={() => setCategory(todo)}
            text={todo}
          />
        ))}
      </div>
      <div className="todo-list__input">
        <Input
          type="text"
          className="todo-list__input_field"
          onChange={(e) => handleChange(e)}
        />
        <Button className="todo-list__button_todo_add" text="add" />
      </div>
    </div>
  );
}

export default TodoList;
