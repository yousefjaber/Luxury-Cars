import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    // Fetch available dates from the backend when the component mounts
    fetchAvailableDates();
  }, []);

  const fetchAvailableDates = () => {
    // Replace with your backend API endpoint to get available dates
    // This is just a placeholder for demonstration purposes
    fetch('/api/available-dates')
      .then((response) => response.json())
      .then((data) => setAvailableDates(data.availableDates))
      .catch((error) => console.error('Error fetching available dates:', error));
  };

  const handleDateChange = (date) => {
    // Handle date changes for both start and end dates
    if (!startDate || (startDate && endDate && date < startDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
  };

  const isDateDisabled = (date) => {
    // Check if the date is not available for reservation
    return !availableDates.includes(date.toISOString().split('T')[0]);
  };

  const reserveCar = () => {
    // Implement logic to send reservation request to the backend
    // Include startDate, endDate, and any other necessary details
    console.log('Reservation requested:', { startDate, endDate });
    // Add your reservation API call here
  };

  return (
    <div>
      <h2>Car Reservation</h2>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        filterDate={isDateDisabled}
      />
      <button onClick={reserveCar} disabled={!startDate || !endDate}>
        Reserve Car
      </button>
    </div>
  );
};

export default ReservationCalendar;
