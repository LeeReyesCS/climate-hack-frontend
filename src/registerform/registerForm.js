import React, { useState } from "react";
import "./register.css";

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
  };

  return (
      <div className="flexit">
    <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            required
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
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
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="role">Role:</label>
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
  );
}

export default RegisterForm;
