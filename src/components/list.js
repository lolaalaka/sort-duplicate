import Todo from "./Todo"

const List = ({ todos, setTodos, duplicate } ) => {
  

    return (  
      <div className="todo-container">
        <ul className="todo-list">
          {
           duplicate.map(todo => (
              <Todo todo={todo} key={todo.id} text ={todo.text} setTodos={ setTodos } todos={ todos } count={todo.count} bra={todo.bra} cket={todo.cket} times={todo.times}/>
            )) 
          }
        </ul>
      </div>

    );
}
 
export default List;