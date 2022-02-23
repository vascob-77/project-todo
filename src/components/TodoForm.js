//Librairie
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import TodoList from "./TodoList";

const TodoForm = ({addTodo, allTodo}) => {

    //Hooks

    const [objective, setObjective] = useState({
        id: '',
        completed: false,
        objectif: ''
    });

    //Fonction

    const handleChangeInput = (e) => {
        setObjective({...objective, objectif: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...objective, id: uuidv4()})
        setObjective({...objective, objectif: ''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title-objectif">Let's write your objectif for today ✨</h1>
            <input className="input-todo" placeholder="todo" value={objective.objectif} onChange={handleChangeInput}/>
            <button className="btn-add">add</button>
        </form>
    );
};

export default TodoForm;