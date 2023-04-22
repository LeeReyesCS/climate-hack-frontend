import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Zip Code: ${zipcode}, Role: ${role}`);
    // submit the form data to your backend API or database
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="zipcode">Zip Code:</label>
      <input type="zipcode" id="zipcode" value={zipcode} onChange={(event) => setZipcode(event.target.value)} />

      <label htmlFor="role">Role:</label>
      <input id="role" value={role} onChange={(event) => setRole(event.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
