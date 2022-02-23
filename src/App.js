import React,{useState} from "react";

//Composants
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

    const [allTodo,setAllTodo] = useState([]);

    const addTodo = (newTodo) => {
        setAllTodo([...allTodo,newTodo])
    }


    return (
        <div className="App">
                <div className="container-todo">
                    <TodoForm addTodo={addTodo} />
                    <TodoList allTodo={allTodo}/>
                </div>
        </div>
    );
}

export default App;
