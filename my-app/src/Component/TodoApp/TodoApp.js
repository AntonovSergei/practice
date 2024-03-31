import { useState } from 'react';
import TodosItem from './TodosItem';

//! add search && sort

function TodoApp() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [type, setType] =useState('default')
    

    const inputText = (e) => {
        const text = e.target.value;
        setText(text)
    }

    const addTodo = () => {
        const removeSpace = text.trim();
        if(removeSpace !== '') {
            const todo = {
                id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
                text: text,
                checked: false,
            }
            setTodos([...todos, todo])
            setText('')
        }
    }

    const deleteTodo = (id) => {
        const filteredTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(filteredTodos)
    }

    const editTodo = (id, newText) => {
        const updateTodo = todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo);
        setTodos(updateTodo)
    }

    const changeChecked = (id) => {
        const updateTodo = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo);
        setTodos(updateTodo)
    }

    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));

    const changeSelectMenu = (e) => {
        const selected = e.target.value;
        setType(selected)
    }

    const sortedByType = () => {
        const sortedTodos = [...filteredTodos]
        if(type === 'default') {
            return filteredTodos;
        } if(type === 'completed') {
            return sortedTodos.sort((a,b) => a.checked < b.checked ? 1 : a.checked > b.checked ? -1 : 0);
        } if(type === 'byName') {
            return sortedTodos.sort((a,b) => a.text.localeCompare(b.text));
        }
    }


    console.log(sortedByType())

    return (
        <div className='TodoApp'>
            <h2>ToDo App</h2>
            <div className='input-todos'>
                <input value={text} onChange={(e) => inputText(e)} placeholder='write todo'/>
                <button onClick={addTodo}>Add</button>
            </div>
            <div className='search-todos'>
                <input type='search' onChange={(e) => setSearch(e.target.value)} placeholder='search by name'/>
            </div>
            <div className='sort-todos'>
                <p>Sort by:</p>
                <select onChange={(e) => changeSelectMenu(e)}>
                    <option value='default'>Default</option>
                    <option value='completed'>Completed</option>
                    <option value='byName'>By name</option>
                </select>
            </div>
            <div className='list-todos'>
                {todos.length === 0
                ?
                <p>Todo list is empty</p>
                :
                <>{sortedByType().map((todo) => (
                <TodosItem
                key={todo.id}
                text={todo.text}
                checked={todo.checked}
                id={todo.id}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                changeChecked={changeChecked}
                />
                ))}
                </>
                }
            </div>
        </div>
    )
}

export default TodoApp;

