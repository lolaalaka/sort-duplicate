const Todo = ({text, setTodos, todos, todo, count,times, bra, cket}) => {

    const deleteHandler = ()=>{
        setTodos(todos.filter( (el) => el.id !== todo.id))
    }
    
    
    return (  
        <div className="todo">
            <li className={"todo-item" }>{text}    {bra}{count}{times}{cket}</li>
           
            <button onClick={ deleteHandler} className="trash-btn">
                <i className="fas fa-trash "></i>
            </button>
        </div>
    );
}
 
export default Todo;