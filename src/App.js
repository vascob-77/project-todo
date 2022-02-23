import React, {useState} from "react";

//Composants
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

    const [allTodo, setAllTodo] = useState([]);
    const [todoBeingUpdated, setTodoBeingUpdated] = useState({
        id: '',
        completed: false,
        objectif: ''
    });
    const addTodo = (newTodo) => {
        setAllTodo([...allTodo, newTodo])
    }


    const editTodo = (idTodo) => {
        // 1.copie
        const allTodoCopy = [...allTodo];
        // 2.manipulation
        const todoSelected = allTodoCopy.filter((todo) =>
            todo.id === idTodo
        )
        // 3.return de la copie update
        setTodoBeingUpdated(todoSelected[0])
    }


    return (
        <div className="App">
            <div className="container-todo">
                <TodoForm addTodo={addTodo} todoBeingUpdated={todoBeingUpdated} setTodoBeingUpdated={setTodoBeingUpdated} editTodo={editTodo}/>
                <TodoList allTodo={allTodo} onEdit={editTodo}/>
            </div>
        </div>
    );
}

export default App;
