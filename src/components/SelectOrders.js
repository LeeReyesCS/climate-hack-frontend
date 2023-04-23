import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/navBar';
import NewOrderForm from '../newOrder/newOrderForm';
import { Button } from '@mui/material';

function SelectOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recycler')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  function handleDeleteSelected() {
    const coordinates = formatLatAndLong(91790);
    const optimizedOrder = nearestNeighbor(coordinates);
    console.log("This is the optimized Order:", optimizedOrder);
    const selectedIds = data.filter(item => item.selected).map(item => item.id);
  
    // Fetch the data for all the selected ids
    const fetchData = Promise.all(selectedIds.map(id => {
      return fetch(`http://localhost:5000/recycler/${id}`)
        .then(response => console.log(response.json()))
        .catch(error => console.error(error));
    }));
  
    // Once all the data has been fetched, sort it in the optimized order
    fetchData.then(results => {
      const sortedData = optimizedOrder.map(id => {
        return results.find(item => item.id === id);
      });
  
      // Delete the selected items from the server
      // Promise.all(selectedIds.map(id => {
      //   const selectedCoord = coordinates.find(coord => coord.id === id).coords;
      //   return fetch(`http://localhost:5000/recycler/${id}`, {
      //     method: 'DELETE',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ id, coordinates: selectedCoord }),
      //   })
      //     .then(response => {
      //       if (!response.ok) {
      //         console.error(`Failed to delete item ${id}.`);
      //       }
      //     })
      //     .catch(error => console.error(error));
      // }))
      //   .then(() => {
      //     // Update the data in the state to remove the deleted items and show the remaining ones
      //     setData(data.filter(item => !item.selected));
      //   })
      //   .catch(error => console.error(error));
  
      // Output the sorted data in the console
      console.log('Sorted Data:', sortedData);
    });
  }
  function formatLatAndLong(startingZip) {
    const selectedLocations = data.filter(item => item.selected).map(item => {
      return {
        id: item.id,
        coords: getLatAndLong(item.zipcode)
      };
    });
    const start = {
      id: 'startingZip',
      coords: getLatAndLong(startingZip),
    };
    return [start, ...selectedLocations];
  }
  

  function distance(coord1, coord2) {
    const R = 6371; // Earth's radius in kilometers
    const [lat1, lon1] = Array.isArray(coord1) ? coord1 : [0, 0];
    const [lat2, lon2] =  Array.isArray(coord2) ? coord2 : [0, 0];
    const dlat = degToRad(lat2 - lat1);
    const dlon = degToRad(lon2 - lon1);
    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  function nearestNeighbor(coords, start = null) {
    if (start === null) {
      start = coords[0];
    }
    const tour = [start];
    const unvisited = new Set(coords);
    unvisited.delete(start);
    while (unvisited.size > 0) {
      const nearest = [...unvisited].reduce((nearestCoord, coord) => {
        const nearestDist = distance(tour[tour.length - 1], nearestCoord);
        const dist = distance(tour[tour.length - 1], coord);
        return dist < nearestDist ? coord : nearestCoord;
      }, [...unvisited][0]);
      tour.push(nearest);
      unvisited.delete(nearest);
    }
    return tour;
  }
  
  function degToRad(deg) {
    return (deg * Math.PI) / 180;
  }

  async function getLatAndLong(zipCode) {
    const api_key = 'pk.47817fbb958b2c926dc9e683cfdc7cef'; // Replace this with your API key
  
    const url = `https://us1.locationiq.com/v1/search.php?key=${api_key}&q=${zipCode}&format=json`;
    let latitude = 0;
    let longitude = 0;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        latitude = data[0].lat;
        longitude = data[0].lon;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      } else {
        console.log('No results found.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return [latitude, longitude];
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
      <button onClick={handleDeleteSelected}>Select and Optimize Route</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cans</th>
            <th>Plastic</th>
            <th>Glass</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cans}</td>
              <td>{item.plastic}</td>
              <td>{item.glass}</td>
              <td>{item.zipCode}</td>
              <td><input type="checkbox" checked={item.selected} onChange={event => handleCheckboxChange(event, item.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <NewOrderForm />
    </>
  );
}

export default SelectOrders;