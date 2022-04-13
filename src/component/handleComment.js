import React from "react";
import deleted from './assets/deleted.png'
import edited from './assets/edited.png'
import Rating from "./star";
import './comment.css';
export default function Comment({ comment,handleDeleteC, handleEditC,}) {
  const [newMessage, setNewMessage] = React.useState(comment.message);
  const [newName, setNewName] = React.useState(comment.name);
    const handleChange = (e) =>{
        e.preventDefault();
        if(comment.complete === true){
            setNewName(comment.name);
            setNewMessage(comment.message)
        }
        else{
            comment.name="";
            comment.message="";
            setNewName(e.target.value);
            setNewMessage(e.target.value)
        }
};

    return(
        <div className="comment">
            
            <p className="nama">Name</p>
            <input
                style={{ textDecoration: comment.completed &&"line-through"}}
                type="text"
                value={comment.name === "" ? newName : comment.name}
                className="list"
                onChange={handleChange}
                />
            <Rating/>
            <p className="com">  Comment</p>
            <textarea
                style={{ textDecoration: comment.completed &&"line-through"}}
                type="text"
                value={comment.message === "" ? newMessage : comment.message }
                className="list"
                onChange={handleChange}
                />
            <div>
            <button
                className="button-edit-c"
                onClick={()=> handleEditC(comment, newMessage)}
                >
                <img src={edited} alt="editedicon" width="20" height="20"/>
            </button>
            <button
                className="button-delete-c"
                onClick={()=> handleDeleteC(comment.id)}
                >
                <img src={deleted} alt="deletedicon" width="20" height="20"/>
            </button>
            </div>
        </div>
    )
    
}
// export default todo;
