import { useState } from 'react';

function TodosItem({ text, checked, id, deleteTodo, editTodo, changeChecked }) {
    const [isEdit, setIsEdit] = useState(false);
    const [newText, setNewText] = useState(text);
    
    

    const inputEditText = (e) => {
        const text = e.target.value;
        setNewText(text)
    }

    const confirmEdit = (id) => {
        if(newText !== '') {
            editTodo(id, newText);
        } else setNewText(text)
        setIsEdit(!isEdit);
    }

    const cancelEdit = () => {
        setNewText(text);
        setIsEdit(!isEdit)
    }

    const handleChangeChecked = () => {
        changeChecked(id)
    }



    return (
        <div className="todo">
        {isEdit ? (
            <>
            <input value={newText} onChange={(e) => inputEditText(e)}/>
            <button onClick={() => confirmEdit(id)}>Apply</button>
            <button onClick={() => cancelEdit(id, text)} >Cancel</button>
            </>
        ) : (
            <>
             <p className={checked ? 'checked' : ''}>{text}</p>
            <input type='checkbox' checked={checked} onChange={handleChangeChecked}/>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            <button onClick={() => deleteTodo(id)} >Delete</button>
            </>
        )
           
        }
        </div>
    )
}

export default TodosItem;