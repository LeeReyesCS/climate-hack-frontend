import React, { useState } from 'react';
import axios from 'axios';
import "./newOrderForm.css";

function NewOrderForm() {
  const [order, setOrder] = useState ({
    name:"",
    zipcode:"",
    email:"",
    cans:"",
    plastic:"",
    glass:"",
  });

  const{name,zipcode,email,cans,plastic,glass} = order;
  
  const onInputChange = (event) => {
    setOrder({...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => { // added async keyword
    event.preventDefault();
    console.log(`Name: ${name}, Cans: ${cans}, Glass: ${glass}, Plastic: ${plastic}`);
    
    try { // added try-catch block for error handling
      const response = await axios.post("http://localhost:5000/recycler", order);
      console.log(response);
      const data = response.data;
      setOrder(data);
      console.log(data); // fixed variable name
      alert(" submitted!");
    } catch (error) {
      console.error(error);
      alert("Error submitting the form!");
    }
  };

  return (
    <div className="flexit">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(event) => onInputChange(event)}
          /> 
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <h3> Types of Recyclables:</h3>
        <div className="group">
          <label htmlFor="cans">Cans:</label>
          <input 
            type="text" 
            id="cans" 
            value={cans} 
            onChange={(event) => onInputChange(event)}
          />
        </div>
        <div className="group">
          <label htmlFor="glass">Glass:</label>
          <input 
            type="text" 
            id="glass" 
            value={glass} 
            onChange={(event) => onInputChange(event)}
          />
        </div>
        <div className="group">
          <label htmlFor="plastic">Plastic:</label>
          <input
            type="text" 
            id="plastic" 
            value={plastic} // fixed variable name
            onChange={(event) => onInputChange(event)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewOrderForm;
