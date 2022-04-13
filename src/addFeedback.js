// import { addDoc } from "firebase/firestore";
import React, { useState} from "react";
import "./feedback.css";
import db from "../firebaseTodo";
import { collection, addDoc } from "firebase/firestore";

function AddFeedback(){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (name !=="" && message !==""){
        await addDoc(collection(db, "feedback"),{name, message,});
        setName("");
        setMessage("");
    }
  };

  return (
    <form className="Fform" onSubmit={handleSubmit}>
        
      <h1>Feedback</h1>

      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />

      <label>Message</label>
      <textarea
        type="text"
        placeholder="Feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required 
      ></textarea>

      <button>
        Submit
      </button>
    </form>
    
  );
};

export default AddFeedback;