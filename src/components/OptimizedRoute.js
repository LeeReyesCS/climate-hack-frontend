import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';


const OptimizedRoute = ({data, onClose}) => {

  return (
<div className='container'> 
    <div className='table-container'>
      <br></br>
      <h2>Selected Orders</h2>
      <h3>Click Confirm to reserve these orders!</h3>
      <table className='show-form'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cans</th>
            <th>Plastic</th>
            <th>Glass</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cans}</td>
              <td>{item.plastic}</td>
              <td>{item.glass}</td>
              <td>{item.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div>
      <Button variant="contained" type="submit" onClick={onClose}>Confirm Orders</Button>
      </div>
      </div>
    

  )
}

export default OptimizedRoute;