import './feedback.css';
import React from "react";
import { collection,query,onSnapshot,doc,updateDoc,deleteDoc,} from "firebase/firestore";
import db from "../firebaseTodo";
import AddFeedback from "./addFeedback";
import Feedback from "./handleFeedback";

function Appfeedback() {
    const [feedbacks, setFeedbacks] = React.useState([]);
    React.useEffect(() => {
        const q = query(collection(db, "feedback"));
  
        const unsub = onSnapshot(q, (querySnapshot) => {
          let feedbacksArray = [];
          querySnapshot.forEach((doc) => {
            feedbacksArray.push({...doc.data(), id: doc.id});
          
        });
        setFeedbacks(feedbacksArray);
      });
      return() => unsub();
    },[]);
    const handleDeleteF = async(id) =>{
        await deleteDoc(doc(db, "feedback", id));
      };
      const handleEditF = async(feedback, message) =>{
        await updateDoc(doc(db, "feedback", feedback.id),{message:message});
      };
return (
    <div className='AppFeedback'>
        <AddFeedback/>
        <div className="feedback_container">
          {feedbacks.map((feedback)=>(
            <Feedback
              key={feedback.id}
              feedback={feedback}
              handleDeleteF={handleDeleteF}
              handleEditF={handleEditF}

            />
          ))}
        </div>
    </div>
    );
}
export default Appfeedback;