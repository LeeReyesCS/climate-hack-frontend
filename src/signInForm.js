import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${email}, password: ${password}`);
    // submit the form data to your backend API or database
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
      console.log(userCredential);
      <Link to="/"></Link>;
    })
    .catch((error)=> {
      console.log(error);
      <Link to="/signinform"></Link>;
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <label 
      htmlFor="email">
      Email:
      </label>
      <input 
      type="text" 
      id="email" 
      value={email} 
      onChange={(event) => setEmail(event.target.value)} />
      <label 
      htmlFor="password">
      Password:
      </label>
      <input 
      type="password" 
      id="password" 
      value={password} 
      onChange={(event) => setPassword(event.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForm;