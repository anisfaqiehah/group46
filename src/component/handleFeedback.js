import React from "react";
import deleted from './assets/deleted.png'
import edited from './assets/edited.png'
import './feedback.css';
export default function Feedback({ feedback,handleDeleteF, handleEditF,}) {
  const [newMessage, setNewMessage] = React.useState(feedback.message);
  const [newName, setNewName] = React.useState(feedback.name);
    const handleChange = (e) =>{
        e.preventDefault();
        if(feedback.complete === true){
            setNewName(feedback.name);
            setNewMessage(feedback.message)
        }
        else{
            feedback.name="";
            feedback.message="";
            setNewName(e.target.value);
            setNewMessage(e.target.value)
        }
};

    return(
        <div className="feedback">
            <p className="nama">Name</p>
            <input
                style={{ textDecoration: feedback.completed &&"line-through"}}
                type="text"
                value={feedback.name === "" ? newName : feedback.name}
                className="list"
                onChange={handleChange}
                /> 
            
            <p className="feed">  Feedback</p>
            <textarea
                style={{ textDecoration: feedback.completed &&"line-through"}}
                type="text"
                value={feedback.message === "" ? newMessage : feedback.message }
                className="list"
                onChange={handleChange}
                rows="4" cols="50"
                />
            <div>
            <button
                className="button-edit-f"
                onClick={()=> handleEditF(feedback, newMessage)}
                >
                <img src={edited} alt="editedicon" width="20" height="20"/>
            </button>
            <button
                className="button-delete-f"
                onClick={()=> handleDeleteF(feedback.id)}
                >
                <img src={deleted} alt="deletedicon" width="20" height="20"/>
            </button>
            </div>
        </div>
    )
}
// export default todo;