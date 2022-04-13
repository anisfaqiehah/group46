import './comment.css';
import React from "react";
import { collection,query,onSnapshot,doc,updateDoc,deleteDoc,} from "firebase/firestore";
import db from "../firebaseTodo";
import AddComment from "./addComment";
import Comment from "./handleComment";

function Appcomment() {
    const [comments, setComments] = React.useState([]);
    React.useEffect(() => {
        const q = query(collection(db, "comment"));
  
        const unsub = onSnapshot(q, (querySnapshot) => {
          let commentsArray = [];
          querySnapshot.forEach((doc) => {
            commentsArray.push({...doc.data(), id: doc.id});
          
        });
        setComments(commentsArray);
      });
      return() => unsub();
    },[]);
    const handleDeleteC = async(id) =>{
        await deleteDoc(doc(db, "comment", id));
      };
      const handleEditC = async(comment, message) =>{
        await updateDoc(doc(db, "comment", comment.id),{message:message});
      };
return (
    <div className='AppComment'>
        <AddComment/>
        <div className="comment_container">
          {comments.map((comment)=>(
            <Comment
              key={comment.id}
              comment={comment}
              handleDeleteC={handleDeleteC}
              handleEditC={handleEditC}

            />
          ))}
        </div>
    </div>
    );
}
export default Appcomment;