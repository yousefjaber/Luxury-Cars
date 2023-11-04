import React, { useState, useContext } from "react";
import { CarContext } from "../context/CarContext";
import '../styles/CarList.css'

const carList = () => {
  const [editingCar, setEditingCar] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState("");
  const { cars, isLoading, error, editCar, removeCar } = useContext(CarContext);

  const openEditModal = (car) => {
    setEditingCar(car);
    setNewName(car.name);
    setNewPrice(car.price);
    setNewImage(car.image);
  };

  const handleEditSubmit = () => {
    editCar({
      id: editingCar.id,
      name: newName,
      price: newPrice,
      image: newImage,
    });
    setEditingCar(null);
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
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            placeholder="Image URL"
          />
          <button onClick={handleEditSubmit}>Update</button>
          <button onClick={() => setEditingCar(null)}>Cancel</button>
        </div>
      )}

      <div className="car-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            
            {car.image && (
              <img src={car.image} alt={car.name} className="car-image" />
            )}
            <h3 className="car-title">{car.name}</h3>
            <p className="car-price">Price: {car.price}$ per hour</p>
            <div className="button-container">
              <button onClick={() => openEditModal(car)}>Edit</button>
              <button onClick={() => removeCar(car.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default carList;
