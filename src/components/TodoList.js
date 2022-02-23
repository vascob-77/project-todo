import React from 'react';
import Todo from "./Todo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faXmark} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({allTodo}) => {

    console.log(allTodo)

    return (
       allTodo.map(todoData =>(
            <div className="bloc-todo">
                <h3 key={todoData.id}>{todoData.objectif}</h3>
                <FontAwesomeIcon className="icon-style" icon={faEdit}/>
                <FontAwesomeIcon className="icon-style" icon={faXmark}/>
            </div>
        ))
    );
};

export default TodoList;