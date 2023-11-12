import React, { useState } from 'react';
import { BiRightArrowCircle } from "react-icons/bi";
import Modal from '../components/Modal';
import "../styles/Hourly.css";


export default function Hourly() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  
  return (
    <div className='container'>
      <div className='textHourly'>
        <p style={{ color: '#ffd223' }}>E X C L U S I V E</p>
        <h1>Rent a Luxury & Sport Car</h1>
        <h2>Pay Per Hour</h2>
        <p style={{ color: 'lightgrey' }}>
          You can now enjoy the amazing experience of driving a sports or luxury car and pay per hour! 
          Superior Car Rental provides this service for all tourists & locals. Please contact us for more information!
        </p>
        <button onClick={openModal} className="buttonH">
          Request a Quote<BiRightArrowCircle className="arrow" />
        </button>
      </div>
      <img className='Ferrari' src='https://img.jamesedition.com/listing_images/2023/10/02/09/07/57/0b27b88b-ed7d-48db-8d98-914c9d620e70/je/2200xxs.jpg' alt='Ferrari' />
      {isModalOpen && <Modal closeModal={closeModal} onSubmit={handleModalSubmit} />}
    </div>
  );
}












