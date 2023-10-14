import React, { useState, useContext } from 'react';
import { CarContext } from '../context/CarContext';
import axios from 'axios';

const Home = () => {
  const [editingCar, setEditingCar] = useState(null);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const { cars, isLoading, error, editCar, removeCar } = useContext(CarContext);

  const openEditModal = (car) => {
    setEditingCar(car);
    setNewName(car.name);
    setNewPrice(car.price);
  };

  const handleEditSubmit = async () => {
    try {
      const updatedData = { name: newName, price: newPrice };
      await updateCar(updatedData, editingCar.id); // Send the updated data to the API
  
      // Assuming the API call was successful, update the car data locally
      const updatedCars = cars.map((car) => {
        if (car.id === editingCar.id) {
          return { ...car, ...updatedData };
        }
        return car;
      });
      
      setEditingCar(null); // Close the modal
    } catch (error) {
      console.error('Error editing car:', error);
      // Handle the error here, e.g., display an error message
    }
  };
  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {editingCar && (
        <div className="modal">
          <h2>Edit Car</h2>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Price"
          />
          <button onClick={handleEditSubmit}>Update</button>
          <button onClick={() => setEditingCar(null)}>Cancel</button>
        </div>
      )}

      {cars.map((car) => (
        <div key={car.id}>
          <h3>{car.name}</h3>
          <p>Price: {car.price}</p>
          <button onClick={() => openEditModal(car)}>Edit</button>
          <button onClick={() => removeCar(car.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;