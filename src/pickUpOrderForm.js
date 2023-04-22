import React, { useState } from 'react';

function NewOrderForm() {
  const [name, setName] = useState('');
  const [cans, setCans] = useState('');
  const [glass, setGlass] = useState('');
  const [plastic, setPlastic] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Cans: ${cans}, Glass: ${glass}, Plastic: ${plastic}`)
    // submit the form data to your backend API or database
  };

  return (
    <form onSubmit={handleSubmit}>
      <label 
      htmlFor="name">
      Name:
      </label>
      <input 
      type="text" 
      id="name" 
      value={name} 
      onChange={(event) => setName(event.target.value)} />
      
      <h3> Types of Recyclables:</h3>

      <label 
      htmlFor="cans">
      Cans:
      </label>
      <input 
      type="cans" 
      id="cans" 
      value={cans} 
      onChange={(event) => setCans(event.target.value)} />

      <label 
      htmlFor="glass">
      Glass:
      </label>
      <input
       id="glass" 
      value={glass} 
      onChange={(event) => setGlass(event.target.value)} />
      
      <label 
      htmlFor="plastic">
      Plastic:</label>
      <input
      id="plastic" 
      value={glass} 
      onChange={(event) => setPlastic(event.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default NewOrderForm;