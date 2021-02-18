const Form = ({ setinputText, todos, setTodos, inputText, setStatus }) => {
   
    // javascript code
    const inputTextHandler = (e)=>{

      setinputText(e.target.value)
    }

    const submitTodoHandler = (e) =>{
      e.preventDefault();

      setTodos([
        ...todos,
        { text: inputText,  id: Math.floor(Math.random() * 100) }
      ]);
       
      setinputText('');
    }

    const statusHandler = (e) =>{
      setStatus(e.target.value) ;
    }


    return (  
        <form>
        <input value= {inputText} onChange = { inputTextHandler } type="text" className="todo-input" />

        <button onClick = { submitTodoHandler } className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        

        <div className="select">
          <select onChange= {statusHandler} name="todos" className="filter-todo">
            <option value="all">All Values</option>
            <option value="count"> Count</option>
            <option value="repeated">Repeated Values</option>
          </select>
        </div>
      </form>
    );
}
 
export default Form;