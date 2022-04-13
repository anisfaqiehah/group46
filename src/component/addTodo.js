import React from "react";
import db from "../firebaseTodo";
import { collection, addDoc} from "firebase/firestore";
import './todo.css';
function AddTodo(){
    const[title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== ""){
            await addDoc(collection (db, "todos"),{title, completed: false,});
            setTitle("");
        }
    };
    return(

        <form className="Tform" onSubmit={handleSubmit}>
            <div className="input_container">
                <input 
                    type="text"
                    placeholder="enter todo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="button_container">
                <button>add</button>
            </div>
        </form>
    );


}

export default AddTodo ;