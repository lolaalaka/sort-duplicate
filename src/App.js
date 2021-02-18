import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

function App() {

  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [duplicate, setDuplicate] =useState([]);

  useEffect( () =>{ 
    filterHandler()
  }, [todos, status])


 ; 


  const filterHandler = () =>{

     switch(status) {

      case 'repeated':
      setDuplicate( todos.filter((v,i) => {
      return  todos.map((todo)=>todo.text).indexOf(v.text) != i })) 
      break;

      case 'count':
      setDuplicate( Object.values(todos.reduce((r, todo) => {
        let k = `${todo.text}`;
        if(!r[k]) r[k] = {...todo, bra: "(", count: 1, times:"x", cket:")"}
        else r[k].count += 1;
        return r;
      }, {}))
      ) 
      break;

      default:
        setDuplicate(todos)
        break;
    }
    
  }


  return (
    <div className="App">

     <header>
       Program Run 
     </header>
     
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setinputText = {setinputText} setStatus = {setStatus} />
      <List  setTodos={ setTodos } todos={ todos } duplicate= { duplicate } />
    </div>
  );
}

export default App;
