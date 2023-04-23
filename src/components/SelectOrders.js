import React, { useState, useEffect } from 'react';
import NavBar from '../navBar';


function SelectOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recycler')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  function handleDeleteSelected() {
    calculateDistance();
    const selectedIds = data.filter(item => item.selected).map(item => item.id);
    for (const id of selectedIds) {
      fetch(`http://localhost:5000/recycler/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: selectedIds }),
      })
        .then(response => {
          if (response.ok) {
            setData(data.filter(item => !item.selected));
          } else {
            console.error('Failed to delete selected items.');
          }
        })
        .catch(error => console.error(error));
    }
    }

  function calculateDistance() {
    const selectedZipCodes= data.filter(item => item.selected).map(item => item.zipcode);
    for (const zipCode of selectedZipCodes) {
      getLongAndLat(zipCode)
    }
 
  }

  function getLongAndLat(zipCode) {
    const api_key = 'pk.47817fbb958b2c926dc9e683cfdc7cef'; // Replace this with your API key

    const url = `https://us1.locationiq.com/v1/search.php?key=${api_key}&q=${zipCode}&format=json`;
    let latitude = 0;
    let longitude = 0;
    fetch(url)
      .then(response => response.json())
      .then(data => {

        if (data.length > 0) {
          latitude = data[0].lat;
          longitude = data[0].lon;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
          console.log('No results found.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

      return(latitude,longitude)
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

  return (
    <>
    <NavBar />
      <button onClick={handleDeleteSelected}>Save selected</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><input type="checkbox" checked={item.selected} onChange={event => handleCheckboxChange(event, item.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SelectOrders;