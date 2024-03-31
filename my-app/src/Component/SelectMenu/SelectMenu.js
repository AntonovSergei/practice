function SelectMenu({ menuItems, onChange, selectedValue }) {

  return (
    <select onChange={onChange} value={selectedValue}>
      <option value=''>Выберите категорию</option>
      {menuItems.map((item) => (
// для массива из объектов
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default SelectMenu;
