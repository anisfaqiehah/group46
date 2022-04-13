import React, { useState } from 'react';


function App() {
  return (
    <form>
      <div className="form-inner">
          <h2>Edit Profile</h2>
          <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" name="firstname" id="firstname"/>  
          </div>
          <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" name="lastname" id="lastname"/>  
          </div> 
          <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email"/>  
          </div> 
          <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password"/>  
          </div>
          <input type = "submit" value= "Save Changes"/>     
      </div>

    </form>
  );
}

export default App;
