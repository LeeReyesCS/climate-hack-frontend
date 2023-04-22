<<<<<<< Updated upstream
import React, { useState } from 'react';
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./register.css";
=======
import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/material";

>>>>>>> Stashed changes

function RegisterForm() {
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  

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
            id=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
<<<<<<< Updated upstream
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
=======
            <label htmlFor="zipcode">Zip Code:</label>
            <input
              required
              type="zipcode"
              id="zipcode"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
         
      </div>
      {/* <div>
      <span className="highlight"></span>
          <span className="bar"></span>
            <label htmlFor="role">Role:</label>
            <input
              required
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />
      </div> */}
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

      <div>
      <span className="highlight"></span>
          <span className="bar"></span>
          <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label=""
          onChange={handleChange}
        >
          <MenuItem value={10}>User</MenuItem>
          <MenuItem value={20}>PickerUpper</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
            <button type="submit">Submit</button>
          
        
      </div>
>>>>>>> Stashed changes
    </form>
  </div>
  );
}

export default RegisterForm;
