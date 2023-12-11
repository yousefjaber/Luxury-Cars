import React, { useState, useContext } from "react";
import { CarContext } from "../context/CarContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/CarList.css";
import Modal from "../components/Modal";
import { BiRightArrowCircle } from "react-icons/bi";
import reserveCar  from "../components/Reservation"; 
import ReservationCalendar from "../components/Reservation";

const CarList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState("");
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const { cars, isLoading, error, editCar, removeCar, addNewCar } = useContext(CarContext);
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (formData) => {
    localStorage.setItem('modalData', JSON.stringify(formData));
    closeModal();
  };

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

  const handleAddCar = async () => {
    await addNewCar({
      name: newName,
      price: newPrice,
      image: newImage,
    });
    setNewName("");
    setNewPrice("");
    setNewImage("");
    setShowAddCarForm(false);
  };

  const handleSignOut = () => {
    signOut();
    navigate('/CarList'); 
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {user && user.role === 'admin' && (
        <>
          <button onClick={() => setShowAddCarForm(true)}>Add Car</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
      {showAddCarForm && (
        <div className="modal">
        </div>
      )}
      <div className="car-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            {car.image && <img src={car.image} alt={car.name} className="car-image" />}
            <h3 className="car-title">{car.name}</h3>
            <p className="car-price">Price: {car.price}$ per hour</p>
            <button onClick={openModal} className="">
              Request a Quote<BiRightArrowCircle className="arrow" />
            </button>

            <button onClick={reserveCar} >
        Reserve Car
      </button>

            {isModalOpen && <Modal closeModal={closeModal} onSubmit={handleModalSubmit} />}
            {user && user.role === 'admin' && (
              <div className="button-container">
                <button onClick={() => openEditModal(car)}>Edit</button>
                <button onClick={() => removeCar(car.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;