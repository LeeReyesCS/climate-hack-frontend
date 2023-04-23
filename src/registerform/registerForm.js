import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./register.css";
import React, { useState } from "react";



function RegisterForm() {
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Zip Code: ${zipcode}`);
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
    <>
      <div className="flexit">
    <form onSubmit={handleSubmit}>
        <span className="highlight"></span>
          <span className="bar"></span>
          <div className="group">
          <input
            required
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          
          <label htmlFor="name">Name:</label>
        </div>

        <div className="group">
          <input
            required
            type="zipcode"
            id="zipcode"
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="zipcode">Zip Code:</label>
        </div>
        
        <div className="group">
          <input
            required
            id=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="email">Email</label>
        </div>


        <div className="group">
          <input
            required
            id=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="password">Password:</label>
        </div>


        <button className="submit" type="submit">Submit</button>
    </form>
  </div>
  </>
  );
}

export default RegisterForm;
