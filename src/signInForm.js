import React, { useState } from 'react';
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
    })
    .catch((error)=> {
      console.log(error);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
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