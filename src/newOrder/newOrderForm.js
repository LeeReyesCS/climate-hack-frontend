import React, { useState } from "react";
import axios from "axios";
import {Button} from "@mui/material";
import "./newOrderForm.css";

function NewOrderForm() {
  const [order, setOrder] = useState({
    name: "",
    zipcode: "",
    email: "",
    cans: "",
    plastic: "",
    glass: "",
  });

  const { name, zipcode, email, cans, plastic, glass } = order;

  const onInputChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    // added async keyword
    event.preventDefault();
    console.log(
      `Name: ${name}, Cans: ${cans}, Glass: ${glass}, Plastic: ${plastic}`
    );

    try {
      // added try-catch block for error handling
      const response = await axios.post(
        "http://localhost:5000/recycler",
        order
      );
      console.log(response);
      const data = response.data;
      setOrder(data);
      console.log(data); // fixed variable name
      alert(" submitted!")
      window.location.reload(false); // Reload the page
    } catch (error) {
      console.error(error);
      alert("Error submitting the form!");
    }
  };

  return (
    <div className="flexit">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => onInputChange(event)}
          />
          <label htmlFor="name">Name:</label>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>

        <div className="group">
          <span className="highlight"></span>
          <span className="bar"></span>
         <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            onChange={(event) => onInputChange(event)}
          />
           <label htmlFor="zipcode">Zipcode:</label>
        </div>

        <div className="group">
          <span className="highlight"></span>
          <span className="bar"></span>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => onInputChange(event)}
          />
          <label htmlFor="email">Email:</label>
        </div>
        <h3> Types of Recyclables:</h3>
        <div className="group">
          <input
            type="text"
            id="cans"
            name="cans"
            value={cans}
            onChange={(event) => onInputChange(event)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="cans">Cans:</label>
        </div>

        <div className="group">
          <input
            type="text"
            id="glass"
            name="glass"
            value={glass}
            onChange={(event) => onInputChange(event)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="glass">Glass:</label>
        </div>
        <div className="group">
          <input
            type="text"
            id="plastic"
            name="plastic"
            value={plastic}
            onChange={(event) => onInputChange(event)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="plastic">Plastic:</label>
        </div>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default NewOrderForm;
