import React from "react";
import completed from './assets/completed.png'
import deleted from './assets/deleted.png'
import edited from './assets/edited.png'
import './todo.css';
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
    const handleChange = (e) =>{
        e.preventDefault();
        if(todo.complete === true){
            setNewTitle(todo.title);
        }
        else{
            todo.title="";
            setNewTitle(e.target.value);
        }
};

    return(
        <div className="todo">
            <input
                style={{ textDecoration: todo.completed && "line-through"}}
                type="text"
                value={todo.title === "" ? newTitle : todo.title}
                className="list"
                onChange={handleChange}
                />
            <div>
                <button
                    className="button-complete"
                    onClick={()=> toggleComplete(todo)}
                    >
                    <img src={completed} alt="completeicon" width="10" height="10"/>
                </button>
                <button
                    className="button-edit"
                    onClick={()=> handleEdit(todo, newTitle)}
                    >
                    <img src={edited} alt="editicon" width="10" height="10"/>
                </button>
                <button
                    className="button-delete"
                    onClick={()=> handleDelete(todo.id)}
                    >
                    <img src={deleted} alt="deletedicon" width="10" height="10"/>
                </button>
            </div>
        </div>
    )
}
// export default todo;