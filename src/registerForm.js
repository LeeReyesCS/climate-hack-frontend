import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth} from "firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Zip Code: ${zipCode}, Role: ${role}`);
    // submit the form data to your backend API or database
  
    try {
      createUserWithEmailAndPassword(auth, email, password);
      <Link to="/"></Link>;
      
    } catch (error) {
      console.error(error);
      <Link to="/registerform"></Link>;
    }
  };

  

  return (
    <div>
      <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
     
      <label htmlFor="zipCode">Zip Code:</label>
      <input type="zipCode" id="zipCode" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />

      <label htmlFor="role">Role:</label>
      <input id="role" value={role} onChange={(event) => setRole(event.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
      
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>

    
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default RegisterForm;


// function RegisterForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [role, setRole] = useState('');


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(`Name: ${name}, Zip Code: ${zipCode}, Role: ${role}`);
//     // submit the form data to your backend API or database
//     const collectionRef = collection(db, 'users');

//     try {
//       const docRef = await addDoc(collection(db,"users"), {
//         name: name,
//         email: email,
//         zipCode: zipCode,
//         role: role
//       });
//       console.log("Document written with ID:", docRef.id);
//       await createUserWithEmailAndPassword(auth,email, password);

//     } catch (error) {
//       console.error(error);
//     }
//     // Add a new document in collection "cities"
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
      
//       <input type="password" id="password">Password:</input>
//       <input type="password" id="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>

//       <label htmlFor="zipCode">Zip Code:</label>
//       <input type="zipCode" id="zipCode" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />

//       <label htmlFor="role">Role:</label>
//       <input id="role" value={role} onChange={(event) => setRole(event.target.value)} />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default RegisterForm;
