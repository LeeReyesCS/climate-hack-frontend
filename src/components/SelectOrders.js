import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/navBar';
import NewOrderForm from '../newOrder/newOrderForm';
import { Button } from '@mui/material';
import OptimizedRoute from './OptimizedRoute';
import './SelectOrders.css'
function SelectOrders() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  useEffect(() => {
    fetch('http://localhost:5000/recycler')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  function handleShowSelected() {
    const selectedData = data.filter(item => item.selected);
    setSelectedData(selectedData);
    setIsPopupOpen(true);
  }

  function handleCheckboxChange(event, id) {
    setData(data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          selected: event.target.checked,
        };
      }
      return item;
    }));
  }

  function handleClosePopup() {
    // Filter out the selected data
    const filteredData = data.filter(item => !item.selected);
  
    // Send a DELETE request to the API endpoint for each selected item
    selectedData.forEach(item => {
      fetch(`http://localhost:5000/recycler/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        // Update state with the filtered data and reset selectedData and isPopupOpen
        setData(filteredData);
        setSelectedData([]);
        setIsPopupOpen(false);
      })
      .catch(error => console.error(error));
    });
  }

  return (
    <>
    <NavBar />
    <div className='container'> 
    <div className='table-container'>
      <h1>Available Orders:</h1>
      <table className='show-form'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cans</th>
            <th>Plastic</th>
            <th>Glass</th>
            <th>Zip Code</th>
            <th className='selected'>Selected</th>
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
              <td><input type="checkbox" classname='check-box' checked={item.selected} onChange={event => handleCheckboxChange(event, item.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="contained" type="submit" onClick={handleShowSelected}>Select Orders</Button>

      {isPopupOpen && <OptimizedRoute data={selectedData} onClose={handleClosePopup} />}
      </div>
      <div className='new-order-form'><NewOrderForm /></div>

      </div>
    </>
  );
}

export default SelectOrders;