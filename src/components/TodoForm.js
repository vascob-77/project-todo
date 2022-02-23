//Librairie
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import TodoList from "./TodoList";

const TodoForm = ({addTodo, allTodo,todoBeingUpdated,editTodo,setTodoBeingUpdated}) => {

    //Hooks
    console.log(todoBeingUpdated)
    const [todo, setTodo] = useState({
        id: '',
        completed: false,
        objectif: ''
    });

    //Fonction

    const handleChangeInput = (e) => {
        setTodoBeingUpdated({...todo, objectif: e.target.value})
        setTodo({...todo, objectif: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...todo, id: uuidv4()})
        setTodo({...todo, objectif: ''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title-objectif">Let's write your objectif for today ✨</h1>
            <input className="input-todo" placeholder="Type a todo..." value={todoBeingUpdated.objectif ? todoBeingUpdated.objectif : todo.objectif} onChange={handleChangeInput}/>
            <button className="btn-add">add</button>
        </form>
    );
};

export default TodoForm;