import React, { useState } from 'react';
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterForm() {
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Zip Code: ${zipcode}, Role: ${role}`);
    // submit the form data to your backend API or database
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
      console.log(userCredential);
    })
    .catch((error)=> {
      console.log(error);
    })
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="group">
        <span className="highlight"></span>
          <span className="bar"></span>
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
      </div>
      
      <div className="group">
      <span className="highlight"></span>
          <span className="bar"></span>
            <label htmlFor="zipcode">Zip Code:</label>
            <input
              required
              type="zipcode"
              id="zipcode"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
         
      </div>
      <div>
      <span className="highlight"></span>
          <span className="bar"></span>
            <label htmlFor="role">Role:</label>
            <input
              required
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />
      </div>
      <div>
      <span className="highlight"></span>
          <span className="bar"></span>
            <label htmlFor="email">Email</label>
            <input
              required
              id=""
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
      </div>
      <div>
      <span className="highlight"></span>
          <span className="bar"></span>
            <label htmlFor="password">Password:</label>
            <input
              required
              id=""
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Submit</button>
          
        
      </div>
    </form>
  );
}

export default RegisterForm;
