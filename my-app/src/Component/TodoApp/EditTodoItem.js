

function EditTodoItem() {


    return (
        <>
        <input type={text} value={text} onChange={(e) => {e.target.value}}/>
        <button onClick={() => chnageTodo(id)}>Apply</button>
        <button onClick={() => } >Cancel</button>
        </>
    )
}

export default EditTodoItem;