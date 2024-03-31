import { useState } from "react";
import Button from "../../../Component/Button/Button";
import "./costAccounting.css";
import SelectMenu from "../../../Component/SelectMenu/SelectMenu";

const icons = [
  "👕",
  "💍",
  "💄",
  "🥁",
  "📱",
  "📷",
  "📕",
  "⚙️",
  "🍀",
  "🪒",
  "🏀",
  "🎓",
];

function CostAccounting() {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [categories, setCategories] = useState([]);
  const [isVisibleIcons, setIsVisibleIcons] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [addAmount, setAddAmount] = useState(0);

  // function button
  const handleClickIcon = () => {
    if (categoryName === "") {
      return;
    }
    setIsVisibleIcons(!isVisibleIcons);
  };

  const handleClickCategory = () => {
    const text = categoryName.trim();
    if (text === "" || selectedIcon === "") {
      return;
    }
    if (categories.find((category) => category.name === text)) {
      alert(
        `Категория: ${text} - уже существует! Измените название категории.`
      );
      return;
    }

    const newCategory = {
      id:
        categories.length === 0 ? 1 : categories[categories.length - 1].id + 1,
      name: text,
      icon: selectedIcon,
      amount: 0,
    };
    setCategories([...categories, newCategory]);
    setCategoryName("");
    setIsVisibleIcons(false);
    setSelectedIcon("");
  };

  const handleChange = (e) => {
    setAddAmount(0);
    const selectedItem = e.target.value;
    setSelectedId(selectedItem);
  };

  const handleChoseIcon = (icon) => {
    setSelectedIcon(icon);
    setIsVisibleIcons(!isVisibleIcons);
  };

  const addNumber = (number) => {
    if (selectedId === 0) {
      return;
    }
    let string = String(addAmount) + String(number);
    const newAmount = Number(string);
    setAddAmount(newAmount);
  };

  const handleClickClear = () => {
    setAddAmount(0);
  };

console.log(typeof(selectedId))

  const handleClickAdd = () => {
    const updateCategories = [...categories].map((category) =>{
      console.log(selectedId, category.id)
      if(selectedId === category.id) {
        return { ...category, amount: category.amount + addAmount };
      }
      return category;
    }
      // selectedId === category.id
      //   ? { ...category, amount: category.amount + addAmount }
      //   : category
    );
    setCategories(updateCategories);
    setSelectedId(0);
    setAddAmount(0);
  };

  return (
    <div className="cost-accounting">
      <div className="cost-accounting__output">
        <h2 className="cost-accounting__subtitle">
          Приложение по учету расходов
        </h2>
        <div className="output__category">
          {categories.map((category) => (
            <p key={category.id}>
              {category.icon} {category.name} {category.amount} ₽
            </p>
          ))}
        </div>
      </div>
      <div className="cost-accounting__addCategory">
        <h3 className="cost-accounting__subtitle">Добавить категорию:</h3>
        {selectedIcon ? <p>Выбранная иконка: {selectedIcon}</p> : null}
        <div className="cost-accounting__category">
          <label htmlFor="input" className="cost-accounting__input">
            Введите название:{" "}
          </label>
          <input
            className="input"
            type="text"
            id="input"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        {isVisibleIcons ? (
          <ul className="category_icon">
            {icons.map((icon, index) => (
              <li key={index} onClick={() => handleChoseIcon(icon)}>
                {icon}
              </li>
            ))}
          </ul>
        ) : selectedIcon ? (
          <Button
            className="button_icon"
            onClick={handleClickIcon}
            text="🤔 Изменить иконку"
          />
        ) : (
          <Button
            className="button_icon"
            onClick={handleClickIcon}
            text="🤔 Выбрать иконку"
          />
        )}
        <Button
          className="button_new"
          onClick={handleClickCategory}
          text="✅ Новая категория"
        />
      </div>
      <div className="cost-accounting__addAccounting">
        <h3 className="cost-accounting__subtitle">Добавить расход</h3>
        <div className="selectСategory">
          <SelectMenu
            menuItems={categories}
            onChange={handleChange}
            selectedValue={selectedId}
          />
        </div>
        <p className="cost-accounting__amount">{addAmount} рублей</p>
        <div className="cost-accounting__buttons">
          {Array.from({ length: 10 }, (_, i) => i).map((btn) => (
            <Button
              key={btn}
              className="button_number"
              onClick={() => addNumber(btn)}
              text={btn}
            />
          ))}
        </div>
        <Button
          className="button_clear"
          onClick={() => handleClickClear()}
          text="Очистить"
        />
        <Button
          className="button_add"
          onClick={() => handleClickAdd()}
          text="✅ Добавить"
          disabled={addAmount === 0}
        />
      </div>
    </div>
  );
}

export default CostAccounting;
