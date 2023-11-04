import React, { useState } from 'react';

const Modal = ({ closeModal, isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal(); 
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
