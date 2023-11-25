import { useState } from "react";
import './InputOnChange.css'

function InputOnChange () {
  const [newValue, setNewValue] = useState('')

  return (
    <div className="input">
      <h3>{newValue}</h3>
      <input value={newValue} onChange={(e) => setNewValue(e.target.value)}/>
    </div>
)}

export default InputOnChange